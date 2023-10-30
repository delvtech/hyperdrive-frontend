export const AccessControlEnumerable = {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  deployedBytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  methodIdentifiers: {
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "getRoleMember(bytes32,uint256)": "9010d07c",
    "getRoleMemberCount(bytes32)": "ca15c873",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "supportsInterface(bytes4)": "01ffc9a7",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],"devdoc":{"details":"Extension of {AccessControl} that allows enumerating the members of each role.","events":{"RoleAdminChanged(bytes32,bytes32,bytes32)":{"details":"Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._"},"RoleGranted(bytes32,address,address)":{"details":"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}."},"RoleRevoked(bytes32,address,address)":{"details":"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)"}},"kind":"dev","methods":{"getRoleAdmin(bytes32)":{"details":"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role\'s admin, use {_setRoleAdmin}."},"getRoleMember(bytes32,uint256)":{"details":"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."},"getRoleMemberCount(bytes32)":{"details":"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."},"grantRole(bytes32,address)":{"details":"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``\'s admin role. May emit a {RoleGranted} event."},"hasRole(bytes32,address)":{"details":"Returns `true` if `account` has been granted `role`."},"renounceRole(bytes32,address)":{"details":"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function\'s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event."},"revokeRole(bytes32,address)":{"details":"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``\'s admin role. May emit a {RoleRevoked} event."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":"AccessControlEnumerable"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/AccessControl.sol":{"keccak256":"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c","license":"MIT","urls":["bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88","dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"]},"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":{"keccak256":"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247","license":"MIT","urls":["bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b","dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"]},"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol":{"keccak256":"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57","license":"MIT","urls":["bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a","dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"]},"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":{"keccak256":"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676","license":"MIT","urls":["bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276","dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f","license":"MIT","urls":["bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf","dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT","urls":["bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d","dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT","urls":["bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f","dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858","license":"MIT","urls":["bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4","dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol":{"keccak256":"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598","license":"MIT","urls":["bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72","dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
              indexed: true,
            },
            {
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
            },
            {
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
            },
          ],
          type: "event",
          name: "RoleAdminChanged",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
              indexed: true,
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "RoleGranted",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
              indexed: true,
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "RoleRevoked",
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "getRoleMember",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "getRoleMemberCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "grantRole",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "renounceRole",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "revokeRole",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "getRoleAdmin(bytes32)": {
            details:
              "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
          },
          "getRoleMember(bytes32,uint256)": {
            details:
              "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.",
          },
          "getRoleMemberCount(bytes32)": {
            details:
              "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.",
          },
          "grantRole(bytes32,address)": {
            details:
              "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
          },
          "hasRole(bytes32,address)": {
            details: "Returns `true` if `account` has been granted `role`.",
          },
          "renounceRole(bytes32,address)": {
            details:
              "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
          },
          "revokeRole(bytes32,address)": {
            details:
              "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
          },
          "supportsInterface(bytes4)": {
            details: "See {IERC165-supportsInterface}.",
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {},
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/",
      ],
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: "ipfs",
      },
      compilationTarget: {
        "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":
          "AccessControlEnumerable",
      },
      libraries: {},
    },
    sources: {
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        keccak256:
          "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        urls: [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":
        {
          keccak256:
            "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
          urls: [
            "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
            "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        keccak256:
          "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        urls: [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":
        {
          keccak256:
            "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
          urls: [
            "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
            "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        urls: [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        keccak256:
          "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        urls: [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        keccak256:
          "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        urls: [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        keccak256:
          "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        urls: [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        keccak256:
          "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        urls: [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        keccak256:
          "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        urls: [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        keccak256:
          "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        urls: [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath:
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol",
    id: 58110,
    exportedSymbols: {
      AccessControl: [57984],
      AccessControlEnumerable: [58109],
      Context: [60015],
      ERC165: [60268],
      EnumerableSet: [61864],
      IAccessControl: [58182],
      IAccessControlEnumerable: [58207],
      IERC165: [60280],
      Math: [61146],
      SignedMath: [61251],
      Strings: [60244],
    },
    nodeType: "SourceUnit",
    src: "118:2289:70",
    nodes: [
      {
        id: 57986,
        nodeType: "PragmaDirective",
        src: "118:23:70",
        nodes: [],
        literals: ["solidity", "^", "0.8", ".0"],
      },
      {
        id: 57987,
        nodeType: "ImportDirective",
        src: "143:40:70",
        nodes: [],
        absolutePath:
          "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol",
        file: "./IAccessControlEnumerable.sol",
        nameLocation: "-1:-1:-1",
        scope: 58110,
        sourceUnit: 58208,
        symbolAliases: [],
        unitAlias: "",
      },
      {
        id: 57988,
        nodeType: "ImportDirective",
        src: "184:29:70",
        nodes: [],
        absolutePath:
          "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        file: "./AccessControl.sol",
        nameLocation: "-1:-1:-1",
        scope: 58110,
        sourceUnit: 57985,
        symbolAliases: [],
        unitAlias: "",
      },
      {
        id: 57989,
        nodeType: "ImportDirective",
        src: "214:44:70",
        nodes: [],
        absolutePath:
          "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol",
        file: "../utils/structs/EnumerableSet.sol",
        nameLocation: "-1:-1:-1",
        scope: 58110,
        sourceUnit: 61865,
        symbolAliases: [],
        unitAlias: "",
      },
      {
        id: 58109,
        nodeType: "ContractDefinition",
        src: "355:2051:70",
        nodes: [
          {
            id: 57998,
            nodeType: "UsingForDirective",
            src: "446:49:70",
            nodes: [],
            global: false,
            libraryName: {
              id: 57995,
              name: "EnumerableSet",
              nameLocations: ["452:13:70"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 61864,
              src: "452:13:70",
            },
            typeName: {
              id: 57997,
              nodeType: "UserDefinedTypeName",
              pathNode: {
                id: 57996,
                name: "EnumerableSet.AddressSet",
                nameLocations: ["470:13:70", "484:10:70"],
                nodeType: "IdentifierPath",
                referencedDeclaration: 61577,
                src: "470:24:70",
              },
              referencedDeclaration: 61577,
              src: "470:24:70",
              typeDescriptions: {
                typeIdentifier: "t_struct$_AddressSet_$61577_storage_ptr",
                typeString: "struct EnumerableSet.AddressSet",
              },
            },
          },
          {
            id: 58003,
            nodeType: "VariableDeclaration",
            src: "501:65:70",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "_roleMembers",
            nameLocation: "554:12:70",
            scope: 58109,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
              typeString: "mapping(bytes32 => struct EnumerableSet.AddressSet)",
            },
            typeName: {
              id: 58002,
              keyName: "",
              keyNameLocation: "-1:-1:-1",
              keyType: {
                id: 57999,
                name: "bytes32",
                nodeType: "ElementaryTypeName",
                src: "509:7:70",
                typeDescriptions: {
                  typeIdentifier: "t_bytes32",
                  typeString: "bytes32",
                },
              },
              nodeType: "Mapping",
              src: "501:44:70",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
                typeString:
                  "mapping(bytes32 => struct EnumerableSet.AddressSet)",
              },
              valueName: "",
              valueNameLocation: "-1:-1:-1",
              valueType: {
                id: 58001,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 58000,
                  name: "EnumerableSet.AddressSet",
                  nameLocations: ["520:13:70", "534:10:70"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 61577,
                  src: "520:24:70",
                },
                referencedDeclaration: 61577,
                src: "520:24:70",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_AddressSet_$61577_storage_ptr",
                  typeString: "struct EnumerableSet.AddressSet",
                },
              },
            },
            visibility: "private",
          },
          {
            id: 58025,
            nodeType: "FunctionDefinition",
            src: "634:212:70",
            nodes: [],
            body: {
              id: 58024,
              nodeType: "Block",
              src: "725:121:70",
              nodes: [],
              statements: [
                {
                  expression: {
                    commonType: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    id: 58022,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      commonType: {
                        typeIdentifier: "t_bytes4",
                        typeString: "bytes4",
                      },
                      id: 58017,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 58012,
                        name: "interfaceId",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58006,
                        src: "742:11:70",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "==",
                      rightExpression: {
                        expression: {
                          arguments: [
                            {
                              id: 58014,
                              name: "IAccessControlEnumerable",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 58207,
                              src: "762:24:70",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_type$_t_contract$_IAccessControlEnumerable_$58207_$",
                                typeString:
                                  "type(contract IAccessControlEnumerable)",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier:
                                  "t_type$_t_contract$_IAccessControlEnumerable_$58207_$",
                                typeString:
                                  "type(contract IAccessControlEnumerable)",
                              },
                            ],
                            id: 58013,
                            name: "type",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -27,
                            src: "757:4:70",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_metatype_pure$__$returns$__$",
                              typeString: "function () pure",
                            },
                          },
                          id: 58015,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "757:30:70",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier:
                              "t_magic_meta_type_t_contract$_IAccessControlEnumerable_$58207",
                            typeString:
                              "type(contract IAccessControlEnumerable)",
                          },
                        },
                        id: 58016,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        memberLocation: "788:11:70",
                        memberName: "interfaceId",
                        nodeType: "MemberAccess",
                        src: "757:42:70",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      },
                      src: "742:57:70",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "||",
                    rightExpression: {
                      arguments: [
                        {
                          id: 58020,
                          name: "interfaceId",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58006,
                          src: "827:11:70",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes4",
                            typeString: "bytes4",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bytes4",
                            typeString: "bytes4",
                          },
                        ],
                        expression: {
                          id: 58018,
                          name: "super",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: -25,
                          src: "803:5:70",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_super$_AccessControlEnumerable_$58109_$",
                            typeString:
                              "type(contract super AccessControlEnumerable)",
                          },
                        },
                        id: 58019,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "809:17:70",
                        memberName: "supportsInterface",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 57729,
                        src: "803:23:70",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          typeString: "function (bytes4) view returns (bool)",
                        },
                      },
                      id: 58021,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "803:36:70",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "742:97:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 58011,
                  id: 58023,
                  nodeType: "Return",
                  src: "735:104:70",
                },
              ],
            },
            baseFunctions: [57729],
            documentation: {
              id: 58004,
              nodeType: "StructuredDocumentation",
              src: "573:56:70",
              text: " @dev See {IERC165-supportsInterface}.",
            },
            functionSelector: "01ffc9a7",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "supportsInterface",
            nameLocation: "643:17:70",
            overrides: {
              id: 58008,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "701:8:70",
            },
            parameters: {
              id: 58007,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58006,
                  mutability: "mutable",
                  name: "interfaceId",
                  nameLocation: "668:11:70",
                  nodeType: "VariableDeclaration",
                  scope: 58025,
                  src: "661:18:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes4",
                    typeString: "bytes4",
                  },
                  typeName: {
                    id: 58005,
                    name: "bytes4",
                    nodeType: "ElementaryTypeName",
                    src: "661:6:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes4",
                      typeString: "bytes4",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "660:20:70",
            },
            returnParameters: {
              id: 58011,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58010,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 58025,
                  src: "719:4:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 58009,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "719:4:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "718:6:70",
            },
            scope: 58109,
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            id: 58044,
            nodeType: "FunctionDefinition",
            src: "1431:151:70",
            nodes: [],
            body: {
              id: 58043,
              nodeType: "Block",
              src: "1530:52:70",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 58040,
                        name: "index",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58030,
                        src: "1569:5:70",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        baseExpression: {
                          id: 58036,
                          name: "_roleMembers",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58003,
                          src: "1547:12:70",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
                            typeString:
                              "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)",
                          },
                        },
                        id: 58038,
                        indexExpression: {
                          id: 58037,
                          name: "role",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58028,
                          src: "1560:4:70",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "1547:18:70",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_AddressSet_$61577_storage",
                          typeString:
                            "struct EnumerableSet.AddressSet storage ref",
                        },
                      },
                      id: 58039,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1566:2:70",
                      memberName: "at",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 61700,
                      src: "1547:21:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_struct$_AddressSet_$61577_storage_ptr_$_t_uint256_$returns$_t_address_$attached_to$_t_struct$_AddressSet_$61577_storage_ptr_$",
                        typeString:
                          "function (struct EnumerableSet.AddressSet storage pointer,uint256) view returns (address)",
                      },
                    },
                    id: 58041,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1547:28:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  functionReturnParameters: 58035,
                  id: 58042,
                  nodeType: "Return",
                  src: "1540:35:70",
                },
              ],
            },
            baseFunctions: [58198],
            documentation: {
              id: 58026,
              nodeType: "StructuredDocumentation",
              src: "852:574:70",
              text: " @dev Returns one of the accounts that have `role`. `index` must be a\n value between 0 and {getRoleMemberCount}, non-inclusive.\n Role bearers are not sorted in any particular way, and their ordering may\n change at any point.\n WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure\n you perform all queries on the same block. See the following\n https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post]\n for more information.",
            },
            functionSelector: "9010d07c",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getRoleMember",
            nameLocation: "1440:13:70",
            overrides: {
              id: 58032,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "1503:8:70",
            },
            parameters: {
              id: 58031,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58028,
                  mutability: "mutable",
                  name: "role",
                  nameLocation: "1462:4:70",
                  nodeType: "VariableDeclaration",
                  scope: 58044,
                  src: "1454:12:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 58027,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1454:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 58030,
                  mutability: "mutable",
                  name: "index",
                  nameLocation: "1476:5:70",
                  nodeType: "VariableDeclaration",
                  scope: 58044,
                  src: "1468:13:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 58029,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1468:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1453:29:70",
            },
            returnParameters: {
              id: 58035,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58034,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 58044,
                  src: "1521:7:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 58033,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1521:7:70",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1520:9:70",
            },
            scope: 58109,
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            id: 58060,
            nodeType: "FunctionDefinition",
            src: "1750:140:70",
            nodes: [],
            body: {
              id: 58059,
              nodeType: "Block",
              src: "1839:51:70",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        baseExpression: {
                          id: 58053,
                          name: "_roleMembers",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58003,
                          src: "1856:12:70",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
                            typeString:
                              "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)",
                          },
                        },
                        id: 58055,
                        indexExpression: {
                          id: 58054,
                          name: "role",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58047,
                          src: "1869:4:70",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "1856:18:70",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_AddressSet_$61577_storage",
                          typeString:
                            "struct EnumerableSet.AddressSet storage ref",
                        },
                      },
                      id: 58056,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1875:6:70",
                      memberName: "length",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 61673,
                      src: "1856:25:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_struct$_AddressSet_$61577_storage_ptr_$returns$_t_uint256_$attached_to$_t_struct$_AddressSet_$61577_storage_ptr_$",
                        typeString:
                          "function (struct EnumerableSet.AddressSet storage pointer) view returns (uint256)",
                      },
                    },
                    id: 58057,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1856:27:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 58052,
                  id: 58058,
                  nodeType: "Return",
                  src: "1849:34:70",
                },
              ],
            },
            baseFunctions: [58206],
            documentation: {
              id: 58045,
              nodeType: "StructuredDocumentation",
              src: "1588:157:70",
              text: " @dev Returns the number of accounts that have `role`. Can be used\n together with {getRoleMember} to enumerate all bearers of a role.",
            },
            functionSelector: "ca15c873",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getRoleMemberCount",
            nameLocation: "1759:18:70",
            overrides: {
              id: 58049,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "1812:8:70",
            },
            parameters: {
              id: 58048,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58047,
                  mutability: "mutable",
                  name: "role",
                  nameLocation: "1786:4:70",
                  nodeType: "VariableDeclaration",
                  scope: 58060,
                  src: "1778:12:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 58046,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1778:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1777:14:70",
            },
            returnParameters: {
              id: 58052,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58051,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 58060,
                  src: "1830:7:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 58050,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1830:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1829:9:70",
            },
            scope: 58109,
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            id: 58084,
            nodeType: "FunctionDefinition",
            src: "1978:166:70",
            nodes: [],
            body: {
              id: 58083,
              nodeType: "Block",
              src: "2055:89:70",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 58072,
                        name: "role",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58063,
                        src: "2082:4:70",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      {
                        id: 58073,
                        name: "account",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58065,
                        src: "2088:7:70",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        id: 58069,
                        name: "super",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: "2065:5:70",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_super$_AccessControlEnumerable_$58109_$",
                          typeString:
                            "type(contract super AccessControlEnumerable)",
                        },
                      },
                      id: 58071,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2071:10:70",
                      memberName: "_grantRole",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 57952,
                      src: "2065:16:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        typeString: "function (bytes32,address)",
                      },
                    },
                    id: 58074,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2065:31:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 58075,
                  nodeType: "ExpressionStatement",
                  src: "2065:31:70",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 58080,
                        name: "account",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58065,
                        src: "2129:7:70",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        baseExpression: {
                          id: 58076,
                          name: "_roleMembers",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58003,
                          src: "2106:12:70",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
                            typeString:
                              "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)",
                          },
                        },
                        id: 58078,
                        indexExpression: {
                          id: 58077,
                          name: "role",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58063,
                          src: "2119:4:70",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "2106:18:70",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_AddressSet_$61577_storage",
                          typeString:
                            "struct EnumerableSet.AddressSet storage ref",
                        },
                      },
                      id: 58079,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2125:3:70",
                      memberName: "add",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 61604,
                      src: "2106:22:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_struct$_AddressSet_$61577_storage_ptr_$_t_address_$returns$_t_bool_$attached_to$_t_struct$_AddressSet_$61577_storage_ptr_$",
                        typeString:
                          "function (struct EnumerableSet.AddressSet storage pointer,address) returns (bool)",
                      },
                    },
                    id: 58081,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2106:31:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 58082,
                  nodeType: "ExpressionStatement",
                  src: "2106:31:70",
                },
              ],
            },
            baseFunctions: [57952],
            documentation: {
              id: 58061,
              nodeType: "StructuredDocumentation",
              src: "1896:77:70",
              text: " @dev Overload {_grantRole} to track enumerable memberships",
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_grantRole",
            nameLocation: "1987:10:70",
            overrides: {
              id: 58067,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "2046:8:70",
            },
            parameters: {
              id: 58066,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58063,
                  mutability: "mutable",
                  name: "role",
                  nameLocation: "2006:4:70",
                  nodeType: "VariableDeclaration",
                  scope: 58084,
                  src: "1998:12:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 58062,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1998:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 58065,
                  mutability: "mutable",
                  name: "account",
                  nameLocation: "2020:7:70",
                  nodeType: "VariableDeclaration",
                  scope: 58084,
                  src: "2012:15:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 58064,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "2012:7:70",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1997:31:70",
            },
            returnParameters: {
              id: 58068,
              nodeType: "ParameterList",
              parameters: [],
              src: "2055:0:70",
            },
            scope: 58109,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
          {
            id: 58108,
            nodeType: "FunctionDefinition",
            src: "2233:171:70",
            nodes: [],
            body: {
              id: 58107,
              nodeType: "Block",
              src: "2311:93:70",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 58096,
                        name: "role",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58087,
                        src: "2339:4:70",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      {
                        id: 58097,
                        name: "account",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58089,
                        src: "2345:7:70",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        id: 58093,
                        name: "super",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: "2321:5:70",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_super$_AccessControlEnumerable_$58109_$",
                          typeString:
                            "type(contract super AccessControlEnumerable)",
                        },
                      },
                      id: 58095,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2327:11:70",
                      memberName: "_revokeRole",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 57983,
                      src: "2321:17:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        typeString: "function (bytes32,address)",
                      },
                    },
                    id: 58098,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2321:32:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 58099,
                  nodeType: "ExpressionStatement",
                  src: "2321:32:70",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 58104,
                        name: "account",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 58089,
                        src: "2389:7:70",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        baseExpression: {
                          id: 58100,
                          name: "_roleMembers",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58003,
                          src: "2363:12:70",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_bytes32_$_t_struct$_AddressSet_$61577_storage_$",
                            typeString:
                              "mapping(bytes32 => struct EnumerableSet.AddressSet storage ref)",
                          },
                        },
                        id: 58102,
                        indexExpression: {
                          id: 58101,
                          name: "role",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 58087,
                          src: "2376:4:70",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "2363:18:70",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_AddressSet_$61577_storage",
                          typeString:
                            "struct EnumerableSet.AddressSet storage ref",
                        },
                      },
                      id: 58103,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2382:6:70",
                      memberName: "remove",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 61631,
                      src: "2363:25:70",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_struct$_AddressSet_$61577_storage_ptr_$_t_address_$returns$_t_bool_$attached_to$_t_struct$_AddressSet_$61577_storage_ptr_$",
                        typeString:
                          "function (struct EnumerableSet.AddressSet storage pointer,address) returns (bool)",
                      },
                    },
                    id: 58105,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2363:34:70",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 58106,
                  nodeType: "ExpressionStatement",
                  src: "2363:34:70",
                },
              ],
            },
            baseFunctions: [57983],
            documentation: {
              id: 58085,
              nodeType: "StructuredDocumentation",
              src: "2150:78:70",
              text: " @dev Overload {_revokeRole} to track enumerable memberships",
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_revokeRole",
            nameLocation: "2242:11:70",
            overrides: {
              id: 58091,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "2302:8:70",
            },
            parameters: {
              id: 58090,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 58087,
                  mutability: "mutable",
                  name: "role",
                  nameLocation: "2262:4:70",
                  nodeType: "VariableDeclaration",
                  scope: 58108,
                  src: "2254:12:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 58086,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "2254:7:70",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 58089,
                  mutability: "mutable",
                  name: "account",
                  nameLocation: "2276:7:70",
                  nodeType: "VariableDeclaration",
                  scope: 58108,
                  src: "2268:15:70",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 58088,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "2268:7:70",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2253:31:70",
            },
            returnParameters: {
              id: 58092,
              nodeType: "ParameterList",
              parameters: [],
              src: "2311:0:70",
            },
            scope: 58109,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
        ],
        abstract: true,
        baseContracts: [
          {
            baseName: {
              id: 57991,
              name: "IAccessControlEnumerable",
              nameLocations: ["400:24:70"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 58207,
              src: "400:24:70",
            },
            id: 57992,
            nodeType: "InheritanceSpecifier",
            src: "400:24:70",
          },
          {
            baseName: {
              id: 57993,
              name: "AccessControl",
              nameLocations: ["426:13:70"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 57984,
              src: "426:13:70",
            },
            id: 57994,
            nodeType: "InheritanceSpecifier",
            src: "426:13:70",
          },
        ],
        canonicalName: "AccessControlEnumerable",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 57990,
          nodeType: "StructuredDocumentation",
          src: "260:94:70",
          text: " @dev Extension of {AccessControl} that allows enumerating the members of each role.",
        },
        fullyImplemented: true,
        linearizedBaseContracts: [
          58109, 57984, 60268, 60280, 58207, 58182, 60015,
        ],
        name: "AccessControlEnumerable",
        nameLocation: "373:23:70",
        scope: 58110,
        usedErrors: [],
      },
    ],
    license: "MIT",
  },
  id: 70,
} as const;
