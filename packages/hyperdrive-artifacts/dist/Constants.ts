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
    "id": 118843,
    "exportedSymbols": {
      "ETH": [
        118842
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:92:161",
    "nodes": [
      {
        "id": 118839,
        "nodeType": "PragmaDirective",
        "src": "39:23:161",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 118842,
        "nodeType": "VariableDeclaration",
        "src": "64:65:161",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ETH",
        "nameLocation": "81:3:161",
        "scope": 118843,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_address",
          "typeString": "address"
        },
        "typeName": {
          "id": 118840,
          "name": "address",
          "nodeType": "ElementaryTypeName",
          "src": "64:7:161",
          "stateMutability": "nonpayable",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          }
        },
        "value": {
          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
          "id": 118841,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "87:42:161",
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
  "id": 161
} as const;
