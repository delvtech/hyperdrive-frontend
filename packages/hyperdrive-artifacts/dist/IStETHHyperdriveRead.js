export const IStETHHyperdriveRead = { "abi": [{ "type": "function", "name": "balanceOf", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "owner", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "baseToken", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "getCheckpoint", "inputs": [{ "name": "_checkpointTime", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "tuple", "internalType": "struct IHyperdrive.Checkpoint", "components": [{ "name": "vaultSharePrice", "type": "uint128", "internalType": "uint128" }] }], "stateMutability": "view" }, { "type": "function", "name": "getCheckpointExposure", "inputs": [{ "name": "_checkpointTime", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "int256", "internalType": "int256" }], "stateMutability": "view" }, { "type": "function", "name": "getMarketState", "inputs": [], "outputs": [{ "name": "", "type": "tuple", "internalType": "struct IHyperdrive.MarketState", "components": [{ "name": "shareReserves", "type": "uint128", "internalType": "uint128" }, { "name": "bondReserves", "type": "uint128", "internalType": "uint128" }, { "name": "longExposure", "type": "uint128", "internalType": "uint128" }, { "name": "longsOutstanding", "type": "uint128", "internalType": "uint128" }, { "name": "shareAdjustment", "type": "int128", "internalType": "int128" }, { "name": "shortsOutstanding", "type": "uint128", "internalType": "uint128" }, { "name": "longAverageMaturityTime", "type": "uint128", "internalType": "uint128" }, { "name": "shortAverageMaturityTime", "type": "uint128", "internalType": "uint128" }, { "name": "isInitialized", "type": "bool", "internalType": "bool" }, { "name": "isPaused", "type": "bool", "internalType": "bool" }, { "name": "zombieBaseProceeds", "type": "uint112", "internalType": "uint112" }, { "name": "zombieShareReserves", "type": "uint128", "internalType": "uint128" }] }], "stateMutability": "view" }, { "type": "function", "name": "getPoolConfig", "inputs": [], "outputs": [{ "name": "", "type": "tuple", "internalType": "struct IHyperdrive.PoolConfig", "components": [{ "name": "baseToken", "type": "address", "internalType": "contract IERC20" }, { "name": "linkerFactory", "type": "address", "internalType": "address" }, { "name": "linkerCodeHash", "type": "bytes32", "internalType": "bytes32" }, { "name": "initialVaultSharePrice", "type": "uint256", "internalType": "uint256" }, { "name": "minimumShareReserves", "type": "uint256", "internalType": "uint256" }, { "name": "minimumTransactionAmount", "type": "uint256", "internalType": "uint256" }, { "name": "positionDuration", "type": "uint256", "internalType": "uint256" }, { "name": "checkpointDuration", "type": "uint256", "internalType": "uint256" }, { "name": "timeStretch", "type": "uint256", "internalType": "uint256" }, { "name": "governance", "type": "address", "internalType": "address" }, { "name": "feeCollector", "type": "address", "internalType": "address" }, { "name": "fees", "type": "tuple", "internalType": "struct IHyperdrive.Fees", "components": [{ "name": "curve", "type": "uint256", "internalType": "uint256" }, { "name": "flat", "type": "uint256", "internalType": "uint256" }, { "name": "governanceLP", "type": "uint256", "internalType": "uint256" }, { "name": "governanceZombie", "type": "uint256", "internalType": "uint256" }] }] }], "stateMutability": "view" }, { "type": "function", "name": "getPoolInfo", "inputs": [], "outputs": [{ "name": "", "type": "tuple", "internalType": "struct IHyperdrive.PoolInfo", "components": [{ "name": "shareReserves", "type": "uint256", "internalType": "uint256" }, { "name": "shareAdjustment", "type": "int256", "internalType": "int256" }, { "name": "zombieBaseProceeds", "type": "uint256", "internalType": "uint256" }, { "name": "zombieShareReserves", "type": "uint256", "internalType": "uint256" }, { "name": "bondReserves", "type": "uint256", "internalType": "uint256" }, { "name": "lpTotalSupply", "type": "uint256", "internalType": "uint256" }, { "name": "vaultSharePrice", "type": "uint256", "internalType": "uint256" }, { "name": "longsOutstanding", "type": "uint256", "internalType": "uint256" }, { "name": "longAverageMaturityTime", "type": "uint256", "internalType": "uint256" }, { "name": "shortsOutstanding", "type": "uint256", "internalType": "uint256" }, { "name": "shortAverageMaturityTime", "type": "uint256", "internalType": "uint256" }, { "name": "withdrawalSharesReadyToWithdraw", "type": "uint256", "internalType": "uint256" }, { "name": "withdrawalSharesProceeds", "type": "uint256", "internalType": "uint256" }, { "name": "lpSharePrice", "type": "uint256", "internalType": "uint256" }, { "name": "longExposure", "type": "uint256", "internalType": "uint256" }] }], "stateMutability": "view" }, { "type": "function", "name": "getUncollectedGovernanceFees", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getWithdrawPool", "inputs": [], "outputs": [{ "name": "", "type": "tuple", "internalType": "struct IHyperdrive.WithdrawPool", "components": [{ "name": "readyToWithdraw", "type": "uint128", "internalType": "uint128" }, { "name": "proceeds", "type": "uint128", "internalType": "uint128" }] }], "stateMutability": "view" }, { "type": "function", "name": "isApprovedForAll", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "spender", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "isPauser", "inputs": [{ "name": "_account", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "lido", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract ILido" }], "stateMutability": "view" }, { "type": "function", "name": "load", "inputs": [{ "name": "_slots", "type": "uint256[]", "internalType": "uint256[]" }], "outputs": [{ "name": "", "type": "bytes32[]", "internalType": "bytes32[]" }], "stateMutability": "view" }, { "type": "function", "name": "name", "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "nonces", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "perTokenApprovals", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "owner", "type": "address", "internalType": "address" }, { "name": "spender", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "symbol", "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "totalSupply", "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": { "balanceOf(uint256,address)": "3656eec2", "baseToken()": "c55dae63", "getCheckpoint(uint256)": "20fc4881", "getCheckpointExposure(uint256)": "cf210e65", "getMarketState()": "d8165743", "getPoolConfig()": "b0d96580", "getPoolInfo()": "60246c88", "getUncollectedGovernanceFees()": "c69e16ad", "getWithdrawPool()": "fba56008", "isApprovedForAll(address,address)": "e985e9c5", "isPauser(address)": "46fbf68e", "lido()": "23509a2d", "load(uint256[])": "becee9c3", "name(uint256)": "00ad800c", "nonces(address)": "7ecebe00", "perTokenApprovals(uint256,address,address)": "21ff32a9", "symbol(uint256)": "4e41a1fb", "totalSupply(uint256)": "bd85b039" }, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lido\",\"outputs\":[{\"internalType\":\"contract ILido\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IStETHHyperdriveRead.sol\":\"IStETHHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x1668f4b0673b947a39e5caa68c1050bb1e1f269fa9fcc6900948895656446b1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64f2ddf006a96de25a384790815dee5baa864c290c11736aa01711380938f397\",\"dweb:/ipfs/QmUY5rJSYE7cQjTKhT88kX5Ve57yL9U1mNMHqYhMzZAFCS\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/interfaces/IStETHHyperdriveRead.sol\":{\"keccak256\":\"0xcded891e072f1cc62c59566fbb430fa7488abe9e6a112b7e85db84bb178ce752\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://edcd0382e62b0691348ea18778a299171826c0c3e19b2aca54162e81398977cc\",\"dweb:/ipfs/QmWm3Twqzn1RjL3bjFk4euGCYmxki47m5gjW67x56hfYtv\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "view", "type": "function", "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "baseToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }] }, { "inputs": [{ "internalType": "uint256", "name": "_checkpointTime", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "getCheckpoint", "outputs": [{ "internalType": "struct IHyperdrive.Checkpoint", "name": "", "type": "tuple", "components": [{ "internalType": "uint128", "name": "vaultSharePrice", "type": "uint128" }] }] }, { "inputs": [{ "internalType": "uint256", "name": "_checkpointTime", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "getCheckpointExposure", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "getMarketState", "outputs": [{ "internalType": "struct IHyperdrive.MarketState", "name": "", "type": "tuple", "components": [{ "internalType": "uint128", "name": "shareReserves", "type": "uint128" }, { "internalType": "uint128", "name": "bondReserves", "type": "uint128" }, { "internalType": "uint128", "name": "longExposure", "type": "uint128" }, { "internalType": "uint128", "name": "longsOutstanding", "type": "uint128" }, { "internalType": "int128", "name": "shareAdjustment", "type": "int128" }, { "internalType": "uint128", "name": "shortsOutstanding", "type": "uint128" }, { "internalType": "uint128", "name": "longAverageMaturityTime", "type": "uint128" }, { "internalType": "uint128", "name": "shortAverageMaturityTime", "type": "uint128" }, { "internalType": "bool", "name": "isInitialized", "type": "bool" }, { "internalType": "bool", "name": "isPaused", "type": "bool" }, { "internalType": "uint112", "name": "zombieBaseProceeds", "type": "uint112" }, { "internalType": "uint128", "name": "zombieShareReserves", "type": "uint128" }] }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "getPoolConfig", "outputs": [{ "internalType": "struct IHyperdrive.PoolConfig", "name": "", "type": "tuple", "components": [{ "internalType": "contract IERC20", "name": "baseToken", "type": "address" }, { "internalType": "address", "name": "linkerFactory", "type": "address" }, { "internalType": "bytes32", "name": "linkerCodeHash", "type": "bytes32" }, { "internalType": "uint256", "name": "initialVaultSharePrice", "type": "uint256" }, { "internalType": "uint256", "name": "minimumShareReserves", "type": "uint256" }, { "internalType": "uint256", "name": "minimumTransactionAmount", "type": "uint256" }, { "internalType": "uint256", "name": "positionDuration", "type": "uint256" }, { "internalType": "uint256", "name": "checkpointDuration", "type": "uint256" }, { "internalType": "uint256", "name": "timeStretch", "type": "uint256" }, { "internalType": "address", "name": "governance", "type": "address" }, { "internalType": "address", "name": "feeCollector", "type": "address" }, { "internalType": "struct IHyperdrive.Fees", "name": "fees", "type": "tuple", "components": [{ "internalType": "uint256", "name": "curve", "type": "uint256" }, { "internalType": "uint256", "name": "flat", "type": "uint256" }, { "internalType": "uint256", "name": "governanceLP", "type": "uint256" }, { "internalType": "uint256", "name": "governanceZombie", "type": "uint256" }] }] }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "getPoolInfo", "outputs": [{ "internalType": "struct IHyperdrive.PoolInfo", "name": "", "type": "tuple", "components": [{ "internalType": "uint256", "name": "shareReserves", "type": "uint256" }, { "internalType": "int256", "name": "shareAdjustment", "type": "int256" }, { "internalType": "uint256", "name": "zombieBaseProceeds", "type": "uint256" }, { "internalType": "uint256", "name": "zombieShareReserves", "type": "uint256" }, { "internalType": "uint256", "name": "bondReserves", "type": "uint256" }, { "internalType": "uint256", "name": "lpTotalSupply", "type": "uint256" }, { "internalType": "uint256", "name": "vaultSharePrice", "type": "uint256" }, { "internalType": "uint256", "name": "longsOutstanding", "type": "uint256" }, { "internalType": "uint256", "name": "longAverageMaturityTime", "type": "uint256" }, { "internalType": "uint256", "name": "shortsOutstanding", "type": "uint256" }, { "internalType": "uint256", "name": "shortAverageMaturityTime", "type": "uint256" }, { "internalType": "uint256", "name": "withdrawalSharesReadyToWithdraw", "type": "uint256" }, { "internalType": "uint256", "name": "withdrawalSharesProceeds", "type": "uint256" }, { "internalType": "uint256", "name": "lpSharePrice", "type": "uint256" }, { "internalType": "uint256", "name": "longExposure", "type": "uint256" }] }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "getUncollectedGovernanceFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "getWithdrawPool", "outputs": [{ "internalType": "struct IHyperdrive.WithdrawPool", "name": "", "type": "tuple", "components": [{ "internalType": "uint128", "name": "readyToWithdraw", "type": "uint128" }, { "internalType": "uint128", "name": "proceeds", "type": "uint128" }] }] }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "stateMutability": "view", "type": "function", "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }] }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "stateMutability": "view", "type": "function", "name": "isPauser", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "lido", "outputs": [{ "internalType": "contract ILido", "name": "", "type": "address" }] }, { "inputs": [{ "internalType": "uint256[]", "name": "_slots", "type": "uint256[]" }], "stateMutability": "view", "type": "function", "name": "load", "outputs": [{ "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }] }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }] }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "view", "type": "function", "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "stateMutability": "view", "type": "function", "name": "perTokenApprovals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }] }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }], "devdoc": { "kind": "dev", "methods": {}, "version": 1 }, "userdoc": { "kind": "user", "methods": {}, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "contracts/src/interfaces/IStETHHyperdriveRead.sol": "IStETHHyperdriveRead" }, "libraries": {} }, "sources": { "contracts/src/interfaces/IERC20.sol": { "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3", "urls": ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"], "license": "Apache-2.0" }, "contracts/src/interfaces/IHyperdrive.sol": { "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16", "urls": ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"], "license": "Apache-2.0" }, "contracts/src/interfaces/IHyperdriveCore.sol": { "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97", "urls": ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"], "license": "Apache-2.0" }, "contracts/src/interfaces/IHyperdriveEvents.sol": { "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd", "urls": ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"], "license": "Apache-2.0" }, "contracts/src/interfaces/IHyperdriveRead.sol": { "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597", "urls": ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"], "license": "Apache-2.0" }, "contracts/src/interfaces/ILido.sol": { "keccak256": "0x1668f4b0673b947a39e5caa68c1050bb1e1f269fa9fcc6900948895656446b1a", "urls": ["bzz-raw://64f2ddf006a96de25a384790815dee5baa864c290c11736aa01711380938f397", "dweb:/ipfs/QmUY5rJSYE7cQjTKhT88kX5Ve57yL9U1mNMHqYhMzZAFCS"], "license": "Apache-2.0" }, "contracts/src/interfaces/IMultiToken.sol": { "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f", "urls": ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"], "license": "Apache-2.0" }, "contracts/src/interfaces/IMultiTokenCore.sol": { "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a", "urls": ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"], "license": "Apache-2.0" }, "contracts/src/interfaces/IMultiTokenEvents.sol": { "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002", "urls": ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"], "license": "Apache-2.0" }, "contracts/src/interfaces/IMultiTokenMetadata.sol": { "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191", "urls": ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"], "license": "Apache-2.0" }, "contracts/src/interfaces/IMultiTokenRead.sol": { "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868", "urls": ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"], "license": "Apache-2.0" }, "contracts/src/interfaces/IStETHHyperdriveRead.sol": { "keccak256": "0xcded891e072f1cc62c59566fbb430fa7488abe9e6a112b7e85db84bb178ce752", "urls": ["bzz-raw://edcd0382e62b0691348ea18778a299171826c0c3e19b2aca54162e81398977cc", "dweb:/ipfs/QmWm3Twqzn1RjL3bjFk4euGCYmxki47m5gjW67x56hfYtv"], "license": "Apache-2.0" } }, "version": 1 }, "ast": { "absolutePath": "contracts/src/interfaces/IStETHHyperdriveRead.sol", "id": 8423, "exportedSymbols": { "IHyperdriveRead": [8071], "ILido": [8169], "IStETHHyperdriveRead": [8422] }, "nodeType": "SourceUnit", "src": "39:225:62", "nodes": [{ "id": 8409, "nodeType": "PragmaDirective", "src": "39:23:62", "nodes": [], "literals": ["solidity", "0.8", ".20"] }, { "id": 8411, "nodeType": "ImportDirective", "src": "64:56:62", "nodes": [], "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol", "file": "./IHyperdriveRead.sol", "nameLocation": "-1:-1:-1", "scope": 8423, "sourceUnit": 8072, "symbolAliases": [{ "foreign": { "id": 8410, "name": "IHyperdriveRead", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 8071, "src": "73:15:62", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }], "unitAlias": "" }, { "id": 8413, "nodeType": "ImportDirective", "src": "121:36:62", "nodes": [], "absolutePath": "contracts/src/interfaces/ILido.sol", "file": "./ILido.sol", "nameLocation": "-1:-1:-1", "scope": 8423, "sourceUnit": 8170, "symbolAliases": [{ "foreign": { "id": 8412, "name": "ILido", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 8169, "src": "130:5:62", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }], "unitAlias": "" }, { "id": 8422, "nodeType": "ContractDefinition", "src": "159:104:62", "nodes": [{ "id": 8421, "nodeType": "FunctionDefinition", "src": "215:46:62", "nodes": [], "functionSelector": "23509a2d", "implemented": false, "kind": "function", "modifiers": [], "name": "lido", "nameLocation": "224:4:62", "parameters": { "id": 8416, "nodeType": "ParameterList", "parameters": [], "src": "228:2:62" }, "returnParameters": { "id": 8420, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 8419, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 8421, "src": "254:5:62", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_contract$_ILido_$8169", "typeString": "contract ILido" }, "typeName": { "id": 8418, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 8417, "name": "ILido", "nameLocations": ["254:5:62"], "nodeType": "IdentifierPath", "referencedDeclaration": 8169, "src": "254:5:62" }, "referencedDeclaration": 8169, "src": "254:5:62", "typeDescriptions": { "typeIdentifier": "t_contract$_ILido_$8169", "typeString": "contract ILido" } }, "visibility": "internal" }], "src": "253:7:62" }, "scope": 8422, "stateMutability": "view", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [{ "baseName": { "id": 8414, "name": "IHyperdriveRead", "nameLocations": ["193:15:62"], "nodeType": "IdentifierPath", "referencedDeclaration": 8071, "src": "193:15:62" }, "id": 8415, "nodeType": "InheritanceSpecifier", "src": "193:15:62" }], "canonicalName": "IStETHHyperdriveRead", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [8422, 8071, 8377], "name": "IStETHHyperdriveRead", "nameLocation": "169:20:62", "scope": 8423, "usedErrors": [], "usedEvents": [] }], "license": "Apache-2.0" }, "id": 62 };
