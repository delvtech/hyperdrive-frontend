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
    "id": 115617,
    "exportedSymbols": {
      "ETH": [
        115616
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:92:145",
    "nodes": [
      {
        "id": 115613,
        "nodeType": "PragmaDirective",
        "src": "39:23:145",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 115616,
        "nodeType": "VariableDeclaration",
        "src": "64:65:145",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ETH",
        "nameLocation": "81:3:145",
        "scope": 115617,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_address",
          "typeString": "address"
        },
        "typeName": {
          "id": 115614,
          "name": "address",
          "nodeType": "ElementaryTypeName",
          "src": "64:7:145",
          "stateMutability": "nonpayable",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          }
        },
        "value": {
          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
          "id": 115615,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "87:42:145",
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
  "id": 145
} as const;
