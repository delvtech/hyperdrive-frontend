export const IERC20 = { "abi": [{ "type": "function", "name": "allowance", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "spender", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "approve", "inputs": [{ "name": "spender", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "balanceOf", "inputs": [{ "name": "account", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "decimals", "inputs": [], "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }], "stateMutability": "view" }, { "type": "function", "name": "name", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "symbol", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "totalSupply", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "transfer", "inputs": [{ "name": "to", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "transferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "nonpayable" }, { "type": "event", "name": "Approval", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "spender", "type": "address", "indexed": true, "internalType": "address" }, { "name": "value", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "name": "from", "type": "address", "indexed": true, "internalType": "address" }, { "name": "to", "type": "address", "indexed": true, "internalType": "address" }, { "name": "value", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": { "allowance(address,address)": "dd62ed3e", "approve(address,uint256)": "095ea7b3", "balanceOf(address)": "70a08231", "decimals()": "313ce567", "name()": "06fdde03", "symbol()": "95d89b41", "totalSupply()": "18160ddd", "transfer(address,uint256)": "a9059cbb", "transferFrom(address,address,uint256)": "23b872dd" }, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address", "indexed": true }, { "internalType": "address", "name": "spender", "type": "address", "indexed": true }, { "internalType": "uint256", "name": "value", "type": "uint256", "indexed": false }], "type": "event", "name": "Approval", "anonymous": false }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address", "indexed": true }, { "internalType": "address", "name": "to", "type": "address", "indexed": true }, { "internalType": "uint256", "name": "value", "type": "uint256", "indexed": false }], "type": "event", "name": "Transfer", "anonymous": false }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "stateMutability": "view", "type": "function", "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function", "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }] }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "stateMutability": "view", "type": "function", "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }] }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function", "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }] }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function", "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }] }], "devdoc": { "kind": "dev", "methods": { "allowance(address,address)": { "params": { "owner": "The owner of the tokens.", "spender": "The spender of the tokens." }, "returns": { "_0": "The allowance of the spender for the owner." } }, "approve(address,uint256)": { "params": { "amount": "The new allowance of the spender.", "spender": "The account with the allowance." }, "returns": { "_0": "A flag indicating whether or not the approval succeeded." } }, "balanceOf(address)": { "params": { "account": "The owner of the tokens." }, "returns": { "_0": "The account's balance." } }, "decimals()": { "returns": { "_0": "The token's decimals." } }, "name()": { "returns": { "_0": "The token's name." } }, "symbol()": { "returns": { "_0": "The token's symbol." } }, "totalSupply()": { "returns": { "_0": "The token's total supply." } }, "transfer(address,uint256)": { "params": { "amount": "The amount of tokens that will be transferred.", "to": "The recipient of the tokens." }, "returns": { "_0": "A flag indicating whether or not the transfer succeeded." } }, "transferFrom(address,address,uint256)": { "params": { "amount": "The amount of tokens that will be transferred.", "from": "The owner of the tokens.", "to": "The recipient of the tokens." }, "returns": { "_0": "A flag indicating whether or not the transfer succeeded." } } }, "version": 1 }, "userdoc": { "kind": "user", "methods": { "allowance(address,address)": { "notice": "Gets the allowance of a spender for an owner." }, "approve(address,uint256)": { "notice": "Updates the allowance of a spender on behalf of the sender." }, "balanceOf(address)": { "notice": "Gets the balance of an account." }, "decimals()": { "notice": "Gets the token's decimals." }, "name()": { "notice": "Gets the token's name." }, "symbol()": { "notice": "Gets the token's symbol." }, "totalSupply()": { "notice": "Gets the token's total supply." }, "transfer(address,uint256)": { "notice": "Transfers tokens from the sender's account to another account." }, "transferFrom(address,address,uint256)": { "notice": "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance." } }, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "contracts/src/interfaces/IERC20.sol": "IERC20" }, "libraries": {} }, "sources": { "contracts/src/interfaces/IERC20.sol": { "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9", "urls": ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"], "license": "Apache-2.0" } }, "version": 1 }, "ast": { "absolutePath": "contracts/src/interfaces/IERC20.sol", "id": 10418, "exportedSymbols": { "IERC20": [10417] }, "nodeType": "SourceUnit", "src": "39:2650:79", "nodes": [{ "id": 10324, "nodeType": "PragmaDirective", "src": "39:23:79", "nodes": [], "literals": ["solidity", "0.8", ".20"] }, { "id": 10417, "nodeType": "ContractDefinition", "src": "64:2624:79", "nodes": [{ "id": 10333, "nodeType": "EventDefinition", "src": "168:72:79", "nodes": [], "anonymous": false, "documentation": { "id": 10325, "nodeType": "StructuredDocumentation", "src": "87:76:79", "text": "@notice Emitted when tokens are transferred from one account to another." }, "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "name": "Transfer", "nameLocation": "174:8:79", "parameters": { "id": 10332, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10327, "indexed": true, "mutability": "mutable", "name": "from", "nameLocation": "199:4:79", "nodeType": "VariableDeclaration", "scope": 10333, "src": "183:20:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10326, "name": "address", "nodeType": "ElementaryTypeName", "src": "183:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10329, "indexed": true, "mutability": "mutable", "name": "to", "nameLocation": "221:2:79", "nodeType": "VariableDeclaration", "scope": 10333, "src": "205:18:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10328, "name": "address", "nodeType": "ElementaryTypeName", "src": "205:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10331, "indexed": false, "mutability": "mutable", "name": "value", "nameLocation": "233:5:79", "nodeType": "VariableDeclaration", "scope": 10333, "src": "225:13:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10330, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "225:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "182:57:79" } }, { "id": 10342, "nodeType": "EventDefinition", "src": "320:108:79", "nodes": [], "anonymous": false, "documentation": { "id": 10334, "nodeType": "StructuredDocumentation", "src": "246:69:79", "text": "@notice Emitted when an owner changes the approval for a spender." }, "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "name": "Approval", "nameLocation": "326:8:79", "parameters": { "id": 10341, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10336, "indexed": true, "mutability": "mutable", "name": "owner", "nameLocation": "360:5:79", "nodeType": "VariableDeclaration", "scope": 10342, "src": "344:21:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10335, "name": "address", "nodeType": "ElementaryTypeName", "src": "344:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10338, "indexed": true, "mutability": "mutable", "name": "spender", "nameLocation": "391:7:79", "nodeType": "VariableDeclaration", "scope": 10342, "src": "375:23:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10337, "name": "address", "nodeType": "ElementaryTypeName", "src": "375:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10340, "indexed": false, "mutability": "mutable", "name": "value", "nameLocation": "416:5:79", "nodeType": "VariableDeclaration", "scope": 10342, "src": "408:13:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10339, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "408:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "334:93:79" } }, { "id": 10352, "nodeType": "FunctionDefinition", "src": "694:74:79", "nodes": [], "documentation": { "id": 10343, "nodeType": "StructuredDocumentation", "src": "434:255:79", "text": "@notice Updates the allowance of a spender on behalf of the sender.\n @param spender The account with the allowance.\n @param amount The new allowance of the spender.\n @return A flag indicating whether or not the approval succeeded." }, "functionSelector": "095ea7b3", "implemented": false, "kind": "function", "modifiers": [], "name": "approve", "nameLocation": "703:7:79", "parameters": { "id": 10348, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10345, "mutability": "mutable", "name": "spender", "nameLocation": "719:7:79", "nodeType": "VariableDeclaration", "scope": 10352, "src": "711:15:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10344, "name": "address", "nodeType": "ElementaryTypeName", "src": "711:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10347, "mutability": "mutable", "name": "amount", "nameLocation": "736:6:79", "nodeType": "VariableDeclaration", "scope": 10352, "src": "728:14:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10346, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "728:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "710:33:79" }, "returnParameters": { "id": 10351, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10350, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10352, "src": "762:4:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" }, "typeName": { "id": 10349, "name": "bool", "nodeType": "ElementaryTypeName", "src": "762:4:79", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "visibility": "internal" }], "src": "761:6:79" }, "scope": 10417, "stateMutability": "nonpayable", "virtual": false, "visibility": "external" }, { "id": 10362, "nodeType": "FunctionDefinition", "src": "1042:70:79", "nodes": [], "documentation": { "id": 10353, "nodeType": "StructuredDocumentation", "src": "774:263:79", "text": "@notice Transfers tokens from the sender's account to another account.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded." }, "functionSelector": "a9059cbb", "implemented": false, "kind": "function", "modifiers": [], "name": "transfer", "nameLocation": "1051:8:79", "parameters": { "id": 10358, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10355, "mutability": "mutable", "name": "to", "nameLocation": "1068:2:79", "nodeType": "VariableDeclaration", "scope": 10362, "src": "1060:10:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10354, "name": "address", "nodeType": "ElementaryTypeName", "src": "1060:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10357, "mutability": "mutable", "name": "amount", "nameLocation": "1080:6:79", "nodeType": "VariableDeclaration", "scope": 10362, "src": "1072:14:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10356, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1072:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1059:28:79" }, "returnParameters": { "id": 10361, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10360, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10362, "src": "1106:4:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" }, "typeName": { "id": 10359, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1106:4:79", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "visibility": "internal" }], "src": "1105:6:79" }, "scope": 10417, "stateMutability": "nonpayable", "virtual": false, "visibility": "external" }, { "id": 10374, "nodeType": "FunctionDefinition", "src": "1471:118:79", "nodes": [], "documentation": { "id": 10363, "nodeType": "StructuredDocumentation", "src": "1118:348:79", "text": "@notice Transfers tokens from an owner to a recipient. This draws from\n         the sender's allowance.\n @param from The owner of the tokens.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded." }, "functionSelector": "23b872dd", "implemented": false, "kind": "function", "modifiers": [], "name": "transferFrom", "nameLocation": "1480:12:79", "parameters": { "id": 10370, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10365, "mutability": "mutable", "name": "from", "nameLocation": "1510:4:79", "nodeType": "VariableDeclaration", "scope": 10374, "src": "1502:12:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10364, "name": "address", "nodeType": "ElementaryTypeName", "src": "1502:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10367, "mutability": "mutable", "name": "to", "nameLocation": "1532:2:79", "nodeType": "VariableDeclaration", "scope": 10374, "src": "1524:10:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10366, "name": "address", "nodeType": "ElementaryTypeName", "src": "1524:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10369, "mutability": "mutable", "name": "amount", "nameLocation": "1552:6:79", "nodeType": "VariableDeclaration", "scope": 10374, "src": "1544:14:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10368, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1544:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "1492:72:79" }, "returnParameters": { "id": 10373, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10372, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10374, "src": "1583:4:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" }, "typeName": { "id": 10371, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1583:4:79", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "visibility": "internal" }], "src": "1582:6:79" }, "scope": 10417, "stateMutability": "nonpayable", "virtual": false, "visibility": "external" }, { "id": 10380, "nodeType": "FunctionDefinition", "src": "1668:54:79", "nodes": [], "documentation": { "id": 10375, "nodeType": "StructuredDocumentation", "src": "1595:68:79", "text": "@notice Gets the token's name.\n @return The token's name." }, "functionSelector": "06fdde03", "implemented": false, "kind": "function", "modifiers": [], "name": "name", "nameLocation": "1677:4:79", "parameters": { "id": 10376, "nodeType": "ParameterList", "parameters": [], "src": "1681:2:79" }, "returnParameters": { "id": 10379, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10378, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10380, "src": "1707:13:79", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_string_memory_ptr", "typeString": "string" }, "typeName": { "id": 10377, "name": "string", "nodeType": "ElementaryTypeName", "src": "1707:6:79", "typeDescriptions": { "typeIdentifier": "t_string_storage_ptr", "typeString": "string" } }, "visibility": "internal" }], "src": "1706:15:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 10386, "nodeType": "FunctionDefinition", "src": "1805:56:79", "nodes": [], "documentation": { "id": 10381, "nodeType": "StructuredDocumentation", "src": "1728:72:79", "text": "@notice Gets the token's symbol.\n @return The token's symbol." }, "functionSelector": "95d89b41", "implemented": false, "kind": "function", "modifiers": [], "name": "symbol", "nameLocation": "1814:6:79", "parameters": { "id": 10382, "nodeType": "ParameterList", "parameters": [], "src": "1820:2:79" }, "returnParameters": { "id": 10385, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10384, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10386, "src": "1846:13:79", "stateVariable": false, "storageLocation": "memory", "typeDescriptions": { "typeIdentifier": "t_string_memory_ptr", "typeString": "string" }, "typeName": { "id": 10383, "name": "string", "nodeType": "ElementaryTypeName", "src": "1846:6:79", "typeDescriptions": { "typeIdentifier": "t_string_storage_ptr", "typeString": "string" } }, "visibility": "internal" }], "src": "1845:15:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 10392, "nodeType": "FunctionDefinition", "src": "1948:50:79", "nodes": [], "documentation": { "id": 10387, "nodeType": "StructuredDocumentation", "src": "1867:76:79", "text": "@notice Gets the token's decimals.\n @return The token's decimals." }, "functionSelector": "313ce567", "implemented": false, "kind": "function", "modifiers": [], "name": "decimals", "nameLocation": "1957:8:79", "parameters": { "id": 10388, "nodeType": "ParameterList", "parameters": [], "src": "1965:2:79" }, "returnParameters": { "id": 10391, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10390, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10392, "src": "1991:5:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint8", "typeString": "uint8" }, "typeName": { "id": 10389, "name": "uint8", "nodeType": "ElementaryTypeName", "src": "1991:5:79", "typeDescriptions": { "typeIdentifier": "t_uint8", "typeString": "uint8" } }, "visibility": "internal" }], "src": "1990:7:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 10398, "nodeType": "FunctionDefinition", "src": "2093:55:79", "nodes": [], "documentation": { "id": 10393, "nodeType": "StructuredDocumentation", "src": "2004:84:79", "text": "@notice Gets the token's total supply.\n @return The token's total supply." }, "functionSelector": "18160ddd", "implemented": false, "kind": "function", "modifiers": [], "name": "totalSupply", "nameLocation": "2102:11:79", "parameters": { "id": 10394, "nodeType": "ParameterList", "parameters": [], "src": "2113:2:79" }, "returnParameters": { "id": 10397, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10396, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10398, "src": "2139:7:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10395, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2139:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "2138:9:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 10408, "nodeType": "FunctionDefinition", "src": "2372:105:79", "nodes": [], "documentation": { "id": 10399, "nodeType": "StructuredDocumentation", "src": "2154:213:79", "text": "@notice Gets the allowance of a spender for an owner.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The allowance of the spender for the owner." }, "functionSelector": "dd62ed3e", "implemented": false, "kind": "function", "modifiers": [], "name": "allowance", "nameLocation": "2381:9:79", "parameters": { "id": 10404, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10401, "mutability": "mutable", "name": "owner", "nameLocation": "2408:5:79", "nodeType": "VariableDeclaration", "scope": 10408, "src": "2400:13:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10400, "name": "address", "nodeType": "ElementaryTypeName", "src": "2400:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 10403, "mutability": "mutable", "name": "spender", "nameLocation": "2431:7:79", "nodeType": "VariableDeclaration", "scope": 10408, "src": "2423:15:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10402, "name": "address", "nodeType": "ElementaryTypeName", "src": "2423:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }], "src": "2390:54:79" }, "returnParameters": { "id": 10407, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10406, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10408, "src": "2468:7:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10405, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2468:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "2467:9:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 10416, "nodeType": "FunctionDefinition", "src": "2618:68:79", "nodes": [], "documentation": { "id": 10409, "nodeType": "StructuredDocumentation", "src": "2483:130:79", "text": "@notice Gets the balance of an account.\n @param account The owner of the tokens.\n @return The account's balance." }, "functionSelector": "70a08231", "implemented": false, "kind": "function", "modifiers": [], "name": "balanceOf", "nameLocation": "2627:9:79", "parameters": { "id": 10412, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10411, "mutability": "mutable", "name": "account", "nameLocation": "2645:7:79", "nodeType": "VariableDeclaration", "scope": 10416, "src": "2637:15:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 10410, "name": "address", "nodeType": "ElementaryTypeName", "src": "2637:7:79", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }], "src": "2636:17:79" }, "returnParameters": { "id": 10415, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 10414, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 10416, "src": "2677:7:79", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 10413, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2677:7:79", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "2676:9:79" }, "scope": 10417, "stateMutability": "view", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [], "canonicalName": "IERC20", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [10417], "name": "IERC20", "nameLocation": "74:6:79", "scope": 10418, "usedErrors": [], "usedEvents": [10333, 10342] }], "license": "Apache-2.0" }, "id": 79 };
