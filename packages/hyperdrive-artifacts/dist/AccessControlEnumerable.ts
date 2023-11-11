export const AccessControlEnumerable = 
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
    "getRoleMember(bytes32,uint256)": "9010d07c",
    "getRoleMemberCount(bytes32)": "ca15c873",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Extension of {AccessControl} that allows enumerating the members of each role.\",\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":\"AccessControlEnumerable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleMember",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
          "name": "getRoleMemberCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "getRoleMember(bytes32,uint256)": {
            "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
          },
          "getRoleMemberCount(bytes32)": {
            "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
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
        "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol": "AccessControlEnumerable"
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
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol": {
        "keccak256": "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
        "urls": [
          "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
          "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"
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
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol": {
        "keccak256": "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
        "urls": [
          "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
          "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"
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
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        "urls": [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol",
    "id": 58816,
    "exportedSymbols": {
      "AccessControl": [
        58690
      ],
      "AccessControlEnumerable": [
        58815
      ],
      "Context": [
        60721
      ],
      "ERC165": [
        60974
      ],
      "EnumerableSet": [
        62570
      ],
      "IAccessControl": [
        58888
      ],
      "IAccessControlEnumerable": [
        58913
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
    "src": "118:2289:76",
    "nodes": [
      {
        "id": 58692,
        "nodeType": "PragmaDirective",
        "src": "118:23:76",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 58693,
        "nodeType": "ImportDirective",
        "src": "143:40:76",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol",
        "file": "./IAccessControlEnumerable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58816,
        "sourceUnit": 58914,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58694,
        "nodeType": "ImportDirective",
        "src": "184:29:76",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        "file": "./AccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58816,
        "sourceUnit": 58691,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58695,
        "nodeType": "ImportDirective",
        "src": "214:44:76",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol",
        "file": "../utils/structs/EnumerableSet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58816,
        "sourceUnit": 62571,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58815,
        "nodeType": "ContractDefinition",
        "src": "355:2051:76",
        "nodes": [
          {
            "id": 58704,
            "nodeType": "UsingForDirective",
            "src": "446:49:76",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 58701,
              "name": "EnumerableSet",
              "nameLocations": [
                "452:13:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62570,
              "src": "452:13:76"
            },
            "typeName": {
              "id": 58703,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 58702,
                "name": "EnumerableSet.AddressSet",
                "nameLocations": [
                  "470:13:76",
                  "484:10:76"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62283,
                "src": "470:24:76"
              },
              "referencedDeclaration": 62283,
              "src": "470:24:76",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                "typeString": "struct EnumerableSet.AddressSet"
              }
            }
          },
          {
            "id": 58709,
            "nodeType": "VariableDeclaration",
            "src": "501:65:76",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_roleMembers",
            "nameLocation": "554:12:76",
            "scope": 58815,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
              "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet)"
            },
            "typeName": {
              "id": 58708,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 58705,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "509:7:76",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "501:44:76",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
                "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 58707,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 58706,
                  "name": "EnumerableSet.AddressSet",
                  "nameLocations": [
                    "520:13:76",
                    "534:10:76"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62283,
                  "src": "520:24:76"
                },
                "referencedDeclaration": 62283,
                "src": "520:24:76",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                  "typeString": "struct EnumerableSet.AddressSet"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 58731,
            "nodeType": "FunctionDefinition",
            "src": "634:212:76",
            "nodes": [],
            "body": {
              "id": 58730,
              "nodeType": "Block",
              "src": "725:121:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 58728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 58723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 58718,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58712,
                        "src": "742:11:76",
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
                              "id": 58720,
                              "name": "IAccessControlEnumerable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58913,
                              "src": "762:24:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControlEnumerable_$58913_$",
                                "typeString": "type(contract IAccessControlEnumerable)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControlEnumerable_$58913_$",
                                "typeString": "type(contract IAccessControlEnumerable)"
                              }
                            ],
                            "id": 58719,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "757:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 58721,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "757:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IAccessControlEnumerable_$58913",
                            "typeString": "type(contract IAccessControlEnumerable)"
                          }
                        },
                        "id": 58722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "788:11:76",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "757:42:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "742:57:76",
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
                          "id": 58726,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58712,
                          "src": "827:11:76",
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
                          "id": 58724,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "803:5:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_AccessControlEnumerable_$58815_$",
                            "typeString": "type(contract super AccessControlEnumerable)"
                          }
                        },
                        "id": 58725,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "809:17:76",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 58435,
                        "src": "803:23:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 58727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "803:36:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "742:97:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58717,
                  "id": 58729,
                  "nodeType": "Return",
                  "src": "735:104:76"
                }
              ]
            },
            "baseFunctions": [
              58435
            ],
            "documentation": {
              "id": 58710,
              "nodeType": "StructuredDocumentation",
              "src": "573:56:76",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "643:17:76",
            "overrides": {
              "id": 58714,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "701:8:76"
            },
            "parameters": {
              "id": 58713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58712,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "668:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58731,
                  "src": "661:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 58711,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "660:20:76"
            },
            "returnParameters": {
              "id": 58717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58716,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58731,
                  "src": "719:4:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58715,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "719:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "718:6:76"
            },
            "scope": 58815,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58750,
            "nodeType": "FunctionDefinition",
            "src": "1431:151:76",
            "nodes": [],
            "body": {
              "id": 58749,
              "nodeType": "Block",
              "src": "1530:52:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58746,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58736,
                        "src": "1569:5:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "baseExpression": {
                          "id": 58742,
                          "name": "_roleMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58709,
                          "src": "1547:12:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
                            "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)"
                          }
                        },
                        "id": 58744,
                        "indexExpression": {
                          "id": 58743,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58734,
                          "src": "1560:4:76",
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
                        "src": "1547:18:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSet_$62283_storage",
                          "typeString": "struct EnumerableSet.AddressSet storage ref"
                        }
                      },
                      "id": 58745,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1566:2:76",
                      "memberName": "at",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62406,
                      "src": "1547:21:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_AddressSet_$62283_storage_ptr_$_t_uint256_$returns$_t_address_$attached_to$_t_struct$_AddressSet_$62283_storage_ptr_$",
                        "typeString": "function (struct EnumerableSet.AddressSet storage pointer,uint256) view returns (address)"
                      }
                    },
                    "id": 58747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1547:28:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 58741,
                  "id": 58748,
                  "nodeType": "Return",
                  "src": "1540:35:76"
                }
              ]
            },
            "baseFunctions": [
              58904
            ],
            "documentation": {
              "id": 58732,
              "nodeType": "StructuredDocumentation",
              "src": "852:574:76",
              "text": " @dev Returns one of the accounts that have `role`. `index` must be a\n value between 0 and {getRoleMemberCount}, non-inclusive.\n Role bearers are not sorted in any particular way, and their ordering may\n change at any point.\n WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure\n you perform all queries on the same block. See the following\n https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post]\n for more information."
            },
            "functionSelector": "9010d07c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleMember",
            "nameLocation": "1440:13:76",
            "overrides": {
              "id": 58738,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1503:8:76"
            },
            "parameters": {
              "id": 58737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58734,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1462:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58750,
                  "src": "1454:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58733,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58736,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "1476:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58750,
                  "src": "1468:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1468:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1453:29:76"
            },
            "returnParameters": {
              "id": 58741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58740,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58750,
                  "src": "1521:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1521:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1520:9:76"
            },
            "scope": 58815,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58766,
            "nodeType": "FunctionDefinition",
            "src": "1750:140:76",
            "nodes": [],
            "body": {
              "id": 58765,
              "nodeType": "Block",
              "src": "1839:51:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "baseExpression": {
                          "id": 58759,
                          "name": "_roleMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58709,
                          "src": "1856:12:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
                            "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)"
                          }
                        },
                        "id": 58761,
                        "indexExpression": {
                          "id": 58760,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58753,
                          "src": "1869:4:76",
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
                        "src": "1856:18:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSet_$62283_storage",
                          "typeString": "struct EnumerableSet.AddressSet storage ref"
                        }
                      },
                      "id": 58762,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1875:6:76",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62379,
                      "src": "1856:25:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_AddressSet_$62283_storage_ptr_$returns$_t_uint256_$attached_to$_t_struct$_AddressSet_$62283_storage_ptr_$",
                        "typeString": "function (struct EnumerableSet.AddressSet storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 58763,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1856:27:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 58758,
                  "id": 58764,
                  "nodeType": "Return",
                  "src": "1849:34:76"
                }
              ]
            },
            "baseFunctions": [
              58912
            ],
            "documentation": {
              "id": 58751,
              "nodeType": "StructuredDocumentation",
              "src": "1588:157:76",
              "text": " @dev Returns the number of accounts that have `role`. Can be used\n together with {getRoleMember} to enumerate all bearers of a role."
            },
            "functionSelector": "ca15c873",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleMemberCount",
            "nameLocation": "1759:18:76",
            "overrides": {
              "id": 58755,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1812:8:76"
            },
            "parameters": {
              "id": 58754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58753,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1786:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58766,
                  "src": "1778:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58752,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1778:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1777:14:76"
            },
            "returnParameters": {
              "id": 58758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58757,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58766,
                  "src": "1830:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1830:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1829:9:76"
            },
            "scope": 58815,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58790,
            "nodeType": "FunctionDefinition",
            "src": "1978:166:76",
            "nodes": [],
            "body": {
              "id": 58789,
              "nodeType": "Block",
              "src": "2055:89:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58778,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58769,
                        "src": "2082:4:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58779,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58771,
                        "src": "2088:7:76",
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
                      "expression": {
                        "id": 58775,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2065:5:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_AccessControlEnumerable_$58815_$",
                          "typeString": "type(contract super AccessControlEnumerable)"
                        }
                      },
                      "id": 58777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2071:10:76",
                      "memberName": "_grantRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58658,
                      "src": "2065:16:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2065:31:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58781,
                  "nodeType": "ExpressionStatement",
                  "src": "2065:31:76"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58786,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58771,
                        "src": "2129:7:76",
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
                        "baseExpression": {
                          "id": 58782,
                          "name": "_roleMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58709,
                          "src": "2106:12:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
                            "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)"
                          }
                        },
                        "id": 58784,
                        "indexExpression": {
                          "id": 58783,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58769,
                          "src": "2119:4:76",
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
                        "src": "2106:18:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSet_$62283_storage",
                          "typeString": "struct EnumerableSet.AddressSet storage ref"
                        }
                      },
                      "id": 58785,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2125:3:76",
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62310,
                      "src": "2106:22:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_AddressSet_$62283_storage_ptr_$_t_address_$returns$_t_bool_$attached_to$_t_struct$_AddressSet_$62283_storage_ptr_$",
                        "typeString": "function (struct EnumerableSet.AddressSet storage pointer,address) returns (bool)"
                      }
                    },
                    "id": 58787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2106:31:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58788,
                  "nodeType": "ExpressionStatement",
                  "src": "2106:31:76"
                }
              ]
            },
            "baseFunctions": [
              58658
            ],
            "documentation": {
              "id": 58767,
              "nodeType": "StructuredDocumentation",
              "src": "1896:77:76",
              "text": " @dev Overload {_grantRole} to track enumerable memberships"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_grantRole",
            "nameLocation": "1987:10:76",
            "overrides": {
              "id": 58773,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2046:8:76"
            },
            "parameters": {
              "id": 58772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58769,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2006:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58790,
                  "src": "1998:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58768,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1998:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58771,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2020:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58790,
                  "src": "2012:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2012:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1997:31:76"
            },
            "returnParameters": {
              "id": 58774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2055:0:76"
            },
            "scope": 58815,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58814,
            "nodeType": "FunctionDefinition",
            "src": "2233:171:76",
            "nodes": [],
            "body": {
              "id": 58813,
              "nodeType": "Block",
              "src": "2311:93:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58802,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58793,
                        "src": "2339:4:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 58803,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58795,
                        "src": "2345:7:76",
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
                      "expression": {
                        "id": 58799,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2321:5:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_AccessControlEnumerable_$58815_$",
                          "typeString": "type(contract super AccessControlEnumerable)"
                        }
                      },
                      "id": 58801,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2327:11:76",
                      "memberName": "_revokeRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58689,
                      "src": "2321:17:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 58804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2321:32:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58805,
                  "nodeType": "ExpressionStatement",
                  "src": "2321:32:76"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58810,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58795,
                        "src": "2389:7:76",
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
                        "baseExpression": {
                          "id": 58806,
                          "name": "_roleMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58709,
                          "src": "2363:12:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$62283_storage_$",
                            "typeString": "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)"
                          }
                        },
                        "id": 58808,
                        "indexExpression": {
                          "id": 58807,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58793,
                          "src": "2376:4:76",
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
                        "src": "2363:18:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSet_$62283_storage",
                          "typeString": "struct EnumerableSet.AddressSet storage ref"
                        }
                      },
                      "id": 58809,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2382:6:76",
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62337,
                      "src": "2363:25:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_AddressSet_$62283_storage_ptr_$_t_address_$returns$_t_bool_$attached_to$_t_struct$_AddressSet_$62283_storage_ptr_$",
                        "typeString": "function (struct EnumerableSet.AddressSet storage pointer,address) returns (bool)"
                      }
                    },
                    "id": 58811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2363:34:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58812,
                  "nodeType": "ExpressionStatement",
                  "src": "2363:34:76"
                }
              ]
            },
            "baseFunctions": [
              58689
            ],
            "documentation": {
              "id": 58791,
              "nodeType": "StructuredDocumentation",
              "src": "2150:78:76",
              "text": " @dev Overload {_revokeRole} to track enumerable memberships"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revokeRole",
            "nameLocation": "2242:11:76",
            "overrides": {
              "id": 58797,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2302:8:76"
            },
            "parameters": {
              "id": 58796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58793,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2262:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "2254:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58792,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2254:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58795,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2276:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "2268:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58794,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2268:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2253:31:76"
            },
            "returnParameters": {
              "id": 58798,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2311:0:76"
            },
            "scope": 58815,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 58697,
              "name": "IAccessControlEnumerable",
              "nameLocations": [
                "400:24:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58913,
              "src": "400:24:76"
            },
            "id": 58698,
            "nodeType": "InheritanceSpecifier",
            "src": "400:24:76"
          },
          {
            "baseName": {
              "id": 58699,
              "name": "AccessControl",
              "nameLocations": [
                "426:13:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58690,
              "src": "426:13:76"
            },
            "id": 58700,
            "nodeType": "InheritanceSpecifier",
            "src": "426:13:76"
          }
        ],
        "canonicalName": "AccessControlEnumerable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58696,
          "nodeType": "StructuredDocumentation",
          "src": "260:94:76",
          "text": " @dev Extension of {AccessControl} that allows enumerating the members of each role."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          58815,
          58690,
          60974,
          60986,
          58913,
          58888,
          60721
        ],
        "name": "AccessControlEnumerable",
        "nameLocation": "373:23:76",
        "scope": 58816,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 76
} as const;
