export const ReentrancyGuard = { "abi": [{ "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }], "bytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "deployedBytecode": { "object": "0x", "sourceMap": "", "linkReferences": {} }, "methodIdentifiers": {}, "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}", "metadata": { "compiler": { "version": "0.8.20+commit.a1b79de6" }, "language": "Solidity", "output": { "abi": [{ "inputs": [], "type": "error", "name": "ReentrancyGuardReentrantCall" }], "devdoc": { "kind": "dev", "methods": {}, "version": 1 }, "userdoc": { "kind": "user", "methods": {}, "version": 1 } }, "settings": { "remappings": ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"], "optimizer": { "enabled": true, "runs": 200 }, "metadata": { "bytecodeHash": "ipfs" }, "compilationTarget": { "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": "ReentrancyGuard" }, "libraries": {} }, "sources": { "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": { "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236", "urls": ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"], "license": "MIT" } }, "version": 1 }, "ast": { "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol", "id": 72174, "exportedSymbols": { "ReentrancyGuard": [72173] }, "nodeType": "SourceUnit", "src": "109:3131:175", "nodes": [{ "id": 72106, "nodeType": "PragmaDirective", "src": "109:24:175", "nodes": [], "literals": ["solidity", "^", "0.8", ".20"] }, { "id": 72173, "nodeType": "ContractDefinition", "src": "886:2353:175", "nodes": [{ "id": 72110, "nodeType": "VariableDeclaration", "src": "1674:40:175", "nodes": [], "constant": true, "mutability": "constant", "name": "NOT_ENTERED", "nameLocation": "1699:11:175", "scope": 72173, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 72108, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1674:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "value": { "hexValue": "31", "id": 72109, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1713:1:175", "typeDescriptions": { "typeIdentifier": "t_rational_1_by_1", "typeString": "int_const 1" }, "value": "1" }, "visibility": "private" }, { "id": 72113, "nodeType": "VariableDeclaration", "src": "1720:36:175", "nodes": [], "constant": true, "mutability": "constant", "name": "ENTERED", "nameLocation": "1745:7:175", "scope": 72173, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 72111, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1720:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "value": { "hexValue": "32", "id": 72112, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1755:1:175", "typeDescriptions": { "typeIdentifier": "t_rational_2_by_1", "typeString": "int_const 2" }, "value": "2" }, "visibility": "private" }, { "id": 72115, "nodeType": "VariableDeclaration", "src": "1763:23:175", "nodes": [], "constant": false, "mutability": "mutable", "name": "_status", "nameLocation": "1779:7:175", "scope": 72173, "stateVariable": true, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "typeName": { "id": 72114, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1763:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "visibility": "private" }, { "id": 72118, "nodeType": "ErrorDefinition", "src": "1850:37:175", "nodes": [], "documentation": { "id": 72116, "nodeType": "StructuredDocumentation", "src": "1793:52:175", "text": " @dev Unauthorized reentrant call." }, "errorSelector": "3ee5aeb5", "name": "ReentrancyGuardReentrantCall", "nameLocation": "1856:28:175", "parameters": { "id": 72117, "nodeType": "ParameterList", "parameters": [], "src": "1884:2:175" } }, { "id": 72126, "nodeType": "FunctionDefinition", "src": "1893:52:175", "nodes": [], "body": { "id": 72125, "nodeType": "Block", "src": "1907:38:175", "nodes": [], "statements": [{ "expression": { "id": 72123, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": { "id": 72121, "name": "_status", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72115, "src": "1917:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "nodeType": "Assignment", "operator": "=", "rightHandSide": { "id": 72122, "name": "NOT_ENTERED", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72110, "src": "1927:11:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "src": "1917:21:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 72124, "nodeType": "ExpressionStatement", "src": "1917:21:175" }] }, "implemented": true, "kind": "constructor", "modifiers": [], "name": "", "nameLocation": "-1:-1:-1", "parameters": { "id": 72119, "nodeType": "ParameterList", "parameters": [], "src": "1904:2:175" }, "returnParameters": { "id": 72120, "nodeType": "ParameterList", "parameters": [], "src": "1907:0:175" }, "scope": 72173, "stateMutability": "nonpayable", "virtual": false, "visibility": "internal" }, { "id": 72137, "nodeType": "ModifierDefinition", "src": "2322:103:175", "nodes": [], "body": { "id": 72136, "nodeType": "Block", "src": "2346:79:175", "nodes": [], "statements": [{ "expression": { "arguments": [], "expression": { "argumentTypes": [], "id": 72129, "name": "_nonReentrantBefore", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72153, "src": "2356:19:175", "typeDescriptions": { "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()" } }, "id": 72130, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "2356:21:175", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_tuple$__$", "typeString": "tuple()" } }, "id": 72131, "nodeType": "ExpressionStatement", "src": "2356:21:175" }, { "id": 72132, "nodeType": "PlaceholderStatement", "src": "2387:1:175" }, { "expression": { "arguments": [], "expression": { "argumentTypes": [], "id": 72133, "name": "_nonReentrantAfter", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72161, "src": "2398:18:175", "typeDescriptions": { "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()" } }, "id": 72134, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "2398:20:175", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_tuple$__$", "typeString": "tuple()" } }, "id": 72135, "nodeType": "ExpressionStatement", "src": "2398:20:175" }] }, "documentation": { "id": 72127, "nodeType": "StructuredDocumentation", "src": "1951:366:175", "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work." }, "name": "nonReentrant", "nameLocation": "2331:12:175", "parameters": { "id": 72128, "nodeType": "ParameterList", "parameters": [], "src": "2343:2:175" }, "virtual": false, "visibility": "internal" }, { "id": 72153, "nodeType": "FunctionDefinition", "src": "2431:307:175", "nodes": [], "body": { "id": 72152, "nodeType": "Block", "src": "2470:268:175", "nodes": [], "statements": [{ "condition": { "commonType": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "id": 72142, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": { "id": 72140, "name": "_status", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72115, "src": "2558:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": { "id": 72141, "name": "ENTERED", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72113, "src": "2569:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "src": "2558:18:175", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "id": 72147, "nodeType": "IfStatement", "src": "2554:86:175", "trueBody": { "id": 72146, "nodeType": "Block", "src": "2578:62:175", "statements": [{ "errorCall": { "arguments": [], "expression": { "argumentTypes": [], "id": 72143, "name": "ReentrancyGuardReentrantCall", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72118, "src": "2599:28:175", "typeDescriptions": { "typeIdentifier": "t_function_error_pure$__$returns$__$", "typeString": "function () pure" } }, "id": 72144, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "nameLocations": [], "names": [], "nodeType": "FunctionCall", "src": "2599:30:175", "tryCall": false, "typeDescriptions": { "typeIdentifier": "t_tuple$__$", "typeString": "tuple()" } }, "id": 72145, "nodeType": "RevertStatement", "src": "2592:37:175" }] } }, { "expression": { "id": 72150, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": { "id": 72148, "name": "_status", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72115, "src": "2714:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "nodeType": "Assignment", "operator": "=", "rightHandSide": { "id": 72149, "name": "ENTERED", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72113, "src": "2724:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "src": "2714:17:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 72151, "nodeType": "ExpressionStatement", "src": "2714:17:175" }] }, "implemented": true, "kind": "function", "modifiers": [], "name": "_nonReentrantBefore", "nameLocation": "2440:19:175", "parameters": { "id": 72138, "nodeType": "ParameterList", "parameters": [], "src": "2459:2:175" }, "returnParameters": { "id": 72139, "nodeType": "ParameterList", "parameters": [], "src": "2470:0:175" }, "scope": 72173, "stateMutability": "nonpayable", "virtual": false, "visibility": "private" }, { "id": 72161, "nodeType": "FunctionDefinition", "src": "2744:208:175", "nodes": [], "body": { "id": 72160, "nodeType": "Block", "src": "2782:170:175", "nodes": [], "statements": [{ "expression": { "id": 72158, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": { "id": 72156, "name": "_status", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72115, "src": "2924:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "nodeType": "Assignment", "operator": "=", "rightHandSide": { "id": 72157, "name": "NOT_ENTERED", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72110, "src": "2934:11:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "src": "2924:21:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "id": 72159, "nodeType": "ExpressionStatement", "src": "2924:21:175" }] }, "implemented": true, "kind": "function", "modifiers": [], "name": "_nonReentrantAfter", "nameLocation": "2753:18:175", "parameters": { "id": 72154, "nodeType": "ParameterList", "parameters": [], "src": "2771:2:175" }, "returnParameters": { "id": 72155, "nodeType": "ParameterList", "parameters": [], "src": "2782:0:175" }, "scope": 72173, "stateMutability": "nonpayable", "virtual": false, "visibility": "private" }, { "id": 72172, "nodeType": "FunctionDefinition", "src": "3131:106:175", "nodes": [], "body": { "id": 72171, "nodeType": "Block", "src": "3195:42:175", "nodes": [], "statements": [{ "expression": { "commonType": { "typeIdentifier": "t_uint256", "typeString": "uint256" }, "id": 72169, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": { "id": 72167, "name": "_status", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72115, "src": "3212:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": { "id": 72168, "name": "ENTERED", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72113, "src": "3223:7:175", "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" } }, "src": "3212:18:175", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "functionReturnParameters": 72166, "id": 72170, "nodeType": "Return", "src": "3205:25:175" }] }, "documentation": { "id": 72162, "nodeType": "StructuredDocumentation", "src": "2958:168:175", "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack." }, "implemented": true, "kind": "function", "modifiers": [], "name": "_reentrancyGuardEntered", "nameLocation": "3140:23:175", "parameters": { "id": 72163, "nodeType": "ParameterList", "parameters": [], "src": "3163:2:175" }, "returnParameters": { "id": 72166, "nodeType": "ParameterList", "parameters": [{ "constant": false, "id": 72165, "mutability": "mutable", "name": "", "nameLocation": "-1:-1:-1", "nodeType": "VariableDeclaration", "scope": 72172, "src": "3189:4:175", "stateVariable": false, "storageLocation": "default", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" }, "typeName": { "id": 72164, "name": "bool", "nodeType": "ElementaryTypeName", "src": "3189:4:175", "typeDescriptions": { "typeIdentifier": "t_bool", "typeString": "bool" } }, "visibility": "internal" }], "src": "3188:6:175" }, "scope": 72173, "stateMutability": "view", "virtual": false, "visibility": "internal" }], "abstract": true, "baseContracts": [], "canonicalName": "ReentrancyGuard", "contractDependencies": [], "contractKind": "contract", "documentation": { "id": 72107, "nodeType": "StructuredDocumentation", "src": "135:750:175", "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]." }, "fullyImplemented": true, "linearizedBaseContracts": [72173], "name": "ReentrancyGuard", "nameLocation": "904:15:175", "scope": 72174, "usedErrors": [72118], "usedEvents": [] }], "license": "MIT" }, "id": 175 };
