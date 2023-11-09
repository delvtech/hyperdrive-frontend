export const AccessControl = 
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
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
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
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
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
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module that allows children to implement role-based access control mechanisms. This is a lightweight version that doesn't allow enumerating role members except through off-chain means by accessing the contract event logs. Some applications may benefit from on-chain enumerability, for those cases see {AccessControlEnumerable}. Roles are referred to by their `bytes32` identifier. These should be exposed in the external API and be unique. The best way to achieve this is by using `public constant` hash digests: ```solidity bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\"); ``` Roles can be used to represent a set of permissions. To restrict access to a function call, use {hasRole}: ```solidity function foo() public {     require(hasRole(MY_ROLE, msg.sender));     ... } ``` Roles can be granted and revoked dynamically via the {grantRole} and {revokeRole} functions. Each role has an associated admin role, and only accounts that have a role's admin role can call {grantRole} and {revokeRole}. By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means that only accounts with this role will be able to grant or revoke other roles. More complex role relationships can be created by using {_setRoleAdmin}. WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to grant and revoke this role. Extra precautions should be taken to secure accounts that have been granted it. We recommend using {AccessControlDefaultAdminRules} to enforce additional security measures for this role.\",\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":\"AccessControl\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]}},\"version\":1}",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DEFAULT_ADMIN_ROLE",
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
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
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
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": "AccessControl"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        "keccak256": "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        "urls": [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        "urls": [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        "urls": [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        "urls": [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        "urls": [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        "urls": [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
    "id": 58691,
    "exportedSymbols": {
      "AccessControl": [
        58690
      ],
      "Context": [
        60721
      ],
      "ERC165": [
        60974
      ],
      "IAccessControl": [
        58888
      ],
      "IERC165": [
        60986
      ],
      "Math": [
        61852
      ],
      "SignedMath": [
        61957
      ],
      "Strings": [
        60950
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:8120:75",
    "nodes": [
      {
        "id": 58376,
        "nodeType": "PragmaDirective",
        "src": "108:23:75",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 58377,
        "nodeType": "ImportDirective",
        "src": "133:30:75",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol",
        "file": "./IAccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58691,
        "sourceUnit": 58889,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58378,
        "nodeType": "ImportDirective",
        "src": "164:30:75",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58691,
        "sourceUnit": 60722,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58379,
        "nodeType": "ImportDirective",
        "src": "195:30:75",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Strings.sol",
        "file": "../utils/Strings.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58691,
        "sourceUnit": 60951,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58380,
        "nodeType": "ImportDirective",
        "src": "226:43:75",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol",
        "file": "../utils/introspection/ERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58691,
        "sourceUnit": 60975,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58690,
        "nodeType": "ContractDefinition",
        "src": "1932:6295:75",
        "nodes": [
          {
            "id": 58394,
            "nodeType": "StructDefinition",
            "src": "2005:92:75",
            "nodes": [],
            "canonicalName": "AccessControl.RoleData",
            "members": [
              {
                "constant": false,
                "id": 58391,
                "mutability": "mutable",
                "name": "members",
                "nameLocation": "2056:7:75",
                "nodeType": "VariableDeclaration",
                "scope": 58394,
                "src": "2031:32:75",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 58390,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 58388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2039:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2031:24:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 58389,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2050:4:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 58393,
                "mutability": "mutable",
                "name": "adminRole",
                "nameLocation": "2081:9:75",
                "nodeType": "VariableDeclaration",
                "scope": 58394,
                "src": "2073:17:75",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 58392,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2073:7:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "RoleData",
            "nameLocation": "2012:8:75",
            "scope": 58690,
            "visibility": "public"
          },
          {
            "id": 58399,
            "nodeType": "VariableDeclaration",
            "src": "2103:43:75",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_roles",
            "nameLocation": "2140:6:75",
            "scope": 58690,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
              "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
            },
            "typeName": {
              "id": 58398,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 58395,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "2111:7:75",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "2103:28:75",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 58397,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 58396,
                  "name": "RoleData",
                  "nameLocations": [
                    "2122:8:75"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58394,
                  "src": "2122:8:75"
                },
                "referencedDeclaration": 58394,
                "src": "2122:8:75",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_RoleData_$58394_storage_ptr",
                  "typeString": "struct AccessControl.RoleData"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 58402,
            "nodeType": "VariableDeclaration",
            "src": "2153:49:75",
            "nodes": [],
            "constant": true,
            "functionSelector": "a217fddf",
            "mutability": "constant",
            "name": "DEFAULT_ADMIN_ROLE",
            "nameLocation": "2177:18:75",
            "scope": 58690,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 58400,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2153:7:75",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "30783030",
              "id": 58401,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2198:4:75",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0x00"
            },
            "visibility": "public"
          },
          {
            "id": 58413,
            "nodeType": "ModifierDefinition",
            "src": "2589:76:75",
            "nodes": [],
            "body": {
              "id": 58412,
              "nodeType": "Block",
              "src": "2621:44:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58408,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58405,
                        "src": "2642:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 58407,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        58467,
                        58506
                      ],
                      "referencedDeclaration": 58467,
                      "src": "2631:10:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) view"
                      }
                    },
                    "id": 58409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2631:16:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58410,
                  "nodeType": "ExpressionStatement",
                  "src": "2631:16:75"
                },
                {
                  "id": 58411,
                  "nodeType": "PlaceholderStatement",
                  "src": "2657:1:75"
                }
              ]
            },
            "documentation": {
              "id": 58403,
              "nodeType": "StructuredDocumentation",
              "src": "2209:375:75",
              "text": " @dev Modifier that checks that an account has a specific role. Reverts\n with a standardized message including the required role.\n The format of the revert reason is given by the following regular expression:\n  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n _Available since v4.1._"
            },
            "name": "onlyRole",
            "nameLocation": "2598:8:75",
            "parameters": {
              "id": 58406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58405,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2615:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58413,
                  "src": "2607:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58404,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2607:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2606:14:75"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58435,
            "nodeType": "FunctionDefinition",
            "src": "2732:202:75",
            "nodes": [],
            "body": {
              "id": 58434,
              "nodeType": "Block",
              "src": "2823:111:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 58432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 58427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 58422,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58416,
                        "src": "2840:11:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 58424,
                              "name": "IAccessControl",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58888,
                              "src": "2860:14:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$58888_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$58888_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            ],
                            "id": 58423,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "2855:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 58425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2855:20:75",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IAccessControl_$58888",
                            "typeString": "type(contract IAccessControl)"
                          }
                        },
                        "id": 58426,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2876:11:75",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "2855:32:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "2840:47:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 58430,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58416,
                          "src": "2915:11:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 58428,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2891:5:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_AccessControl_$58690_$",
                            "typeString": "type(contract super AccessControl)"
                          }
                        },
                        "id": 58429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2897:17:75",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60973,
                        "src": "2891:23:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 58431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2891:36:75",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2840:87:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58421,
                  "id": 58433,
                  "nodeType": "Return",
                  "src": "2833:94:75"
                }
              ]
            },
            "baseFunctions": [
              60973
            ],
            "documentation": {
              "id": 58414,
              "nodeType": "StructuredDocumentation",
              "src": "2671:56:75",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2741:17:75",
            "overrides": {
              "id": 58418,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2799:8:75"
            },
            "parameters": {
              "id": 58417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58416,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2766:11:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58435,
                  "src": "2759:18:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 58415,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2759:6:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2758:20:75"
            },
            "returnParameters": {
              "id": 58421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58420,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58435,
                  "src": "2817:4:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58419,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2817:4:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2816:6:75"
            },
            "scope": 58690,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58454,
            "nodeType": "FunctionDefinition",
            "src": "3021:145:75",
            "nodes": [],
            "body": {
              "id": 58453,
              "nodeType": "Block",
              "src": "3113:53:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 58446,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58399,
                          "src": "3130:6:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 58448,
                        "indexExpression": {
                          "id": 58447,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58438,
                          "src": "3137:4:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3130:12:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$58394_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 58449,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3143:7:75",
                      "memberName": "members",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58391,
                      "src": "3130:20:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 58451,
                    "indexExpression": {
                      "id": 58450,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58440,
                      "src": "3151:7:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3130:29:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58445,
                  "id": 58452,
                  "nodeType": "Return",
                  "src": "3123:36:75"
                }
              ]
            },
            "baseFunctions": [
              58855
            ],
            "documentation": {
              "id": 58436,
              "nodeType": "StructuredDocumentation",
              "src": "2940:76:75",
              "text": " @dev Returns `true` if `account` has been granted `role`."
            },
            "functionSelector": "91d14854",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasRole",
            "nameLocation": "3030:7:75",
            "overrides": {
              "id": 58442,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3089:8:75"
            },
            "parameters": {
              "id": 58441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58438,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3046:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58454,
                  "src": "3038:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58437,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3038:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58440,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3060:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58454,
                  "src": "3052:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3052:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3037:31:75"
            },
            "returnParameters": {
              "id": 58445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58444,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58454,
                  "src": "3107:4:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58443,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:4:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3106:6:75"
            },
            "scope": 58690,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58467,
            "nodeType": "FunctionDefinition",
            "src": "3460:103:75",
            "nodes": [],
            "body": {
              "id": 58466,
              "nodeType": "Block",
              "src": "3516:47:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58461,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58457,
                        "src": "3537:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58462,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60711,
                          "src": "3543:10:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 58463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3543:12:75",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58460,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        58467,
                        58506
                      ],
                      "referencedDeclaration": 58506,
                      "src": "3526:10:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) view"
                      }
                    },
                    "id": 58464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3526:30:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58465,
                  "nodeType": "ExpressionStatement",
                  "src": "3526:30:75"
                }
              ]
            },
            "documentation": {
              "id": 58455,
              "nodeType": "StructuredDocumentation",
              "src": "3172:283:75",
              "text": " @dev Revert with a standard message if `_msgSender()` is missing `role`.\n Overriding this function changes the behavior of the {onlyRole} modifier.\n Format of the revert message is described in {_checkRole}.\n _Available since v4.6._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3469:10:75",
            "parameters": {
              "id": 58458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58457,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3488:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58467,
                  "src": "3480:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58456,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3480:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3479:14:75"
            },
            "returnParameters": {
              "id": 58459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3516:0:75"
            },
            "scope": 58690,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58506,
            "nodeType": "FunctionDefinition",
            "src": "3844:479:75",
            "nodes": [],
            "body": {
              "id": 58505,
              "nodeType": "Block",
              "src": "3917:406:75",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 58479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3931:23:75",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 58476,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58470,
                          "src": "3940:4:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 58477,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58472,
                          "src": "3946:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 58475,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58454,
                        "src": "3932:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 58478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3932:22:75",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58504,
                  "nodeType": "IfStatement",
                  "src": "3927:390:75",
                  "trueBody": {
                    "id": 58503,
                    "nodeType": "Block",
                    "src": "3956:361:75",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "416363657373436f6e74726f6c3a206163636f756e7420",
                                      "id": 58485,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4064:25:75",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874",
                                        "typeString": "literal_string \"AccessControl: account \""
                                      },
                                      "value": "AccessControl: account "
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "id": 58488,
                                          "name": "account",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 58472,
                                          "src": "4135:7:75",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "expression": {
                                          "id": 58486,
                                          "name": "Strings",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 60950,
                                          "src": "4115:7:75",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_Strings_$60950_$",
                                            "typeString": "type(library Strings)"
                                          }
                                        },
                                        "id": 58487,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4123:11:75",
                                        "memberName": "toHexString",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 60924,
                                        "src": "4115:19:75",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                          "typeString": "function (address) pure returns (string memory)"
                                        }
                                      },
                                      "id": 58489,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "4115:28:75",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    {
                                      "hexValue": "206973206d697373696e6720726f6c6520",
                                      "id": 58490,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4169:19:75",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69",
                                        "typeString": "literal_string \" is missing role \""
                                      },
                                      "value": " is missing role "
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "id": 58495,
                                              "name": "role",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 58470,
                                              "src": "4242:4:75",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              }
                                            ],
                                            "id": 58494,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "4234:7:75",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 58493,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "4234:7:75",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 58496,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "4234:13:75",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "hexValue": "3332",
                                          "id": 58497,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "4249:2:75",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_32_by_1",
                                            "typeString": "int_const 32"
                                          },
                                          "value": "32"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          {
                                            "typeIdentifier": "t_rational_32_by_1",
                                            "typeString": "int_const 32"
                                          }
                                        ],
                                        "expression": {
                                          "id": 58491,
                                          "name": "Strings",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 60950,
                                          "src": "4214:7:75",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_Strings_$60950_$",
                                            "typeString": "type(library Strings)"
                                          }
                                        },
                                        "id": 58492,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4222:11:75",
                                        "memberName": "toHexString",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 60904,
                                        "src": "4214:19:75",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                                          "typeString": "function (uint256,uint256) pure returns (string memory)"
                                        }
                                      },
                                      "id": 58498,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "4214:38:75",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874",
                                        "typeString": "literal_string \"AccessControl: account \""
                                      },
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69",
                                        "typeString": "literal_string \" is missing role \""
                                      },
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    ],
                                    "expression": {
                                      "id": 58483,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "4022:3:75",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 58484,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "4026:12:75",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "4022:16:75",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 58499,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4022:252:75",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 58482,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3994:6:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                  "typeString": "type(string storage pointer)"
                                },
                                "typeName": {
                                  "id": 58481,
                                  "name": "string",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3994:6:75",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 58500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3994:298:75",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 58480,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "3970:6:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 58501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3970:336:75",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 58502,
                        "nodeType": "ExpressionStatement",
                        "src": "3970:336:75"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 58468,
              "nodeType": "StructuredDocumentation",
              "src": "3569:270:75",
              "text": " @dev Revert with a standard message if `account` is missing `role`.\n The format of the revert reason is given by the following regular expression:\n  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3853:10:75",
            "parameters": {
              "id": 58473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58470,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3872:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58506,
                  "src": "3864:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58469,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3864:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58472,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3886:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58506,
                  "src": "3878:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58471,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3878:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3863:31:75"
            },
            "returnParameters": {
              "id": 58474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3917:0:75"
            },
            "scope": 58690,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58521,
            "nodeType": "FunctionDefinition",
            "src": "4504:129:75",
            "nodes": [],
            "body": {
              "id": 58520,
              "nodeType": "Block",
              "src": "4587:46:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 58515,
                        "name": "_roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58399,
                        "src": "4604:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                          "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                        }
                      },
                      "id": 58517,
                      "indexExpression": {
                        "id": 58516,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58509,
                        "src": "4611:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4604:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_RoleData_$58394_storage",
                        "typeString": "struct AccessControl.RoleData storage ref"
                      }
                    },
                    "id": 58518,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4617:9:75",
                    "memberName": "adminRole",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 58393,
                    "src": "4604:22:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 58514,
                  "id": 58519,
                  "nodeType": "Return",
                  "src": "4597:29:75"
                }
              ]
            },
            "baseFunctions": [
              58863
            ],
            "documentation": {
              "id": 58507,
              "nodeType": "StructuredDocumentation",
              "src": "4329:170:75",
              "text": " @dev Returns the admin role that controls `role`. See {grantRole} and\n {revokeRole}.\n To change a role's admin, use {_setRoleAdmin}."
            },
            "functionSelector": "248a9ca3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleAdmin",
            "nameLocation": "4513:12:75",
            "overrides": {
              "id": 58511,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4560:8:75"
            },
            "parameters": {
              "id": 58510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58509,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4534:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58521,
                  "src": "4526:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58508,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4525:14:75"
            },
            "returnParameters": {
              "id": 58514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58513,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58521,
                  "src": "4578:7:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58512,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4578:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4577:9:75"
            },
            "scope": 58690,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58541,
            "nodeType": "FunctionDefinition",
            "src": "4929:145:75",
            "nodes": [],
            "body": {
              "id": 58540,
              "nodeType": "Block",
              "src": "5032:42:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58536,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58524,
                        "src": "5053:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58537,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58526,
                        "src": "5059:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58535,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58658,
                      "src": "5042:10:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5042:25:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58539,
                  "nodeType": "ExpressionStatement",
                  "src": "5042:25:75"
                }
              ]
            },
            "baseFunctions": [
              58871
            ],
            "documentation": {
              "id": 58522,
              "nodeType": "StructuredDocumentation",
              "src": "4639:285:75",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event.\n Requirements:\n - the caller must have ``role``'s admin role.\n May emit a {RoleGranted} event."
            },
            "functionSelector": "2f2ff15d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 58531,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58524,
                        "src": "5025:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 58530,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58521,
                      "src": "5012:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 58532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5012:18:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 58533,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58529,
                  "name": "onlyRole",
                  "nameLocations": [
                    "5003:8:75"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58413,
                  "src": "5003:8:75"
                },
                "nodeType": "ModifierInvocation",
                "src": "5003:28:75"
              }
            ],
            "name": "grantRole",
            "nameLocation": "4938:9:75",
            "overrides": {
              "id": 58528,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4994:8:75"
            },
            "parameters": {
              "id": 58527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58524,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4956:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58541,
                  "src": "4948:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58523,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4948:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58526,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4970:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58541,
                  "src": "4962:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58525,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4962:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4947:31:75"
            },
            "returnParameters": {
              "id": 58534,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5032:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58561,
            "nodeType": "FunctionDefinition",
            "src": "5354:147:75",
            "nodes": [],
            "body": {
              "id": 58560,
              "nodeType": "Block",
              "src": "5458:43:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58556,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58544,
                        "src": "5480:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58557,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58546,
                        "src": "5486:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58555,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58689,
                      "src": "5468:11:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5468:26:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58559,
                  "nodeType": "ExpressionStatement",
                  "src": "5468:26:75"
                }
              ]
            },
            "baseFunctions": [
              58879
            ],
            "documentation": {
              "id": 58542,
              "nodeType": "StructuredDocumentation",
              "src": "5080:269:75",
              "text": " @dev Revokes `role` from `account`.\n If `account` had been granted `role`, emits a {RoleRevoked} event.\n Requirements:\n - the caller must have ``role``'s admin role.\n May emit a {RoleRevoked} event."
            },
            "functionSelector": "d547741f",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 58551,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58544,
                        "src": "5451:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 58550,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58521,
                      "src": "5438:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 58552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5438:18:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 58553,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58549,
                  "name": "onlyRole",
                  "nameLocations": [
                    "5429:8:75"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58413,
                  "src": "5429:8:75"
                },
                "nodeType": "ModifierInvocation",
                "src": "5429:28:75"
              }
            ],
            "name": "revokeRole",
            "nameLocation": "5363:10:75",
            "overrides": {
              "id": 58548,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5420:8:75"
            },
            "parameters": {
              "id": 58547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58544,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "5382:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58561,
                  "src": "5374:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58543,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5374:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58546,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "5396:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58561,
                  "src": "5388:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58545,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5388:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5373:31:75"
            },
            "returnParameters": {
              "id": 58554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5458:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58584,
            "nodeType": "FunctionDefinition",
            "src": "6038:214:75",
            "nodes": [],
            "body": {
              "id": 58583,
              "nodeType": "Block",
              "src": "6115:137:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 58574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 58571,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58566,
                          "src": "6133:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 58572,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60711,
                            "src": "6144:10:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 58573,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6144:12:75",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6133:23:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66",
                        "id": 58575,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6158:49:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b",
                          "typeString": "literal_string \"AccessControl: can only renounce roles for self\""
                        },
                        "value": "AccessControl: can only renounce roles for self"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b",
                          "typeString": "literal_string \"AccessControl: can only renounce roles for self\""
                        }
                      ],
                      "id": 58570,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6125:7:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 58576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6125:83:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58577,
                  "nodeType": "ExpressionStatement",
                  "src": "6125:83:75"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58579,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58564,
                        "src": "6231:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58580,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58566,
                        "src": "6237:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58578,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58689,
                      "src": "6219:11:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6219:26:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58582,
                  "nodeType": "ExpressionStatement",
                  "src": "6219:26:75"
                }
              ]
            },
            "baseFunctions": [
              58887
            ],
            "documentation": {
              "id": 58562,
              "nodeType": "StructuredDocumentation",
              "src": "5507:526:75",
              "text": " @dev Revokes `role` from the calling account.\n Roles are often managed via {grantRole} and {revokeRole}: this function's\n purpose is to provide a mechanism for accounts to lose their privileges\n if they are compromised (such as when a trusted device is misplaced).\n If the calling account had been revoked `role`, emits a {RoleRevoked}\n event.\n Requirements:\n - the caller must be `account`.\n May emit a {RoleRevoked} event."
            },
            "functionSelector": "36568abe",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRole",
            "nameLocation": "6047:12:75",
            "overrides": {
              "id": 58568,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6106:8:75"
            },
            "parameters": {
              "id": 58567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58564,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6068:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58584,
                  "src": "6060:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58563,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6060:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58566,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6082:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58584,
                  "src": "6074:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58565,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6074:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6059:31:75"
            },
            "returnParameters": {
              "id": 58569,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6115:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58598,
            "nodeType": "FunctionDefinition",
            "src": "6937:110:75",
            "nodes": [],
            "body": {
              "id": 58597,
              "nodeType": "Block",
              "src": "7005:42:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58593,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58587,
                        "src": "7026:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58594,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58589,
                        "src": "7032:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58592,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58658,
                      "src": "7015:10:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7015:25:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58596,
                  "nodeType": "ExpressionStatement",
                  "src": "7015:25:75"
                }
              ]
            },
            "documentation": {
              "id": 58585,
              "nodeType": "StructuredDocumentation",
              "src": "6258:674:75",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event. Note that unlike {grantRole}, this function doesn't perform any\n checks on the calling account.\n May emit a {RoleGranted} event.\n [WARNING]\n ====\n This function should only be called from the constructor when setting\n up the initial roles for the system.\n Using this function in any other way is effectively circumventing the admin\n system imposed by {AccessControl}.\n ====\n NOTE: This function is deprecated in favor of {_grantRole}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setupRole",
            "nameLocation": "6946:10:75",
            "parameters": {
              "id": 58590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58587,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6965:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58598,
                  "src": "6957:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58586,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6957:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58589,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6979:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58598,
                  "src": "6971:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58588,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6971:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6956:31:75"
            },
            "returnParameters": {
              "id": 58591,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7005:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58626,
            "nodeType": "FunctionDefinition",
            "src": "7172:247:75",
            "nodes": [],
            "body": {
              "id": 58625,
              "nodeType": "Block",
              "src": "7245:174:75",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    58607
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 58607,
                      "mutability": "mutable",
                      "name": "previousAdminRole",
                      "nameLocation": "7263:17:75",
                      "nodeType": "VariableDeclaration",
                      "scope": 58625,
                      "src": "7255:25:75",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 58606,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "7255:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 58611,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 58609,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58601,
                        "src": "7296:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 58608,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58521,
                      "src": "7283:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 58610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7283:18:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7255:46:75"
                },
                {
                  "expression": {
                    "id": 58617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 58612,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58399,
                          "src": "7311:6:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 58614,
                        "indexExpression": {
                          "id": 58613,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58601,
                          "src": "7318:4:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "7311:12:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$58394_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 58615,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7324:9:75",
                      "memberName": "adminRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58393,
                      "src": "7311:22:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 58616,
                      "name": "adminRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58603,
                      "src": "7336:9:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7311:34:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 58618,
                  "nodeType": "ExpressionStatement",
                  "src": "7311:34:75"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 58620,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58601,
                        "src": "7377:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58621,
                        "name": "previousAdminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58607,
                        "src": "7383:17:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58622,
                        "name": "adminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58603,
                        "src": "7402:9:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 58619,
                      "name": "RoleAdminChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58827,
                      "src": "7360:16:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32,bytes32)"
                      }
                    },
                    "id": 58623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7360:52:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58624,
                  "nodeType": "EmitStatement",
                  "src": "7355:57:75"
                }
              ]
            },
            "documentation": {
              "id": 58599,
              "nodeType": "StructuredDocumentation",
              "src": "7053:114:75",
              "text": " @dev Sets `adminRole` as ``role``'s admin role.\n Emits a {RoleAdminChanged} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setRoleAdmin",
            "nameLocation": "7181:13:75",
            "parameters": {
              "id": 58604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58601,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "7203:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58626,
                  "src": "7195:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58600,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7195:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58603,
                  "mutability": "mutable",
                  "name": "adminRole",
                  "nameLocation": "7217:9:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58626,
                  "src": "7209:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58602,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7209:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7194:33:75"
            },
            "returnParameters": {
              "id": 58605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7245:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58658,
            "nodeType": "FunctionDefinition",
            "src": "7587:233:75",
            "nodes": [],
            "body": {
              "id": 58657,
              "nodeType": "Block",
              "src": "7655:165:75",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 58638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7669:23:75",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 58635,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58629,
                          "src": "7678:4:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 58636,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58631,
                          "src": "7684:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 58634,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58454,
                        "src": "7670:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 58637,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7670:22:75",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58656,
                  "nodeType": "IfStatement",
                  "src": "7665:149:75",
                  "trueBody": {
                    "id": 58655,
                    "nodeType": "Block",
                    "src": "7694:120:75",
                    "statements": [
                      {
                        "expression": {
                          "id": 58646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 58639,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 58399,
                                  "src": "7708:6:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 58641,
                                "indexExpression": {
                                  "id": 58640,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 58629,
                                  "src": "7715:4:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7708:12:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$58394_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 58642,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7721:7:75",
                              "memberName": "members",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58391,
                              "src": "7708:20:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 58644,
                            "indexExpression": {
                              "id": 58643,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58631,
                              "src": "7729:7:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "7708:29:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 58645,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7740:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "7708:36:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 58647,
                        "nodeType": "ExpressionStatement",
                        "src": "7708:36:75"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 58649,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58629,
                              "src": "7775:4:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 58650,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58631,
                              "src": "7781:7:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 58651,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60711,
                                "src": "7790:10:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 58652,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7790:12:75",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 58648,
                            "name": "RoleGranted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58836,
                            "src": "7763:11:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 58653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7763:40:75",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 58654,
                        "nodeType": "EmitStatement",
                        "src": "7758:45:75"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 58627,
              "nodeType": "StructuredDocumentation",
              "src": "7425:157:75",
              "text": " @dev Grants `role` to `account`.\n Internal function without access restriction.\n May emit a {RoleGranted} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_grantRole",
            "nameLocation": "7596:10:75",
            "parameters": {
              "id": 58632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58629,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "7615:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58658,
                  "src": "7607:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58628,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7607:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58631,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "7629:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58658,
                  "src": "7621:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58630,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7621:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7606:31:75"
            },
            "returnParameters": {
              "id": 58633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7655:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58689,
            "nodeType": "FunctionDefinition",
            "src": "7991:234:75",
            "nodes": [],
            "body": {
              "id": 58688,
              "nodeType": "Block",
              "src": "8060:165:75",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [
                      {
                        "id": 58667,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58661,
                        "src": "8082:4:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58668,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58663,
                        "src": "8088:7:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58666,
                      "name": "hasRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58454,
                      "src": "8074:7:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) view returns (bool)"
                      }
                    },
                    "id": 58669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8074:22:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58687,
                  "nodeType": "IfStatement",
                  "src": "8070:149:75",
                  "trueBody": {
                    "id": 58686,
                    "nodeType": "Block",
                    "src": "8098:121:75",
                    "statements": [
                      {
                        "expression": {
                          "id": 58677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 58670,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 58399,
                                  "src": "8112:6:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$58394_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 58672,
                                "indexExpression": {
                                  "id": 58671,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 58661,
                                  "src": "8119:4:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8112:12:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$58394_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 58673,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8125:7:75",
                              "memberName": "members",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58391,
                              "src": "8112:20:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 58675,
                            "indexExpression": {
                              "id": 58674,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58663,
                              "src": "8133:7:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8112:29:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "66616c7365",
                            "id": 58676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8144:5:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "8112:37:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 58678,
                        "nodeType": "ExpressionStatement",
                        "src": "8112:37:75"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 58680,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58661,
                              "src": "8180:4:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 58681,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58663,
                              "src": "8186:7:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 58682,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60711,
                                "src": "8195:10:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 58683,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8195:12:75",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 58679,
                            "name": "RoleRevoked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58845,
                            "src": "8168:11:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 58684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8168:40:75",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 58685,
                        "nodeType": "EmitStatement",
                        "src": "8163:45:75"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 58659,
              "nodeType": "StructuredDocumentation",
              "src": "7826:160:75",
              "text": " @dev Revokes `role` from `account`.\n Internal function without access restriction.\n May emit a {RoleRevoked} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revokeRole",
            "nameLocation": "8000:11:75",
            "parameters": {
              "id": 58664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58661,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "8020:4:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58689,
                  "src": "8012:12:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58660,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8012:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58663,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "8034:7:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 58689,
                  "src": "8026:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58662,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8026:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8011:31:75"
            },
            "returnParameters": {
              "id": 58665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8060:0:75"
            },
            "scope": 58690,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 58382,
              "name": "Context",
              "nameLocations": [
                "1967:7:75"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60721,
              "src": "1967:7:75"
            },
            "id": 58383,
            "nodeType": "InheritanceSpecifier",
            "src": "1967:7:75"
          },
          {
            "baseName": {
              "id": 58384,
              "name": "IAccessControl",
              "nameLocations": [
                "1976:14:75"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58888,
              "src": "1976:14:75"
            },
            "id": 58385,
            "nodeType": "InheritanceSpecifier",
            "src": "1976:14:75"
          },
          {
            "baseName": {
              "id": 58386,
              "name": "ERC165",
              "nameLocations": [
                "1992:6:75"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60974,
              "src": "1992:6:75"
            },
            "id": 58387,
            "nodeType": "InheritanceSpecifier",
            "src": "1992:6:75"
          }
        ],
        "canonicalName": "AccessControl",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58381,
          "nodeType": "StructuredDocumentation",
          "src": "271:1660:75",
          "text": " @dev Contract module that allows children to implement role-based access\n control mechanisms. This is a lightweight version that doesn't allow enumerating role\n members except through off-chain means by accessing the contract event logs. Some\n applications may benefit from on-chain enumerability, for those cases see\n {AccessControlEnumerable}.\n Roles are referred to by their `bytes32` identifier. These should be exposed\n in the external API and be unique. The best way to achieve this is by\n using `public constant` hash digests:\n ```solidity\n bytes32 public constant MY_ROLE = keccak256(\"MY_ROLE\");\n ```\n Roles can be used to represent a set of permissions. To restrict access to a\n function call, use {hasRole}:\n ```solidity\n function foo() public {\n     require(hasRole(MY_ROLE, msg.sender));\n     ...\n }\n ```\n Roles can be granted and revoked dynamically via the {grantRole} and\n {revokeRole} functions. Each role has an associated admin role, and only\n accounts that have a role's admin role can call {grantRole} and {revokeRole}.\n By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n that only accounts with this role will be able to grant or revoke other\n roles. More complex role relationships can be created by using\n {_setRoleAdmin}.\n WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n grant and revoke this role. Extra precautions should be taken to secure\n accounts that have been granted it. We recommend using {AccessControlDefaultAdminRules}\n to enforce additional security measures for this role."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          58690,
          60974,
          60986,
          58888,
          60721
        ],
        "name": "AccessControl",
        "nameLocation": "1950:13:75",
        "scope": 58691,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 75
} as const;
