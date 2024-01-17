export const IHyperdriveTargetDeployer = 
{"abi":[{"type":"function","name":"deploy","inputs":[{"name":"_config","type":"tuple","internalType":"struct IHyperdrive.PoolConfig","components":[{"name":"baseToken","type":"address","internalType":"contract IERC20"},{"name":"linkerFactory","type":"address","internalType":"address"},{"name":"linkerCodeHash","type":"bytes32","internalType":"bytes32"},{"name":"initialSharePrice","type":"uint256","internalType":"uint256"},{"name":"minimumShareReserves","type":"uint256","internalType":"uint256"},{"name":"minimumTransactionAmount","type":"uint256","internalType":"uint256"},{"name":"positionDuration","type":"uint256","internalType":"uint256"},{"name":"checkpointDuration","type":"uint256","internalType":"uint256"},{"name":"timeStretch","type":"uint256","internalType":"uint256"},{"name":"governance","type":"address","internalType":"address"},{"name":"feeCollector","type":"address","internalType":"address"},{"name":"fees","type":"tuple","internalType":"struct IHyperdrive.Fees","components":[{"name":"curve","type":"uint256","internalType":"uint256"},{"name":"flat","type":"uint256","internalType":"uint256"},{"name":"governanceLP","type":"uint256","internalType":"uint256"},{"name":"governanceZombie","type":"uint256","internalType":"uint256"}]}]},{"name":"_extraData","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"nonpayable"}],"bytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"deployedBytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"methodIdentifiers":{"deploy((address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)":"5fd69b05"},"rawMetadata":"{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":\"IHyperdriveTargetDeployer\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3b4f94e5480e7074e05b0d338d583569aef147f45365eb57daeb99f19fe817c3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cc18b204ec94f80cd6b4876ea3c39dfb143fc4feff52e2a8d00ea72e6811644\",\"dweb:/ipfs/QmZHmZRvmJr8FxExBzKHSHYNZqcEgcgDcs4Z6gF1wPvBvj\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x1c61ba57b783bfa408a4e208e80c1c117850d4d6c9f0e280263d3fcf57a8b2fd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b920d5f0f37014035b6cbba16d898e52654122a0c004a3f75050af93b799496\",\"dweb:/ipfs/QmaneaTDVXbw5HfevR2vFwXWw95EKWcBq8yMgMyWJPHKVW\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x9ab8f82d043339e054fb2191fa1518789534615fe4398f663013a98b7d854a74\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0165f494fc56da6c285d0c5101ed40389a4db79ed18a4fcf64415b7d76b471b6\",\"dweb:/ipfs/QmVmauzHKrdXKn4gcYLmZaJaBMC6eyPFgyNn634ybLa9H7\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]}},\"version\":1}","metadata":{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"struct IHyperdrive.PoolConfig","name":"_config","type":"tuple","components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"address","name":"linkerFactory","type":"address"},{"internalType":"bytes32","name":"linkerCodeHash","type":"bytes32"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple","components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governanceLP","type":"uint256"},{"internalType":"uint256","name":"governanceZombie","type":"uint256"}]}]},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"stateMutability":"nonpayable","type":"function","name":"deploy","outputs":[{"internalType":"address","name":"","type":"address"}]}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"remappings":["aave-v3-core/=lib/aave-v3-core/","create3-factory/=lib/yield-daddy/lib/create3-factory/","ds-test/=lib/forge-std/lib/ds-test/src/","forge-std/=lib/forge-std/src/","solmate/=lib/solmate/src/","yield-daddy/=lib/yield-daddy/"],"optimizer":{"enabled":true,"runs":200},"metadata":{"bytecodeHash":"ipfs"},"compilationTarget":{"contracts/src/interfaces/IHyperdriveTargetDeployer.sol":"IHyperdriveTargetDeployer"},"libraries":{}},"sources":{"contracts/src/interfaces/IERC20.sol":{"keccak256":"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4","urls":["bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36","dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3b4f94e5480e7074e05b0d338d583569aef147f45365eb57daeb99f19fe817c3","urls":["bzz-raw://2cc18b204ec94f80cd6b4876ea3c39dfb143fc4feff52e2a8d00ea72e6811644","dweb:/ipfs/QmZHmZRvmJr8FxExBzKHSHYNZqcEgcgDcs4Z6gF1wPvBvj"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdriveCore.sol":{"keccak256":"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d","urls":["bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85","dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x1c61ba57b783bfa408a4e208e80c1c117850d4d6c9f0e280263d3fcf57a8b2fd","urls":["bzz-raw://5b920d5f0f37014035b6cbba16d898e52654122a0c004a3f75050af93b799496","dweb:/ipfs/QmaneaTDVXbw5HfevR2vFwXWw95EKWcBq8yMgMyWJPHKVW"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdriveTargetDeployer.sol":{"keccak256":"0x9ab8f82d043339e054fb2191fa1518789534615fe4398f663013a98b7d854a74","urls":["bzz-raw://0165f494fc56da6c285d0c5101ed40389a4db79ed18a4fcf64415b7d76b471b6","dweb:/ipfs/QmVmauzHKrdXKn4gcYLmZaJaBMC6eyPFgyNn634ybLa9H7"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad","urls":["bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6","dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenCore.sol":{"keccak256":"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d","urls":["bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8","dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb","urls":["bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f","dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4","urls":["bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6","dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"],"license":"Apache-2.0"}},"version":1},"ast":{"absolutePath":"contracts/src/interfaces/IHyperdriveTargetDeployer.sol","id":5977,"exportedSymbols":{"IHyperdrive":[5658],"IHyperdriveTargetDeployer":[5976]},"nodeType":"SourceUnit","src":"39:249:47","nodes":[{"id":5963,"nodeType":"PragmaDirective","src":"39:23:47","nodes":[],"literals":["solidity","0.8",".19"]},{"id":5965,"nodeType":"ImportDirective","src":"64:48:47","nodes":[],"absolutePath":"contracts/src/interfaces/IHyperdrive.sol","file":"./IHyperdrive.sol","nameLocation":"-1:-1:-1","scope":5977,"sourceUnit":5659,"symbolAliases":[{"foreign":{"id":5964,"name":"IHyperdrive","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5658,"src":"73:11:47","typeDescriptions":{}},"nameLocation":"-1:-1:-1"}],"unitAlias":""},{"id":5976,"nodeType":"ContractDefinition","src":"114:173:47","nodes":[{"id":5975,"nodeType":"FunctionDefinition","src":"156:129:47","nodes":[],"functionSelector":"5fd69b05","implemented":false,"kind":"function","modifiers":[],"name":"deploy","nameLocation":"165:6:47","parameters":{"id":5971,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5968,"mutability":"mutable","name":"_config","nameLocation":"211:7:47","nodeType":"VariableDeclaration","scope":5975,"src":"181:37:47","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_PoolConfig_$5427_memory_ptr","typeString":"struct IHyperdrive.PoolConfig"},"typeName":{"id":5967,"nodeType":"UserDefinedTypeName","pathNode":{"id":5966,"name":"IHyperdrive.PoolConfig","nameLocations":["181:11:47","193:10:47"],"nodeType":"IdentifierPath","referencedDeclaration":5427,"src":"181:22:47"},"referencedDeclaration":5427,"src":"181:22:47","typeDescriptions":{"typeIdentifier":"t_struct$_PoolConfig_$5427_storage_ptr","typeString":"struct IHyperdrive.PoolConfig"}},"visibility":"internal"},{"constant":false,"id":5970,"mutability":"mutable","name":"_extraData","nameLocation":"241:10:47","nodeType":"VariableDeclaration","scope":5975,"src":"228:23:47","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":5969,"name":"bytes","nodeType":"ElementaryTypeName","src":"228:5:47","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"visibility":"internal"}],"src":"171:86:47"},"returnParameters":{"id":5974,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5973,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":5975,"src":"276:7:47","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5972,"name":"address","nodeType":"ElementaryTypeName","src":"276:7:47","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"275:9:47"},"scope":5976,"stateMutability":"nonpayable","virtual":false,"visibility":"external"}],"abstract":false,"baseContracts":[],"canonicalName":"IHyperdriveTargetDeployer","contractDependencies":[],"contractKind":"interface","fullyImplemented":false,"linearizedBaseContracts":[5976],"name":"IHyperdriveTargetDeployer","nameLocation":"124:25:47","scope":5977,"usedErrors":[]}],"license":"Apache-2.0"},"id":47} as const;
