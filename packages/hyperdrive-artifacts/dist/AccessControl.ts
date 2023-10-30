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
    "id": 57985,
    "exportedSymbols": {
      "AccessControl": [
        57984
      ],
      "Context": [
        60015
      ],
      "ERC165": [
        60268
      ],
      "IAccessControl": [
        58182
      ],
      "IERC165": [
        60280
      ],
      "Math": [
        61146
      ],
      "SignedMath": [
        61251
      ],
      "Strings": [
        60244
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:8120:69",
    "nodes": [
      {
        "id": 57670,
        "nodeType": "PragmaDirective",
        "src": "108:23:69",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 57671,
        "nodeType": "ImportDirective",
        "src": "133:30:69",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol",
        "file": "./IAccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 57985,
        "sourceUnit": 58183,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 57672,
        "nodeType": "ImportDirective",
        "src": "164:30:69",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 57985,
        "sourceUnit": 60016,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 57673,
        "nodeType": "ImportDirective",
        "src": "195:30:69",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Strings.sol",
        "file": "../utils/Strings.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 57985,
        "sourceUnit": 60245,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 57674,
        "nodeType": "ImportDirective",
        "src": "226:43:69",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol",
        "file": "../utils/introspection/ERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 57985,
        "sourceUnit": 60269,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 57984,
        "nodeType": "ContractDefinition",
        "src": "1932:6295:69",
        "nodes": [
          {
            "id": 57688,
            "nodeType": "StructDefinition",
            "src": "2005:92:69",
            "nodes": [],
            "canonicalName": "AccessControl.RoleData",
            "members": [
              {
                "constant": false,
                "id": 57685,
                "mutability": "mutable",
                "name": "members",
                "nameLocation": "2056:7:69",
                "nodeType": "VariableDeclaration",
                "scope": 57688,
                "src": "2031:32:69",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 57684,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 57682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2039:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2031:24:69",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 57683,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2050:4:69",
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
                "id": 57687,
                "mutability": "mutable",
                "name": "adminRole",
                "nameLocation": "2081:9:69",
                "nodeType": "VariableDeclaration",
                "scope": 57688,
                "src": "2073:17:69",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 57686,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2073:7:69",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "RoleData",
            "nameLocation": "2012:8:69",
            "scope": 57984,
            "visibility": "public"
          },
          {
            "id": 57693,
            "nodeType": "VariableDeclaration",
            "src": "2103:43:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_roles",
            "nameLocation": "2140:6:69",
            "scope": 57984,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
              "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
            },
            "typeName": {
              "id": 57692,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 57689,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "2111:7:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "2103:28:69",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 57691,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 57690,
                  "name": "RoleData",
                  "nameLocations": [
                    "2122:8:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 57688,
                  "src": "2122:8:69"
                },
                "referencedDeclaration": 57688,
                "src": "2122:8:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_RoleData_$57688_storage_ptr",
                  "typeString": "struct AccessControl.RoleData"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 57696,
            "nodeType": "VariableDeclaration",
            "src": "2153:49:69",
            "nodes": [],
            "constant": true,
            "functionSelector": "a217fddf",
            "mutability": "constant",
            "name": "DEFAULT_ADMIN_ROLE",
            "nameLocation": "2177:18:69",
            "scope": 57984,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 57694,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2153:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "30783030",
              "id": 57695,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2198:4:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0x00"
            },
            "visibility": "public"
          },
          {
            "id": 57707,
            "nodeType": "ModifierDefinition",
            "src": "2589:76:69",
            "nodes": [],
            "body": {
              "id": 57706,
              "nodeType": "Block",
              "src": "2621:44:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57702,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57699,
                        "src": "2642:4:69",
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
                      "id": 57701,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        57761,
                        57800
                      ],
                      "referencedDeclaration": 57761,
                      "src": "2631:10:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) view"
                      }
                    },
                    "id": 57703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2631:16:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57704,
                  "nodeType": "ExpressionStatement",
                  "src": "2631:16:69"
                },
                {
                  "id": 57705,
                  "nodeType": "PlaceholderStatement",
                  "src": "2657:1:69"
                }
              ]
            },
            "documentation": {
              "id": 57697,
              "nodeType": "StructuredDocumentation",
              "src": "2209:375:69",
              "text": " @dev Modifier that checks that an account has a specific role. Reverts\n with a standardized message including the required role.\n The format of the revert reason is given by the following regular expression:\n  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n _Available since v4.1._"
            },
            "name": "onlyRole",
            "nameLocation": "2598:8:69",
            "parameters": {
              "id": 57700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57699,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2615:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57707,
                  "src": "2607:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57698,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2607:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2606:14:69"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 57729,
            "nodeType": "FunctionDefinition",
            "src": "2732:202:69",
            "nodes": [],
            "body": {
              "id": 57728,
              "nodeType": "Block",
              "src": "2823:111:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 57726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 57721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 57716,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57710,
                        "src": "2840:11:69",
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
                              "id": 57718,
                              "name": "IAccessControl",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58182,
                              "src": "2860:14:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$58182_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$58182_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            ],
                            "id": 57717,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "2855:4:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 57719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2855:20:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IAccessControl_$58182",
                            "typeString": "type(contract IAccessControl)"
                          }
                        },
                        "id": 57720,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2876:11:69",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "2855:32:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "2840:47:69",
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
                          "id": 57724,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57710,
                          "src": "2915:11:69",
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
                          "id": 57722,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2891:5:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_AccessControl_$57984_$",
                            "typeString": "type(contract super AccessControl)"
                          }
                        },
                        "id": 57723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2897:17:69",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60267,
                        "src": "2891:23:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 57725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2891:36:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2840:87:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 57715,
                  "id": 57727,
                  "nodeType": "Return",
                  "src": "2833:94:69"
                }
              ]
            },
            "baseFunctions": [
              60267
            ],
            "documentation": {
              "id": 57708,
              "nodeType": "StructuredDocumentation",
              "src": "2671:56:69",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2741:17:69",
            "overrides": {
              "id": 57712,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2799:8:69"
            },
            "parameters": {
              "id": 57711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57710,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2766:11:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57729,
                  "src": "2759:18:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 57709,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2759:6:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2758:20:69"
            },
            "returnParameters": {
              "id": 57715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57714,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57729,
                  "src": "2817:4:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2817:4:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2816:6:69"
            },
            "scope": 57984,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57748,
            "nodeType": "FunctionDefinition",
            "src": "3021:145:69",
            "nodes": [],
            "body": {
              "id": 57747,
              "nodeType": "Block",
              "src": "3113:53:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 57740,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57693,
                          "src": "3130:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 57742,
                        "indexExpression": {
                          "id": 57741,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57732,
                          "src": "3137:4:69",
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
                        "src": "3130:12:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$57688_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 57743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3143:7:69",
                      "memberName": "members",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57685,
                      "src": "3130:20:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 57745,
                    "indexExpression": {
                      "id": 57744,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57734,
                      "src": "3151:7:69",
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
                    "src": "3130:29:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 57739,
                  "id": 57746,
                  "nodeType": "Return",
                  "src": "3123:36:69"
                }
              ]
            },
            "baseFunctions": [
              58149
            ],
            "documentation": {
              "id": 57730,
              "nodeType": "StructuredDocumentation",
              "src": "2940:76:69",
              "text": " @dev Returns `true` if `account` has been granted `role`."
            },
            "functionSelector": "91d14854",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasRole",
            "nameLocation": "3030:7:69",
            "overrides": {
              "id": 57736,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3089:8:69"
            },
            "parameters": {
              "id": 57735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57732,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3046:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57748,
                  "src": "3038:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57731,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3038:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57734,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3060:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57748,
                  "src": "3052:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3052:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3037:31:69"
            },
            "returnParameters": {
              "id": 57739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57738,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57748,
                  "src": "3107:4:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57737,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:4:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3106:6:69"
            },
            "scope": 57984,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57761,
            "nodeType": "FunctionDefinition",
            "src": "3460:103:69",
            "nodes": [],
            "body": {
              "id": 57760,
              "nodeType": "Block",
              "src": "3516:47:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57755,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57751,
                        "src": "3537:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 57756,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60005,
                          "src": "3543:10:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 57757,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3543:12:69",
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
                      "id": 57754,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        57761,
                        57800
                      ],
                      "referencedDeclaration": 57800,
                      "src": "3526:10:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) view"
                      }
                    },
                    "id": 57758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3526:30:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57759,
                  "nodeType": "ExpressionStatement",
                  "src": "3526:30:69"
                }
              ]
            },
            "documentation": {
              "id": 57749,
              "nodeType": "StructuredDocumentation",
              "src": "3172:283:69",
              "text": " @dev Revert with a standard message if `_msgSender()` is missing `role`.\n Overriding this function changes the behavior of the {onlyRole} modifier.\n Format of the revert message is described in {_checkRole}.\n _Available since v4.6._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3469:10:69",
            "parameters": {
              "id": 57752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57751,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3488:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57761,
                  "src": "3480:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57750,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3480:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3479:14:69"
            },
            "returnParameters": {
              "id": 57753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3516:0:69"
            },
            "scope": 57984,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 57800,
            "nodeType": "FunctionDefinition",
            "src": "3844:479:69",
            "nodes": [],
            "body": {
              "id": 57799,
              "nodeType": "Block",
              "src": "3917:406:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 57773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3931:23:69",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 57770,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57764,
                          "src": "3940:4:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 57771,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57766,
                          "src": "3946:7:69",
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
                        "id": 57769,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57748,
                        "src": "3932:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 57772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3932:22:69",
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
                  "id": 57798,
                  "nodeType": "IfStatement",
                  "src": "3927:390:69",
                  "trueBody": {
                    "id": 57797,
                    "nodeType": "Block",
                    "src": "3956:361:69",
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
                                      "id": 57779,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4064:25:69",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874",
                                        "typeString": "literal_string \"AccessControl: account \""
                                      },
                                      "value": "AccessControl: account "
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "id": 57782,
                                          "name": "account",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 57766,
                                          "src": "4135:7:69",
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
                                          "id": 57780,
                                          "name": "Strings",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 60244,
                                          "src": "4115:7:69",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_Strings_$60244_$",
                                            "typeString": "type(library Strings)"
                                          }
                                        },
                                        "id": 57781,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4123:11:69",
                                        "memberName": "toHexString",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 60218,
                                        "src": "4115:19:69",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                          "typeString": "function (address) pure returns (string memory)"
                                        }
                                      },
                                      "id": 57783,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "4115:28:69",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    {
                                      "hexValue": "206973206d697373696e6720726f6c6520",
                                      "id": 57784,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4169:19:69",
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
                                              "id": 57789,
                                              "name": "role",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 57764,
                                              "src": "4242:4:69",
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
                                            "id": 57788,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "4234:7:69",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 57787,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "4234:7:69",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 57790,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "4234:13:69",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "hexValue": "3332",
                                          "id": 57791,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "4249:2:69",
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
                                          "id": 57785,
                                          "name": "Strings",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 60244,
                                          "src": "4214:7:69",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_Strings_$60244_$",
                                            "typeString": "type(library Strings)"
                                          }
                                        },
                                        "id": 57786,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4222:11:69",
                                        "memberName": "toHexString",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 60198,
                                        "src": "4214:19:69",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                                          "typeString": "function (uint256,uint256) pure returns (string memory)"
                                        }
                                      },
                                      "id": 57792,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "4214:38:69",
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
                                      "id": 57777,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "4022:3:69",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 57778,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "4026:12:69",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "4022:16:69",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 57793,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4022:252:69",
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
                                "id": 57776,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3994:6:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                  "typeString": "type(string storage pointer)"
                                },
                                "typeName": {
                                  "id": 57775,
                                  "name": "string",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3994:6:69",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 57794,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3994:298:69",
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
                            "id": 57774,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "3970:6:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 57795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3970:336:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 57796,
                        "nodeType": "ExpressionStatement",
                        "src": "3970:336:69"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 57762,
              "nodeType": "StructuredDocumentation",
              "src": "3569:270:69",
              "text": " @dev Revert with a standard message if `account` is missing `role`.\n The format of the revert reason is given by the following regular expression:\n  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3853:10:69",
            "parameters": {
              "id": 57767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57764,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3872:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57800,
                  "src": "3864:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57763,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3864:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57766,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3886:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57800,
                  "src": "3878:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57765,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3878:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3863:31:69"
            },
            "returnParameters": {
              "id": 57768,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3917:0:69"
            },
            "scope": 57984,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 57815,
            "nodeType": "FunctionDefinition",
            "src": "4504:129:69",
            "nodes": [],
            "body": {
              "id": 57814,
              "nodeType": "Block",
              "src": "4587:46:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 57809,
                        "name": "_roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57693,
                        "src": "4604:6:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                          "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                        }
                      },
                      "id": 57811,
                      "indexExpression": {
                        "id": 57810,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57803,
                        "src": "4611:4:69",
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
                      "src": "4604:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_RoleData_$57688_storage",
                        "typeString": "struct AccessControl.RoleData storage ref"
                      }
                    },
                    "id": 57812,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4617:9:69",
                    "memberName": "adminRole",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 57687,
                    "src": "4604:22:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 57808,
                  "id": 57813,
                  "nodeType": "Return",
                  "src": "4597:29:69"
                }
              ]
            },
            "baseFunctions": [
              58157
            ],
            "documentation": {
              "id": 57801,
              "nodeType": "StructuredDocumentation",
              "src": "4329:170:69",
              "text": " @dev Returns the admin role that controls `role`. See {grantRole} and\n {revokeRole}.\n To change a role's admin, use {_setRoleAdmin}."
            },
            "functionSelector": "248a9ca3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleAdmin",
            "nameLocation": "4513:12:69",
            "overrides": {
              "id": 57805,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4560:8:69"
            },
            "parameters": {
              "id": 57804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57803,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4534:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57815,
                  "src": "4526:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57802,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4525:14:69"
            },
            "returnParameters": {
              "id": 57808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57807,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57815,
                  "src": "4578:7:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57806,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4578:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4577:9:69"
            },
            "scope": 57984,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57835,
            "nodeType": "FunctionDefinition",
            "src": "4929:145:69",
            "nodes": [],
            "body": {
              "id": 57834,
              "nodeType": "Block",
              "src": "5032:42:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57830,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57818,
                        "src": "5053:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57831,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57820,
                        "src": "5059:7:69",
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
                      "id": 57829,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57952,
                      "src": "5042:10:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 57832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5042:25:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57833,
                  "nodeType": "ExpressionStatement",
                  "src": "5042:25:69"
                }
              ]
            },
            "baseFunctions": [
              58165
            ],
            "documentation": {
              "id": 57816,
              "nodeType": "StructuredDocumentation",
              "src": "4639:285:69",
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
                        "id": 57825,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57818,
                        "src": "5025:4:69",
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
                      "id": 57824,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57815,
                      "src": "5012:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 57826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5012:18:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 57827,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 57823,
                  "name": "onlyRole",
                  "nameLocations": [
                    "5003:8:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 57707,
                  "src": "5003:8:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "5003:28:69"
              }
            ],
            "name": "grantRole",
            "nameLocation": "4938:9:69",
            "overrides": {
              "id": 57822,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4994:8:69"
            },
            "parameters": {
              "id": 57821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57818,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4956:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57835,
                  "src": "4948:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57817,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4948:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57820,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4970:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57835,
                  "src": "4962:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4962:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4947:31:69"
            },
            "returnParameters": {
              "id": 57828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5032:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57855,
            "nodeType": "FunctionDefinition",
            "src": "5354:147:69",
            "nodes": [],
            "body": {
              "id": 57854,
              "nodeType": "Block",
              "src": "5458:43:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57850,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57838,
                        "src": "5480:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57851,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57840,
                        "src": "5486:7:69",
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
                      "id": 57849,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57983,
                      "src": "5468:11:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 57852,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5468:26:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57853,
                  "nodeType": "ExpressionStatement",
                  "src": "5468:26:69"
                }
              ]
            },
            "baseFunctions": [
              58173
            ],
            "documentation": {
              "id": 57836,
              "nodeType": "StructuredDocumentation",
              "src": "5080:269:69",
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
                        "id": 57845,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57838,
                        "src": "5451:4:69",
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
                      "id": 57844,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57815,
                      "src": "5438:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 57846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5438:18:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 57847,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 57843,
                  "name": "onlyRole",
                  "nameLocations": [
                    "5429:8:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 57707,
                  "src": "5429:8:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "5429:28:69"
              }
            ],
            "name": "revokeRole",
            "nameLocation": "5363:10:69",
            "overrides": {
              "id": 57842,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5420:8:69"
            },
            "parameters": {
              "id": 57841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57838,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "5382:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57855,
                  "src": "5374:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57837,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5374:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57840,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "5396:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57855,
                  "src": "5388:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5388:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5373:31:69"
            },
            "returnParameters": {
              "id": 57848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5458:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57878,
            "nodeType": "FunctionDefinition",
            "src": "6038:214:69",
            "nodes": [],
            "body": {
              "id": 57877,
              "nodeType": "Block",
              "src": "6115:137:69",
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
                        "id": 57868,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 57865,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57860,
                          "src": "6133:7:69",
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
                            "id": 57866,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60005,
                            "src": "6144:10:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 57867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6144:12:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6133:23:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66",
                        "id": 57869,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6158:49:69",
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
                      "id": 57864,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6125:7:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 57870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6125:83:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57871,
                  "nodeType": "ExpressionStatement",
                  "src": "6125:83:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57873,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57858,
                        "src": "6231:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57874,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57860,
                        "src": "6237:7:69",
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
                      "id": 57872,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57983,
                      "src": "6219:11:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 57875,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6219:26:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57876,
                  "nodeType": "ExpressionStatement",
                  "src": "6219:26:69"
                }
              ]
            },
            "baseFunctions": [
              58181
            ],
            "documentation": {
              "id": 57856,
              "nodeType": "StructuredDocumentation",
              "src": "5507:526:69",
              "text": " @dev Revokes `role` from the calling account.\n Roles are often managed via {grantRole} and {revokeRole}: this function's\n purpose is to provide a mechanism for accounts to lose their privileges\n if they are compromised (such as when a trusted device is misplaced).\n If the calling account had been revoked `role`, emits a {RoleRevoked}\n event.\n Requirements:\n - the caller must be `account`.\n May emit a {RoleRevoked} event."
            },
            "functionSelector": "36568abe",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRole",
            "nameLocation": "6047:12:69",
            "overrides": {
              "id": 57862,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6106:8:69"
            },
            "parameters": {
              "id": 57861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57858,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6068:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57878,
                  "src": "6060:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57857,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6060:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57860,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6082:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57878,
                  "src": "6074:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6074:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6059:31:69"
            },
            "returnParameters": {
              "id": 57863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6115:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 57892,
            "nodeType": "FunctionDefinition",
            "src": "6937:110:69",
            "nodes": [],
            "body": {
              "id": 57891,
              "nodeType": "Block",
              "src": "7005:42:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57887,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57881,
                        "src": "7026:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57888,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57883,
                        "src": "7032:7:69",
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
                      "id": 57886,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57952,
                      "src": "7015:10:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 57889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7015:25:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57890,
                  "nodeType": "ExpressionStatement",
                  "src": "7015:25:69"
                }
              ]
            },
            "documentation": {
              "id": 57879,
              "nodeType": "StructuredDocumentation",
              "src": "6258:674:69",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event. Note that unlike {grantRole}, this function doesn't perform any\n checks on the calling account.\n May emit a {RoleGranted} event.\n [WARNING]\n ====\n This function should only be called from the constructor when setting\n up the initial roles for the system.\n Using this function in any other way is effectively circumventing the admin\n system imposed by {AccessControl}.\n ====\n NOTE: This function is deprecated in favor of {_grantRole}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setupRole",
            "nameLocation": "6946:10:69",
            "parameters": {
              "id": 57884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57881,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6965:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57892,
                  "src": "6957:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57880,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6957:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57883,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6979:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57892,
                  "src": "6971:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6971:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6956:31:69"
            },
            "returnParameters": {
              "id": 57885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7005:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 57920,
            "nodeType": "FunctionDefinition",
            "src": "7172:247:69",
            "nodes": [],
            "body": {
              "id": 57919,
              "nodeType": "Block",
              "src": "7245:174:69",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    57901
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 57901,
                      "mutability": "mutable",
                      "name": "previousAdminRole",
                      "nameLocation": "7263:17:69",
                      "nodeType": "VariableDeclaration",
                      "scope": 57919,
                      "src": "7255:25:69",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 57900,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "7255:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 57905,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 57903,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57895,
                        "src": "7296:4:69",
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
                      "id": 57902,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57815,
                      "src": "7283:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 57904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7283:18:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7255:46:69"
                },
                {
                  "expression": {
                    "id": 57911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 57906,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57693,
                          "src": "7311:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 57908,
                        "indexExpression": {
                          "id": 57907,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57895,
                          "src": "7318:4:69",
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
                        "src": "7311:12:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$57688_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 57909,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7324:9:69",
                      "memberName": "adminRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57687,
                      "src": "7311:22:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 57910,
                      "name": "adminRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57897,
                      "src": "7336:9:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7311:34:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 57912,
                  "nodeType": "ExpressionStatement",
                  "src": "7311:34:69"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 57914,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57895,
                        "src": "7377:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57915,
                        "name": "previousAdminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57901,
                        "src": "7383:17:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57916,
                        "name": "adminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57897,
                        "src": "7402:9:69",
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
                      "id": 57913,
                      "name": "RoleAdminChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58121,
                      "src": "7360:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32,bytes32)"
                      }
                    },
                    "id": 57917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7360:52:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57918,
                  "nodeType": "EmitStatement",
                  "src": "7355:57:69"
                }
              ]
            },
            "documentation": {
              "id": 57893,
              "nodeType": "StructuredDocumentation",
              "src": "7053:114:69",
              "text": " @dev Sets `adminRole` as ``role``'s admin role.\n Emits a {RoleAdminChanged} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setRoleAdmin",
            "nameLocation": "7181:13:69",
            "parameters": {
              "id": 57898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57895,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "7203:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57920,
                  "src": "7195:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57894,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7195:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57897,
                  "mutability": "mutable",
                  "name": "adminRole",
                  "nameLocation": "7217:9:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57920,
                  "src": "7209:17:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7209:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7194:33:69"
            },
            "returnParameters": {
              "id": 57899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7245:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 57952,
            "nodeType": "FunctionDefinition",
            "src": "7587:233:69",
            "nodes": [],
            "body": {
              "id": 57951,
              "nodeType": "Block",
              "src": "7655:165:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 57932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7669:23:69",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 57929,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57923,
                          "src": "7678:4:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 57930,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57925,
                          "src": "7684:7:69",
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
                        "id": 57928,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57748,
                        "src": "7670:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 57931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7670:22:69",
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
                  "id": 57950,
                  "nodeType": "IfStatement",
                  "src": "7665:149:69",
                  "trueBody": {
                    "id": 57949,
                    "nodeType": "Block",
                    "src": "7694:120:69",
                    "statements": [
                      {
                        "expression": {
                          "id": 57940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 57933,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57693,
                                  "src": "7708:6:69",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 57935,
                                "indexExpression": {
                                  "id": 57934,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57923,
                                  "src": "7715:4:69",
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
                                "src": "7708:12:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$57688_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 57936,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7721:7:69",
                              "memberName": "members",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57685,
                              "src": "7708:20:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 57938,
                            "indexExpression": {
                              "id": 57937,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57925,
                              "src": "7729:7:69",
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
                            "src": "7708:29:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 57939,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7740:4:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "7708:36:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 57941,
                        "nodeType": "ExpressionStatement",
                        "src": "7708:36:69"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 57943,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57923,
                              "src": "7775:4:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 57944,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57925,
                              "src": "7781:7:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 57945,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60005,
                                "src": "7790:10:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 57946,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7790:12:69",
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
                            "id": 57942,
                            "name": "RoleGranted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58130,
                            "src": "7763:11:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 57947,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7763:40:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 57948,
                        "nodeType": "EmitStatement",
                        "src": "7758:45:69"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 57921,
              "nodeType": "StructuredDocumentation",
              "src": "7425:157:69",
              "text": " @dev Grants `role` to `account`.\n Internal function without access restriction.\n May emit a {RoleGranted} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_grantRole",
            "nameLocation": "7596:10:69",
            "parameters": {
              "id": 57926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57923,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "7615:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57952,
                  "src": "7607:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57922,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7607:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57925,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "7629:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57952,
                  "src": "7621:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7621:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7606:31:69"
            },
            "returnParameters": {
              "id": 57927,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7655:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 57983,
            "nodeType": "FunctionDefinition",
            "src": "7991:234:69",
            "nodes": [],
            "body": {
              "id": 57982,
              "nodeType": "Block",
              "src": "8060:165:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [
                      {
                        "id": 57961,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57955,
                        "src": "8082:4:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 57962,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57957,
                        "src": "8088:7:69",
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
                      "id": 57960,
                      "name": "hasRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57748,
                      "src": "8074:7:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) view returns (bool)"
                      }
                    },
                    "id": 57963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8074:22:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 57981,
                  "nodeType": "IfStatement",
                  "src": "8070:149:69",
                  "trueBody": {
                    "id": 57980,
                    "nodeType": "Block",
                    "src": "8098:121:69",
                    "statements": [
                      {
                        "expression": {
                          "id": 57971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 57964,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57693,
                                  "src": "8112:6:69",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$57688_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 57966,
                                "indexExpression": {
                                  "id": 57965,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57955,
                                  "src": "8119:4:69",
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
                                "src": "8112:12:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$57688_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 57967,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8125:7:69",
                              "memberName": "members",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57685,
                              "src": "8112:20:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 57969,
                            "indexExpression": {
                              "id": 57968,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57957,
                              "src": "8133:7:69",
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
                            "src": "8112:29:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "66616c7365",
                            "id": 57970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8144:5:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "8112:37:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 57972,
                        "nodeType": "ExpressionStatement",
                        "src": "8112:37:69"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 57974,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57955,
                              "src": "8180:4:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 57975,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57957,
                              "src": "8186:7:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 57976,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60005,
                                "src": "8195:10:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 57977,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8195:12:69",
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
                            "id": 57973,
                            "name": "RoleRevoked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58139,
                            "src": "8168:11:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 57978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8168:40:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 57979,
                        "nodeType": "EmitStatement",
                        "src": "8163:45:69"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 57953,
              "nodeType": "StructuredDocumentation",
              "src": "7826:160:69",
              "text": " @dev Revokes `role` from `account`.\n Internal function without access restriction.\n May emit a {RoleRevoked} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revokeRole",
            "nameLocation": "8000:11:69",
            "parameters": {
              "id": 57958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57955,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "8020:4:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57983,
                  "src": "8012:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57954,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8012:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57957,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "8034:7:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 57983,
                  "src": "8026:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8026:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8011:31:69"
            },
            "returnParameters": {
              "id": 57959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8060:0:69"
            },
            "scope": 57984,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 57676,
              "name": "Context",
              "nameLocations": [
                "1967:7:69"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60015,
              "src": "1967:7:69"
            },
            "id": 57677,
            "nodeType": "InheritanceSpecifier",
            "src": "1967:7:69"
          },
          {
            "baseName": {
              "id": 57678,
              "name": "IAccessControl",
              "nameLocations": [
                "1976:14:69"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58182,
              "src": "1976:14:69"
            },
            "id": 57679,
            "nodeType": "InheritanceSpecifier",
            "src": "1976:14:69"
          },
          {
            "baseName": {
              "id": 57680,
              "name": "ERC165",
              "nameLocations": [
                "1992:6:69"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60268,
              "src": "1992:6:69"
            },
            "id": 57681,
            "nodeType": "InheritanceSpecifier",
            "src": "1992:6:69"
          }
        ],
        "canonicalName": "AccessControl",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 57675,
          "nodeType": "StructuredDocumentation",
          "src": "271:1660:69",
          "text": " @dev Contract module that allows children to implement role-based access\n control mechanisms. This is a lightweight version that doesn't allow enumerating role\n members except through off-chain means by accessing the contract event logs. Some\n applications may benefit from on-chain enumerability, for those cases see\n {AccessControlEnumerable}.\n Roles are referred to by their `bytes32` identifier. These should be exposed\n in the external API and be unique. The best way to achieve this is by\n using `public constant` hash digests:\n ```solidity\n bytes32 public constant MY_ROLE = keccak256(\"MY_ROLE\");\n ```\n Roles can be used to represent a set of permissions. To restrict access to a\n function call, use {hasRole}:\n ```solidity\n function foo() public {\n     require(hasRole(MY_ROLE, msg.sender));\n     ...\n }\n ```\n Roles can be granted and revoked dynamically via the {grantRole} and\n {revokeRole} functions. Each role has an associated admin role, and only\n accounts that have a role's admin role can call {grantRole} and {revokeRole}.\n By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n that only accounts with this role will be able to grant or revoke other\n roles. More complex role relationships can be created by using\n {_setRoleAdmin}.\n WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n grant and revoke this role. Extra precautions should be taken to secure\n accounts that have been granted it. We recommend using {AccessControlDefaultAdminRules}\n to enforce additional security measures for this role."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          57984,
          60268,
          60280,
          58182,
          60015
        ],
        "name": "AccessControl",
        "nameLocation": "1950:13:69",
        "scope": 57985,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 69
}