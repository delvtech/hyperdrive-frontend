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
    "id": 140742,
    "exportedSymbols": {
      "ETH": [
        140741
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:92:180",
    "nodes": [
      {
        "id": 140738,
        "nodeType": "PragmaDirective",
        "src": "39:23:180",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 140741,
        "nodeType": "VariableDeclaration",
        "src": "64:65:180",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ETH",
        "nameLocation": "81:3:180",
        "scope": 140742,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_address",
          "typeString": "address"
        },
        "typeName": {
          "id": 140739,
          "name": "address",
          "nodeType": "ElementaryTypeName",
          "src": "64:7:180",
          "stateMutability": "nonpayable",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          }
        },
        "value": {
          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
          "id": 140740,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "87:42:180",
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
  "id": 180
} as const;
