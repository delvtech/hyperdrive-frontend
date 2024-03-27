export const ScriptBase = { "abi": [], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": {}, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Base.sol\":\"ScriptBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [], "devdoc": { "kind": "dev", "methods": {}, "version": 1 }, "userdoc": { "kind": "user", "methods": {}, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "lib/forge-std/src/Base.sol": "ScriptBase" }, "libraries": {} }, "sources": { "lib/forge-std/src/Base.sol": { "keccak256": "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c", "urls": ["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224", "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"], "license": "MIT" }, "lib/forge-std/src/StdStorage.sol": { "keccak256": "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d", "urls": ["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26", "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"], "license": "MIT" }, "lib/forge-std/src/Vm.sol": { "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4", "urls": ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"], "license": "MIT" } }, "version": 1 }, "ast": { "absolutePath": "lib/forge-std/src/Base.sol", "id": 30217, "exportedSymbols": { "CommonBase": [30204], "ScriptBase": [30216], "StdStorage": [36212], "TestBase": [30207], "Vm": [41312], "VmSafe": [40840] }, "nodeType": "SourceUnit", "src": "32:1761:150", "nodes": [{ "id": 30143, "nodeType": "PragmaDirective", "src": "32:31:150", "nodes": [], "literals": ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"] }, { "id": 30145, "nodeType": "ImportDirective", "src": "65:44:150", "nodes": [], "absolutePath": "lib/forge-std/src/StdStorage.sol", "file": "./StdStorage.sol", "nameLocation": "-1:-1:-1", "scope": 30217, "sourceUnit": 37666, "symbolAliases": [{ "foreign": { "id": 30144, "name": "StdStorage", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 36212, "src": "73:10:150", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }], "unitAlias": "" }, { "id": 30148, "nodeType": "ImportDirective", "src": "110:36:150", "nodes": [], "absolutePath": "lib/forge-std/src/Vm.sol", "file": "./Vm.sol", "nameLocation": "-1:-1:-1", "scope": 30217, "sourceUnit": 41313, "symbolAliases": [{ "foreign": { "id": 30146, "name": "Vm", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41312, "src": "118:2:150", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }, { "foreign": { "id": 30147, "name": "VmSafe", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 40840, "src": "122:6:150", "typeDescriptions": {} }, "nameLocation": "-1:-1:-1" }], "unitAlias": "" }, { "id": 30204, "nodeType": "ContractDefinition", "src": "148:1493:150", "nodes": [{ "id": 30162, "nodeType": "VariableDeclaration", "src": "254:94:150", "nodes": [], "constant": true, "mutability": "constant", "name": "VM_ADDRESS", "nameLocation": "280:10:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30149, "name": "address", "nodeType": "ElementaryTypeName", "src": "254:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "arguments": [{ "arguments": [{ "arguments": [{ "arguments": [{ "hexValue": "6865766d20636865617420636f6465", "id": 30157, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "327:17:150", "typeDescriptions": { "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d", "typeString": "literal_string \"hevm cheat code\"" }, "value": "hevm cheat code" }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d", "typeString": "literal_string \"hevm cheat code\"" }], "id": 30156, "name": "keccak256", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -8, "src": "317:9:150", "typeDescriptions": { "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$", "typeString": "function (bytes memory) pure returns (bytes32)" } }, "id": 30158, "isConstant": false, "isLValue": false, "isPure": true, "kind": "functionCall", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "317:28:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_bytes32", "typeString": "bytes32" }], "id": 30155, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "309:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_uint256_$", "typeString": "type(uint256)" }, "typeName": { "id": 30154, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "309:7:150", "typeDescriptions": {} } }, "id": 30159, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "309:37:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_uint256", "typeString": "uint256" }], "id": 30153, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "301:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_uint160_$", "typeString": "type(uint160)" }, "typeName": { "id": 30152, "name": "uint160", "nodeType": "ElementaryTypeName", "src": "301:7:150", "typeDescriptions": {} } }, "id": 30160, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "301:46:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_uint160", "typeString": "uint160" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_uint160", "typeString": "uint160" }], "id": 30151, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "293:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)" }, "typeName": { "id": 30150, "name": "address", "nodeType": "ElementaryTypeName", "src": "293:7:150", "typeDescriptions": {} } }, "id": 30161, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "293:55:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "id": 30165, "nodeType": "VariableDeclaration", "src": "438:78:150", "nodes": [], "constant": true, "mutability": "constant", "name": "CONSOLE", "nameLocation": "464:7:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30163, "name": "address", "nodeType": "ElementaryTypeName", "src": "438:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "hexValue": "307830303030303030303030303030303030303036333646366537333646366336353265366336663637", "id": 30164, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "474:42:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "value": "0x000000000000000000636F6e736F6c652e6c6f67" }, "visibility": "internal" }, { "id": 30168, "nodeType": "VariableDeclaration", "src": "623:86:150", "nodes": [], "constant": true, "mutability": "constant", "name": "CREATE2_FACTORY", "nameLocation": "649:15:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30166, "name": "address", "nodeType": "ElementaryTypeName", "src": "623:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "hexValue": "307834653539623434383437623337393537383538383932306341373846624632366330423439353643", "id": 30167, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "667:42:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "value": "0x4e59b44847b379578588920cA78FbF26c0B4956C" }, "visibility": "internal" }, { "id": 30182, "nodeType": "VariableDeclaration", "src": "812:105:150", "nodes": [], "constant": true, "mutability": "constant", "name": "DEFAULT_SENDER", "nameLocation": "838:14:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30169, "name": "address", "nodeType": "ElementaryTypeName", "src": "812:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "arguments": [{ "arguments": [{ "arguments": [{ "arguments": [{ "hexValue": "666f756e6472792064656661756c742063616c6c6572", "id": 30177, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "889:24:150", "typeDescriptions": { "typeIdentifier": "t_stringliteral_ee6e12ba256a78bc5d3ab9651804c8ab1f12e6bbf3894d4083f33e07309d1f38", "typeString": "literal_string \"foundry default caller\"" }, "value": "foundry default caller" }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_stringliteral_ee6e12ba256a78bc5d3ab9651804c8ab1f12e6bbf3894d4083f33e07309d1f38", "typeString": "literal_string \"foundry default caller\"" }], "id": 30176, "name": "keccak256", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -8, "src": "879:9:150", "typeDescriptions": { "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$", "typeString": "function (bytes memory) pure returns (bytes32)" } }, "id": 30178, "isConstant": false, "isLValue": false, "isPure": true, "kind": "functionCall", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "879:35:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_bytes32", "typeString": "bytes32" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_bytes32", "typeString": "bytes32" }], "id": 30175, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "871:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_uint256_$", "typeString": "type(uint256)" }, "typeName": { "id": 30174, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "871:7:150", "typeDescriptions": {} } }, "id": 30179, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "871:44:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_uint256", "typeString": "uint256" }], "id": 30173, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "863:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_uint160_$", "typeString": "type(uint160)" }, "typeName": { "id": 30172, "name": "uint160", "nodeType": "ElementaryTypeName", "src": "863:7:150", "typeDescriptions": {} } }, "id": 30180, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "863:53:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_uint160", "typeString": "uint160" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_uint160", "typeString": "uint160" }], "id": 30171, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "855:7:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)" }, "typeName": { "id": 30170, "name": "address", "nodeType": "ElementaryTypeName", "src": "855:7:150", "typeDescriptions": {} } }, "id": 30181, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "855:62:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "visibility": "internal" }, { "id": 30185, "nodeType": "VariableDeclaration", "src": "992:92:150", "nodes": [], "constant": true, "mutability": "constant", "name": "DEFAULT_TEST_CONTRACT", "nameLocation": "1018:21:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30183, "name": "address", "nodeType": "ElementaryTypeName", "src": "992:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "hexValue": "307835363135644542373938424233453464466130313339644661316233443433334363323362373266", "id": 30184, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1042:42:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "value": "0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f" }, "visibility": "internal" }, { "id": 30188, "nodeType": "VariableDeclaration", "src": "1158:89:150", "nodes": [], "constant": true, "mutability": "constant", "name": "MULTICALL3_ADDRESS", "nameLocation": "1184:18:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "typeName": { "id": 30186, "name": "address", "nodeType": "ElementaryTypeName", "src": "1158:7:150", "stateMutability": "nonpayable", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }, "value": { "hexValue": "307863413131626465303539373762333633313136373032383836326245326131373339373643413131", "id": 30187, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1205:42:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" }, "value": "0xcA11bde05977b3631167028862bE2a173976CA11" }, "visibility": "internal" }, { "id": 30191, "nodeType": "VariableDeclaration", "src": "1294:130:150", "nodes": [], "constant": true, "mutability": "constant", "name": "SECP256K1_ORDER", "nameLocation": "1320:15:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 30189, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1294:7:150", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "value": { "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337", "id": 30190, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1346:78:150", "typeDescriptions": { "typeIdentifier": "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1", "typeString": "int_const 1157...(70 digits omitted)...4337" }, "value": "115792089237316195423570985008687907852837564279074904382605163141518161494337" }, "visibility": "internal" }, { "id": 30194, "nodeType": "VariableDeclaration", "src": "1431:126:150", "nodes": [], "constant": true, "mutability": "constant", "name": "UINT256_MAX", "nameLocation": "1457:11:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 30192, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1431:7:150", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "value": { "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335", "id": 30193, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1479:78:150", "typeDescriptions": { "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1", "typeString": "int_const 1157...(70 digits omitted)...9935" }, "value": "115792089237316195423570985008687907853269984665640564039457584007913129639935" }, "visibility": "internal" }, { "id": 30200, "nodeType": "VariableDeclaration", "src": "1564:40:150", "nodes": [], "constant": true, "mutability": "constant", "name": "vm", "nameLocation": "1585:2:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_contract$_Vm_$41312", "typeString": "contract Vm" }, "typeName": { "id": 30196, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 30195, "name": "Vm", "nameLocations": ["1564:2:150"], "nodeType": "IdentifierPath", "referencedDeclaration": 41312, "src": "1564:2:150" }, "referencedDeclaration": 41312, "src": "1564:2:150", "typeDescriptions": { "typeIdentifier": "t_contract$_Vm_$41312", "typeString": "contract Vm" } }, "value": { "arguments": [{ "id": 30198, "name": "VM_ADDRESS", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 30162, "src": "1593:10:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_address", "typeString": "address" }], "id": 30197, "name": "Vm", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41312, "src": "1590:2:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_contract$_Vm_$41312_$", "typeString": "type(contract Vm)" } }, "id": 30199, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "1590:14:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_contract$_Vm_$41312", "typeString": "contract Vm" } }, "visibility": "internal" }, { "id": 30203, "nodeType": "VariableDeclaration", "src": "1610:28:150", "nodes": [], "constant": false, "mutability": "mutable", "name": "stdstore", "nameLocation": "1630:8:150", "scope": 30204, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_struct$_StdStorage_$36212_storage", "typeString": "struct StdStorage" }, "typeName": { "id": 30202, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 30201, "name": "StdStorage", "nameLocations": ["1610:10:150"], "nodeType": "IdentifierPath", "referencedDeclaration": 36212, "src": "1610:10:150" }, "referencedDeclaration": 36212, "src": "1610:10:150", "typeDescriptions": { "typeIdentifier": "t_struct$_StdStorage_$36212_storage_ptr", "typeString": "struct StdStorage" } }, "visibility": "internal" }], "abstract": true, "baseContracts": [], "canonicalName": "CommonBase", "contractDependencies": [], "contractKind": "contract", "fullyImplemented": true, "linearizedBaseContracts": [30204], "name": "CommonBase", "nameLocation": "166:10:150", "scope": 30217, "usedErrors": [], "usedEvents": [] }, { "id": 30207, "nodeType": "ContractDefinition", "src": "1643:43:150", "nodes": [], "abstract": true, "baseContracts": [{ "baseName": { "id": 30205, "name": "CommonBase", "nameLocations": ["1673:10:150"], "nodeType": "IdentifierPath", "referencedDeclaration": 30204, "src": "1673:10:150" }, "id": 30206, "nodeType": "InheritanceSpecifier", "src": "1673:10:150" }], "canonicalName": "TestBase", "contractDependencies": [], "contractKind": "contract", "fullyImplemented": true, "linearizedBaseContracts": [30207, 30204], "name": "TestBase", "nameLocation": "1661:8:150", "scope": 30217, "usedErrors": [], "usedEvents": [] }, { "id": 30216, "nodeType": "ContractDefinition", "src": "1688:104:150", "nodes": [{ "id": 30215, "nodeType": "VariableDeclaration", "src": "1737:52:150", "nodes": [], "constant": true, "mutability": "constant", "name": "vmSafe", "nameLocation": "1762:6:150", "scope": 30216, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_contract$_VmSafe_$40840", "typeString": "contract VmSafe" }, "typeName": { "id": 30211, "nodeType": "UserDefinedTypeName", "pathNode": { "id": 30210, "name": "VmSafe", "nameLocations": ["1737:6:150"], "nodeType": "IdentifierPath", "referencedDeclaration": 40840, "src": "1737:6:150" }, "referencedDeclaration": 40840, "src": "1737:6:150", "typeDescriptions": { "typeIdentifier": "t_contract$_VmSafe_$40840", "typeString": "contract VmSafe" } }, "value": { "arguments": [{ "id": 30213, "name": "VM_ADDRESS", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 30162, "src": "1778:10:150", "typeDescriptions": { "typeIdentifier": "t_address", "typeString": "address" } }], "expression": { "argumentTypes": [{ "typeIdentifier": "t_address", "typeString": "address" }], "id": 30212, "name": "VmSafe", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 40840, "src": "1771:6:150", "typeDescriptions": { "typeIdentifier": "t_type$_t_contract$_VmSafe_$40840_$", "typeString": "type(contract VmSafe)" } }, "id": 30214, "isConstant": false, "isLValue": false, "isPure": true, "kind": "typeConversion", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "1771:18:150", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_contract$_VmSafe_$40840", "typeString": "contract VmSafe" } }, "visibility": "internal" }], "abstract": true, "baseContracts": [{ "baseName": { "id": 30208, "name": "CommonBase", "nameLocations": ["1720:10:150"], "nodeType": "IdentifierPath", "referencedDeclaration": 30204, "src": "1720:10:150" }, "id": 30209, "nodeType": "InheritanceSpecifier", "src": "1720:10:150" }], "canonicalName": "ScriptBase", "contractDependencies": [], "contractKind": "contract", "fullyImplemented": true, "linearizedBaseContracts": [30216, 30204], "name": "ScriptBase", "nameLocation": "1706:10:150", "scope": 30217, "usedErrors": [], "usedEvents": [] }], "license": "MIT" }, "id": 150 };
