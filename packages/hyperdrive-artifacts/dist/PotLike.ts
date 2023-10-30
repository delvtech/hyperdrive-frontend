export const PotLike = {
  abi: [
    {
      inputs: [],
      name: "drip",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "dsr",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rho",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
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
    "drip()": "9f678cca",
    "dsr()": "487bf082",
    "rho()": "20aba08b",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"drip","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dsr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rho","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"test/integrations/sDai.t.sol":"PotLike"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/Hyperdrive.sol":{"keccak256":"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5","license":"Apache-2.0","urls":["bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e","dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveDataProvider.sol":{"keccak256":"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d","license":"Apache-2.0","urls":["bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5","dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"]},"contracts/src/HyperdriveLP.sol":{"keccak256":"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a","license":"Apache-2.0","urls":["bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e","dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"]},"contracts/src/HyperdriveLong.sol":{"keccak256":"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188","license":"Apache-2.0","urls":["bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f","dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"]},"contracts/src/HyperdriveShort.sol":{"keccak256":"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa","license":"Apache-2.0","urls":["bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8","dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/factory/ERC4626HyperdriveDeployer.sol":{"keccak256":"0x8f79742098b3809d050204f18f887f9a1c38eaa8a2fc8d1949f4ab741041619c","license":"Apache-2.0","urls":["bzz-raw://f6916922776e2cf110646eea4a728a802437b46596aeaaa9888e6d736fe1e4f1","dweb:/ipfs/Qma9U1kEYdQz6WDBYdiMH2gJ7AnX8xfBUB8XfLqJ2ztX1p"]},"contracts/src/factory/ERC4626HyperdriveFactory.sol":{"keccak256":"0xa27700f8c837640247830835a7db53b96c7aa493861b46effae4d4e99430ee0a","license":"Apache-2.0","urls":["bzz-raw://8a8b27fb4deadab0be3a4eedcea74c3fad676f51a8ebb8a0ea4f2f61aaadb871","dweb:/ipfs/QmZiWw6gmiFnrNrnqrxkJM6y4gLNLKc2CYQbTA2ZA2TnLP"]},"contracts/src/factory/HyperdriveFactory.sol":{"keccak256":"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde","license":"Apache-2.0","urls":["bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1","dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"]},"contracts/src/instances/ERC4626DataProvider.sol":{"keccak256":"0xff9052b6730f9f730426a45026a2bd0f0201b457c899f8faed0b4c69c6ee1985","license":"Apache-2.0","urls":["bzz-raw://88f763a766bf86163d7bf417737a3980a1ee4dbd7959bbbf4c7d60e7b59c6c37","dweb:/ipfs/QmdqVv7iUpopKYcXLo97JBC5fjXnYUGSb1wcBdYYQCYmW9"]},"contracts/src/instances/ERC4626Hyperdrive.sol":{"keccak256":"0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4","license":"Apache-2.0","urls":["bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4","dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IERC4626.sol":{"keccak256":"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf","license":"GPL-2.0-or-later","urls":["bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc","dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"]},"contracts/src/interfaces/IForwarderFactory.sol":{"keccak256":"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af","license":"Apache-2.0","urls":["bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3","dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveDeployer.sol":{"keccak256":"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0","license":"Apache-2.0","urls":["bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587","dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/ERC20Forwarder.sol":{"keccak256":"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158","license":"Apache-2.0","urls":["bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034","dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p"]},"contracts/src/token/ForwarderFactory.sol":{"keccak256":"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b","license":"Apache-2.0","urls":["bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e","dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenDataProvider.sol":{"keccak256":"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f","license":"Apache-2.0","urls":["bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef","dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"contracts/test/ERC20Mintable.sol":{"keccak256":"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389","license":"Apache-2.0","urls":["bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65","dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"]},"lib/forge-std/lib/ds-test/src/test.sol":{"keccak256":"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b","license":"GPL-3.0-or-later","urls":["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240","dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"]},"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/StdAssertions.sol":{"keccak256":"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60","license":"MIT","urls":["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b","dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5","license":"MIT","urls":["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a","dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"]},"lib/forge-std/src/StdError.sol":{"keccak256":"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77","license":"MIT","urls":["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6","dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"]},"lib/forge-std/src/StdInvariant.sol":{"keccak256":"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1","license":"MIT","urls":["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c","dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b","license":"MIT","urls":["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c","dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d","license":"MIT","urls":["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26","dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1","license":"MIT","urls":["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140","dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"]},"lib/forge-std/src/Test.sol":{"keccak256":"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0","license":"MIT","urls":["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765","dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea","license":"MIT","urls":["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973","dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381","license":"MIT","urls":["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae","dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"]},"lib/openzeppelin-contracts/contracts/access/AccessControl.sol":{"keccak256":"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c","license":"MIT","urls":["bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88","dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"]},"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":{"keccak256":"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247","license":"MIT","urls":["bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b","dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"]},"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol":{"keccak256":"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57","license":"MIT","urls":["bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a","dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"]},"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":{"keccak256":"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676","license":"MIT","urls":["bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276","dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"]},"lib/openzeppelin-contracts/contracts/security/Pausable.sol":{"keccak256":"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773","license":"MIT","urls":["bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004","dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b","license":"MIT","urls":["bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df","dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":{"keccak256":"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b","license":"MIT","urls":["bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f","dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":{"keccak256":"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a","license":"MIT","urls":["bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790","dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":{"keccak256":"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec","license":"MIT","urls":["bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3","dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":{"keccak256":"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa","license":"MIT","urls":["bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b","dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f","license":"MIT","urls":["bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf","dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT","urls":["bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d","dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT","urls":["bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f","dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858","license":"MIT","urls":["bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4","dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol":{"keccak256":"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598","license":"MIT","urls":["bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72","dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"]},"lib/solmate/src/auth/Auth.sol":{"keccak256":"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c","license":"AGPL-3.0-only","urls":["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac","dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"]},"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol":{"keccak256":"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3","license":"AGPL-3.0-only","urls":["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef","dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"]},"lib/solmate/src/tokens/ERC20.sol":{"keccak256":"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10","license":"AGPL-3.0-only","urls":["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35","dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]},"test/integrations/ERC4626Validation.t.sol":{"keccak256":"0xe3fad32d605a08763fc43197f244b0d989ea98890df821913089235fe0b8ac88","license":"Apache-2.0","urls":["bzz-raw://daa1eac1bdff40f08457e95d8a3557f9b6da16c0488f700cd7fbf0b4d60daba7","dweb:/ipfs/QmfWaD2WyFMKer3JnHRnX8WWkwUrcwXXbAweAG9z9RJ6cD"]},"test/integrations/sDai.t.sol":{"keccak256":"0xc8d36e82ae02a4d760211ade116c22d428e2bc443d8edd9525fdaf7fb8de695e","license":"Apache-2.0","urls":["bzz-raw://125f880e1df48f7ddf181ec89185880d188671195774aac29a19450f0968e4d9","dweb:/ipfs/QmbgAzjNJDpi4NNTdUq4VmN4VQ1Te2FNR7b4KqBoGVWLtt"]},"test/mocks/Mock4626Hyperdrive.sol":{"keccak256":"0x7b00438f16f29b0f3a1b363319c90b226ef6e1f6295dc7769e98f08b9c5d2b62","license":"Apache-2.0","urls":["bzz-raw://125fe492f40b97ccf1ad05885016188f234f506372efe0866c3fa3c9792d3134","dweb:/ipfs/QmQ7UfnWCEXmpRKtXpwdS7CQBDZcTgznuerHUPZW8LKbv5"]},"test/mocks/MockHyperdrive.sol":{"keccak256":"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465","license":"Apache-2.0","urls":["bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378","dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"]},"test/utils/BaseTest.sol":{"keccak256":"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6","license":"Apache-2.0","urls":["bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd","dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD"]},"test/utils/Constants.sol":{"keccak256":"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b","license":"Apache-2.0","urls":["bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0","dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"]},"test/utils/HyperdriveTest.sol":{"keccak256":"0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16","license":"Apache-2.0","urls":["bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b","dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd"]},"test/utils/HyperdriveUtils.sol":{"keccak256":"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c","license":"Apache-2.0","urls":["bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82","dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"]},"test/utils/Lib.sol":{"keccak256":"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2","license":"Apache-2.0","urls":["bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171","dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "drip",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "dsr",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "rho",
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
        "test/integrations/sDai.t.sol": "PotLike",
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
      "contracts/src/Hyperdrive.sol": {
        keccak256:
          "0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5",
        urls: [
          "bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e",
          "dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveBase.sol": {
        keccak256:
          "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        urls: [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveDataProvider.sol": {
        keccak256:
          "0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d",
        urls: [
          "bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5",
          "dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveLP.sol": {
        keccak256:
          "0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a",
        urls: [
          "bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e",
          "dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveLong.sol": {
        keccak256:
          "0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188",
        urls: [
          "bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f",
          "dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveShort.sol": {
        keccak256:
          "0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa",
        urls: [
          "bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8",
          "dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveStorage.sol": {
        keccak256:
          "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        urls: [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveTWAP.sol": {
        keccak256:
          "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        urls: [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/factory/ERC4626HyperdriveDeployer.sol": {
        keccak256:
          "0x8f79742098b3809d050204f18f887f9a1c38eaa8a2fc8d1949f4ab741041619c",
        urls: [
          "bzz-raw://f6916922776e2cf110646eea4a728a802437b46596aeaaa9888e6d736fe1e4f1",
          "dweb:/ipfs/Qma9U1kEYdQz6WDBYdiMH2gJ7AnX8xfBUB8XfLqJ2ztX1p",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/factory/ERC4626HyperdriveFactory.sol": {
        keccak256:
          "0xa27700f8c837640247830835a7db53b96c7aa493861b46effae4d4e99430ee0a",
        urls: [
          "bzz-raw://8a8b27fb4deadab0be3a4eedcea74c3fad676f51a8ebb8a0ea4f2f61aaadb871",
          "dweb:/ipfs/QmZiWw6gmiFnrNrnqrxkJM6y4gLNLKc2CYQbTA2ZA2TnLP",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/factory/HyperdriveFactory.sol": {
        keccak256:
          "0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde",
        urls: [
          "bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1",
          "dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/instances/ERC4626DataProvider.sol": {
        keccak256:
          "0xff9052b6730f9f730426a45026a2bd0f0201b457c899f8faed0b4c69c6ee1985",
        urls: [
          "bzz-raw://88f763a766bf86163d7bf417737a3980a1ee4dbd7959bbbf4c7d60e7b59c6c37",
          "dweb:/ipfs/QmdqVv7iUpopKYcXLo97JBC5fjXnYUGSb1wcBdYYQCYmW9",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        keccak256:
          "0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4",
        urls: [
          "bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4",
          "dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk",
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
      "contracts/src/interfaces/IERC4626.sol": {
        keccak256:
          "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        urls: [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia",
        ],
        license: "GPL-2.0-or-later",
      },
      "contracts/src/interfaces/IForwarderFactory.sol": {
        keccak256:
          "0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af",
        urls: [
          "bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3",
          "dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF",
        ],
        license: "Apache-2.0",
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
      "contracts/src/libraries/AssetId.sol": {
        keccak256:
          "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        urls: [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        keccak256:
          "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        urls: [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        keccak256:
          "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        urls: [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/SafeCast.sol": {
        keccak256:
          "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        urls: [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        keccak256:
          "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        urls: [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/ERC20Forwarder.sol": {
        keccak256:
          "0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158",
        urls: [
          "bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034",
          "dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/ForwarderFactory.sol": {
        keccak256:
          "0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b",
        urls: [
          "bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e",
          "dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiToken.sol": {
        keccak256:
          "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        urls: [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        keccak256:
          "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        urls: [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        keccak256:
          "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        urls: [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj",
        ],
        license: "Apache-2.0",
      },
      "contracts/test/ERC20Mintable.sol": {
        keccak256:
          "0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389",
        urls: [
          "bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65",
          "dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui",
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
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        keccak256:
          "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        urls: [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":
        {
          keccak256:
            "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
          urls: [
            "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
            "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        keccak256:
          "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        urls: [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":
        {
          keccak256:
            "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
          urls: [
            "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
            "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/security/Pausable.sol": {
        keccak256:
          "0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773",
        urls: [
          "bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004",
          "dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        keccak256:
          "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        urls: [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg",
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":
        {
          keccak256:
            "0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b",
          urls: [
            "bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f",
            "dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":
        {
          keccak256:
            "0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a",
          urls: [
            "bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790",
            "dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":
        {
          keccak256:
            "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
          urls: [
            "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
            "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8",
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":
        {
          keccak256:
            "0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec",
          urls: [
            "bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3",
            "dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":
        {
          keccak256:
            "0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa",
          urls: [
            "bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b",
            "dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF",
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
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        urls: [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        keccak256:
          "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        urls: [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        keccak256:
          "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        urls: [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        keccak256:
          "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        urls: [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        keccak256:
          "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        urls: [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        keccak256:
          "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        urls: [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        keccak256:
          "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        urls: [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ",
        ],
        license: "MIT",
      },
      "lib/solmate/src/auth/Auth.sol": {
        keccak256:
          "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        urls: [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        keccak256:
          "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        urls: [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        keccak256:
          "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        urls: [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        keccak256:
          "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        urls: [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j",
        ],
        license: "AGPL-3.0-only",
      },
      "test/integrations/ERC4626Validation.t.sol": {
        keccak256:
          "0xe3fad32d605a08763fc43197f244b0d989ea98890df821913089235fe0b8ac88",
        urls: [
          "bzz-raw://daa1eac1bdff40f08457e95d8a3557f9b6da16c0488f700cd7fbf0b4d60daba7",
          "dweb:/ipfs/QmfWaD2WyFMKer3JnHRnX8WWkwUrcwXXbAweAG9z9RJ6cD",
        ],
        license: "Apache-2.0",
      },
      "test/integrations/sDai.t.sol": {
        keccak256:
          "0xc8d36e82ae02a4d760211ade116c22d428e2bc443d8edd9525fdaf7fb8de695e",
        urls: [
          "bzz-raw://125f880e1df48f7ddf181ec89185880d188671195774aac29a19450f0968e4d9",
          "dweb:/ipfs/QmbgAzjNJDpi4NNTdUq4VmN4VQ1Te2FNR7b4KqBoGVWLtt",
        ],
        license: "Apache-2.0",
      },
      "test/mocks/Mock4626Hyperdrive.sol": {
        keccak256:
          "0x7b00438f16f29b0f3a1b363319c90b226ef6e1f6295dc7769e98f08b9c5d2b62",
        urls: [
          "bzz-raw://125fe492f40b97ccf1ad05885016188f234f506372efe0866c3fa3c9792d3134",
          "dweb:/ipfs/QmQ7UfnWCEXmpRKtXpwdS7CQBDZcTgznuerHUPZW8LKbv5",
        ],
        license: "Apache-2.0",
      },
      "test/mocks/MockHyperdrive.sol": {
        keccak256:
          "0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465",
        urls: [
          "bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378",
          "dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn",
        ],
        license: "Apache-2.0",
      },
      "test/utils/BaseTest.sol": {
        keccak256:
          "0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6",
        urls: [
          "bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd",
          "dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD",
        ],
        license: "Apache-2.0",
      },
      "test/utils/Constants.sol": {
        keccak256:
          "0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b",
        urls: [
          "bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0",
          "dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1",
        ],
        license: "Apache-2.0",
      },
      "test/utils/HyperdriveTest.sol": {
        keccak256:
          "0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16",
        urls: [
          "bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b",
          "dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd",
        ],
        license: "Apache-2.0",
      },
      "test/utils/HyperdriveUtils.sol": {
        keccak256:
          "0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c",
        urls: [
          "bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82",
          "dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN",
        ],
        license: "Apache-2.0",
      },
      "test/utils/Lib.sol": {
        keccak256:
          "0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2",
        urls: [
          "bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171",
          "dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu",
        ],
        license: "Apache-2.0",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "test/integrations/sDai.t.sol",
    id: 90569,
    exportedSymbols: {
      AssetId: [7731],
      ERC4626HyperdriveDeployer: [5107],
      ERC4626HyperdriveFactory: [5269],
      ERC4626ValidationTest: [74498],
      FixedPointMath: [8486],
      ForwarderFactory: [12288],
      HyperdriveTest: [120941],
      HyperdriveUtils: [122442],
      IERC20: [6461],
      IERC4626: [6686],
      IHyperdrive: [7103],
      IHyperdriveDeployer: [7127],
      Lib: [123044],
      MockERC4626Hyperdrive: [91643],
      PotLike: [90498],
      sDaiTest: [90568],
    },
    nodeType: "SourceUnit",
    src: "39:2265:129",
    nodes: [
      {
        id: 90454,
        nodeType: "PragmaDirective",
        src: "39:23:129",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 90456,
        nodeType: "ImportDirective",
        src: "64:96:129",
        nodes: [],
        absolutePath: "contracts/src/factory/ERC4626HyperdriveDeployer.sol",
        file: "contracts/src/factory/ERC4626HyperdriveDeployer.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 5108,
        symbolAliases: [
          {
            foreign: {
              id: 90455,
              name: "ERC4626HyperdriveDeployer",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 5107,
              src: "73:25:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90458,
        nodeType: "ImportDirective",
        src: "161:94:129",
        nodes: [],
        absolutePath: "contracts/src/factory/ERC4626HyperdriveFactory.sol",
        file: "contracts/src/factory/ERC4626HyperdriveFactory.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 5270,
        symbolAliases: [
          {
            foreign: {
              id: 90457,
              name: "ERC4626HyperdriveFactory",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 5269,
              src: "170:24:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90460,
        nodeType: "ImportDirective",
        src: "256:61:129",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IERC20.sol",
        file: "contracts/src/interfaces/IERC20.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 6462,
        symbolAliases: [
          {
            foreign: {
              id: 90459,
              name: "IERC20",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6461,
              src: "265:6:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90462,
        nodeType: "ImportDirective",
        src: "318:65:129",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IERC4626.sol",
        file: "contracts/src/interfaces/IERC4626.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 6687,
        symbolAliases: [
          {
            foreign: {
              id: 90461,
              name: "IERC4626",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6686,
              src: "327:8:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90464,
        nodeType: "ImportDirective",
        src: "384:71:129",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "contracts/src/interfaces/IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 90463,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "393:11:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90466,
        nodeType: "ImportDirective",
        src: "456:87:129",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdriveDeployer.sol",
        file: "contracts/src/interfaces/IHyperdriveDeployer.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 7128,
        symbolAliases: [
          {
            foreign: {
              id: 90465,
              name: "IHyperdriveDeployer",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7127,
              src: "465:19:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90468,
        nodeType: "ImportDirective",
        src: "544:62:129",
        nodes: [],
        absolutePath: "contracts/src/libraries/AssetId.sol",
        file: "contracts/src/libraries/AssetId.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 7732,
        symbolAliases: [
          {
            foreign: {
              id: 90467,
              name: "AssetId",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7731,
              src: "553:7:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90470,
        nodeType: "ImportDirective",
        src: "607:76:129",
        nodes: [],
        absolutePath: "contracts/src/libraries/FixedPointMath.sol",
        file: "contracts/src/libraries/FixedPointMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 8487,
        symbolAliases: [
          {
            foreign: {
              id: 90469,
              name: "FixedPointMath",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 8486,
              src: "616:14:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90472,
        nodeType: "ImportDirective",
        src: "684:76:129",
        nodes: [],
        absolutePath: "contracts/src/token/ForwarderFactory.sol",
        file: "contracts/src/token/ForwarderFactory.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 12289,
        symbolAliases: [
          {
            foreign: {
              id: 90471,
              name: "ForwarderFactory",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 12288,
              src: "693:16:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90474,
        nodeType: "ImportDirective",
        src: "761:72:129",
        nodes: [],
        absolutePath: "test/mocks/Mock4626Hyperdrive.sol",
        file: "../mocks/Mock4626Hyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 91644,
        symbolAliases: [
          {
            foreign: {
              id: 90473,
              name: "MockERC4626Hyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 91643,
              src: "770:21:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90476,
        nodeType: "ImportDirective",
        src: "834:61:129",
        nodes: [],
        absolutePath: "test/utils/HyperdriveTest.sol",
        file: "../utils/HyperdriveTest.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 120942,
        symbolAliases: [
          {
            foreign: {
              id: 90475,
              name: "HyperdriveTest",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 120941,
              src: "843:14:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90478,
        nodeType: "ImportDirective",
        src: "896:63:129",
        nodes: [],
        absolutePath: "test/utils/HyperdriveUtils.sol",
        file: "../utils/HyperdriveUtils.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 122443,
        symbolAliases: [
          {
            foreign: {
              id: 90477,
              name: "HyperdriveUtils",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 122442,
              src: "905:15:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90480,
        nodeType: "ImportDirective",
        src: "960:39:129",
        nodes: [],
        absolutePath: "test/utils/Lib.sol",
        file: "../utils/Lib.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 123045,
        symbolAliases: [
          {
            foreign: {
              id: 90479,
              name: "Lib",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 123044,
              src: "969:3:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90482,
        nodeType: "ImportDirective",
        src: "1000:66:129",
        nodes: [],
        absolutePath: "test/integrations/ERC4626Validation.t.sol",
        file: "./ERC4626Validation.t.sol",
        nameLocation: "-1:-1:-1",
        scope: 90569,
        sourceUnit: 74499,
        symbolAliases: [
          {
            foreign: {
              id: 90481,
              name: "ERC4626ValidationTest",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 74498,
              src: "1009:21:129",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 90498,
        nodeType: "ContractDefinition",
        src: "1117:175:129",
        nodes: [
          {
            id: 90487,
            nodeType: "FunctionDefinition",
            src: "1141:47:129",
            nodes: [],
            functionSelector: "20aba08b",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "rho",
            nameLocation: "1150:3:129",
            parameters: {
              id: 90483,
              nodeType: "ParameterList",
              parameters: [],
              src: "1153:2:129",
            },
            returnParameters: {
              id: 90486,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 90485,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 90487,
                  src: "1179:7:129",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 90484,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1179:7:129",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1178:9:129",
            },
            scope: 90498,
            stateMutability: "view",
            virtual: false,
            visibility: "external",
          },
          {
            id: 90492,
            nodeType: "FunctionDefinition",
            src: "1194:47:129",
            nodes: [],
            functionSelector: "487bf082",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "dsr",
            nameLocation: "1203:3:129",
            parameters: {
              id: 90488,
              nodeType: "ParameterList",
              parameters: [],
              src: "1206:2:129",
            },
            returnParameters: {
              id: 90491,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 90490,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 90492,
                  src: "1232:7:129",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 90489,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1232:7:129",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1231:9:129",
            },
            scope: 90498,
            stateMutability: "view",
            virtual: false,
            visibility: "external",
          },
          {
            id: 90497,
            nodeType: "FunctionDefinition",
            src: "1247:43:129",
            nodes: [],
            functionSelector: "9f678cca",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "drip",
            nameLocation: "1256:4:129",
            parameters: {
              id: 90493,
              nodeType: "ParameterList",
              parameters: [],
              src: "1260:2:129",
            },
            returnParameters: {
              id: 90496,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 90495,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 90497,
                  src: "1281:7:129",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 90494,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1281:7:129",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1280:9:129",
            },
            scope: 90498,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: "PotLike",
        contractDependencies: [],
        contractKind: "interface",
        fullyImplemented: false,
        linearizedBaseContracts: [90498],
        name: "PotLike",
        nameLocation: "1127:7:129",
        scope: 90569,
        usedErrors: [],
      },
      {
        id: 90568,
        nodeType: "ContractDefinition",
        src: "1294:1009:129",
        nodes: [
          {
            id: 90502,
            nodeType: "UsingForDirective",
            src: "1343:27:129",
            nodes: [],
            global: false,
            libraryName: {
              id: 90501,
              name: "FixedPointMath",
              nameLocations: ["1349:14:129"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 8486,
              src: "1349:14:129",
            },
          },
          {
            id: 90545,
            nodeType: "FunctionDefinition",
            src: "1376:444:129",
            nodes: [],
            body: {
              id: 90544,
              nodeType: "Block",
              src: "1436:384:129",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 90509,
                        name: "super",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: "1446:5:129",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_super$_sDaiTest_$90568_$",
                          typeString: "type(contract super sDaiTest)",
                        },
                      },
                      id: 90511,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1452:5:129",
                      memberName: "setUp",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 119048,
                      src: "1446:11:129",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 90512,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1446:13:129",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 90513,
                  nodeType: "ExpressionStatement",
                  src: "1446:13:129",
                },
                {
                  expression: {
                    id: 90518,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 90514,
                      name: "underlyingToken",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 72783,
                      src: "1470:15:129",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_IERC20_$6461",
                        typeString: "contract IERC20",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue:
                            "307836423137353437344538393039344334344461393862393534456564654143343935323731643046",
                          id: 90516,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1495:42:129",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          value: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        ],
                        id: 90515,
                        name: "IERC20",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 6461,
                        src: "1488:6:129",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_contract$_IERC20_$6461_$",
                          typeString: "type(contract IERC20)",
                        },
                      },
                      id: 90517,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1488:50:129",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_IERC20_$6461",
                        typeString: "contract IERC20",
                      },
                    },
                    src: "1470:68:129",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_IERC20_$6461",
                      typeString: "contract IERC20",
                    },
                  },
                  id: 90519,
                  nodeType: "ExpressionStatement",
                  src: "1470:68:129",
                },
                {
                  expression: {
                    id: 90524,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 90520,
                      name: "token",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 72786,
                      src: "1548:5:129",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_IERC4626_$6686",
                        typeString: "contract IERC4626",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue:
                            "307838334632304634343937354430336231623039653634383039423735376334376639343242456541",
                          id: 90522,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1565:42:129",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          value: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        ],
                        id: 90521,
                        name: "IERC4626",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 6686,
                        src: "1556:8:129",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_IERC4626_$6686_$",
                          typeString: "type(contract IERC4626)",
                        },
                      },
                      id: 90523,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1556:52:129",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_IERC4626_$6686",
                        typeString: "contract IERC4626",
                      },
                    },
                    src: "1548:60:129",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_IERC4626_$6686",
                      typeString: "contract IERC4626",
                    },
                  },
                  id: 90525,
                  nodeType: "ExpressionStatement",
                  src: "1548:60:129",
                },
                {
                  assignments: [90528],
                  declarations: [
                    {
                      constant: false,
                      id: 90528,
                      mutability: "mutable",
                      name: "dai",
                      nameLocation: "1625:3:129",
                      nodeType: "VariableDeclaration",
                      scope: 90544,
                      src: "1618:10:129",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_IERC20_$6461",
                        typeString: "contract IERC20",
                      },
                      typeName: {
                        id: 90527,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 90526,
                          name: "IERC20",
                          nameLocations: ["1618:6:129"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6461,
                          src: "1618:6:129",
                        },
                        referencedDeclaration: 6461,
                        src: "1618:6:129",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IERC20_$6461",
                          typeString: "contract IERC20",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 90530,
                  initialValue: {
                    id: 90529,
                    name: "underlyingToken",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 72783,
                    src: "1631:15:129",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_IERC20_$6461",
                      typeString: "contract IERC20",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1618:28:129",
                },
                {
                  assignments: [90532],
                  declarations: [
                    {
                      constant: false,
                      id: 90532,
                      mutability: "mutable",
                      name: "daiWhale",
                      nameLocation: "1696:8:129",
                      nodeType: "VariableDeclaration",
                      scope: 90544,
                      src: "1688:16:129",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                      typeName: {
                        id: 90531,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "1688:7:129",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 90534,
                  initialValue: {
                    hexValue:
                      "307836304661416531373633333664416236326532383446653139423838354230393564323966423746",
                    id: 90533,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1707:42:129",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    value: "0x60FaAe176336dAb62e284Fe19B885B095d29fB7F",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1688:61:129",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 90536,
                        name: "daiWhale",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 90532,
                        src: "1773:8:129",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 90537,
                        name: "dai",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 90528,
                        src: "1783:3:129",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IERC20_$6461",
                          typeString: "contract IERC20",
                        },
                      },
                      {
                        id: 90538,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "1788:5:129",
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
                        {
                          typeIdentifier: "t_contract$_IERC20_$6461",
                          typeString: "contract IERC20",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      id: 90535,
                      name: "whaleTransfer",
                      nodeType: "Identifier",
                      overloadedDeclarations: [117027, 117083],
                      referencedDeclaration: 117027,
                      src: "1759:13:129",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_contract$_IERC20_$6461_$_t_address_$returns$_t_uint256_$",
                        typeString:
                          "function (address,contract IERC20,address) returns (uint256)",
                      },
                    },
                    id: 90539,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1759:35:129",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 90540,
                  nodeType: "ExpressionStatement",
                  src: "1759:35:129",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 90541,
                      name: "_setUp",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 73000,
                      src: "1805:6:129",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 90542,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1805:8:129",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 90543,
                  nodeType: "ExpressionStatement",
                  src: "1805:8:129",
                },
              ],
            },
            baseFunctions: [119048],
            functionSelector: "0a9254e4",
            implemented: true,
            kind: "function",
            modifiers: [
              {
                arguments: [
                  {
                    hexValue: "31375f3331385f393732",
                    id: 90506,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1424:10:129",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_17318972_by_1",
                      typeString: "int_const 17318972",
                    },
                    value: "17_318_972",
                  },
                ],
                id: 90507,
                kind: "modifierInvocation",
                modifierName: {
                  id: 90505,
                  name: "__mainnet_fork",
                  nameLocations: ["1409:14:129"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 116935,
                  src: "1409:14:129",
                },
                nodeType: "ModifierInvocation",
                src: "1409:26:129",
              },
            ],
            name: "setUp",
            nameLocation: "1385:5:129",
            overrides: {
              id: 90504,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "1400:8:129",
            },
            parameters: {
              id: 90503,
              nodeType: "ParameterList",
              parameters: [],
              src: "1390:2:129",
            },
            returnParameters: {
              id: 90508,
              nodeType: "ParameterList",
              parameters: [],
              src: "1436:0:129",
            },
            scope: 90568,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 90567,
            nodeType: "FunctionDefinition",
            src: "1826:475:129",
            nodes: [],
            body: {
              id: 90566,
              nodeType: "Block",
              src: "1891:410:129",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 90557,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 90554,
                            name: "block",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -4,
                            src: "1909:5:129",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_block",
                              typeString: "block",
                            },
                          },
                          id: 90555,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1915:9:129",
                          memberName: "timestamp",
                          nodeType: "MemberAccess",
                          src: "1909:15:129",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "+",
                        rightExpression: {
                          id: 90556,
                          name: "timeDelta",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 90547,
                          src: "1927:9:129",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "1909:27:129",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        id: 90551,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1901:2:129",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 90553,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1904:4:129",
                      memberName: "warp",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27776,
                      src: "1901:7:129",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 90558,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1901:36:129",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 90559,
                  nodeType: "ExpressionStatement",
                  src: "1901:36:129",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        arguments: [
                          {
                            hexValue:
                              "307831393745393066394641443831393730624137393736663333436244373730383845354437636637",
                            id: 90561,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2244:42:129",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            value: "0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          id: 90560,
                          name: "PotLike",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 90498,
                          src: "2236:7:129",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_contract$_PotLike_$90498_$",
                            typeString: "type(contract PotLike)",
                          },
                        },
                        id: 90562,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2236:51:129",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_PotLike_$90498",
                          typeString: "contract PotLike",
                        },
                      },
                      id: 90563,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2288:4:129",
                      memberName: "drip",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 90497,
                      src: "2236:56:129",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$__$returns$_t_uint256_$",
                        typeString: "function () external returns (uint256)",
                      },
                    },
                    id: 90564,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2236:58:129",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 90565,
                  nodeType: "ExpressionStatement",
                  src: "2236:58:129",
                },
              ],
            },
            baseFunctions: [73005],
            functionSelector: "a50b9ba2",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "advanceTimeWithYield",
            nameLocation: "1835:20:129",
            overrides: {
              id: 90549,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "1882:8:129",
            },
            parameters: {
              id: 90548,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 90547,
                  mutability: "mutable",
                  name: "timeDelta",
                  nameLocation: "1864:9:129",
                  nodeType: "VariableDeclaration",
                  scope: 90567,
                  src: "1856:17:129",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 90546,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1856:7:129",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1855:19:129",
            },
            returnParameters: {
              id: 90550,
              nodeType: "ParameterList",
              parameters: [],
              src: "1891:0:129",
            },
            scope: 90568,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 90499,
              name: "ERC4626ValidationTest",
              nameLocations: ["1315:21:129"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 74498,
              src: "1315:21:129",
            },
            id: 90500,
            nodeType: "InheritanceSpecifier",
            src: "1315:21:129",
          },
        ],
        canonicalName: "sDaiTest",
        contractDependencies: [5107, 5269, 12288, 13321, 92554, 92630],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          90568, 74498, 120941, 117331, 26704, 26653, 22391, 22101, 21337,
          19283, 18563, 17031, 17097, 17094,
        ],
        name: "sDaiTest",
        nameLocation: "1303:8:129",
        scope: 90569,
        usedErrors: [7088, 7090, 116815, 116817],
      },
    ],
    license: "Apache-2.0",
  },
  id: 129,
} as const;
