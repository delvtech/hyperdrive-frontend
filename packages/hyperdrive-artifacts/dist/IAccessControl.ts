export const IAccessControl = 
{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "getRoleAdmin(bytes32)": "248a9ca3",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"External interface of AccessControl declared to support ERC165 detection.\",\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {AccessControl-_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":\"IAccessControl\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleAdminChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleGranted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleRevoked",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "grantRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokeRole"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {AccessControl-_setRoleAdmin}."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": "IAccessControl"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        "urls": [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol",
    "id": 58889,
    "exportedSymbols": {
      "IAccessControl": [
        58888
      ]
    },
    "nodeType": "SourceUnit",
    "src": "94:2826:77",
    "nodes": [
      {
        "id": 58817,
        "nodeType": "PragmaDirective",
        "src": "94:23:77",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 58888,
        "nodeType": "ContractDefinition",
        "src": "209:2710:77",
        "nodes": [
          {
            "id": 58827,
            "nodeType": "EventDefinition",
            "src": "537:110:77",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58819,
              "nodeType": "StructuredDocumentation",
              "src": "240:292:77",
              "text": " @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\n `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n {RoleAdminChanged} not being emitted signaling this.\n _Available since v3.1._"
            },
            "eventSelector": "bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff",
            "name": "RoleAdminChanged",
            "nameLocation": "543:16:77",
            "parameters": {
              "id": 58826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58821,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "576:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58827,
                  "src": "560:20:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58820,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "560:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58823,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousAdminRole",
                  "nameLocation": "598:17:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58827,
                  "src": "582:33:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58822,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58825,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAdminRole",
                  "nameLocation": "633:12:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58827,
                  "src": "617:28:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58824,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "617:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "559:87:77"
            }
          },
          {
            "id": 58836,
            "nodeType": "EventDefinition",
            "src": "870:89:77",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58828,
              "nodeType": "StructuredDocumentation",
              "src": "653:212:77",
              "text": " @dev Emitted when `account` is granted `role`.\n `sender` is the account that originated the contract call, an admin role\n bearer except when using {AccessControl-_setupRole}."
            },
            "eventSelector": "2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
            "name": "RoleGranted",
            "nameLocation": "876:11:77",
            "parameters": {
              "id": 58835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58830,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "904:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58836,
                  "src": "888:20:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58829,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "888:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58832,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "926:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58836,
                  "src": "910:23:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "910:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58834,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "951:6:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58836,
                  "src": "935:22:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58833,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "887:71:77"
            }
          },
          {
            "id": 58845,
            "nodeType": "EventDefinition",
            "src": "1245:89:77",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58837,
              "nodeType": "StructuredDocumentation",
              "src": "965:275:77",
              "text": " @dev Emitted when `account` is revoked `role`.\n `sender` is the account that originated the contract call:\n   - if using `revokeRole`, it is the admin role bearer\n   - if using `renounceRole`, it is the role bearer (i.e. `account`)"
            },
            "eventSelector": "f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b",
            "name": "RoleRevoked",
            "nameLocation": "1251:11:77",
            "parameters": {
              "id": 58844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58839,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1279:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58845,
                  "src": "1263:20:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58838,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58841,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1301:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58845,
                  "src": "1285:23:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58840,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1285:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58843,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "1326:6:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58845,
                  "src": "1310:22:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1310:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1262:71:77"
            }
          },
          {
            "id": 58855,
            "nodeType": "FunctionDefinition",
            "src": "1421:77:77",
            "nodes": [],
            "documentation": {
              "id": 58846,
              "nodeType": "StructuredDocumentation",
              "src": "1340:76:77",
              "text": " @dev Returns `true` if `account` has been granted `role`."
            },
            "functionSelector": "91d14854",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "hasRole",
            "nameLocation": "1430:7:77",
            "parameters": {
              "id": 58851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58848,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1446:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58855,
                  "src": "1438:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58847,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1438:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58850,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1460:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58855,
                  "src": "1452:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58849,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1452:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1437:31:77"
            },
            "returnParameters": {
              "id": 58854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58853,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58855,
                  "src": "1492:4:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58852,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1492:4:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1491:6:77"
            },
            "scope": 58888,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 58863,
            "nodeType": "FunctionDefinition",
            "src": "1693:68:77",
            "nodes": [],
            "documentation": {
              "id": 58856,
              "nodeType": "StructuredDocumentation",
              "src": "1504:184:77",
              "text": " @dev Returns the admin role that controls `role`. See {grantRole} and\n {revokeRole}.\n To change a role's admin, use {AccessControl-_setRoleAdmin}."
            },
            "functionSelector": "248a9ca3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleAdmin",
            "nameLocation": "1702:12:77",
            "parameters": {
              "id": 58859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58858,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1723:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58863,
                  "src": "1715:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58857,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:14:77"
            },
            "returnParameters": {
              "id": 58862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58861,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58863,
                  "src": "1752:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58860,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1751:9:77"
            },
            "scope": 58888,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 58871,
            "nodeType": "FunctionDefinition",
            "src": "2011:59:77",
            "nodes": [],
            "documentation": {
              "id": 58864,
              "nodeType": "StructuredDocumentation",
              "src": "1767:239:77",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event.\n Requirements:\n - the caller must have ``role``'s admin role."
            },
            "functionSelector": "2f2ff15d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "grantRole",
            "nameLocation": "2020:9:77",
            "parameters": {
              "id": 58869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58866,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2038:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58871,
                  "src": "2030:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58865,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2030:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58868,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2052:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58871,
                  "src": "2044:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58867,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2044:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2029:31:77"
            },
            "returnParameters": {
              "id": 58870,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:0:77"
            },
            "scope": 58888,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 58879,
            "nodeType": "FunctionDefinition",
            "src": "2304:60:77",
            "nodes": [],
            "documentation": {
              "id": 58872,
              "nodeType": "StructuredDocumentation",
              "src": "2076:223:77",
              "text": " @dev Revokes `role` from `account`.\n If `account` had been granted `role`, emits a {RoleRevoked} event.\n Requirements:\n - the caller must have ``role``'s admin role."
            },
            "functionSelector": "d547741f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokeRole",
            "nameLocation": "2313:10:77",
            "parameters": {
              "id": 58877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58874,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2332:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58879,
                  "src": "2324:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58873,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2324:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58876,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2346:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58879,
                  "src": "2338:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58875,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2338:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2323:31:77"
            },
            "returnParameters": {
              "id": 58878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2363:0:77"
            },
            "scope": 58888,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 58887,
            "nodeType": "FunctionDefinition",
            "src": "2855:62:77",
            "nodes": [],
            "documentation": {
              "id": 58880,
              "nodeType": "StructuredDocumentation",
              "src": "2370:480:77",
              "text": " @dev Revokes `role` from the calling account.\n Roles are often managed via {grantRole} and {revokeRole}: this function's\n purpose is to provide a mechanism for accounts to lose their privileges\n if they are compromised (such as when a trusted device is misplaced).\n If the calling account had been granted `role`, emits a {RoleRevoked}\n event.\n Requirements:\n - the caller must be `account`."
            },
            "functionSelector": "36568abe",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRole",
            "nameLocation": "2864:12:77",
            "parameters": {
              "id": 58885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58882,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2885:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58887,
                  "src": "2877:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58881,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2877:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58884,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2899:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58887,
                  "src": "2891:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2891:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2876:31:77"
            },
            "returnParameters": {
              "id": 58886,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2916:0:77"
            },
            "scope": 58888,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IAccessControl",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 58818,
          "nodeType": "StructuredDocumentation",
          "src": "119:89:77",
          "text": " @dev External interface of AccessControl declared to support ERC165 detection."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          58888
        ],
        "name": "IAccessControl",
        "nameLocation": "219:14:77",
        "scope": 58889,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 77
} as const;
