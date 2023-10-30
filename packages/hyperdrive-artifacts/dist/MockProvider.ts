export const MockProvider = {
  abi: [
    {
      inputs: [
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "ReturnData",
      type: "error",
    },
    {
      stateMutability: "nonpayable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "get",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
  ],
  bytecode: {
    object:
      "0x608060405234801561001057600080fd5b5061010e806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636d4ce63c14602a575b005b60306042565b60405190815260200160405180910390f35b60408051602a602082015260009160679101604051602081830303815290604052606a565b90565b80604051636e64089360e11b815260040160839190608c565b60405180910390fd5b600060208083528351808285015260005b8181101560b757858101830151858201604001528201609d565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212206efe533084bb6e90a811cf253228eb462b60cca3d2a1fbd4f557bad036f8bfb564736f6c63430008130033",
    sourceMap: "244:439:136:-:0;;;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052348015600f57600080fd5b506004361060285760003560e01c80636d4ce63c14602a575b005b60306042565b60405190815260200160405180910390f35b60408051602a602082015260009160679101604051602081830303815290604052606a565b90565b80604051636e64089360e11b815260040160839190608c565b60405180910390fd5b600060208083528351808285015260005b8181101560b757858101830151858201604001528201609d565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212206efe533084bb6e90a811cf253228eb462b60cca3d2a1fbd4f557bad036f8bfb564736f6c63430008130033",
    sourceMap:
      "244:439:136:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;272:87;;;:::i;:::-;;;160:25:165;;;148:2;133:18;272:87:136;;;;;;;;337:14;;;348:2;337:14;;;349:36:165;310:7:136;;329:23;;322:18:165;337:14:136;;;;;;;;;;;;329:7;:23::i;:::-;272:87;:::o;575:106::-;667:6;644:30;;-1:-1:-1;;;644:30:136;;;;;;;;:::i;:::-;;;;;;;;396:546:165;506:4;535:2;564;553:9;546:21;596:6;590:13;639:6;634:2;623:9;619:18;612:34;664:1;674:140;688:6;685:1;682:13;674:140;;;783:14;;;779:23;;773:30;749:17;;;768:2;745:26;738:66;703:10;;674:140;;;678:3;863:1;858:2;849:6;838:9;834:22;830:31;823:42;933:2;926;922:7;917:2;909:6;905:15;901:29;890:9;886:45;882:54;874:62;;;;396:546;;;;:::o",
    linkReferences: {},
  },
  methodIdentifiers: {
    "get()": "6d4ce63c",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"ReturnData","type":"error"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"errors":{"ReturnData(bytes)":[{"notice":"#################### ### DataProvider ### ####################"}]},"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"test/units/DataProvider.t.sol":"MockProvider"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"lib/forge-std/lib/ds-test/src/test.sol":{"keccak256":"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b","license":"GPL-3.0-or-later","urls":["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240","dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"]},"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/StdAssertions.sol":{"keccak256":"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60","license":"MIT","urls":["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b","dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5","license":"MIT","urls":["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a","dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"]},"lib/forge-std/src/StdError.sol":{"keccak256":"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77","license":"MIT","urls":["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6","dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"]},"lib/forge-std/src/StdInvariant.sol":{"keccak256":"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1","license":"MIT","urls":["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c","dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b","license":"MIT","urls":["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c","dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d","license":"MIT","urls":["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26","dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1","license":"MIT","urls":["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140","dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"]},"lib/forge-std/src/Test.sol":{"keccak256":"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0","license":"MIT","urls":["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765","dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea","license":"MIT","urls":["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973","dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381","license":"MIT","urls":["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae","dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"test/units/DataProvider.t.sol":{"keccak256":"0xae68678d52cf1a8a98bdad481b1e2df5260e2471a2d761d7e53a8bfb445e6602","license":"Apache-2.0","urls":["bzz-raw://d4a69449a1b815dea1d3a720017d6065ce5a498d8fb57069f44072ab63ff0757","dweb:/ipfs/QmTBEppoLemqHTri2P3C2XqzPUbVXhpWK55zmpfgdnhpGG"]}},"version":1}',
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
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          type: "error",
          name: "ReturnData",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          stateMutability: "pure",
          type: "function",
          name: "get",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
        "test/units/DataProvider.t.sol": "MockProvider",
      },
      libraries: {},
    },
    sources: {
      "contracts/src/DataProvider.sol": {
        keccak256:
          "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        urls: [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7",
        ],
        license: "Apache-2.0",
      },
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
      "lib/forge-std/lib/ds-test/src/test.sol": {
        keccak256:
          "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b",
        urls: [
          "bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240",
          "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k",
        ],
        license: "GPL-3.0-or-later",
      },
      "lib/forge-std/src/Base.sol": {
        keccak256:
          "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
        urls: [
          "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
          "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdAssertions.sol": {
        keccak256:
          "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
        urls: [
          "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
          "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdChains.sol": {
        keccak256:
          "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
        urls: [
          "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
          "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdCheats.sol": {
        keccak256:
          "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5",
        urls: [
          "bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a",
          "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdError.sol": {
        keccak256:
          "0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77",
        urls: [
          "bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6",
          "dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdInvariant.sol": {
        keccak256:
          "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
        urls: [
          "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
          "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdJson.sol": {
        keccak256:
          "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
        urls: [
          "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
          "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdMath.sol": {
        keccak256:
          "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
        urls: [
          "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
          "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdStorage.sol": {
        keccak256:
          "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
        urls: [
          "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
          "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdStyle.sol": {
        keccak256:
          "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
        urls: [
          "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
          "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdUtils.sol": {
        keccak256:
          "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
        urls: [
          "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
          "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/Test.sol": {
        keccak256:
          "0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0",
        urls: [
          "bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765",
          "dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/Vm.sol": {
        keccak256:
          "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        urls: [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/console.sol": {
        keccak256:
          "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
        urls: [
          "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
          "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/console2.sol": {
        keccak256:
          "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
        urls: [
          "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
          "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        keccak256:
          "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        urls: [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/safeconsole.sol": {
        keccak256:
          "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381",
        urls: [
          "bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae",
          "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq",
        ],
        license: "MIT",
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
      "test/units/DataProvider.t.sol": {
        keccak256:
          "0xae68678d52cf1a8a98bdad481b1e2df5260e2471a2d761d7e53a8bfb445e6602",
        urls: [
          "bzz-raw://d4a69449a1b815dea1d3a720017d6065ce5a498d8fb57069f44072ab63ff0757",
          "dweb:/ipfs/QmTBEppoLemqHTri2P3C2XqzPUbVXhpWK55zmpfgdnhpGG",
        ],
        license: "Apache-2.0",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "test/units/DataProvider.t.sol",
    id: 93364,
    exportedSymbols: {
      DataProvider: [72],
      DataProviderTest: [93363],
      IHyperdrive: [7103],
      MockProvider: [93244],
      Test: [26704],
    },
    nodeType: "SourceUnit",
    src: "39:1490:136",
    nodes: [
      {
        id: 93207,
        nodeType: "PragmaDirective",
        src: "39:24:136",
        nodes: [],
        literals: ["solidity", "^", "0.8", ".18"],
      },
      {
        id: 93209,
        nodeType: "ImportDirective",
        src: "65:42:136",
        nodes: [],
        absolutePath: "lib/forge-std/src/Test.sol",
        file: "forge-std/Test.sol",
        nameLocation: "-1:-1:-1",
        scope: 93364,
        sourceUnit: 26705,
        symbolAliases: [
          {
            foreign: {
              id: 93208,
              name: "Test",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 26704,
              src: "74:4:136",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 93211,
        nodeType: "ImportDirective",
        src: "108:62:136",
        nodes: [],
        absolutePath: "contracts/src/DataProvider.sol",
        file: "contracts/src/DataProvider.sol",
        nameLocation: "-1:-1:-1",
        scope: 93364,
        sourceUnit: 73,
        symbolAliases: [
          {
            foreign: {
              id: 93210,
              name: "DataProvider",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 72,
              src: "117:12:136",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 93213,
        nodeType: "ImportDirective",
        src: "171:71:136",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "contracts/src/interfaces/IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 93364,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 93212,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "180:11:136",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 93244,
        nodeType: "ContractDefinition",
        src: "244:439:136",
        nodes: [
          {
            id: 93226,
            nodeType: "FunctionDefinition",
            src: "272:87:136",
            nodes: [],
            body: {
              id: 93225,
              nodeType: "Block",
              src: "319:40:136",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            hexValue: "3432",
                            id: 93221,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "348:2:136",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_42_by_1",
                              typeString: "int_const 42",
                            },
                            value: "42",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_42_by_1",
                              typeString: "int_const 42",
                            },
                          ],
                          expression: {
                            id: 93219,
                            name: "abi",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -1,
                            src: "337:3:136",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_abi",
                              typeString: "abi",
                            },
                          },
                          id: 93220,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberLocation: "341:6:136",
                          memberName: "encode",
                          nodeType: "MemberAccess",
                          src: "337:10:136",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function () pure returns (bytes memory)",
                          },
                        },
                        id: 93222,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "337:14:136",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      ],
                      id: 93218,
                      name: "_revert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 93243,
                      src: "329:7:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        typeString: "function (bytes memory) pure",
                      },
                    },
                    id: 93223,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "329:23:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93224,
                  nodeType: "ExpressionStatement",
                  src: "329:23:136",
                },
              ],
            },
            functionSelector: "6d4ce63c",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "get",
            nameLocation: "281:3:136",
            parameters: {
              id: 93214,
              nodeType: "ParameterList",
              parameters: [],
              src: "284:2:136",
            },
            returnParameters: {
              id: 93217,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 93216,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 93226,
                  src: "310:7:136",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 93215,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "310:7:136",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "309:9:136",
            },
            scope: 93244,
            stateMutability: "pure",
            virtual: false,
            visibility: "external",
          },
          {
            id: 93230,
            nodeType: "FunctionDefinition",
            src: "365:22:136",
            nodes: [],
            body: {
              id: 93229,
              nodeType: "Block",
              src: "385:2:136",
              nodes: [],
              statements: [],
            },
            implemented: true,
            kind: "fallback",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            parameters: {
              id: 93227,
              nodeType: "ParameterList",
              parameters: [],
              src: "373:2:136",
            },
            returnParameters: {
              id: 93228,
              nodeType: "ParameterList",
              parameters: [],
              src: "385:0:136",
            },
            scope: 93244,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 93243,
            nodeType: "FunctionDefinition",
            src: "575:106:136",
            nodes: [],
            body: {
              id: 93242,
              nodeType: "Block",
              src: "627:54:136",
              nodes: [],
              statements: [
                {
                  errorCall: {
                    arguments: [
                      {
                        id: 93239,
                        name: "_bytes",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 93233,
                        src: "667:6:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      ],
                      expression: {
                        id: 93236,
                        name: "IHyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 7103,
                        src: "644:11:136",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_IHyperdrive_$7103_$",
                          typeString: "type(contract IHyperdrive)",
                        },
                      },
                      id: 93238,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "656:10:136",
                      memberName: "ReturnData",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7038,
                      src: "644:22:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                        typeString: "function (bytes memory) pure",
                      },
                    },
                    id: 93240,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "644:30:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93241,
                  nodeType: "RevertStatement",
                  src: "637:37:136",
                },
              ],
            },
            documentation: {
              id: 93231,
              nodeType: "StructuredDocumentation",
              src: "393:177:136",
              text: "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with.",
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_revert",
            nameLocation: "584:7:136",
            parameters: {
              id: 93234,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 93233,
                  mutability: "mutable",
                  name: "_bytes",
                  nameLocation: "605:6:136",
                  nodeType: "VariableDeclaration",
                  scope: 93243,
                  src: "592:19:136",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes",
                  },
                  typeName: {
                    id: 93232,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "592:5:136",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "591:21:136",
            },
            returnParameters: {
              id: 93235,
              nodeType: "ParameterList",
              parameters: [],
              src: "627:0:136",
            },
            scope: 93244,
            stateMutability: "pure",
            virtual: false,
            visibility: "internal",
          },
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: "MockProvider",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [93244],
        name: "MockProvider",
        nameLocation: "253:12:136",
        scope: 93364,
        usedErrors: [7038],
      },
      {
        id: 93363,
        nodeType: "ContractDefinition",
        src: "685:843:136",
        nodes: [
          {
            id: 93249,
            nodeType: "VariableDeclaration",
            src: "725:21:136",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "provider",
            nameLocation: "738:8:136",
            scope: 93363,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_contract$_DataProvider_$72",
              typeString: "contract DataProvider",
            },
            typeName: {
              id: 93248,
              nodeType: "UserDefinedTypeName",
              pathNode: {
                id: 93247,
                name: "DataProvider",
                nameLocations: ["725:12:136"],
                nodeType: "IdentifierPath",
                referencedDeclaration: 72,
                src: "725:12:136",
              },
              referencedDeclaration: 72,
              src: "725:12:136",
              typeDescriptions: {
                typeIdentifier: "t_contract$_DataProvider_$72",
                typeString: "contract DataProvider",
              },
            },
            visibility: "internal",
          },
          {
            id: 93272,
            nodeType: "FunctionDefinition",
            src: "753:131:136",
            nodes: [],
            body: {
              id: 93271,
              nodeType: "Block",
              src: "777:107:136",
              nodes: [],
              statements: [
                {
                  assignments: [93254],
                  declarations: [
                    {
                      constant: false,
                      id: 93254,
                      mutability: "mutable",
                      name: "mock",
                      nameLocation: "800:4:136",
                      nodeType: "VariableDeclaration",
                      scope: 93271,
                      src: "787:17:136",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_MockProvider_$93244",
                        typeString: "contract MockProvider",
                      },
                      typeName: {
                        id: 93253,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 93252,
                          name: "MockProvider",
                          nameLocations: ["787:12:136"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 93244,
                          src: "787:12:136",
                        },
                        referencedDeclaration: 93244,
                        src: "787:12:136",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MockProvider_$93244",
                          typeString: "contract MockProvider",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 93259,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 93257,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "NewExpression",
                      src: "807:16:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_creation_nonpayable$__$returns$_t_contract$_MockProvider_$93244_$",
                        typeString:
                          "function () returns (contract MockProvider)",
                      },
                      typeName: {
                        id: 93256,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 93255,
                          name: "MockProvider",
                          nameLocations: ["811:12:136"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 93244,
                          src: "811:12:136",
                        },
                        referencedDeclaration: 93244,
                        src: "811:12:136",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MockProvider_$93244",
                          typeString: "contract MockProvider",
                        },
                      },
                    },
                    id: 93258,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "807:18:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_MockProvider_$93244",
                      typeString: "contract MockProvider",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "787:38:136",
                },
                {
                  expression: {
                    id: 93269,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 93260,
                      name: "provider",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 93249,
                      src: "835:8:136",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_DataProvider_$72",
                        typeString: "contract DataProvider",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 93266,
                              name: "mock",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 93254,
                              src: "871:4:136",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_contract$_MockProvider_$93244",
                                typeString: "contract MockProvider",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier:
                                  "t_contract$_MockProvider_$93244",
                                typeString: "contract MockProvider",
                              },
                            ],
                            id: 93265,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "863:7:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)",
                            },
                            typeName: {
                              id: 93264,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "863:7:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93267,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "863:13:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        ],
                        id: 93263,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "NewExpression",
                        src: "846:16:136",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_creation_nonpayable$_t_address_$returns$_t_contract$_DataProvider_$72_$",
                          typeString:
                            "function (address) returns (contract DataProvider)",
                        },
                        typeName: {
                          id: 93262,
                          nodeType: "UserDefinedTypeName",
                          pathNode: {
                            id: 93261,
                            name: "DataProvider",
                            nameLocations: ["850:12:136"],
                            nodeType: "IdentifierPath",
                            referencedDeclaration: 72,
                            src: "850:12:136",
                          },
                          referencedDeclaration: 72,
                          src: "850:12:136",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_DataProvider_$72",
                            typeString: "contract DataProvider",
                          },
                        },
                      },
                      id: 93268,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "846:31:136",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_DataProvider_$72",
                        typeString: "contract DataProvider",
                      },
                    },
                    src: "835:42:136",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_DataProvider_$72",
                      typeString: "contract DataProvider",
                    },
                  },
                  id: 93270,
                  nodeType: "ExpressionStatement",
                  src: "835:42:136",
                },
              ],
            },
            functionSelector: "0a9254e4",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setUp",
            nameLocation: "762:5:136",
            parameters: {
              id: 93250,
              nodeType: "ParameterList",
              parameters: [],
              src: "767:2:136",
            },
            returnParameters: {
              id: 93251,
              nodeType: "ParameterList",
              parameters: [],
              src: "777:0:136",
            },
            scope: 93363,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 93318,
            nodeType: "FunctionDefinition",
            src: "890:344:136",
            nodes: [],
            body: {
              id: 93317,
              nodeType: "Block",
              src: "939:295:136",
              nodes: [],
              statements: [
                {
                  assignments: [93276, 93278],
                  declarations: [
                    {
                      constant: false,
                      id: 93276,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "955:7:136",
                      nodeType: "VariableDeclaration",
                      scope: 93317,
                      src: "950:12:136",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 93275,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "950:4:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 93278,
                      mutability: "mutable",
                      name: "data",
                      nameLocation: "977:4:136",
                      nodeType: "VariableDeclaration",
                      scope: 93317,
                      src: "964:17:136",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes_memory_ptr",
                        typeString: "bytes",
                      },
                      typeName: {
                        id: 93277,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "964:5:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_storage_ptr",
                          typeString: "bytes",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 93288,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: "",
                        id: 93286,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1033:2:136",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          typeString: 'literal_string ""',
                        },
                        value: "",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          typeString: 'literal_string ""',
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            typeString: 'literal_string ""',
                          },
                        ],
                        expression: {
                          arguments: [
                            {
                              id: 93281,
                              name: "provider",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 93249,
                              src: "993:8:136",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_DataProvider_$72",
                                typeString: "contract DataProvider",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_contract$_DataProvider_$72",
                                typeString: "contract DataProvider",
                              },
                            ],
                            id: 93280,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "985:7:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)",
                            },
                            typeName: {
                              id: 93279,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "985:7:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93282,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "985:17:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        id: 93283,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1003:4:136",
                        memberName: "call",
                        nodeType: "MemberAccess",
                        src: "985:22:136",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          typeString:
                            "function (bytes memory) payable returns (bool,bytes memory)",
                        },
                      },
                      id: 93285,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      names: ["value"],
                      nodeType: "FunctionCallOptions",
                      options: [
                        {
                          hexValue: "30",
                          id: 93284,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1016:1:136",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                      ],
                      src: "985:34:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        typeString:
                          "function (bytes memory) payable returns (bool,bytes memory)",
                      },
                    },
                    id: 93287,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "985:60:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      typeString: "tuple(bool,bytes memory)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "949:96:136",
                },
                {
                  condition: {
                    id: 93289,
                    name: "success",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 93276,
                    src: "1060:7:136",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 93295,
                  nodeType: "IfStatement",
                  src: "1056:63:136",
                  trueBody: {
                    id: 93294,
                    nodeType: "Block",
                    src: "1069:50:136",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              hexValue: "457870656374656420726576657274",
                              id: 93291,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "string",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "1090:17:136",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_stringliteral_6622bee46a7912100abcbfa7e2bb1334a50bf5a2b20f186e86cf3f1016838da0",
                                typeString: 'literal_string "Expected revert"',
                              },
                              value: "Expected revert",
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier:
                                  "t_stringliteral_6622bee46a7912100abcbfa7e2bb1334a50bf5a2b20f186e86cf3f1016838da0",
                                typeString: 'literal_string "Expected revert"',
                              },
                            ],
                            id: 93290,
                            name: "revert",
                            nodeType: "Identifier",
                            overloadedDeclarations: [-19, -19],
                            referencedDeclaration: -19,
                            src: "1083:6:136",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              typeString: "function (string memory) pure",
                            },
                          },
                          id: 93292,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1083:25:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()",
                          },
                        },
                        id: 93293,
                        nodeType: "ExpressionStatement",
                        src: "1083:25:136",
                      },
                    ],
                  },
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 93300,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 93297,
                            name: "data",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 93278,
                            src: "1136:4:136",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                          id: 93298,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1141:6:136",
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "1136:11:136",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "==",
                        rightExpression: {
                          hexValue: "34",
                          id: 93299,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1151:1:136",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_4_by_1",
                            typeString: "int_const 4",
                          },
                          value: "4",
                        },
                        src: "1136:16:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 93296,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -3,
                      src: "1129:6:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 93301,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1129:24:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93302,
                  nodeType: "ExpressionStatement",
                  src: "1129:24:136",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                        id: 93314,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [
                            {
                              id: 93306,
                              name: "data",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 93278,
                              src: "1177:4:136",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes_memory_ptr",
                                typeString: "bytes memory",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes_memory_ptr",
                                typeString: "bytes memory",
                              },
                            ],
                            id: 93305,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1170:6:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_bytes4_$",
                              typeString: "type(bytes4)",
                            },
                            typeName: {
                              id: 93304,
                              name: "bytes4",
                              nodeType: "ElementaryTypeName",
                              src: "1170:6:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93307,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1170:12:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bytes4",
                            typeString: "bytes4",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "==",
                        rightExpression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  hexValue:
                                    "556e6578706563746564537563636573732829",
                                  id: 93311,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: "string",
                                  lValueRequested: false,
                                  nodeType: "Literal",
                                  src: "1203:21:136",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_stringliteral_8bb0a34b1c004f0c92347f3b9b1b60335307fe0e2b7d82e4eadfdf794bd524cd",
                                    typeString:
                                      'literal_string "UnexpectedSuccess()"',
                                  },
                                  value: "UnexpectedSuccess()",
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      "t_stringliteral_8bb0a34b1c004f0c92347f3b9b1b60335307fe0e2b7d82e4eadfdf794bd524cd",
                                    typeString:
                                      'literal_string "UnexpectedSuccess()"',
                                  },
                                ],
                                id: 93310,
                                name: "keccak256",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -8,
                                src: "1193:9:136",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  typeString:
                                    "function (bytes memory) pure returns (bytes32)",
                                },
                              },
                              id: 93312,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "functionCall",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1193:32:136",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            ],
                            id: 93309,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1186:6:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_bytes4_$",
                              typeString: "type(bytes4)",
                            },
                            typeName: {
                              id: 93308,
                              name: "bytes4",
                              nodeType: "ElementaryTypeName",
                              src: "1186:6:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93313,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1186:40:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bytes4",
                            typeString: "bytes4",
                          },
                        },
                        src: "1170:56:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 93303,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -3,
                      src: "1163:6:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 93315,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1163:64:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93316,
                  nodeType: "ExpressionStatement",
                  src: "1163:64:136",
                },
              ],
            },
            functionSelector: "1709b5b3",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "testRevertsOnUnderlyingSuccess",
            nameLocation: "899:30:136",
            parameters: {
              id: 93273,
              nodeType: "ParameterList",
              parameters: [],
              src: "929:2:136",
            },
            returnParameters: {
              id: 93274,
              nodeType: "ParameterList",
              parameters: [],
              src: "939:0:136",
            },
            scope: 93363,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 93362,
            nodeType: "FunctionDefinition",
            src: "1240:286:136",
            nodes: [],
            body: {
              id: 93361,
              nodeType: "Block",
              src: "1275:251:136",
              nodes: [],
              statements: [
                {
                  assignments: [93322, 93324],
                  declarations: [
                    {
                      constant: false,
                      id: 93322,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "1291:7:136",
                      nodeType: "VariableDeclaration",
                      scope: 93361,
                      src: "1286:12:136",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 93321,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "1286:4:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 93324,
                      mutability: "mutable",
                      name: "data",
                      nameLocation: "1313:4:136",
                      nodeType: "VariableDeclaration",
                      scope: 93361,
                      src: "1300:17:136",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes_memory_ptr",
                        typeString: "bytes",
                      },
                      typeName: {
                        id: 93323,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "1300:5:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_storage_ptr",
                          typeString: "bytes",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 93337,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            hexValue: "6765742829",
                            id: 93334,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "1393:7:136",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_6d4ce63caa65600744ac797760560da39ebd16e8240936b51f53368ef9e0e01f",
                              typeString: 'literal_string "get()"',
                            },
                            value: "get()",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_6d4ce63caa65600744ac797760560da39ebd16e8240936b51f53368ef9e0e01f",
                              typeString: 'literal_string "get()"',
                            },
                          ],
                          expression: {
                            id: 93332,
                            name: "abi",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -1,
                            src: "1369:3:136",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_abi",
                              typeString: "abi",
                            },
                          },
                          id: 93333,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberLocation: "1373:19:136",
                          memberName: "encodeWithSignature",
                          nodeType: "MemberAccess",
                          src: "1369:23:136",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function (string memory) pure returns (bytes memory)",
                          },
                        },
                        id: 93335,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1369:32:136",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bytes_memory_ptr",
                            typeString: "bytes memory",
                          },
                        ],
                        expression: {
                          arguments: [
                            {
                              id: 93327,
                              name: "provider",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 93249,
                              src: "1329:8:136",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_DataProvider_$72",
                                typeString: "contract DataProvider",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_contract$_DataProvider_$72",
                                typeString: "contract DataProvider",
                              },
                            ],
                            id: 93326,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1321:7:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)",
                            },
                            typeName: {
                              id: 93325,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "1321:7:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93328,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1321:17:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        id: 93329,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1339:4:136",
                        memberName: "call",
                        nodeType: "MemberAccess",
                        src: "1321:22:136",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          typeString:
                            "function (bytes memory) payable returns (bool,bytes memory)",
                        },
                      },
                      id: 93331,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      names: ["value"],
                      nodeType: "FunctionCallOptions",
                      options: [
                        {
                          hexValue: "30",
                          id: 93330,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1352:1:136",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                      ],
                      src: "1321:34:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        typeString:
                          "function (bytes memory) payable returns (bool,bytes memory)",
                      },
                    },
                    id: 93336,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1321:90:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      typeString: "tuple(bool,bytes memory)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1285:126:136",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 93339,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 93322,
                        src: "1429:7:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 93338,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -3,
                      src: "1422:6:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 93340,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1422:15:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93341,
                  nodeType: "ExpressionStatement",
                  src: "1422:15:136",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 93346,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 93343,
                            name: "data",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 93324,
                            src: "1455:4:136",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                          id: 93344,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1460:6:136",
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "1455:11:136",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "==",
                        rightExpression: {
                          hexValue: "3332",
                          id: 93345,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1470:2:136",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_32_by_1",
                            typeString: "int_const 32",
                          },
                          value: "32",
                        },
                        src: "1455:17:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 93342,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -3,
                      src: "1448:6:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 93347,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1448:25:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93348,
                  nodeType: "ExpressionStatement",
                  src: "1448:25:136",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 93358,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  id: 93354,
                                  name: "data",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 93324,
                                  src: "1506:4:136",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes memory",
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes memory",
                                  },
                                ],
                                id: 93353,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: "ElementaryTypeNameExpression",
                                src: "1498:7:136",
                                typeDescriptions: {
                                  typeIdentifier: "t_type$_t_bytes32_$",
                                  typeString: "type(bytes32)",
                                },
                                typeName: {
                                  id: 93352,
                                  name: "bytes32",
                                  nodeType: "ElementaryTypeName",
                                  src: "1498:7:136",
                                  typeDescriptions: {},
                                },
                              },
                              id: 93355,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "typeConversion",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1498:13:136",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            ],
                            id: 93351,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1490:7:136",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint256_$",
                              typeString: "type(uint256)",
                            },
                            typeName: {
                              id: 93350,
                              name: "uint256",
                              nodeType: "ElementaryTypeName",
                              src: "1490:7:136",
                              typeDescriptions: {},
                            },
                          },
                          id: 93356,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1490:22:136",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "==",
                        rightExpression: {
                          hexValue: "3432",
                          id: 93357,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1516:2:136",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_42_by_1",
                            typeString: "int_const 42",
                          },
                          value: "42",
                        },
                        src: "1490:28:136",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 93349,
                      name: "assert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -3,
                      src: "1483:6:136",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_assert_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 93359,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1483:36:136",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 93360,
                  nodeType: "ExpressionStatement",
                  src: "1483:36:136",
                },
              ],
            },
            functionSelector: "db561b4b",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "testCanFetchData",
            nameLocation: "1249:16:136",
            parameters: {
              id: 93319,
              nodeType: "ParameterList",
              parameters: [],
              src: "1265:2:136",
            },
            returnParameters: {
              id: 93320,
              nodeType: "ParameterList",
              parameters: [],
              src: "1275:0:136",
            },
            scope: 93363,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 93245,
              name: "Test",
              nameLocations: ["714:4:136"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 26704,
              src: "714:4:136",
            },
            id: 93246,
            nodeType: "InheritanceSpecifier",
            src: "714:4:136",
          },
        ],
        canonicalName: "DataProviderTest",
        contractDependencies: [72, 93244],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          93363, 26704, 26653, 22391, 22101, 21337, 19283, 18563, 17031, 17097,
          17094,
        ],
        name: "DataProviderTest",
        nameLocation: "694:16:136",
        scope: 93364,
        usedErrors: [],
      },
    ],
    license: "Apache-2.0",
  },
  id: 136,
} as const;
