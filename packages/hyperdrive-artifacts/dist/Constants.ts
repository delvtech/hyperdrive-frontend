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
    "id": 119579,
    "exportedSymbols": {
      "ETH": [
        119578
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:92:163",
    "nodes": [
      {
        "id": 119575,
        "nodeType": "PragmaDirective",
        "src": "39:23:163",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 119578,
        "nodeType": "VariableDeclaration",
        "src": "64:65:163",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ETH",
        "nameLocation": "81:3:163",
        "scope": 119579,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_address",
          "typeString": "address"
        },
        "typeName": {
          "id": 119576,
          "name": "address",
          "nodeType": "ElementaryTypeName",
          "src": "64:7:163",
          "stateMutability": "nonpayable",
          "typeDescriptions": {
            "typeIdentifier": "t_address",
            "typeString": "address"
          }
        },
        "value": {
          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
          "id": 119577,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "87:42:163",
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
  "id": 163
} as const;
