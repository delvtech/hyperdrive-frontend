export const Constants = 
{
  "abi": [],
  "bytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "ast": {
    "absolutePath": "test/utils/Constants.sol",
    "id": 124652,
    "exportedSymbols": {
      "ETH": [
        124651
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:92:157",
    "nodes": [
      {
        "id": 124648,
        "nodeType": "PragmaDirective",
        "src": "39:23:157",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 124651,
        "nodeType": "VariableDeclaration",
        "src": "64:65:157",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ETH",
        "nameLocation": "81:3:157",
        "scope": 124652,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_address",
          "typeString": "address"
        },
        "typeName": {
          "id": 124649,
          "name": "address",
          "nodeType": "ElementaryTypeName",
          "src": "64:7:157",
          "stateMutability": "nonpayable",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          }
        },
        "value": {
          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
          "id": 124650,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "87:42:157",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          },
          "value": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "visibility": "internal"
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 157
} as const;
