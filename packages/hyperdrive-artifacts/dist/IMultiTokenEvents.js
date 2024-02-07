export const IMultiTokenEvents = { "abi": [{ "type": "event", "name": "Approval", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "spender", "type": "address", "indexed": true, "internalType": "address" }, { "name": "value", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "ApprovalForAll", "inputs": [{ "name": "account", "type": "address", "indexed": true, "internalType": "address" }, { "name": "operator", "type": "address", "indexed": true, "internalType": "address" }, { "name": "approved", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "TransferSingle", "inputs": [{ "name": "operator", "type": "address", "indexed": true, "internalType": "address" }, { "name": "from", "type": "address", "indexed": true, "internalType": "address" }, { "name": "to", "type": "address", "indexed": true, "internalType": "address" }, { "name": "id", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "value", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": {}, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenEvents.sol\":\"IMultiTokenEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address", "indexed": true }, { "internalType": "address", "name": "spender", "type": "address", "indexed": true }, { "internalType": "uint256", "name": "value", "type": "uint256", "indexed": false }], "type": "event", "name": "Approval", "anonymous": false }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address", "indexed": true }, { "internalType": "address", "name": "operator", "type": "address", "indexed": true }, { "internalType": "bool", "name": "approved", "type": "bool", "indexed": false }], "type": "event", "name": "ApprovalForAll", "anonymous": false }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address", "indexed": true }, { "internalType": "address", "name": "from", "type": "address", "indexed": true }, { "internalType": "address", "name": "to", "type": "address", "indexed": true }, { "internalType": "uint256", "name": "id", "type": "uint256", "indexed": false }, { "internalType": "uint256", "name": "value", "type": "uint256", "indexed": false }], "type": "event", "name": "TransferSingle", "anonymous": false }], "devdoc": { "kind": "dev", "methods": {}, "version": 1 }, "userdoc": { "kind": "user", "methods": {}, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "contracts/src/interfaces/IMultiTokenEvents.sol": "IMultiTokenEvents" }, "libraries": {} }, "sources": { "contracts/src/interfaces/IMultiTokenEvents.sol": { "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002", "urls": ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"], "license": "Apache-2.0" } }, "version": 1 }, "ast": { "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol", "id": 8305, "exportedSymbols": { "IMultiTokenEvents": [8304] }, "nodeType": "SourceUnit", "src": "39:461:57", "nodes": [{ "id": 8275, "nodeType": "PragmaDirective", "src": "39:23:57", "nodes": [], "literals": ["solidity", "0.8", ".20"] }, { "id": 8304, "nodeType": "ContractDefinition", "src": "64:435:57", "nodes": [{ "id": 8287, "nodeType": "EventDefinition", "src": "98:162:57", "nodes": [], "anonymous": false, "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62", "name": "TransferSingle", "nameLocation": "104:14:57", "parameters": { "id": 8286, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 8277, "indexed": true, "mutability": "mutable", "name": "operator", "nameLocation": "144:8:57", "nodeType": "VariableDeclaration", "scope": 8287, "src": "128:24:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8276, "name": "address", "nodeType": "ElementaryTypeName", "src": "128:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8279, "indexed": true, "mutability": "mutable", "name": "from", "nameLocation": "178:4:57", "nodeType": "VariableDeclaration", "scope": 8287, "src": "162:20:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8278, "name": "address", "nodeType": "ElementaryTypeName", "src": "162:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8281, "indexed": true, "mutability": "mutable", "name": "to", "nameLocation": "208:2:57", "nodeType": "VariableDeclaration", "scope": 8287, "src": "192:18:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8280, "name": "address", "nodeType": "ElementaryTypeName", "src": "192:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8283, "indexed": false, "mutability": "mutable", "name": "id", "nameLocation": "228:2:57", "nodeType": "VariableDeclaration", "scope": 8287, "src": "220:10:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 8282, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "220:7:57", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }, { "constant": false, "id": 8285, "indexed": false, "mutability": "mutable", "name": "value", "nameLocation": "248:5:57", "nodeType": "VariableDeclaration", "scope": 8287, "src": "240:13:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 8284, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "240:7:57", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "118:141:57" } }, { "id": 8295, "nodeType": "EventDefinition", "src": "266:108:57", "nodes": [], "anonymous": false, "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "name": "Approval", "nameLocation": "272:8:57", "parameters": { "id": 8294, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 8289, "indexed": true, "mutability": "mutable", "name": "owner", "nameLocation": "306:5:57", "nodeType": "VariableDeclaration", "scope": 8295, "src": "290:21:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8288, "name": "address", "nodeType": "ElementaryTypeName", "src": "290:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8291, "indexed": true, "mutability": "mutable", "name": "spender", "nameLocation": "337:7:57", "nodeType": "VariableDeclaration", "scope": 8295, "src": "321:23:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8290, "name": "address", "nodeType": "ElementaryTypeName", "src": "321:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8293, "indexed": false, "mutability": "mutable", "name": "value", "nameLocation": "362:5:57", "nodeType": "VariableDeclaration", "scope": 8295, "src": "354:13:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 8292, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "354:7:57", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "internal" }], "src": "280:93:57" } }, { "id": 8303, "nodeType": "EventDefinition", "src": "380:117:57", "nodes": [], "anonymous": false, "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", "name": "ApprovalForAll", "nameLocation": "386:14:57", "parameters": { "id": 8302, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 8297, "indexed": true, "mutability": "mutable", "name": "account", "nameLocation": "426:7:57", "nodeType": "VariableDeclaration", "scope": 8303, "src": "410:23:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8296, "name": "address", "nodeType": "ElementaryTypeName", "src": "410:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8299, "indexed": true, "mutability": "mutable", "name": "operator", "nameLocation": "459:8:57", "nodeType": "VariableDeclaration", "scope": 8303, "src": "443:24:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 8298, "name": "address", "nodeType": "ElementaryTypeName", "src": "443:7:57", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "constant": false, "id": 8301, "indexed": false, "mutability": "mutable", "name": "approved", "nameLocation": "482:8:57", "nodeType": "VariableDeclaration", "scope": 8303, "src": "477:13:57", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" }, "typeName": { "id": 8300, "name": "bool", "nodeType": "ElementaryTypeName", "src": "477:4:57", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "visibility": "internal" }], "src": "400:96:57" } }], "abstract": false, "baseContracts": [], "canonicalName": "IMultiTokenEvents", "contractDependencies": [], "contractKind": "interface", "fullyImplemented": true, "linearizedBaseContracts": [8304], "name": "IMultiTokenEvents", "nameLocation": "74:17:57", "scope": 8305, "usedErrors": [], "usedEvents": [8287, 8295, 8303] }], "license": "Apache-2.0" }, "id": 57 };
