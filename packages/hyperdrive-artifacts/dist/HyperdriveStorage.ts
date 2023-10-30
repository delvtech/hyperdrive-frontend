export const HyperdriveStorage = 
{
  "abi": [
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governanceFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes Hyperdrive's storage.\"}},\"notice\":\"The storage contract of the Hyperdrive inheritance hierarchy.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
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
            "notice": "Initializes Hyperdrive's storage."
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
        "contracts/src/HyperdriveStorage.sol": "HyperdriveStorage"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
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
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
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
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/HyperdriveStorage.sol",
    "id": 4905,
    "exportedSymbols": {
      "FixedPointMath": [
        8486
      ],
      "HyperdriveMath": [
        10772
      ],
      "HyperdriveStorage": [
        4904
      ],
      "IERC20": [
        6461
      ],
      "IHyperdrive": [
        7103
      ],
      "MultiTokenStorage": [
        13196
      ],
      "ReentrancyGuard": [
        63474
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:9644:7",
    "nodes": [
      {
        "id": 4524,
        "nodeType": "PragmaDirective",
        "src": "39:23:7",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4526,
        "nodeType": "ImportDirective",
        "src": "64:68:7",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/ReentrancyGuard.sol",
        "file": "solmate/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 63475,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4525,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63474,
              "src": "73:15:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4528,
        "nodeType": "ImportDirective",
        "src": "133:49:7",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 6462,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4527,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6461,
              "src": "142:6:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4530,
        "nodeType": "ImportDirective",
        "src": "183:59:7",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4529,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "192:11:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4532,
        "nodeType": "ImportDirective",
        "src": "243:64:7",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4531,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "252:14:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4534,
        "nodeType": "ImportDirective",
        "src": "308:64:7",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 10773,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4533,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10772,
              "src": "317:14:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4536,
        "nodeType": "ImportDirective",
        "src": "373:66:7",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenStorage.sol",
        "file": "./token/MultiTokenStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4905,
        "sourceUnit": 13197,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4535,
              "name": "MultiTokenStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13196,
              "src": "382:17:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4904,
        "nodeType": "ContractDefinition",
        "src": "785:8897:7",
        "nodes": [
          {
            "id": 4544,
            "nodeType": "UsingForDirective",
            "src": "865:33:7",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 4542,
              "name": "FixedPointMath",
              "nameLocations": [
                "871:14:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "871:14:7"
            },
            "typeName": {
              "id": 4543,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "890:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 4548,
            "nodeType": "VariableDeclaration",
            "src": "956:36:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4545,
              "nodeType": "StructuredDocumentation",
              "src": "924:27:7",
              "text": "@notice The base asset."
            },
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "982:10:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$6461",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 4547,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4546,
                "name": "IERC20",
                "nameLocations": [
                  "956:6:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6461,
                "src": "956:6:7"
              },
              "referencedDeclaration": 6461,
              "src": "956:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$6461",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4551,
            "nodeType": "VariableDeclaration",
            "src": "1088:46:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4549,
              "nodeType": "StructuredDocumentation",
              "src": "1017:66:7",
              "text": "@notice The amount of seconds between share price checkpoints."
            },
            "mutability": "immutable",
            "name": "_checkpointDuration",
            "nameLocation": "1115:19:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4550,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1088:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4554,
            "nodeType": "VariableDeclaration",
            "src": "1222:44:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4552,
              "nodeType": "StructuredDocumentation",
              "src": "1141:76:7",
              "text": "@notice The amount of seconds that elapse before a bond can be redeemed."
            },
            "mutability": "immutable",
            "name": "_positionDuration",
            "nameLocation": "1249:17:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4553,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1222:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4557,
            "nodeType": "VariableDeclaration",
            "src": "1347:39:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4555,
              "nodeType": "StructuredDocumentation",
              "src": "1273:69:7",
              "text": "@notice A parameter that decreases slippage around a target rate."
            },
            "mutability": "immutable",
            "name": "_timeStretch",
            "nameLocation": "1374:12:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4556,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1347:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4560,
            "nodeType": "VariableDeclaration",
            "src": "1485:45:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4558,
              "nodeType": "StructuredDocumentation",
              "src": "1419:61:7",
              "text": "@notice The share price at the time the pool was created."
            },
            "mutability": "immutable",
            "name": "_initialSharePrice",
            "nameLocation": "1512:18:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4559,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1485:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4563,
            "nodeType": "VariableDeclaration",
            "src": "1838:48:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4561,
              "nodeType": "StructuredDocumentation",
              "src": "1537:296:7",
              "text": "@notice The minimum amount of share reserves that must be maintained at\n         all times. This is used to enforce practical limits on the share\n         reserves to avoid numerical issues that can occur if the share\n         reserves become very small or equal to zero."
            },
            "mutability": "immutable",
            "name": "_minimumShareReserves",
            "nameLocation": "1865:21:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4562,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1838:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4566,
            "nodeType": "VariableDeclaration",
            "src": "1981:52:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4564,
              "nodeType": "StructuredDocumentation",
              "src": "1893:83:7",
              "text": "@notice The minimum amount of tokens that a position can be opened/closed with."
            },
            "mutability": "immutable",
            "name": "_minimumTransactionAmount",
            "nameLocation": "2008:25:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4565,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1981:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4570,
            "nodeType": "VariableDeclaration",
            "src": "2193:45:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4567,
              "nodeType": "StructuredDocumentation",
              "src": "2040:148:7",
              "text": "@notice The state of the market. This includes the reserves, buffers,\n         and other data used to price trades and maintain solvency."
            },
            "mutability": "mutable",
            "name": "_marketState",
            "nameLocation": "2226:12:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
              "typeString": "struct IHyperdrive.MarketState"
            },
            "typeName": {
              "id": 4569,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4568,
                "name": "IHyperdrive.MarketState",
                "nameLocations": [
                  "2193:11:7",
                  "2205:11:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6861,
                "src": "2193:23:7"
              },
              "referencedDeclaration": 6861,
              "src": "2193:23:7",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_MarketState_$6861_storage_ptr",
                "typeString": "struct IHyperdrive.MarketState"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4574,
            "nodeType": "VariableDeclaration",
            "src": "2307:47:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4571,
              "nodeType": "StructuredDocumentation",
              "src": "2245:57:7",
              "text": "@notice The state corresponding to the withdraw pool."
            },
            "mutability": "mutable",
            "name": "_withdrawPool",
            "nameLocation": "2341:13:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_WithdrawPool_$6875_storage",
              "typeString": "struct IHyperdrive.WithdrawPool"
            },
            "typeName": {
              "id": 4573,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4572,
                "name": "IHyperdrive.WithdrawPool",
                "nameLocations": [
                  "2307:11:7",
                  "2319:12:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6875,
                "src": "2307:24:7"
              },
              "referencedDeclaration": 6875,
              "src": "2307:24:7",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_WithdrawPool_$6875_storage_ptr",
                "typeString": "struct IHyperdrive.WithdrawPool"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4577,
            "nodeType": "VariableDeclaration",
            "src": "2426:36:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4575,
              "nodeType": "StructuredDocumentation",
              "src": "2361:60:7",
              "text": "@dev The LP fee applied to the curve portion of a trade."
            },
            "mutability": "immutable",
            "name": "_curveFee",
            "nameLocation": "2453:9:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4576,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2426:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4580,
            "nodeType": "VariableDeclaration",
            "src": "2532:35:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4578,
              "nodeType": "StructuredDocumentation",
              "src": "2468:59:7",
              "text": "@dev The LP fee applied to the flat portion of a trade."
            },
            "mutability": "immutable",
            "name": "_flatFee",
            "nameLocation": "2559:8:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4579,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2532:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4583,
            "nodeType": "VariableDeclaration",
            "src": "2637:41:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4581,
              "nodeType": "StructuredDocumentation",
              "src": "2573:59:7",
              "text": "@dev The portion of the LP fee that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceFee",
            "nameLocation": "2664:14:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4582,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2637:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4589,
            "nodeType": "VariableDeclaration",
            "src": "2985:100:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4584,
              "nodeType": "StructuredDocumentation",
              "src": "2685:295:7",
              "text": "@notice Hyperdrive positions are bucketed into checkpoints, which\n         allows us to avoid poking in any period that has LP or trading\n         activity. The checkpoints contain the starting share price from\n         the checkpoint as well as aggregate volume values."
            },
            "mutability": "mutable",
            "name": "_checkpoints",
            "nameLocation": "3073:12:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$6868_storage_$",
              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
            },
            "typeName": {
              "id": 4588,
              "keyName": "checkpointNumber",
              "keyNameLocation": "3001:16:7",
              "keyType": {
                "id": 4585,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2993:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2985:70:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$6868_storage_$",
                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
              },
              "valueName": "checkpoint",
              "valueNameLocation": "3044:10:7",
              "valueType": {
                "id": 4587,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 4586,
                  "name": "IHyperdrive.Checkpoint",
                  "nameLocations": [
                    "3021:11:7",
                    "3033:10:7"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6868,
                  "src": "3021:22:7"
                },
                "referencedDeclaration": 6868,
                "src": "3021:22:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Checkpoint_$6868_storage_ptr",
                  "typeString": "struct IHyperdrive.Checkpoint"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4594,
            "nodeType": "VariableDeclaration",
            "src": "3239:56:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4590,
              "nodeType": "StructuredDocumentation",
              "src": "3092:142:7",
              "text": "@notice Addresses approved in this mapping can pause all deposits into\n         the contract and other non essential functionality."
            },
            "mutability": "mutable",
            "name": "_pausers",
            "nameLocation": "3287:8:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 4593,
              "keyName": "user",
              "keyNameLocation": "3255:4:7",
              "keyType": {
                "id": 4591,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3247:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3239:38:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "isPauser",
              "valueNameLocation": "3268:8:7",
              "valueType": {
                "id": 4592,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "3263:4:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4596,
            "nodeType": "VariableDeclaration",
            "src": "3380:39:7",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_governanceFeesAccrued",
            "nameLocation": "3397:22:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4595,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3380:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4598,
            "nodeType": "VariableDeclaration",
            "src": "3474:28:7",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_governance",
            "nameLocation": "3491:11:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4597,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3474:7:7",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4601,
            "nodeType": "VariableDeclaration",
            "src": "3561:40:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4599,
              "nodeType": "StructuredDocumentation",
              "src": "3509:47:7",
              "text": "The address which collects governance fees."
            },
            "mutability": "immutable",
            "name": "_feeCollector",
            "nameLocation": "3588:13:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4600,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3561:7:7",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4604,
            "nodeType": "VariableDeclaration",
            "src": "3697:37:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4602,
              "nodeType": "StructuredDocumentation",
              "src": "3626:66:7",
              "text": "@notice The amount of time between oracle data sample updates."
            },
            "mutability": "immutable",
            "name": "_updateGap",
            "nameLocation": "3724:10:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4603,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3697:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4609,
            "nodeType": "StructDefinition",
            "src": "3797:196:7",
            "nodes": [],
            "canonicalName": "HyperdriveStorage.OracleData",
            "members": [
              {
                "constant": false,
                "id": 4606,
                "mutability": "mutable",
                "name": "timestamp",
                "nameLocation": "3881:9:7",
                "nodeType": "VariableDeclaration",
                "scope": 4609,
                "src": "3874:16:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 4605,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "3874:6:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4608,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "3982:4:7",
                "nodeType": "VariableDeclaration",
                "scope": 4609,
                "src": "3974:12:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint224",
                  "typeString": "uint224"
                },
                "typeName": {
                  "id": 4607,
                  "name": "uint224",
                  "nodeType": "ElementaryTypeName",
                  "src": "3974:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint224",
                    "typeString": "uint224"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "OracleData",
            "nameLocation": "3804:10:7",
            "scope": 4904,
            "visibility": "public"
          },
          {
            "id": 4614,
            "nodeType": "VariableDeclaration",
            "src": "4084:29:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4610,
              "nodeType": "StructuredDocumentation",
              "src": "3999:80:7",
              "text": "@notice This buffer contains the timestamps and data recorded in the oracle."
            },
            "mutability": "mutable",
            "name": "_buffer",
            "nameLocation": "4106:7:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
              "typeString": "struct HyperdriveStorage.OracleData[]"
            },
            "typeName": {
              "baseType": {
                "id": 4612,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 4611,
                  "name": "OracleData",
                  "nameLocations": [
                    "4084:10:7"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4609,
                  "src": "4084:10:7"
                },
                "referencedDeclaration": 4609,
                "src": "4084:10:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_OracleData_$4609_storage_ptr",
                  "typeString": "struct HyperdriveStorage.OracleData"
                }
              },
              "id": 4613,
              "nodeType": "ArrayTypeName",
              "src": "4084:12:7",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage_ptr",
                "typeString": "struct HyperdriveStorage.OracleData[]"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4618,
            "nodeType": "VariableDeclaration",
            "src": "4184:40:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 4615,
              "nodeType": "StructuredDocumentation",
              "src": "4120:59:7",
              "text": "@notice The struct holding the head and last timestamp."
            },
            "mutability": "mutable",
            "name": "_oracle",
            "nameLocation": "4217:7:7",
            "scope": 4904,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_OracleState_$6971_storage",
              "typeString": "struct IHyperdrive.OracleState"
            },
            "typeName": {
              "id": 4617,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4616,
                "name": "IHyperdrive.OracleState",
                "nameLocations": [
                  "4184:11:7",
                  "4196:11:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6971,
                "src": "4184:23:7"
              },
              "referencedDeclaration": 6971,
              "src": "4184:23:7",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_OracleState_$6971_storage_ptr",
                "typeString": "struct IHyperdrive.OracleState"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 4760,
            "nodeType": "FunctionDefinition",
            "src": "4346:2130:7",
            "nodes": [],
            "body": {
              "id": 4759,
              "nodeType": "Block",
              "src": "4397:2079:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 4628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4625,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4548,
                      "src": "4453:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6461",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4626,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "4466:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4627,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4474:9:7",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6889,
                      "src": "4466:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6461",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "4453:30:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6461",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 4629,
                  "nodeType": "ExpressionStatement",
                  "src": "4453:30:7"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4633,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 4630,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5012:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4631,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5020:20:7",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6895,
                      "src": "5012:28:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "316533",
                      "id": 4632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5043:3:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000_by_1",
                        "typeString": "int_const 1000"
                      },
                      "value": "1e3"
                    },
                    "src": "5012:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4640,
                  "nodeType": "IfStatement",
                  "src": "5008:113:7",
                  "trueBody": {
                    "id": 4639,
                    "nodeType": "Block",
                    "src": "5048:73:7",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4634,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "5069:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4636,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5081:27:7",
                            "memberName": "InvalidMinimumShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6994,
                            "src": "5069:39:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5069:41:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4638,
                        "nodeType": "RevertStatement",
                        "src": "5062:48:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 4644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4641,
                      "name": "_minimumShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4563,
                      "src": "5130:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4642,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5154:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4643,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5162:20:7",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6895,
                      "src": "5154:28:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5130:52:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4645,
                  "nodeType": "ExpressionStatement",
                  "src": "5130:52:7"
                },
                {
                  "expression": {
                    "id": 4649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4646,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4566,
                      "src": "5193:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4647,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5221:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4648,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5229:24:7",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6898,
                      "src": "5221:32:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5193:60:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4650,
                  "nodeType": "ExpressionStatement",
                  "src": "5193:60:7"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 4651,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5418:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4652,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5426:18:7",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6904,
                      "src": "5418:26:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 4653,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5448:1:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5418:31:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4661,
                  "nodeType": "IfStatement",
                  "src": "5414:108:7",
                  "trueBody": {
                    "id": 4660,
                    "nodeType": "Block",
                    "src": "5451:71:7",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4655,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "5472:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4657,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5484:25:7",
                            "memberName": "InvalidCheckpointDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6988,
                            "src": "5472:37:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5472:39:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4659,
                        "nodeType": "RevertStatement",
                        "src": "5465:46:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 4665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4662,
                      "name": "_checkpointDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4551,
                      "src": "5531:19:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4663,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5553:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4664,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5561:18:7",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6904,
                      "src": "5553:26:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5531:48:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4666,
                  "nodeType": "ExpressionStatement",
                  "src": "5531:48:7"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 4679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 4667,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4622,
                          "src": "5606:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 4668,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5614:16:7",
                        "memberName": "positionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6901,
                        "src": "5606:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 4669,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4622,
                          "src": "5633:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 4670,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5641:18:7",
                        "memberName": "checkpointDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6904,
                        "src": "5633:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5606:53:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4676,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 4672,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4622,
                            "src": "5675:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 4673,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5683:16:7",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6901,
                          "src": "5675:24:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "expression": {
                            "id": 4674,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4622,
                            "src": "5702:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 4675,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5710:18:7",
                          "memberName": "checkpointDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6904,
                          "src": "5702:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5675:53:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 4677,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5732:1:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5675:58:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5606:127:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4686,
                  "nodeType": "IfStatement",
                  "src": "5589:224:7",
                  "trueBody": {
                    "id": 4685,
                    "nodeType": "Block",
                    "src": "5744:69:7",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4680,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "5765:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5777:23:7",
                            "memberName": "InvalidPositionDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6996,
                            "src": "5765:35:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5765:37:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4684,
                        "nodeType": "RevertStatement",
                        "src": "5758:44:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 4690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4687,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4554,
                      "src": "5822:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4688,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5842:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4689,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5850:16:7",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6901,
                      "src": "5842:24:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5822:44:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4691,
                  "nodeType": "ExpressionStatement",
                  "src": "5822:44:7"
                },
                {
                  "expression": {
                    "id": 4695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4692,
                      "name": "_timeStretch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4557,
                      "src": "5876:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4693,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5891:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4694,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5899:11:7",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6907,
                      "src": "5891:19:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5876:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4696,
                  "nodeType": "ExpressionStatement",
                  "src": "5876:34:7"
                },
                {
                  "expression": {
                    "id": 4700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4697,
                      "name": "_initialSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4560,
                      "src": "5920:18:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4698,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5941:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4699,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5949:17:7",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6892,
                      "src": "5941:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5920:46:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4701,
                  "nodeType": "ExpressionStatement",
                  "src": "5920:46:7"
                },
                {
                  "expression": {
                    "id": 4705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4702,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4598,
                      "src": "5976:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4703,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "5990:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4704,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5998:10:7",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6910,
                      "src": "5990:18:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5976:32:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 4706,
                  "nodeType": "ExpressionStatement",
                  "src": "5976:32:7"
                },
                {
                  "expression": {
                    "id": 4710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4707,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4601,
                      "src": "6018:13:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4708,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "6034:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4709,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6042:12:7",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6913,
                      "src": "6034:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6018:36:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 4711,
                  "nodeType": "ExpressionStatement",
                  "src": "6018:36:7"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 4728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 4722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 4712,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4622,
                              "src": "6082:7:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 4713,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6090:4:7",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6917,
                            "src": "6082:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 4714,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6095:5:7",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6878,
                          "src": "6082:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 4715,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6103:4:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "6082:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 4717,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4622,
                              "src": "6123:7:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 4718,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6131:4:7",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6917,
                            "src": "6123:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 4719,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6136:4:7",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6881,
                          "src": "6123:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 4720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6143:4:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "6123:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6082:65:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 4723,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4622,
                            "src": "6163:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 4724,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6171:4:7",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6917,
                          "src": "6163:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 4725,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6176:10:7",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6884,
                        "src": "6163:23:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 4726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6189:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "6163:30:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6082:111:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4735,
                  "nodeType": "IfStatement",
                  "src": "6065:202:7",
                  "trueBody": {
                    "id": 4734,
                    "nodeType": "Block",
                    "src": "6204:63:7",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4729,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "6225:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6237:17:7",
                            "memberName": "InvalidFeeAmounts",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7000,
                            "src": "6225:29:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4732,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6225:31:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4733,
                        "nodeType": "RevertStatement",
                        "src": "6218:38:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 4740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4736,
                      "name": "_curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4577,
                      "src": "6276:9:7",
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
                          "id": 4737,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4622,
                          "src": "6288:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 4738,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6296:4:7",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6917,
                        "src": "6288:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 4739,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6301:5:7",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6878,
                      "src": "6288:18:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6276:30:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4741,
                  "nodeType": "ExpressionStatement",
                  "src": "6276:30:7"
                },
                {
                  "expression": {
                    "id": 4746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4742,
                      "name": "_flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4580,
                      "src": "6316:8:7",
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
                          "id": 4743,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4622,
                          "src": "6327:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 4744,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6335:4:7",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6917,
                        "src": "6327:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 4745,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6340:4:7",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6881,
                      "src": "6327:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6316:28:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4747,
                  "nodeType": "ExpressionStatement",
                  "src": "6316:28:7"
                },
                {
                  "expression": {
                    "id": 4752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4748,
                      "name": "_governanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4583,
                      "src": "6354:14:7",
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
                          "id": 4749,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4622,
                          "src": "6371:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 4750,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6379:4:7",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6917,
                        "src": "6371:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 4751,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6384:10:7",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6884,
                      "src": "6371:23:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6354:40:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4753,
                  "nodeType": "ExpressionStatement",
                  "src": "6354:40:7"
                },
                {
                  "expression": {
                    "id": 4757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4754,
                      "name": "_updateGap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4604,
                      "src": "6439:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 4755,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "6452:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 4756,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6460:9:7",
                      "memberName": "updateGap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6923,
                      "src": "6452:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6439:30:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4758,
                  "nodeType": "ExpressionStatement",
                  "src": "6439:30:7"
                }
              ]
            },
            "documentation": {
              "id": 4619,
              "nodeType": "StructuredDocumentation",
              "src": "4231:110:7",
              "text": "@notice Initializes Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 4623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4622,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "4388:7:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4760,
                  "src": "4358:37:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 4621,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 4620,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "4358:11:7",
                        "4370:10:7"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "4358:22:7"
                    },
                    "referencedDeclaration": 6924,
                    "src": "4358:22:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4357:39:7"
            },
            "returnParameters": {
              "id": 4624,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4397:0:7"
            },
            "scope": 4904,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4793,
            "nodeType": "FunctionDefinition",
            "src": "6709:368:7",
            "nodes": [],
            "body": {
              "id": 4792,
              "nodeType": "Block",
              "src": "6825:252:7",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    4769
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4769,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "6843:16:7",
                      "nodeType": "VariableDeclaration",
                      "scope": 4792,
                      "src": "6835:24:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4768,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6835:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4772,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 4770,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4850,
                      "src": "6862:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 4771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6862:19:7",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6835:46:7"
                },
                {
                  "expression": {
                    "id": 4782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4773,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4766,
                      "src": "6891:13:7",
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
                        "id": 4776,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 4774,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4763,
                          "src": "6907:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 4775,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4769,
                          "src": "6923:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6907:32:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 4780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7001:1:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 4781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "6907:95:7",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4779,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 4777,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4763,
                          "src": "6954:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 4778,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4769,
                          "src": "6970:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6954:32:7",
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
                    "src": "6891:111:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4783,
                  "nodeType": "ExpressionStatement",
                  "src": "6891:111:7"
                },
                {
                  "expression": {
                    "id": 4790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4784,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4766,
                      "src": "7012:13:7",
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
                          "id": 4788,
                          "name": "_positionDuration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4554,
                          "src": "7052:17:7",
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
                              "id": 4785,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4766,
                              "src": "7029:13:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4786,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7028:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7044:7:7",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7802,
                        "src": "7028:23:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 4789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7028:42:7",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7012:58:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4791,
                  "nodeType": "ExpressionStatement",
                  "src": "7012:58:7"
                }
              ]
            },
            "documentation": {
              "id": 4761,
              "nodeType": "StructuredDocumentation",
              "src": "6503:201:7",
              "text": "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1])."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemaining",
            "nameLocation": "6718:23:7",
            "parameters": {
              "id": 4764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4763,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6759:13:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4793,
                  "src": "6751:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6751:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6741:37:7"
            },
            "returnParameters": {
              "id": 4767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4766,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "6810:13:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4793,
                  "src": "6802:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4765,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6802:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6801:23:7"
            },
            "scope": 4904,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4832,
            "nodeType": "FunctionDefinition",
            "src": "7277:444:7",
            "nodes": [],
            "body": {
              "id": 4831,
              "nodeType": "Block",
              "src": "7399:322:7",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    4802
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4802,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "7417:16:7",
                      "nodeType": "VariableDeclaration",
                      "scope": 4831,
                      "src": "7409:24:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4801,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7409:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4808,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 4803,
                        "name": "_latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4850,
                        "src": "7436:17:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 4804,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7436:19:7",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "expression": {
                        "id": 4805,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8486,
                        "src": "7458:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 4806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7473:6:7",
                      "memberName": "ONE_18",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7745,
                      "src": "7458:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7436:43:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7409:70:7"
                },
                {
                  "expression": {
                    "id": 4818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4809,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4799,
                      "src": "7489:13:7",
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
                        "id": 4812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 4810,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4796,
                          "src": "7505:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 4811,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4802,
                          "src": "7521:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7505:32:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 4816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7599:1:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 4817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "7505:95:7",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 4813,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4796,
                          "src": "7552:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 4814,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4802,
                          "src": "7568:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7552:32:7",
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
                    "src": "7489:111:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4819,
                  "nodeType": "ExpressionStatement",
                  "src": "7489:111:7"
                },
                {
                  "expression": {
                    "id": 4829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4820,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4799,
                      "src": "7610:13:7",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4827,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4824,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4554,
                            "src": "7663:17:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "expression": {
                              "id": 4825,
                              "name": "FixedPointMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8486,
                              "src": "7683:14:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                "typeString": "type(library FixedPointMath)"
                              }
                            },
                            "id": 4826,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7698:6:7",
                            "memberName": "ONE_18",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7745,
                            "src": "7683:21:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7663:41:7",
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
                              "id": 4821,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4799,
                              "src": "7627:13:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4822,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7626:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7642:7:7",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7802,
                        "src": "7626:23:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 4828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7626:88:7",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7610:104:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4830,
                  "nodeType": "ExpressionStatement",
                  "src": "7610:104:7"
                }
              ]
            },
            "documentation": {
              "id": 4794,
              "nodeType": "StructuredDocumentation",
              "src": "7083:189:7",
              "text": "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemainingScaled",
            "nameLocation": "7286:29:7",
            "parameters": {
              "id": 4797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4796,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "7333:13:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4832,
                  "src": "7325:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4795,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7325:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7315:37:7"
            },
            "returnParameters": {
              "id": 4800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4799,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "7384:13:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4832,
                  "src": "7376:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7376:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7375:23:7"
            },
            "scope": 4904,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4850,
            "nodeType": "FunctionDefinition",
            "src": "7834:223:7",
            "nodes": [],
            "body": {
              "id": 4849,
              "nodeType": "Block",
              "src": "7940:117:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 4847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4838,
                      "name": "latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4836,
                      "src": "7950:16:7",
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
                      "id": 4846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 4839,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "7981:5:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 4840,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7987:9:7",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "7981:15:7",
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
                            "id": 4844,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 4841,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "8012:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 4842,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8018:9:7",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "8012:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "%",
                            "rightExpression": {
                              "id": 4843,
                              "name": "_checkpointDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4551,
                              "src": "8030:19:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8012:37:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 4845,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "8011:39:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7981:69:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7950:100:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4848,
                  "nodeType": "ExpressionStatement",
                  "src": "7950:100:7"
                }
              ]
            },
            "documentation": {
              "id": 4833,
              "nodeType": "StructuredDocumentation",
              "src": "7727:102:7",
              "text": "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_latestCheckpoint",
            "nameLocation": "7843:17:7",
            "parameters": {
              "id": 4834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7860:2:7"
            },
            "returnParameters": {
              "id": 4837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4836,
                  "mutability": "mutable",
                  "name": "latestCheckpoint",
                  "nameLocation": "7918:16:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4850,
                  "src": "7910:24:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7910:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7909:26:7"
            },
            "scope": 4904,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4865,
            "nodeType": "FunctionDefinition",
            "src": "8238:253:7",
            "nodes": [],
            "body": {
              "id": 4864,
              "nodeType": "Block",
              "src": "8305:186:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 4858,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4570,
                          "src": "8398:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 4859,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8411:13:7",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6833,
                        "src": "8398:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 4860,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4570,
                          "src": "8442:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 4861,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8455:15:7",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6839,
                        "src": "8442:28:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      ],
                      "expression": {
                        "id": 4856,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "8334:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 4857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8349:31:7",
                      "memberName": "calculateEffectiveShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10771,
                      "src": "8334:46:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 4862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8334:150:7",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 4855,
                  "id": 4863,
                  "nodeType": "Return",
                  "src": "8315:169:7"
                }
              ]
            },
            "documentation": {
              "id": 4851,
              "nodeType": "StructuredDocumentation",
              "src": "8063:170:7",
              "text": "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_effectiveShareReserves",
            "nameLocation": "8247:23:7",
            "parameters": {
              "id": 4852,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8270:2:7"
            },
            "returnParameters": {
              "id": 4855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4854,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4865,
                  "src": "8296:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8296:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8295:9:7"
            },
            "scope": 4904,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4903,
            "nodeType": "FunctionDefinition",
            "src": "8679:1001:7",
            "nodes": [],
            "body": {
              "id": 4902,
              "nodeType": "Block",
              "src": "8852:828:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 4900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4874,
                      "name": "presentValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4872,
                      "src": "8862:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                        "typeString": "struct HyperdriveMath.PresentValueParams memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 4877,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4570,
                            "src": "8940:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4878,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8953:13:7",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6833,
                          "src": "8940:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "expression": {
                            "id": 4879,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4570,
                            "src": "8997:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4880,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9010:15:7",
                          "memberName": "shareAdjustment",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6839,
                          "src": "8997:28:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        {
                          "expression": {
                            "id": 4881,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4570,
                            "src": "9053:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4882,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9066:12:7",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6836,
                          "src": "9053:25:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "id": 4883,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4868,
                          "src": "9104:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4884,
                          "name": "_initialSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4560,
                          "src": "9148:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4885,
                          "name": "_minimumShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4563,
                          "src": "9202:21:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4886,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4557,
                          "src": "9250:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 4887,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4570,
                            "src": "9294:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4888,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9307:16:7",
                          "memberName": "longsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6845,
                          "src": "9294:29:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 4890,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4570,
                                "src": "9410:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 4891,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9423:23:7",
                              "memberName": "longAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6851,
                              "src": "9410:36:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 4889,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4832,
                            "src": "9363:29:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 4892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9363:97:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 4893,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4570,
                            "src": "9493:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4894,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9506:17:7",
                          "memberName": "shortsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6848,
                          "src": "9493:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 4896,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4570,
                                "src": "9611:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 4897,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9624:24:7",
                              "memberName": "shortAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6854,
                              "src": "9611:37:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 4895,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4832,
                            "src": "9564:29:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 4898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9564:98:7",
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
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
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
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 4875,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10772,
                          "src": "8877:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 4876,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8892:18:7",
                        "memberName": "PresentValueParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10414,
                        "src": "8877:33:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_PresentValueParams_$10414_storage_ptr_$",
                          "typeString": "type(struct HyperdriveMath.PresentValueParams storage pointer)"
                        }
                      },
                      "id": 4899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "8925:13:7",
                        "8980:15:7",
                        "9039:12:7",
                        "9092:10:7",
                        "9129:17:7",
                        "9180:20:7",
                        "9237:11:7",
                        "9276:16:7",
                        "9337:24:7",
                        "9474:17:7",
                        "9537:25:7"
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
                      "src": "8877:796:7",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                        "typeString": "struct HyperdriveMath.PresentValueParams memory"
                      }
                    },
                    "src": "8862:811:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                      "typeString": "struct HyperdriveMath.PresentValueParams memory"
                    }
                  },
                  "id": 4901,
                  "nodeType": "ExpressionStatement",
                  "src": "8862:811:7"
                }
              ]
            },
            "documentation": {
              "id": 4866,
              "nodeType": "StructuredDocumentation",
              "src": "8497:177:7",
              "text": "@dev Gets the present value parameters from the current state.\n @param _sharePrice The current share price.\n @return presentValue The present value parameters."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getPresentValueParams",
            "nameLocation": "8688:22:7",
            "parameters": {
              "id": 4869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4868,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "8728:11:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4903,
                  "src": "8720:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8720:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8710:35:7"
            },
            "returnParameters": {
              "id": 4873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4872,
                  "mutability": "mutable",
                  "name": "presentValue",
                  "nameLocation": "8834:12:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 4903,
                  "src": "8793:53:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                    "typeString": "struct HyperdriveMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 4871,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 4870,
                      "name": "HyperdriveMath.PresentValueParams",
                      "nameLocations": [
                        "8793:14:7",
                        "8808:18:7"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10414,
                      "src": "8793:33:7"
                    },
                    "referencedDeclaration": 10414,
                    "src": "8793:33:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$10414_storage_ptr",
                      "typeString": "struct HyperdriveMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8792:55:7"
            },
            "scope": 4904,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 4538,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "824:15:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63474,
              "src": "824:15:7"
            },
            "id": 4539,
            "nodeType": "InheritanceSpecifier",
            "src": "824:15:7"
          },
          {
            "baseName": {
              "id": 4540,
              "name": "MultiTokenStorage",
              "nameLocations": [
                "841:17:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 13196,
              "src": "841:17:7"
            },
            "id": 4541,
            "nodeType": "InheritanceSpecifier",
            "src": "841:17:7"
          }
        ],
        "canonicalName": "HyperdriveStorage",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 4537,
          "nodeType": "StructuredDocumentation",
          "src": "441:344:7",
          "text": "@author DELV\n @title HyperdriveStorage\n @notice The storage contract of the Hyperdrive inheritance hierarchy.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          4904,
          13196,
          63474
        ],
        "name": "HyperdriveStorage",
        "nameLocation": "803:17:7",
        "scope": 4905,
        "usedErrors": [
          6988,
          6994,
          6996,
          7000
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 7
} as const;
