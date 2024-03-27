export const IRenzoOracle = { "abi": [{ "type": "function", "name": "calculateMintAmount", "inputs": [{ "name": "_currentValueInProtocol", "type": "uint256", "internalType": "uint256" }, { "name": "_newValueAdded", "type": "uint256", "internalType": "uint256" }, { "name": "_existingEzETHSupply", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "calculateRedeemAmount", "inputs": [{ "name": "_ezETHBeingBurned", "type": "uint256", "internalType": "uint256" }, { "name": "_existingEzETHSupply", "type": "uint256", "internalType": "uint256" }, { "name": "_currentValueInProtocol", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "lookupTokenAmountFromValue", "inputs": [{ "name": "_token", "type": "address", "internalType": "contract IERC20" }, { "name": "_value", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "lookupTokenValue", "inputs": [{ "name": "_token", "type": "address", "internalType": "contract IERC20" }, { "name": "_balance", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "lookupTokenValues", "inputs": [{ "name": "_tokens", "type": "address[]", "internalType": "contract IERC20[]" }, { "name": "_balances", "type": "uint256[]", "internalType": "uint256[]" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": { "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a", "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0", "lookupTokenAmountFromValue(address,uint256)": "37933625", "lookupTokenValue(address,uint256)": "0052e3fd", "lookupTokenValues(address[],uint256[])": "ba28a571" }, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_currentValueInProtocol\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newValueAdded\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_existingEzETHSupply\",\"type\":\"uint256\"}],\"name\":\"calculateMintAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ezETHBeingBurned\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_existingEzETHSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_currentValueInProtocol\",\"type\":\"uint256\"}],\"name\":\"calculateRedeemAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"lookupTokenAmountFromValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_balance\",\"type\":\"uint256\"}],\"name\":\"lookupTokenValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20[]\",\"name\":\"_tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_balances\",\"type\":\"uint256[]\"}],\"name\":\"lookupTokenValues\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRenzo.sol\":\"IRenzoOracle\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IRenzo.sol\":{\"keccak256\":\"0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d\",\"dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [{ "internalType": "uint256", "name": "_currentValueInProtocol", "type": "uint256" }, { "internalType": "uint256", "name": "_newValueAdded", "type": "uint256" }, { "internalType": "uint256", "name": "_existingEzETHSupply", "type": "uint256" }], "stateMutability": "pure", "type": "function", "name": "calculateMintAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "uint256", "name": "_ezETHBeingBurned", "type": "uint256" }, { "internalType": "uint256", "name": "_existingEzETHSupply", "type": "uint256" }, { "internalType": "uint256", "name": "_currentValueInProtocol", "type": "uint256" }], "stateMutability": "pure", "type": "function", "name": "calculateRedeemAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "lookupTokenAmountFromValue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_balance", "type": "uint256" }], "stateMutability": "view", "type": "function", "name": "lookupTokenValue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "contract IERC20[]", "name": "_tokens", "type": "address[]" }, { "internalType": "uint256[]", "name": "_balances", "type": "uint256[]" }], "stateMutability": "view", "type": "function", "name": "lookupTokenValues", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }], "devdoc": { "kind": "dev", "methods": {}, "version": 1 }, "userdoc": { "kind": "user", "methods": {}, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "contracts/src/interfaces/IRenzo.sol": "IRenzoOracle" }, "libraries": {} }, "sources": { "contracts/src/interfaces/IERC20.sol": { "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9", "urls": ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"], "license": "Apache-2.0" }, "contracts/src/interfaces/IRenzo.sol": { "keccak256": "0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00", "urls": ["bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d", "dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F"], "license": "Apache-2.0" } }, "version": 1 }, "ast": { "absolutePath": "contracts/src/interfaces/IRenzo.sol", "id": 12457, "exportedSymbols": { "IDepositQueue": [12456], "IERC20": [10417], "IRenzoOracle": [12445], "IRestakeManager": [12390] }, "nodeType": "SourceUnit", "src": "39:2264:105", "nodes": [{ "id": 12358, "nodeType": "PragmaDirective", "src": "39:23:105", "nodes": [], "literals": ["solidity", "0.8", ".20"] }, { "id": 12360, "nodeType": "ImportDirective", "src": "64:38:105", "nodes": [], "absolutePath": "contracts/src/interfaces/IERC20.sol", "file": "./IERC20.sol", "nameLocation": "-1:-1:-1", "scope": 12457, "sourceUnit": 10418, "symbolAliases": [{ "foreign": { "id": 12359, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 10417, "src": "73:6:105", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }], "unitAlias": "" }, { "id": 12390, "nodeType": "ContractDefinition", "src": "104:1246:105", "nodes": [{ "id": 12366, "nodeType": "FunctionDefinition", "src": "289:49:105", "nodes": [], "documentation": { "id": 12361, "nodeType": "StructuredDocumentation", "src": "136:148:105", "text": " @notice Returns the ezETH token contract address\n @dev Getter for public state variable of the ezETH token contract address" }, "functionSelector": "13a73c78", "implemented": false, "kind": "function", "modifiers": [], "name": "ezETH", "nameLocation": "298:5:105", "parameters": { "id": 12362, "nodeType": "ParameterList", "parameters": [], "src": "303:2:105" }, "returnParameters": { "id": 12365, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12364, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12366, "src": "329:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 12363, "name": "address", "nodeType": "ElementaryTypeName", "src": "329:7:105", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }], "src": "328:9:105" }, "scope": 12390, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12372, "nodeType": "FunctionDefinition", "src": "499:55:105", "nodes": [], "documentation": { "id": 12367, "nodeType": "StructuredDocumentation", "src": "344:150:105", "text": " @notice Returns the renzo oracle contract address\n @dev Getter for public state variable of the renzo oracle contract address" }, "functionSelector": "892866a4", "implemented": false, "kind": "function", "modifiers": [], "name": "renzoOracle", "nameLocation": "508:11:105", "parameters": { "id": 12368, "nodeType": "ParameterList", "parameters": [], "src": "519:2:105" }, "returnParameters": { "id": 12371, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12370, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12372, "src": "545:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 12369, "name": "address", "nodeType": "ElementaryTypeName", "src": "545:7:105", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }], "src": "544:9:105" }, "scope": 12390, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12376, "nodeType": "FunctionDefinition", "src": "756:39:105", "nodes": [], "documentation": { "id": 12373, "nodeType": "StructuredDocumentation", "src": "560:191:105", "text": " @notice  Allows a user to deposit ETH into the protocol and get back ezETH\n @dev     Convenience function to deposit without a referral ID and backwards compatibility" }, "functionSelector": "f6326fb3", "implemented": false, "kind": "function", "modifiers": [], "name": "depositETH", "nameLocation": "765:10:105", "parameters": { "id": 12374, "nodeType": "ParameterList", "parameters": [], "src": "775:2:105" }, "returnParameters": { "id": 12375, "nodeType": "ParameterList", "parameters": [], "src": "794:0:105" }, "scope": 12390, "stateMutability": "payable", "virtual": false, "visibility": "external" }, { "id": 12389, "nodeType": "FunctionDefinition", "src": "1229:119:105", "nodes": [], "documentation": { "id": 12377, "nodeType": "StructuredDocumentation", "src": "801:423:105", "text": "@dev This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\n @return operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\n @return operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\n @return totalTVL The total TVL across all operator delegators." }, "functionSelector": "ff9969cd", "implemented": false, "kind": "function", "modifiers": [], "name": "calculateTVLs", "nameLocation": "1238:13:105", "parameters": { "id": 12378, "nodeType": "ParameterList", "parameters": [], "src": "1251:2:105" }, "returnParameters": { "id": 12388, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12382, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12389, "src": "1301:18:105", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_array$_t_array$_t_uint256_$dyn_memory_ptr_$dyn_memory_ptr", "typeString": "uint256[][]" }, "typeName": { "baseType": { "baseType": { "id": 12379, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1301:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 12380, "nodeType": "ArrayTypeName", "src": "1301:9:105", "typeDescriptions": { "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr", "typeString": "uint256[]" } }, "id": 12381, "nodeType": "ArrayTypeName", "src": "1301:11:105", "typeDescriptions": { "typeIdentifier": "t_array$_t_array$_t_uint256_$dyn_storage_$dyn_storage_ptr", "typeString": "uint256[][]" } }, "visibility": "internal" }, { "constant": false, "id": 12385, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12389, "src": "1321:16:105", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr", "typeString": "uint256[]" }, "typeName": { "baseType": { "id": 12383, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1321:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 12384, "nodeType": "ArrayTypeName", "src": "1321:9:105", "typeDescriptions": { "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr", "typeString": "uint256[]" } }, "visibility": "internal" }, { "constant": false, "id": 12387, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12389, "src": "1339:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12386, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1339:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1300:47:105" }, "scope": 12390, "stateMutability": "view", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [], "canonicalName": "IRestakeManager", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [12390], "name": "IRestakeManager", "nameLocation": "114:15:105", "scope": 12457, "usedErrors": [], "usedEvents": [] }, { "id": 12445, "nodeType": "ContractDefinition", "src": "1352:784:105", "nodes": [{ "id": 12400, "nodeType": "FunctionDefinition", "src": "1381:113:105", "nodes": [], "functionSelector": "0052e3fd", "implemented": false, "kind": "function", "modifiers": [], "name": "lookupTokenValue", "nameLocation": "1390:16:105", "parameters": { "id": 12396, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12393, "mutability": "mutable", "name": "_token", "nameLocation": "1423:6:105", "nodeType": "VariableDeclaration", "scope": 12400, "src": "1416:13:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_contract$_IERC20_$10417", "typeString": "contract IERC20" }, "typeName": { "id": 12392, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 12391, "name": "IERC20", "nameLocations": ["1416:6:105"], "nodeType": "IdentifierPath", "referencedDeclaration": 10417, "src": "1416:6:105" }, "referencedDeclaration": 10417, "src": "1416:6:105", "typeDescriptions": { "typeIdentifier": "t_contract$_IERC20_$10417", "typeString": "contract IERC20" } }, "visibility": "internal" }, { "constant": false, "id": 12395, "mutability": "mutable", "name": "_balance", "nameLocation": "1447:8:105", "nodeType": "VariableDeclaration", "scope": 12400, "src": "1439:16:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12394, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1439:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1406:55:105" }, "returnParameters": { "id": 12399, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12398, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12400, "src": "1485:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12397, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1485:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1484:9:105" }, "scope": 12445, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12410, "nodeType": "FunctionDefinition", "src": "1500:121:105", "nodes": [], "functionSelector": "37933625", "implemented": false, "kind": "function", "modifiers": [], "name": "lookupTokenAmountFromValue", "nameLocation": "1509:26:105", "parameters": { "id": 12406, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12403, "mutability": "mutable", "name": "_token", "nameLocation": "1552:6:105", "nodeType": "VariableDeclaration", "scope": 12410, "src": "1545:13:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_contract$_IERC20_$10417", "typeString": "contract IERC20" }, "typeName": { "id": 12402, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 12401, "name": "IERC20", "nameLocations": ["1545:6:105"], "nodeType": "IdentifierPath", "referencedDeclaration": 10417, "src": "1545:6:105" }, "referencedDeclaration": 10417, "src": "1545:6:105", "typeDescriptions": { "typeIdentifier": "t_contract$_IERC20_$10417", "typeString": "contract IERC20" } }, "visibility": "internal" }, { "constant": false, "id": 12405, "mutability": "mutable", "name": "_value", "nameLocation": "1576:6:105", "nodeType": "VariableDeclaration", "scope": 12410, "src": "1568:14:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12404, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1568:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1535:53:105" }, "returnParameters": { "id": 12409, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12408, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12410, "src": "1612:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12407, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1612:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1611:9:105" }, "scope": 12445, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12422, "nodeType": "FunctionDefinition", "src": "1627:134:105", "nodes": [], "functionSelector": "ba28a571", "implemented": false, "kind": "function", "modifiers": [], "name": "lookupTokenValues", "nameLocation": "1636:17:105", "parameters": { "id": 12418, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12414, "mutability": "mutable", "name": "_tokens", "nameLocation": "1679:7:105", "nodeType": "VariableDeclaration", "scope": 12422, "src": "1663:23:105", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_array$_t_contract$_IERC20_$10417_$dyn_memory_ptr", "typeString": "contract IERC20[]" }, "typeName": { "baseType": { "id": 12412, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 12411, "name": "IERC20", "nameLocations": ["1663:6:105"], "nodeType": "IdentifierPath", "referencedDeclaration": 10417, "src": "1663:6:105" }, "referencedDeclaration": 10417, "src": "1663:6:105", "typeDescriptions": { "typeIdentifier": "t_contract$_IERC20_$10417", "typeString": "contract IERC20" } }, "id": 12413, "nodeType": "ArrayTypeName", "src": "1663:8:105", "typeDescriptions": { "typeIdentifier": "t_array$_t_contract$_IERC20_$10417_$dyn_storage_ptr", "typeString": "contract IERC20[]" } }, "visibility": "internal" }, { "constant": false, "id": 12417, "mutability": "mutable", "name": "_balances", "nameLocation": "1713:9:105", "nodeType": "VariableDeclaration", "scope": 12422, "src": "1696:26:105", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr", "typeString": "uint256[]" }, "typeName": { "baseType": { "id": 12415, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1696:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 12416, "nodeType": "ArrayTypeName", "src": "1696:9:105", "typeDescriptions": { "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr", "typeString": "uint256[]" } }, "visibility": "internal" }], "src": "1653:75:105" }, "returnParameters": { "id": 12421, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12420, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12422, "src": "1752:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12419, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1752:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1751:9:105" }, "scope": 12445, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12433, "nodeType": "FunctionDefinition", "src": "1767:178:105", "nodes": [], "functionSelector": "8f686e6a", "implemented": false, "kind": "function", "modifiers": [], "name": "calculateMintAmount", "nameLocation": "1776:19:105", "parameters": { "id": 12429, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12424, "mutability": "mutable", "name": "_currentValueInProtocol", "nameLocation": "1813:23:105", "nodeType": "VariableDeclaration", "scope": 12433, "src": "1805:31:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12423, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1805:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }, { "constant": false, "id": 12426, "mutability": "mutable", "name": "_newValueAdded", "nameLocation": "1854:14:105", "nodeType": "VariableDeclaration", "scope": 12433, "src": "1846:22:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12425, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1846:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }, { "constant": false, "id": 12428, "mutability": "mutable", "name": "_existingEzETHSupply", "nameLocation": "1886:20:105", "nodeType": "VariableDeclaration", "scope": 12433, "src": "1878:28:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12427, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1878:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1795:117:105" }, "returnParameters": { "id": 12432, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12431, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12433, "src": "1936:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12430, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1936:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1935:9:105" }, "scope": 12445, "stateMutability": "pure", "virtual": false, "visibility": "external" }, { "id": 12444, "nodeType": "FunctionDefinition", "src": "1951:183:105", "nodes": [], "functionSelector": "c5c83cb0", "implemented": false, "kind": "function", "modifiers": [], "name": "calculateRedeemAmount", "nameLocation": "1960:21:105", "parameters": { "id": 12440, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12435, "mutability": "mutable", "name": "_ezETHBeingBurned", "nameLocation": "1999:17:105", "nodeType": "VariableDeclaration", "scope": 12444, "src": "1991:25:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12434, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1991:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }, { "constant": false, "id": 12437, "mutability": "mutable", "name": "_existingEzETHSupply", "nameLocation": "2034:20:105", "nodeType": "VariableDeclaration", "scope": 12444, "src": "2026:28:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12436, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2026:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }, { "constant": false, "id": 12439, "mutability": "mutable", "name": "_currentValueInProtocol", "nameLocation": "2072:23:105", "nodeType": "VariableDeclaration", "scope": 12444, "src": "2064:31:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12438, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2064:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1981:120:105" }, "returnParameters": { "id": 12443, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12442, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12444, "src": "2125:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12441, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2125:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "2124:9:105" }, "scope": 12445, "stateMutability": "pure", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [], "canonicalName": "IRenzoOracle", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [12445], "name": "IRenzoOracle", "nameLocation": "1362:12:105", "scope": 12457, "usedErrors": [], "usedEvents": [] }, { "id": 12456, "nodeType": "ContractDefinition", "src": "2138:164:105", "nodes": [{ "id": 12448, "nodeType": "FunctionDefinition", "src": "2168:51:105", "nodes": [], "functionSelector": "d123ccd5", "implemented": false, "kind": "function", "modifiers": [], "name": "depositETHFromProtocol", "nameLocation": "2177:22:105", "parameters": { "id": 12446, "nodeType": "ParameterList", "parameters": [], "src": "2199:2:105" }, "returnParameters": { "id": 12447, "nodeType": "ParameterList", "parameters": [], "src": "2218:0:105" }, "scope": 12456, "stateMutability": "payable", "virtual": false, "visibility": "external" }, { "id": 12455, "nodeType": "FunctionDefinition", "src": "2225:75:105", "nodes": [], "functionSelector": "649aca4a", "implemented": false, "kind": "function", "modifiers": [], "name": "totalEarned", "nameLocation": "2234:11:105", "parameters": { "id": 12451, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12450, "mutability": "mutable", "name": "tokenAddress", "nameLocation": "2254:12:105", "nodeType": "VariableDeclaration", "scope": 12455, "src": "2246:20:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 12449, "name": "address", "nodeType": "ElementaryTypeName", "src": "2246:7:105", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }], "src": "2245:22:105" }, "returnParameters": { "id": 12454, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12453, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12455, "src": "2291:7:105", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 12452, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2291:7:105", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "2290:9:105" }, "scope": 12456, "stateMutability": "view", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [], "canonicalName": "IDepositQueue", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [12456], "name": "IDepositQueue", "nameLocation": "2148:13:105", "scope": 12457, "usedErrors": [], "usedEvents": [] }], "license": "Apache-2.0" }, "id": 105 };
