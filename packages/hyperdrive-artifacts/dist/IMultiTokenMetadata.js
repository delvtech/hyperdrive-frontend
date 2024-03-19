export const IMultiTokenMetadata = { "abi": [{ "type": "function", "name": "PERMIT_TYPEHASH", "inputs": [], "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }], "stateMutability": "view" }, { "type": "function", "name": "domainSeparator", "inputs": [], "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }], "stateMutability": "view" }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": { "PERMIT_TYPEHASH()": "30adf81f", "domainSeparator()": "f698da25" }, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"returns\":{\"_0\":\"The EIP712 permit typehash of the MultiToken.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"Gets the EIP712 permit typehash of the MultiToken.\"},\"domainSeparator()\":{\"notice\":\"Gets the EIP712 domain separator of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":\"IMultiTokenMetadata\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [], "stateMutability": "view", "type": "function", "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }] }, { "inputs": [], "stateMutability": "view", "type": "function", "name": "domainSeparator", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }] }], "devdoc": { "kind": "dev", "methods": { "PERMIT_TYPEHASH()": { "returns": { "_0": "The EIP712 permit typehash of the MultiToken." } }, "domainSeparator()": { "returns": { "_0": "The EIP712 domain separator of the MultiToken." } } }, "version": 1 }, "userdoc": { "kind": "user", "methods": { "PERMIT_TYPEHASH()": { "notice": "Gets the EIP712 permit typehash of the MultiToken." }, "domainSeparator()": { "notice": "Gets the EIP712 domain separator of the MultiToken." } }, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "contracts/src/interfaces/IMultiTokenMetadata.sol": "IMultiTokenMetadata" }, "libraries": {} }, "sources": { "contracts/src/interfaces/IMultiTokenMetadata.sol": { "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca", "urls": ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"], "license": "Apache-2.0" } }, "version": 1 }, "ast": { "absolutePath": "contracts/src/interfaces/IMultiTokenMetadata.sol", "id": 12181, "exportedSymbols": { "IMultiTokenMetadata": [12180] }, "nodeType": "SourceUnit", "src": "39:491:101", "nodes": [{ "id": 12167, "nodeType": "PragmaDirective", "src": "39:23:101", "nodes": [], "literals": ["solidity", "0.8", ".20"] }, { "id": 12180, "nodeType": "ContractDefinition", "src": "64:465:101", "nodes": [{ "id": 12173, "nodeType": "FunctionDefinition", "src": "272:59:101", "nodes": [], "documentation": { "id": 12168, "nodeType": "StructuredDocumentation", "src": "100:124:101", "text": "@notice Gets the EIP712 permit typehash of the MultiToken.\n @return The EIP712 permit typehash of the MultiToken." }, "functionSelector": "30adf81f", "implemented": false, "kind": "function", "modifiers": [], "name": "PERMIT_TYPEHASH", "nameLocation": "281:15:101", "parameters": { "id": 12169, "nodeType": "ParameterList", "parameters": [], "src": "296:2:101" }, "returnParameters": { "id": 12172, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12171, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12173, "src": "322:7:101", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" }, "typeName": { "id": 12170, "name": "bytes32", "nodeType": "ElementaryTypeName", "src": "322:7:101", "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" } }, "visibility": "internal" }], "src": "321:9:101" }, "scope": 12180, "stateMutability": "view", "virtual": false, "visibility": "external" }, { "id": 12179, "nodeType": "FunctionDefinition", "src": "468:59:101", "nodes": [], "documentation": { "id": 12174, "nodeType": "StructuredDocumentation", "src": "337:126:101", "text": "@notice Gets the EIP712 domain separator of the MultiToken.\n @return The EIP712 domain separator of the MultiToken." }, "functionSelector": "f698da25", "implemented": false, "kind": "function", "modifiers": [], "name": "domainSeparator", "nameLocation": "477:15:101", "parameters": { "id": 12175, "nodeType": "ParameterList", "parameters": [], "src": "492:2:101" }, "returnParameters": { "id": 12178, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 12177, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 12179, "src": "518:7:101", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" }, "typeName": { "id": 12176, "name": "bytes32", "nodeType": "ElementaryTypeName", "src": "518:7:101", "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" } }, "visibility": "internal" }], "src": "517:9:101" }, "scope": 12180, "stateMutability": "view", "virtual": false, "visibility": "external" }], "abstract": false, "baseContracts": [], "canonicalName": "IMultiTokenMetadata", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "linearizedBaseContracts": [12180], "name": "IMultiTokenMetadata", "nameLocation": "74:19:101", "scope": 12181, "usedErrors": [], "usedEvents": [] }], "license": "Apache-2.0" }, "id": 101 };
