export const IHyperdriveDeployer = {
  abi: [
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IERC20",
              name: "baseToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "initialSharePrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minimumShareReserves",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minimumTransactionAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "positionDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "checkpointDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timeStretch",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "governance",
              type: "address",
            },
            {
              internalType: "address",
              name: "feeCollector",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "curve",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "flat",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "governance",
                  type: "uint256",
                },
              ],
              internalType: "struct IHyperdrive.Fees",
              name: "fees",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "oracleSize",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "updateGap",
              type: "uint256",
            },
          ],
          internalType: "struct IHyperdrive.PoolConfig",
          name: "_config",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "_dataProvider",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "_linkerCodeHash",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_linkerFactory",
          type: "address",
        },
        {
          internalType: "bytes32[]",
          name: "_extraData",
          type: "bytes32[]",
        },
      ],
      name: "deploy",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  deployedBytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  methodIdentifiers: {
    "deploy((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,address,bytes32[])":
      "e3420f4f",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governance","type":"uint256"}],"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple"},{"internalType":"uint256","name":"oracleSize","type":"uint256"},{"internalType":"uint256","name":"updateGap","type":"uint256"}],"internalType":"struct IHyperdrive.PoolConfig","name":"_config","type":"tuple"},{"internalType":"address","name":"_dataProvider","type":"address"},{"internalType":"bytes32","name":"_linkerCodeHash","type":"bytes32"},{"internalType":"address","name":"_linkerFactory","type":"address"},{"internalType":"bytes32[]","name":"_extraData","type":"bytes32[]"}],"name":"deploy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/src/interfaces/IHyperdriveDeployer.sol":"IHyperdriveDeployer"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveDeployer.sol":{"keccak256":"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0","license":"Apache-2.0","urls":["bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587","dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: "struct IHyperdrive.PoolConfig",
              name: "_config",
              type: "tuple",
              components: [
                {
                  internalType: "contract IERC20",
                  name: "baseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "initialSharePrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "minimumShareReserves",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "minimumTransactionAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "positionDuration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "checkpointDuration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStretch",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "governance",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "feeCollector",
                  type: "address",
                },
                {
                  internalType: "struct IHyperdrive.Fees",
                  name: "fees",
                  type: "tuple",
                  components: [
                    {
                      internalType: "uint256",
                      name: "curve",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "flat",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "governance",
                      type: "uint256",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "oracleSize",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updateGap",
                  type: "uint256",
                },
              ],
            },
            {
              internalType: "address",
              name: "_dataProvider",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_linkerCodeHash",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "_linkerFactory",
              type: "address",
            },
            {
              internalType: "bytes32[]",
              name: "_extraData",
              type: "bytes32[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "deploy",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {},
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {},
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/",
      ],
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: "ipfs",
      },
      compilationTarget: {
        "contracts/src/interfaces/IHyperdriveDeployer.sol":
          "IHyperdriveDeployer",
      },
      libraries: {},
    },
    sources: {
      "contracts/src/interfaces/IERC20.sol": {
        keccak256:
          "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        urls: [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w",
        ],
        license: "MIT",
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        keccak256:
          "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        urls: [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveDeployer.sol": {
        keccak256:
          "0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0",
        urls: [
          "bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587",
          "dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        keccak256:
          "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        urls: [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        keccak256:
          "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        urls: [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        keccak256:
          "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        urls: [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        keccak256:
          "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        urls: [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        keccak256:
          "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        urls: [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        keccak256:
          "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        urls: [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe",
        ],
        license: "Apache-2.0",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        urls: [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":
        {
          keccak256:
            "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
          urls: [
            "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
            "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        keccak256:
          "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        urls: [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        keccak256:
          "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        urls: [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "contracts/src/interfaces/IHyperdriveDeployer.sol",
    id: 7128,
    exportedSymbols: {
      IERC20: [6461],
      IHyperdrive: [7103],
      IHyperdriveDeployer: [7127],
    },
    nodeType: "SourceUnit",
    src: "39:382:21",
    nodes: [
      {
        id: 7105,
        nodeType: "PragmaDirective",
        src: "39:23:21",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 7107,
        nodeType: "ImportDirective",
        src: "64:38:21",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IERC20.sol",
        file: "./IERC20.sol",
        nameLocation: "-1:-1:-1",
        scope: 7128,
        sourceUnit: 6462,
        symbolAliases: [
          {
            foreign: {
              id: 7106,
              name: "IERC20",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6461,
              src: "73:6:21",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 7109,
        nodeType: "ImportDirective",
        src: "103:48:21",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "./IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 7128,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 7108,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "112:11:21",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 7127,
        nodeType: "ContractDefinition",
        src: "153:267:21",
        nodes: [
          {
            id: 7126,
            nodeType: "FunctionDefinition",
            src: "189:229:21",
            nodes: [],
            functionSelector: "e3420f4f",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "deploy",
            nameLocation: "198:6:21",
            parameters: {
              id: 7122,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 7112,
                  mutability: "mutable",
                  name: "_config",
                  nameLocation: "244:7:21",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "214:37:21",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                    typeString: "struct IHyperdrive.PoolConfig",
                  },
                  typeName: {
                    id: 7111,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 7110,
                      name: "IHyperdrive.PoolConfig",
                      nameLocations: ["214:11:21", "226:10:21"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 6924,
                      src: "214:22:21",
                    },
                    referencedDeclaration: 6924,
                    src: "214:22:21",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolConfig_$6924_storage_ptr",
                      typeString: "struct IHyperdrive.PoolConfig",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 7114,
                  mutability: "mutable",
                  name: "_dataProvider",
                  nameLocation: "269:13:21",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "261:21:21",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 7113,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "261:7:21",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 7116,
                  mutability: "mutable",
                  name: "_linkerCodeHash",
                  nameLocation: "300:15:21",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "292:23:21",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 7115,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "292:7:21",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 7118,
                  mutability: "mutable",
                  name: "_linkerFactory",
                  nameLocation: "333:14:21",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "325:22:21",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 7117,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "325:7:21",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 7121,
                  mutability: "mutable",
                  name: "_extraData",
                  nameLocation: "374:10:21",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "357:27:21",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                    typeString: "bytes32[]",
                  },
                  typeName: {
                    baseType: {
                      id: 7119,
                      name: "bytes32",
                      nodeType: "ElementaryTypeName",
                      src: "357:7:21",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32",
                      },
                    },
                    id: 7120,
                    nodeType: "ArrayTypeName",
                    src: "357:9:21",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr",
                      typeString: "bytes32[]",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "204:186:21",
            },
            returnParameters: {
              id: 7125,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 7124,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 7126,
                  src: "409:7:21",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 7123,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "409:7:21",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "408:9:21",
            },
            scope: 7127,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: "IHyperdriveDeployer",
        contractDependencies: [],
        contractKind: "interface",
        fullyImplemented: false,
        linearizedBaseContracts: [7127],
        name: "IHyperdriveDeployer",
        nameLocation: "163:19:21",
        scope: 7128,
        usedErrors: [],
      },
    ],
    license: "Apache-2.0",
  },
  id: 21,
} as const;
