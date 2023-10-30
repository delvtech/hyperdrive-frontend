export const StdChains = {
  abi: [],
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
  methodIdentifiers: {},
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"notice":"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain\'s name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let\'s say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.","version":1}},"settings":{"compilationTarget":{"lib/forge-std/src/StdChains.sol":"StdChains"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [],
      devdoc: {
        kind: "dev",
        methods: {},
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
        "lib/forge-std/src/StdChains.sol": "StdChains",
      },
      libraries: {},
    },
    sources: {
      "lib/forge-std/src/StdChains.sol": {
        keccak256:
          "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
        urls: [
          "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
          "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/Vm.sol": {
        keccak256:
          "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        urls: [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "lib/forge-std/src/StdChains.sol",
    id: 19284,
    exportedSymbols: {
      StdChains: [19283],
      VmSafe: [27769],
    },
    nodeType: "SourceUnit",
    src: "32:10885:54",
    nodes: [
      {
        id: 18565,
        nodeType: "PragmaDirective",
        src: "32:31:54",
        nodes: [],
        literals: ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"],
      },
      {
        id: 18567,
        nodeType: "ImportDirective",
        src: "65:32:54",
        nodes: [],
        absolutePath: "lib/forge-std/src/Vm.sol",
        file: "./Vm.sol",
        nameLocation: "-1:-1:-1",
        scope: 19284,
        sourceUnit: 28242,
        symbolAliases: [
          {
            foreign: {
              id: 18566,
              name: "VmSafe",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 27769,
              src: "73:6:54",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 19283,
        nodeType: "ContractDefinition",
        src: "1899:9017:54",
        nodes: [
          {
            id: 18585,
            nodeType: "VariableDeclaration",
            src: "1933:92:54",
            nodes: [],
            constant: true,
            mutability: "constant",
            name: "vm",
            nameLocation: "1957:2:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_contract$_VmSafe_$27769",
              typeString: "contract VmSafe",
            },
            typeName: {
              id: 18570,
              nodeType: "UserDefinedTypeName",
              pathNode: {
                id: 18569,
                name: "VmSafe",
                nameLocations: ["1933:6:54"],
                nodeType: "IdentifierPath",
                referencedDeclaration: 27769,
                src: "1933:6:54",
              },
              referencedDeclaration: 27769,
              src: "1933:6:54",
              typeDescriptions: {
                typeIdentifier: "t_contract$_VmSafe_$27769",
                typeString: "contract VmSafe",
              },
            },
            value: {
              arguments: [
                {
                  arguments: [
                    {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  hexValue: "6865766d20636865617420636f6465",
                                  id: 18579,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: "string",
                                  lValueRequested: false,
                                  nodeType: "Literal",
                                  src: "2003:17:54",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    typeString:
                                      'literal_string "hevm cheat code"',
                                  },
                                  value: "hevm cheat code",
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    typeString:
                                      'literal_string "hevm cheat code"',
                                  },
                                ],
                                id: 18578,
                                name: "keccak256",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -8,
                                src: "1993:9:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  typeString:
                                    "function (bytes memory) pure returns (bytes32)",
                                },
                              },
                              id: 18580,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "functionCall",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1993:28:54",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32",
                              },
                            ],
                            id: 18577,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1985:7:54",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint256_$",
                              typeString: "type(uint256)",
                            },
                            typeName: {
                              id: 18576,
                              name: "uint256",
                              nodeType: "ElementaryTypeName",
                              src: "1985:7:54",
                              typeDescriptions: {},
                            },
                          },
                          id: 18581,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1985:37:54",
                          tryCall: false,
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
                        id: 18575,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "1977:7:54",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_uint160_$",
                          typeString: "type(uint160)",
                        },
                        typeName: {
                          id: 18574,
                          name: "uint160",
                          nodeType: "ElementaryTypeName",
                          src: "1977:7:54",
                          typeDescriptions: {},
                        },
                      },
                      id: 18582,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1977:46:54",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint160",
                        typeString: "uint160",
                      },
                    },
                  ],
                  expression: {
                    argumentTypes: [
                      {
                        typeIdentifier: "t_uint160",
                        typeString: "uint160",
                      },
                    ],
                    id: 18573,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    lValueRequested: false,
                    nodeType: "ElementaryTypeNameExpression",
                    src: "1969:7:54",
                    typeDescriptions: {
                      typeIdentifier: "t_type$_t_address_$",
                      typeString: "type(address)",
                    },
                    typeName: {
                      id: 18572,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1969:7:54",
                      typeDescriptions: {},
                    },
                  },
                  id: 18583,
                  isConstant: false,
                  isLValue: false,
                  isPure: true,
                  kind: "typeConversion",
                  lValueRequested: false,
                  nameLocations: [],
                  names: [],
                  nodeType: "FunctionCall",
                  src: "1969:55:54",
                  tryCall: false,
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
                id: 18571,
                name: "VmSafe",
                nodeType: "Identifier",
                overloadedDeclarations: [],
                referencedDeclaration: 27769,
                src: "1962:6:54",
                typeDescriptions: {
                  typeIdentifier: "t_type$_t_contract$_VmSafe_$27769_$",
                  typeString: "type(contract VmSafe)",
                },
              },
              id: 18584,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "typeConversion",
              lValueRequested: false,
              nameLocations: [],
              names: [],
              nodeType: "FunctionCall",
              src: "1962:63:54",
              tryCall: false,
              typeDescriptions: {
                typeIdentifier: "t_contract$_VmSafe_$27769",
                typeString: "contract VmSafe",
              },
            },
            visibility: "private",
          },
          {
            id: 18587,
            nodeType: "VariableDeclaration",
            src: "2032:33:54",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "stdChainsInitialized",
            nameLocation: "2045:20:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bool",
              typeString: "bool",
            },
            typeName: {
              id: 18586,
              name: "bool",
              nodeType: "ElementaryTypeName",
              src: "2032:4:54",
              typeDescriptions: {
                typeIdentifier: "t_bool",
                typeString: "bool",
              },
            },
            visibility: "private",
          },
          {
            id: 18594,
            nodeType: "StructDefinition",
            src: "2072:93:54",
            nodes: [],
            canonicalName: "StdChains.ChainData",
            members: [
              {
                constant: false,
                id: 18589,
                mutability: "mutable",
                name: "name",
                nameLocation: "2106:4:54",
                nodeType: "VariableDeclaration",
                scope: 18594,
                src: "2099:11:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18588,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "2099:6:54",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 18591,
                mutability: "mutable",
                name: "chainId",
                nameLocation: "2128:7:54",
                nodeType: "VariableDeclaration",
                scope: 18594,
                src: "2120:15:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 18590,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "2120:7:54",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 18593,
                mutability: "mutable",
                name: "rpcUrl",
                nameLocation: "2152:6:54",
                nodeType: "VariableDeclaration",
                scope: 18594,
                src: "2145:13:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18592,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "2145:6:54",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "ChainData",
            nameLocation: "2079:9:54",
            scope: 19283,
            visibility: "public",
          },
          {
            id: 18603,
            nodeType: "StructDefinition",
            src: "2171:598:54",
            nodes: [],
            canonicalName: "StdChains.Chain",
            members: [
              {
                constant: false,
                id: 18596,
                mutability: "mutable",
                name: "name",
                nameLocation: "2228:4:54",
                nodeType: "VariableDeclaration",
                scope: 18603,
                src: "2221:11:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18595,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "2221:6:54",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 18598,
                mutability: "mutable",
                name: "chainId",
                nameLocation: "2283:7:54",
                nodeType: "VariableDeclaration",
                scope: 18603,
                src: "2275:15:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 18597,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "2275:7:54",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 18600,
                mutability: "mutable",
                name: "chainAlias",
                nameLocation: "2383:10:54",
                nodeType: "VariableDeclaration",
                scope: 18603,
                src: "2376:17:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18599,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "2376:6:54",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 18602,
                mutability: "mutable",
                name: "rpcUrl",
                nameLocation: "2756:6:54",
                nodeType: "VariableDeclaration",
                scope: 18603,
                src: "2749:13:54",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18601,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "2749:6:54",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "Chain",
            nameLocation: "2178:5:54",
            scope: 19283,
            visibility: "public",
          },
          {
            id: 18608,
            nodeType: "VariableDeclaration",
            src: "2873:39:54",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "chains",
            nameLocation: "2906:6:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
              typeString: "mapping(string => struct StdChains.Chain)",
            },
            typeName: {
              id: 18607,
              keyName: "",
              keyNameLocation: "-1:-1:-1",
              keyType: {
                id: 18604,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "2881:6:54",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              nodeType: "Mapping",
              src: "2873:24:54",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
                typeString: "mapping(string => struct StdChains.Chain)",
              },
              valueName: "",
              valueNameLocation: "-1:-1:-1",
              valueType: {
                id: 18606,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 18605,
                  name: "Chain",
                  nameLocations: ["2891:5:54"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 18603,
                  src: "2891:5:54",
                },
                referencedDeclaration: 18603,
                src: "2891:5:54",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                  typeString: "struct StdChains.Chain",
                },
              },
            },
            visibility: "private",
          },
          {
            id: 18612,
            nodeType: "VariableDeclaration",
            src: "2978:48:54",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "defaultRpcUrls",
            nameLocation: "3012:14:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
              typeString: "mapping(string => string)",
            },
            typeName: {
              id: 18611,
              keyName: "",
              keyNameLocation: "-1:-1:-1",
              keyType: {
                id: 18609,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "2986:6:54",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              nodeType: "Mapping",
              src: "2978:25:54",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                typeString: "mapping(string => string)",
              },
              valueName: "",
              valueNameLocation: "-1:-1:-1",
              valueType: {
                id: 18610,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "2996:6:54",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
            },
            visibility: "private",
          },
          {
            id: 18616,
            nodeType: "VariableDeclaration",
            src: "3075:44:54",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "idToAlias",
            nameLocation: "3110:9:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$",
              typeString: "mapping(uint256 => string)",
            },
            typeName: {
              id: 18615,
              keyName: "",
              keyNameLocation: "-1:-1:-1",
              keyType: {
                id: 18613,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "3083:7:54",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              nodeType: "Mapping",
              src: "3075:26:54",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$",
                typeString: "mapping(uint256 => string)",
              },
              valueName: "",
              valueNameLocation: "-1:-1:-1",
              valueType: {
                id: 18614,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "3094:6:54",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
            },
            visibility: "private",
          },
          {
            id: 18619,
            nodeType: "VariableDeclaration",
            src: "3126:44:54",
            nodes: [],
            constant: false,
            mutability: "mutable",
            name: "fallbackToDefaultRpcUrls",
            nameLocation: "3139:24:54",
            scope: 19283,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bool",
              typeString: "bool",
            },
            typeName: {
              id: 18617,
              name: "bool",
              nodeType: "ElementaryTypeName",
              src: "3126:4:54",
              typeDescriptions: {
                typeIdentifier: "t_bool",
                typeString: "bool",
              },
            },
            value: {
              hexValue: "74727565",
              id: 18618,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "bool",
              lValueRequested: false,
              nodeType: "Literal",
              src: "3166:4:54",
              typeDescriptions: {
                typeIdentifier: "t_bool",
                typeString: "bool",
              },
              value: "true",
            },
            visibility: "private",
          },
          {
            id: 18671,
            nodeType: "FunctionDefinition",
            src: "3255:524:54",
            nodes: [],
            body: {
              id: 18670,
              nodeType: "Block",
              src: "3345:434:54",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18634,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            arguments: [
                              {
                                id: 18630,
                                name: "chainAlias",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 18621,
                                src: "3369:10:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              ],
                              id: 18629,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "3363:5:54",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_bytes_storage_ptr_$",
                                typeString: "type(bytes storage pointer)",
                              },
                              typeName: {
                                id: 18628,
                                name: "bytes",
                                nodeType: "ElementaryTypeName",
                                src: "3363:5:54",
                                typeDescriptions: {},
                              },
                            },
                            id: 18631,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "3363:17:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                          id: 18632,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3381:6:54",
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "3363:24:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18633,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "3391:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "3363:29:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        id: 18635,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3394:69:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                          typeString:
                            'literal_string "StdChains getChain(string): Chain alias cannot be the empty string."',
                        },
                        value:
                          "StdChains getChain(string): Chain alias cannot be the empty string.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                          typeString:
                            'literal_string "StdChains getChain(string): Chain alias cannot be the empty string."',
                        },
                      ],
                      id: 18627,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "3355:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18636,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3355:109:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18637,
                  nodeType: "ExpressionStatement",
                  src: "3355:109:54",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 18638,
                      name: "initializeStdChains",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19245,
                      src: "3475:19:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 18639,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3475:21:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18640,
                  nodeType: "ExpressionStatement",
                  src: "3475:21:54",
                },
                {
                  expression: {
                    id: 18645,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 18641,
                      name: "chain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18625,
                      src: "3506:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      baseExpression: {
                        id: 18642,
                        name: "chains",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18608,
                        src: "3514:6:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
                          typeString:
                            "mapping(string memory => struct StdChains.Chain storage ref)",
                        },
                      },
                      id: 18644,
                      indexExpression: {
                        id: 18643,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18621,
                        src: "3521:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "3514:18:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_storage",
                        typeString: "struct StdChains.Chain storage ref",
                      },
                    },
                    src: "3506:26:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                      typeString: "struct StdChains.Chain memory",
                    },
                  },
                  id: 18646,
                  nodeType: "ExpressionStatement",
                  src: "3506:26:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18651,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 18648,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18625,
                            src: "3563:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_Chain_$18603_memory_ptr",
                              typeString: "struct StdChains.Chain memory",
                            },
                          },
                          id: 18649,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3569:7:54",
                          memberName: "chainId",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18598,
                          src: "3563:13:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18650,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "3580:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "3563:18:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                hexValue:
                                  "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022",
                                id: 18656,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "3619:49:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  typeString:
                                    'literal_string "StdChains getChain(string): Chain with alias ""',
                                },
                                value:
                                  'StdChains getChain(string): Chain with alias "',
                              },
                              {
                                id: 18657,
                                name: "chainAlias",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 18621,
                                src: "3670:10:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                              {
                                hexValue: "22206e6f7420666f756e642e",
                                id: 18658,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "3682:15:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                  typeString: 'literal_string "" not found."',
                                },
                                value: '" not found.',
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  typeString:
                                    'literal_string "StdChains getChain(string): Chain with alias ""',
                                },
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                                {
                                  typeIdentifier:
                                    "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                  typeString: 'literal_string "" not found."',
                                },
                              ],
                              expression: {
                                id: 18654,
                                name: "abi",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -1,
                                src: "3602:3:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_abi",
                                  typeString: "abi",
                                },
                              },
                              id: 18655,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              memberLocation: "3606:12:54",
                              memberName: "encodePacked",
                              nodeType: "MemberAccess",
                              src: "3602:16:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                typeString:
                                  "function () pure returns (bytes memory)",
                              },
                            },
                            id: 18659,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "3602:96:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          ],
                          id: 18653,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "3595:6:54",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_string_storage_ptr_$",
                            typeString: "type(string storage pointer)",
                          },
                          typeName: {
                            id: 18652,
                            name: "string",
                            nodeType: "ElementaryTypeName",
                            src: "3595:6:54",
                            typeDescriptions: {},
                          },
                        },
                        id: 18660,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3595:104:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 18647,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "3542:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18661,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3542:167:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18662,
                  nodeType: "ExpressionStatement",
                  src: "3542:167:54",
                },
                {
                  expression: {
                    id: 18668,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 18663,
                      name: "chain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18625,
                      src: "3720:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 18665,
                          name: "chainAlias",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18621,
                          src: "3754:10:54",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 18666,
                          name: "chain",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18625,
                          src: "3766:5:54",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                            typeString: "struct StdChains.Chain memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                            typeString: "struct StdChains.Chain memory",
                          },
                        ],
                        id: 18664,
                        name: "getChainWithUpdatedRpcUrl",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19053,
                        src: "3728:25:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$18603_memory_ptr_$returns$_t_struct$_Chain_$18603_memory_ptr_$",
                          typeString:
                            "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)",
                        },
                      },
                      id: 18667,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "3728:44:54",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    src: "3720:52:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                      typeString: "struct StdChains.Chain memory",
                    },
                  },
                  id: 18669,
                  nodeType: "ExpressionStatement",
                  src: "3720:52:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getChain",
            nameLocation: "3264:8:54",
            parameters: {
              id: 18622,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18621,
                  mutability: "mutable",
                  name: "chainAlias",
                  nameLocation: "3287:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 18671,
                  src: "3273:24:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18620,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "3273:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3272:26:54",
            },
            returnParameters: {
              id: 18626,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18625,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "3338:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 18671,
                  src: "3325:18:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                    typeString: "struct StdChains.Chain",
                  },
                  typeName: {
                    id: 18624,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18623,
                      name: "Chain",
                      nameLocations: ["3325:5:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18603,
                      src: "3325:5:54",
                    },
                    referencedDeclaration: 18603,
                    src: "3325:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                      typeString: "struct StdChains.Chain",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3324:20:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
          {
            id: 18728,
            nodeType: "FunctionDefinition",
            src: "3785:541:54",
            nodes: [],
            body: {
              id: 18727,
              nodeType: "Block",
              src: "3866:460:54",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18682,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 18680,
                          name: "chainId",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18673,
                          src: "3884:7:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18681,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "3895:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "3884:12:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                        id: 18683,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3898:52:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                          typeString:
                            'literal_string "StdChains getChain(uint256): Chain ID cannot be 0."',
                        },
                        value:
                          "StdChains getChain(uint256): Chain ID cannot be 0.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                          typeString:
                            'literal_string "StdChains getChain(uint256): Chain ID cannot be 0."',
                        },
                      ],
                      id: 18679,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "3876:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18684,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3876:75:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18685,
                  nodeType: "ExpressionStatement",
                  src: "3876:75:54",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 18686,
                      name: "initializeStdChains",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19245,
                      src: "3961:19:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 18687,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3961:21:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18688,
                  nodeType: "ExpressionStatement",
                  src: "3961:21:54",
                },
                {
                  assignments: [18690],
                  declarations: [
                    {
                      constant: false,
                      id: 18690,
                      mutability: "mutable",
                      name: "chainAlias",
                      nameLocation: "4006:10:54",
                      nodeType: "VariableDeclaration",
                      scope: 18727,
                      src: "3992:24:54",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string",
                      },
                      typeName: {
                        id: 18689,
                        name: "string",
                        nodeType: "ElementaryTypeName",
                        src: "3992:6:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_storage_ptr",
                          typeString: "string",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 18694,
                  initialValue: {
                    baseExpression: {
                      id: 18691,
                      name: "idToAlias",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18616,
                      src: "4019:9:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_mapping$_t_uint256_$_t_string_storage_$",
                        typeString: "mapping(uint256 => string storage ref)",
                      },
                    },
                    id: 18693,
                    indexExpression: {
                      id: 18692,
                      name: "chainId",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18673,
                      src: "4029:7:54",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "4019:18:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "3992:45:54",
                },
                {
                  expression: {
                    id: 18699,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 18695,
                      name: "chain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18677,
                      src: "4048:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      baseExpression: {
                        id: 18696,
                        name: "chains",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18608,
                        src: "4056:6:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
                          typeString:
                            "mapping(string memory => struct StdChains.Chain storage ref)",
                        },
                      },
                      id: 18698,
                      indexExpression: {
                        id: 18697,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18690,
                        src: "4063:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "4056:18:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_storage",
                        typeString: "struct StdChains.Chain storage ref",
                      },
                    },
                    src: "4048:26:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                      typeString: "struct StdChains.Chain memory",
                    },
                  },
                  id: 18700,
                  nodeType: "ExpressionStatement",
                  src: "4048:26:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18705,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 18702,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18677,
                            src: "4106:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_Chain_$18603_memory_ptr",
                              typeString: "struct StdChains.Chain memory",
                            },
                          },
                          id: 18703,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4112:7:54",
                          memberName: "chainId",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18598,
                          src: "4106:13:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18704,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "4123:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "4106:18:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                hexValue:
                                  "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420",
                                id: 18710,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "4162:45:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  typeString:
                                    'literal_string "StdChains getChain(uint256): Chain with ID "',
                                },
                                value:
                                  "StdChains getChain(uint256): Chain with ID ",
                              },
                              {
                                arguments: [
                                  {
                                    id: 18713,
                                    name: "chainId",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18673,
                                    src: "4221:7:54",
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
                                    id: 18711,
                                    name: "vm",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18585,
                                    src: "4209:2:54",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_contract$_VmSafe_$27769",
                                      typeString: "contract VmSafe",
                                    },
                                  },
                                  id: 18712,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberLocation: "4212:8:54",
                                  memberName: "toString",
                                  nodeType: "MemberAccess",
                                  referencedDeclaration: 27301,
                                  src: "4209:11:54",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    typeString:
                                      "function (uint256) pure external returns (string memory)",
                                  },
                                },
                                id: 18714,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: "FunctionCall",
                                src: "4209:20:54",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                              {
                                hexValue: "206e6f7420666f756e642e",
                                id: 18715,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "4231:13:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                  typeString: 'literal_string " not found."',
                                },
                                value: " not found.",
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  typeString:
                                    'literal_string "StdChains getChain(uint256): Chain with ID "',
                                },
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                                {
                                  typeIdentifier:
                                    "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                  typeString: 'literal_string " not found."',
                                },
                              ],
                              expression: {
                                id: 18708,
                                name: "abi",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -1,
                                src: "4145:3:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_abi",
                                  typeString: "abi",
                                },
                              },
                              id: 18709,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              memberLocation: "4149:12:54",
                              memberName: "encodePacked",
                              nodeType: "MemberAccess",
                              src: "4145:16:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                typeString:
                                  "function () pure returns (bytes memory)",
                              },
                            },
                            id: 18716,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "4145:100:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          ],
                          id: 18707,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "4138:6:54",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_string_storage_ptr_$",
                            typeString: "type(string storage pointer)",
                          },
                          typeName: {
                            id: 18706,
                            name: "string",
                            nodeType: "ElementaryTypeName",
                            src: "4138:6:54",
                            typeDescriptions: {},
                          },
                        },
                        id: 18717,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4138:108:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 18701,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "4085:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18718,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4085:171:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18719,
                  nodeType: "ExpressionStatement",
                  src: "4085:171:54",
                },
                {
                  expression: {
                    id: 18725,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 18720,
                      name: "chain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18677,
                      src: "4267:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 18722,
                          name: "chainAlias",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18690,
                          src: "4301:10:54",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 18723,
                          name: "chain",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18677,
                          src: "4313:5:54",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                            typeString: "struct StdChains.Chain memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                            typeString: "struct StdChains.Chain memory",
                          },
                        ],
                        id: 18721,
                        name: "getChainWithUpdatedRpcUrl",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19053,
                        src: "4275:25:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$18603_memory_ptr_$returns$_t_struct$_Chain_$18603_memory_ptr_$",
                          typeString:
                            "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)",
                        },
                      },
                      id: 18724,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "4275:44:54",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    src: "4267:52:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                      typeString: "struct StdChains.Chain memory",
                    },
                  },
                  id: 18726,
                  nodeType: "ExpressionStatement",
                  src: "4267:52:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getChain",
            nameLocation: "3794:8:54",
            parameters: {
              id: 18674,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18673,
                  mutability: "mutable",
                  name: "chainId",
                  nameLocation: "3811:7:54",
                  nodeType: "VariableDeclaration",
                  scope: 18728,
                  src: "3803:15:54",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 18672,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3803:7:54",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3802:17:54",
            },
            returnParameters: {
              id: 18678,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18677,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "3859:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 18728,
                  src: "3846:18:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                    typeString: "struct StdChains.Chain",
                  },
                  typeName: {
                    id: 18676,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18675,
                      name: "Chain",
                      nameLocations: ["3846:5:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18603,
                      src: "3846:5:54",
                    },
                    referencedDeclaration: 18603,
                    src: "3846:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                      typeString: "struct StdChains.Chain",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3845:20:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
          {
            id: 18838,
            nodeType: "FunctionDefinition",
            src: "4397:1173:54",
            nodes: [],
            body: {
              id: 18837,
              nodeType: "Block",
              src: "4482:1088:54",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18743,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            arguments: [
                              {
                                id: 18739,
                                name: "chainAlias",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 18730,
                                src: "4519:10:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              ],
                              id: 18738,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "4513:5:54",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_bytes_storage_ptr_$",
                                typeString: "type(bytes storage pointer)",
                              },
                              typeName: {
                                id: 18737,
                                name: "bytes",
                                nodeType: "ElementaryTypeName",
                                src: "4513:5:54",
                                typeDescriptions: {},
                              },
                            },
                            id: 18740,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "4513:17:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                          id: 18741,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4531:6:54",
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "4513:24:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18742,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "4541:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "4513:29:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        id: 18744,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4556:79:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                          typeString:
                            'literal_string "StdChains setChain(string,ChainData): Chain alias cannot be the empty string."',
                        },
                        value:
                          "StdChains setChain(string,ChainData): Chain alias cannot be the empty string.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                          typeString:
                            'literal_string "StdChains setChain(string,ChainData): Chain alias cannot be the empty string."',
                        },
                      ],
                      id: 18736,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "4492:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18745,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4492:153:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18746,
                  nodeType: "ExpressionStatement",
                  src: "4492:153:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 18751,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 18748,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18733,
                            src: "4664:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_ChainData_$18594_memory_ptr",
                              typeString: "struct StdChains.ChainData memory",
                            },
                          },
                          id: 18749,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4670:7:54",
                          memberName: "chainId",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18591,
                          src: "4664:13:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          hexValue: "30",
                          id: 18750,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "4681:1:54",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "4664:18:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                        id: 18752,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4684:61:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                          typeString:
                            'literal_string "StdChains setChain(string,ChainData): Chain ID cannot be 0."',
                        },
                        value:
                          "StdChains setChain(string,ChainData): Chain ID cannot be 0.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                          typeString:
                            'literal_string "StdChains setChain(string,ChainData): Chain ID cannot be 0."',
                        },
                      ],
                      id: 18747,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "4656:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18753,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4656:90:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18754,
                  nodeType: "ExpressionStatement",
                  src: "4656:90:54",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 18755,
                      name: "initializeStdChains",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19245,
                      src: "4757:19:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 18756,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4757:21:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18757,
                  nodeType: "ExpressionStatement",
                  src: "4757:21:54",
                },
                {
                  assignments: [18759],
                  declarations: [
                    {
                      constant: false,
                      id: 18759,
                      mutability: "mutable",
                      name: "foundAlias",
                      nameLocation: "4802:10:54",
                      nodeType: "VariableDeclaration",
                      scope: 18837,
                      src: "4788:24:54",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string",
                      },
                      typeName: {
                        id: 18758,
                        name: "string",
                        nodeType: "ElementaryTypeName",
                        src: "4788:6:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_storage_ptr",
                          typeString: "string",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 18764,
                  initialValue: {
                    baseExpression: {
                      id: 18760,
                      name: "idToAlias",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18616,
                      src: "4815:9:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_mapping$_t_uint256_$_t_string_storage_$",
                        typeString: "mapping(uint256 => string storage ref)",
                      },
                    },
                    id: 18763,
                    indexExpression: {
                      expression: {
                        id: 18761,
                        name: "chain",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18733,
                        src: "4825:5:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                      id: 18762,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "4831:7:54",
                      memberName: "chainId",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 18591,
                      src: "4825:13:54",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "4815:24:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4788:51:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        id: 18786,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 18772,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 18768,
                                  name: "foundAlias",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 18759,
                                  src: "4877:10:54",
                                  typeDescriptions: {
                                    typeIdentifier: "t_string_memory_ptr",
                                    typeString: "string memory",
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_string_memory_ptr",
                                    typeString: "string memory",
                                  },
                                ],
                                id: 18767,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: "ElementaryTypeNameExpression",
                                src: "4871:5:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_type$_t_bytes_storage_ptr_$",
                                  typeString: "type(bytes storage pointer)",
                                },
                                typeName: {
                                  id: 18766,
                                  name: "bytes",
                                  nodeType: "ElementaryTypeName",
                                  src: "4871:5:54",
                                  typeDescriptions: {},
                                },
                              },
                              id: 18769,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "typeConversion",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "4871:17:54",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bytes_memory_ptr",
                                typeString: "bytes memory",
                              },
                            },
                            id: 18770,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "4889:6:54",
                            memberName: "length",
                            nodeType: "MemberAccess",
                            src: "4871:24:54",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            hexValue: "30",
                            id: 18771,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "4899:1:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          src: "4871:29:54",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "||",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32",
                          },
                          id: 18785,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    id: 18776,
                                    name: "foundAlias",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18759,
                                    src: "4920:10:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  ],
                                  id: 18775,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: "ElementaryTypeNameExpression",
                                  src: "4914:5:54",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_type$_t_bytes_storage_ptr_$",
                                    typeString: "type(bytes storage pointer)",
                                  },
                                  typeName: {
                                    id: 18774,
                                    name: "bytes",
                                    nodeType: "ElementaryTypeName",
                                    src: "4914:5:54",
                                    typeDescriptions: {},
                                  },
                                },
                                id: 18777,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "typeConversion",
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: "FunctionCall",
                                src: "4914:17:54",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory",
                                },
                              ],
                              id: 18773,
                              name: "keccak256",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: -8,
                              src: "4904:9:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                typeString:
                                  "function (bytes memory) pure returns (bytes32)",
                              },
                            },
                            id: 18778,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "4904:28:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    id: 18782,
                                    name: "chainAlias",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18730,
                                    src: "4952:10:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  ],
                                  id: 18781,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: "ElementaryTypeNameExpression",
                                  src: "4946:5:54",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_type$_t_bytes_storage_ptr_$",
                                    typeString: "type(bytes storage pointer)",
                                  },
                                  typeName: {
                                    id: 18780,
                                    name: "bytes",
                                    nodeType: "ElementaryTypeName",
                                    src: "4946:5:54",
                                    typeDescriptions: {},
                                  },
                                },
                                id: 18783,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "typeConversion",
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: "FunctionCall",
                                src: "4946:17:54",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory",
                                },
                              ],
                              id: 18779,
                              name: "keccak256",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: -8,
                              src: "4936:9:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                typeString:
                                  "function (bytes memory) pure returns (bytes32)",
                              },
                            },
                            id: 18784,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "4936:28:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          src: "4904:60:54",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        src: "4871:93:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                hexValue:
                                  "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420",
                                id: 18791,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "5040:49:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                  typeString:
                                    'literal_string "StdChains setChain(string,ChainData): Chain ID "',
                                },
                                value:
                                  "StdChains setChain(string,ChainData): Chain ID ",
                              },
                              {
                                arguments: [
                                  {
                                    expression: {
                                      id: 18794,
                                      name: "chain",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 18733,
                                      src: "5123:5:54",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_struct$_ChainData_$18594_memory_ptr",
                                        typeString:
                                          "struct StdChains.ChainData memory",
                                      },
                                    },
                                    id: 18795,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberLocation: "5129:7:54",
                                    memberName: "chainId",
                                    nodeType: "MemberAccess",
                                    referencedDeclaration: 18591,
                                    src: "5123:13:54",
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
                                    id: 18792,
                                    name: "vm",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18585,
                                    src: "5111:2:54",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_contract$_VmSafe_$27769",
                                      typeString: "contract VmSafe",
                                    },
                                  },
                                  id: 18793,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberLocation: "5114:8:54",
                                  memberName: "toString",
                                  nodeType: "MemberAccess",
                                  referencedDeclaration: 27301,
                                  src: "5111:11:54",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    typeString:
                                      "function (uint256) pure external returns (string memory)",
                                  },
                                },
                                id: 18796,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: "FunctionCall",
                                src: "5111:26:54",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                              {
                                hexValue:
                                  "20616c726561647920757365642062792022",
                                id: 18797,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "5159:21:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  typeString:
                                    'literal_string " already used by ""',
                                },
                                value: ' already used by "',
                              },
                              {
                                id: 18798,
                                name: "foundAlias",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 18759,
                                src: "5202:10:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                              },
                              {
                                hexValue: "222e",
                                id: 18799,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "string",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "5234:5:54",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                  typeString: 'literal_string ""."',
                                },
                                value: '".',
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                  typeString:
                                    'literal_string "StdChains setChain(string,ChainData): Chain ID "',
                                },
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                                {
                                  typeIdentifier:
                                    "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  typeString:
                                    'literal_string " already used by ""',
                                },
                                {
                                  typeIdentifier: "t_string_memory_ptr",
                                  typeString: "string memory",
                                },
                                {
                                  typeIdentifier:
                                    "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                  typeString: 'literal_string ""."',
                                },
                              ],
                              expression: {
                                id: 18789,
                                name: "abi",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -1,
                                src: "5002:3:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_abi",
                                  typeString: "abi",
                                },
                              },
                              id: 18790,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              memberLocation: "5006:12:54",
                              memberName: "encodePacked",
                              nodeType: "MemberAccess",
                              src: "5002:16:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                typeString:
                                  "function () pure returns (bytes memory)",
                              },
                            },
                            id: 18800,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "5002:255:54",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          ],
                          id: 18788,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "4978:6:54",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_string_storage_ptr_$",
                            typeString: "type(string storage pointer)",
                          },
                          typeName: {
                            id: 18787,
                            name: "string",
                            nodeType: "ElementaryTypeName",
                            src: "4978:6:54",
                            typeDescriptions: {},
                          },
                        },
                        id: 18801,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4978:293:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 18765,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "4850:7:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 18802,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4850:431:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18803,
                  nodeType: "ExpressionStatement",
                  src: "4850:431:54",
                },
                {
                  assignments: [18805],
                  declarations: [
                    {
                      constant: false,
                      id: 18805,
                      mutability: "mutable",
                      name: "oldChainId",
                      nameLocation: "5300:10:54",
                      nodeType: "VariableDeclaration",
                      scope: 18837,
                      src: "5292:18:54",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 18804,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "5292:7:54",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 18810,
                  initialValue: {
                    expression: {
                      baseExpression: {
                        id: 18806,
                        name: "chains",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18608,
                        src: "5313:6:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
                          typeString:
                            "mapping(string memory => struct StdChains.Chain storage ref)",
                        },
                      },
                      id: 18808,
                      indexExpression: {
                        id: 18807,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18730,
                        src: "5320:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "5313:18:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_storage",
                        typeString: "struct StdChains.Chain storage ref",
                      },
                    },
                    id: 18809,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "5332:7:54",
                    memberName: "chainId",
                    nodeType: "MemberAccess",
                    referencedDeclaration: 18598,
                    src: "5313:26:54",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5292:47:54",
                },
                {
                  expression: {
                    id: 18814,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "UnaryOperation",
                    operator: "delete",
                    prefix: true,
                    src: "5349:28:54",
                    subExpression: {
                      baseExpression: {
                        id: 18811,
                        name: "idToAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18616,
                        src: "5356:9:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_uint256_$_t_string_storage_$",
                          typeString: "mapping(uint256 => string storage ref)",
                        },
                      },
                      id: 18813,
                      indexExpression: {
                        id: 18812,
                        name: "oldChainId",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18805,
                        src: "5366:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "5356:21:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18815,
                  nodeType: "ExpressionStatement",
                  src: "5349:28:54",
                },
                {
                  expression: {
                    id: 18828,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 18816,
                        name: "chains",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18608,
                        src: "5388:6:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$18603_storage_$",
                          typeString:
                            "mapping(string memory => struct StdChains.Chain storage ref)",
                        },
                      },
                      id: 18818,
                      indexExpression: {
                        id: 18817,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18730,
                        src: "5395:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "5388:18:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_storage",
                        typeString: "struct StdChains.Chain storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          expression: {
                            id: 18820,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18733,
                            src: "5434:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_ChainData_$18594_memory_ptr",
                              typeString: "struct StdChains.ChainData memory",
                            },
                          },
                          id: 18821,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5440:4:54",
                          memberName: "name",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18589,
                          src: "5434:10:54",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          expression: {
                            id: 18822,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18733,
                            src: "5455:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_ChainData_$18594_memory_ptr",
                              typeString: "struct StdChains.ChainData memory",
                            },
                          },
                          id: 18823,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5461:7:54",
                          memberName: "chainId",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18591,
                          src: "5455:13:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 18824,
                          name: "chainAlias",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18730,
                          src: "5482:10:54",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          expression: {
                            id: 18825,
                            name: "chain",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18733,
                            src: "5502:5:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_ChainData_$18594_memory_ptr",
                              typeString: "struct StdChains.ChainData memory",
                            },
                          },
                          id: 18826,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5508:6:54",
                          memberName: "rpcUrl",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 18593,
                          src: "5502:12:54",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        ],
                        id: 18819,
                        name: "Chain",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18603,
                        src: "5421:5:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_Chain_$18603_storage_ptr_$",
                          typeString:
                            "type(struct StdChains.Chain storage pointer)",
                        },
                      },
                      id: 18827,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      nameLocations: [
                        "5428:4:54",
                        "5446:7:54",
                        "5470:10:54",
                        "5494:6:54",
                      ],
                      names: ["name", "chainId", "chainAlias", "rpcUrl"],
                      nodeType: "FunctionCall",
                      src: "5421:95:54",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                        typeString: "struct StdChains.Chain memory",
                      },
                    },
                    src: "5388:128:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage",
                      typeString: "struct StdChains.Chain storage ref",
                    },
                  },
                  id: 18829,
                  nodeType: "ExpressionStatement",
                  src: "5388:128:54",
                },
                {
                  expression: {
                    id: 18835,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 18830,
                        name: "idToAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18616,
                        src: "5526:9:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_uint256_$_t_string_storage_$",
                          typeString: "mapping(uint256 => string storage ref)",
                        },
                      },
                      id: 18833,
                      indexExpression: {
                        expression: {
                          id: 18831,
                          name: "chain",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18733,
                          src: "5536:5:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_ChainData_$18594_memory_ptr",
                            typeString: "struct StdChains.ChainData memory",
                          },
                        },
                        id: 18832,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5542:7:54",
                        memberName: "chainId",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 18591,
                        src: "5536:13:54",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "5526:24:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 18834,
                      name: "chainAlias",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18730,
                      src: "5553:10:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "5526:37:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 18836,
                  nodeType: "ExpressionStatement",
                  src: "5526:37:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setChain",
            nameLocation: "4406:8:54",
            parameters: {
              id: 18734,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18730,
                  mutability: "mutable",
                  name: "chainAlias",
                  nameLocation: "4429:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 18838,
                  src: "4415:24:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18729,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "4415:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 18733,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "4458:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 18838,
                  src: "4441:22:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_ChainData_$18594_memory_ptr",
                    typeString: "struct StdChains.ChainData",
                  },
                  typeName: {
                    id: 18732,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18731,
                      name: "ChainData",
                      nameLocations: ["4441:9:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18594,
                      src: "4441:9:54",
                    },
                    referencedDeclaration: 18594,
                    src: "4441:9:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_ChainData_$18594_storage_ptr",
                      typeString: "struct StdChains.ChainData",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "4414:50:54",
            },
            returnParameters: {
              id: 18735,
              nodeType: "ParameterList",
              parameters: [],
              src: "4482:0:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
          {
            id: 18859,
            nodeType: "FunctionDefinition",
            src: "5641:195:54",
            nodes: [],
            body: {
              id: 18858,
              nodeType: "Block",
              src: "5722:114:54",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 18847,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18840,
                        src: "5741:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        arguments: [
                          {
                            expression: {
                              id: 18849,
                              name: "chain",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18843,
                              src: "5770:5:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_struct$_Chain_$18603_memory_ptr",
                                typeString: "struct StdChains.Chain memory",
                              },
                            },
                            id: 18850,
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "5776:4:54",
                            memberName: "name",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 18596,
                            src: "5770:10:54",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                          },
                          {
                            expression: {
                              id: 18851,
                              name: "chain",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18843,
                              src: "5791:5:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_struct$_Chain_$18603_memory_ptr",
                                typeString: "struct StdChains.Chain memory",
                              },
                            },
                            id: 18852,
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "5797:7:54",
                            memberName: "chainId",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 18598,
                            src: "5791:13:54",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            expression: {
                              id: 18853,
                              name: "chain",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18843,
                              src: "5814:5:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_struct$_Chain_$18603_memory_ptr",
                                typeString: "struct StdChains.Chain memory",
                              },
                            },
                            id: 18854,
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "5820:6:54",
                            memberName: "rpcUrl",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 18602,
                            src: "5814:12:54",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                          ],
                          id: 18848,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "5753:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 18855,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: ["5764:4:54", "5782:7:54", "5806:6:54"],
                        names: ["name", "chainId", "rpcUrl"],
                        nodeType: "FunctionCall",
                        src: "5753:75:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 18846,
                      name: "setChain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [18838, 18859],
                      referencedDeclaration: 18838,
                      src: "5732:8:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 18856,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5732:97:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 18857,
                  nodeType: "ExpressionStatement",
                  src: "5732:97:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setChain",
            nameLocation: "5650:8:54",
            parameters: {
              id: 18844,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18840,
                  mutability: "mutable",
                  name: "chainAlias",
                  nameLocation: "5673:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 18859,
                  src: "5659:24:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18839,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "5659:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 18843,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "5698:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 18859,
                  src: "5685:18:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                    typeString: "struct StdChains.Chain",
                  },
                  typeName: {
                    id: 18842,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18841,
                      name: "Chain",
                      nameLocations: ["5685:5:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18603,
                      src: "5685:5:54",
                    },
                    referencedDeclaration: 18603,
                    src: "5685:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                      typeString: "struct StdChains.Chain",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "5658:46:54",
            },
            returnParameters: {
              id: 18845,
              nodeType: "ParameterList",
              parameters: [],
              src: "5722:0:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "internal",
          },
          {
            id: 18936,
            nodeType: "FunctionDefinition",
            src: "5842:451:54",
            nodes: [],
            body: {
              id: 18935,
              nodeType: "Block",
              src: "5916:377:54",
              nodes: [],
              statements: [
                {
                  assignments: [18867],
                  declarations: [
                    {
                      constant: false,
                      id: 18867,
                      mutability: "mutable",
                      name: "strb",
                      nameLocation: "5939:4:54",
                      nodeType: "VariableDeclaration",
                      scope: 18935,
                      src: "5926:17:54",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes_memory_ptr",
                        typeString: "bytes",
                      },
                      typeName: {
                        id: 18866,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "5926:5:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_storage_ptr",
                          typeString: "bytes",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 18872,
                  initialValue: {
                    arguments: [
                      {
                        id: 18870,
                        name: "str",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18861,
                        src: "5952:3:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 18869,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "5946:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_bytes_storage_ptr_$",
                        typeString: "type(bytes storage pointer)",
                      },
                      typeName: {
                        id: 18868,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "5946:5:54",
                        typeDescriptions: {},
                      },
                    },
                    id: 18871,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5946:10:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_memory_ptr",
                      typeString: "bytes memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5926:30:54",
                },
                {
                  assignments: [18874],
                  declarations: [
                    {
                      constant: false,
                      id: 18874,
                      mutability: "mutable",
                      name: "copy",
                      nameLocation: "5979:4:54",
                      nodeType: "VariableDeclaration",
                      scope: 18935,
                      src: "5966:17:54",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes_memory_ptr",
                        typeString: "bytes",
                      },
                      typeName: {
                        id: 18873,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "5966:5:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_storage_ptr",
                          typeString: "bytes",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 18880,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 18877,
                          name: "strb",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18867,
                          src: "5996:4:54",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes_memory_ptr",
                            typeString: "bytes memory",
                          },
                        },
                        id: 18878,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6001:6:54",
                        memberName: "length",
                        nodeType: "MemberAccess",
                        src: "5996:11:54",
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
                      id: 18876,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "NewExpression",
                      src: "5986:9:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        typeString:
                          "function (uint256) pure returns (bytes memory)",
                      },
                      typeName: {
                        id: 18875,
                        name: "bytes",
                        nodeType: "ElementaryTypeName",
                        src: "5990:5:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_storage_ptr",
                          typeString: "bytes",
                        },
                      },
                    },
                    id: 18879,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5986:22:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_memory_ptr",
                      typeString: "bytes memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5966:42:54",
                },
                {
                  body: {
                    id: 18928,
                    nodeType: "Block",
                    src: "6060:198:54",
                    statements: [
                      {
                        assignments: [18893],
                        declarations: [
                          {
                            constant: false,
                            id: 18893,
                            mutability: "mutable",
                            name: "b",
                            nameLocation: "6081:1:54",
                            nodeType: "VariableDeclaration",
                            scope: 18928,
                            src: "6074:8:54",
                            stateVariable: false,
                            storageLocation: "default",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes1",
                              typeString: "bytes1",
                            },
                            typeName: {
                              id: 18892,
                              name: "bytes1",
                              nodeType: "ElementaryTypeName",
                              src: "6074:6:54",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes1",
                                typeString: "bytes1",
                              },
                            },
                            visibility: "internal",
                          },
                        ],
                        id: 18897,
                        initialValue: {
                          baseExpression: {
                            id: 18894,
                            name: "strb",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18867,
                            src: "6085:4:54",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory",
                            },
                          },
                          id: 18896,
                          indexExpression: {
                            id: 18895,
                            name: "i",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 18882,
                            src: "6090:1:54",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "6085:7:54",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes1",
                            typeString: "bytes1",
                          },
                        },
                        nodeType: "VariableDeclarationStatement",
                        src: "6074:18:54",
                      },
                      {
                        condition: {
                          commonType: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                          id: 18904,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: "t_bytes1",
                              typeString: "bytes1",
                            },
                            id: 18900,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 18898,
                              name: "b",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18893,
                              src: "6110:1:54",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes1",
                                typeString: "bytes1",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: ">=",
                            rightExpression: {
                              hexValue: "30783631",
                              id: 18899,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "6115:4:54",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_97_by_1",
                                typeString: "int_const 97",
                              },
                              value: "0x61",
                            },
                            src: "6110:9:54",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "&&",
                          rightExpression: {
                            commonType: {
                              typeIdentifier: "t_bytes1",
                              typeString: "bytes1",
                            },
                            id: 18903,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 18901,
                              name: "b",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18893,
                              src: "6123:1:54",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes1",
                                typeString: "bytes1",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "<=",
                            rightExpression: {
                              hexValue: "30783741",
                              id: 18902,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "6128:4:54",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_122_by_1",
                                typeString: "int_const 122",
                              },
                              value: "0x7A",
                            },
                            src: "6123:9:54",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          src: "6110:22:54",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        falseBody: {
                          id: 18926,
                          nodeType: "Block",
                          src: "6204:44:54",
                          statements: [
                            {
                              expression: {
                                id: 18924,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftHandSide: {
                                  baseExpression: {
                                    id: 18920,
                                    name: "copy",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18874,
                                    src: "6222:4:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes_memory_ptr",
                                      typeString: "bytes memory",
                                    },
                                  },
                                  id: 18922,
                                  indexExpression: {
                                    id: 18921,
                                    name: "i",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18882,
                                    src: "6227:1:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256",
                                    },
                                  },
                                  isConstant: false,
                                  isLValue: true,
                                  isPure: false,
                                  lValueRequested: true,
                                  nodeType: "IndexAccess",
                                  src: "6222:7:54",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes1",
                                    typeString: "bytes1",
                                  },
                                },
                                nodeType: "Assignment",
                                operator: "=",
                                rightHandSide: {
                                  id: 18923,
                                  name: "b",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 18893,
                                  src: "6232:1:54",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes1",
                                    typeString: "bytes1",
                                  },
                                },
                                src: "6222:11:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes1",
                                  typeString: "bytes1",
                                },
                              },
                              id: 18925,
                              nodeType: "ExpressionStatement",
                              src: "6222:11:54",
                            },
                          ],
                        },
                        id: 18927,
                        nodeType: "IfStatement",
                        src: "6106:142:54",
                        trueBody: {
                          id: 18919,
                          nodeType: "Block",
                          src: "6134:64:54",
                          statements: [
                            {
                              expression: {
                                id: 18917,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftHandSide: {
                                  baseExpression: {
                                    id: 18905,
                                    name: "copy",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18874,
                                    src: "6152:4:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes_memory_ptr",
                                      typeString: "bytes memory",
                                    },
                                  },
                                  id: 18907,
                                  indexExpression: {
                                    id: 18906,
                                    name: "i",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18882,
                                    src: "6157:1:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256",
                                    },
                                  },
                                  isConstant: false,
                                  isLValue: true,
                                  isPure: false,
                                  lValueRequested: true,
                                  nodeType: "IndexAccess",
                                  src: "6152:7:54",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes1",
                                    typeString: "bytes1",
                                  },
                                },
                                nodeType: "Assignment",
                                operator: "=",
                                rightHandSide: {
                                  arguments: [
                                    {
                                      commonType: {
                                        typeIdentifier: "t_uint8",
                                        typeString: "uint8",
                                      },
                                      id: 18915,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        arguments: [
                                          {
                                            id: 18912,
                                            name: "b",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 18893,
                                            src: "6175:1:54",
                                            typeDescriptions: {
                                              typeIdentifier: "t_bytes1",
                                              typeString: "bytes1",
                                            },
                                          },
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier: "t_bytes1",
                                              typeString: "bytes1",
                                            },
                                          ],
                                          id: 18911,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          lValueRequested: false,
                                          nodeType:
                                            "ElementaryTypeNameExpression",
                                          src: "6169:5:54",
                                          typeDescriptions: {
                                            typeIdentifier: "t_type$_t_uint8_$",
                                            typeString: "type(uint8)",
                                          },
                                          typeName: {
                                            id: 18910,
                                            name: "uint8",
                                            nodeType: "ElementaryTypeName",
                                            src: "6169:5:54",
                                            typeDescriptions: {},
                                          },
                                        },
                                        id: 18913,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "typeConversion",
                                        lValueRequested: false,
                                        nameLocations: [],
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "6169:8:54",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint8",
                                          typeString: "uint8",
                                        },
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "-",
                                      rightExpression: {
                                        hexValue: "3332",
                                        id: 18914,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        kind: "number",
                                        lValueRequested: false,
                                        nodeType: "Literal",
                                        src: "6180:2:54",
                                        typeDescriptions: {
                                          typeIdentifier: "t_rational_32_by_1",
                                          typeString: "int_const 32",
                                        },
                                        value: "32",
                                      },
                                      src: "6169:13:54",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint8",
                                        typeString: "uint8",
                                      },
                                    },
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier: "t_uint8",
                                        typeString: "uint8",
                                      },
                                    ],
                                    id: 18909,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    nodeType: "ElementaryTypeNameExpression",
                                    src: "6162:6:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_type$_t_bytes1_$",
                                      typeString: "type(bytes1)",
                                    },
                                    typeName: {
                                      id: 18908,
                                      name: "bytes1",
                                      nodeType: "ElementaryTypeName",
                                      src: "6162:6:54",
                                      typeDescriptions: {},
                                    },
                                  },
                                  id: 18916,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  nameLocations: [],
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "6162:21:54",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes1",
                                    typeString: "bytes1",
                                  },
                                },
                                src: "6152:31:54",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes1",
                                  typeString: "bytes1",
                                },
                              },
                              id: 18918,
                              nodeType: "ExpressionStatement",
                              src: "6152:31:54",
                            },
                          ],
                        },
                      },
                    ],
                  },
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 18888,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 18885,
                      name: "i",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18882,
                      src: "6038:1:54",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "<",
                    rightExpression: {
                      expression: {
                        id: 18886,
                        name: "strb",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18867,
                        src: "6042:4:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                      id: 18887,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "6047:6:54",
                      memberName: "length",
                      nodeType: "MemberAccess",
                      src: "6042:11:54",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "6038:15:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 18929,
                  initializationExpression: {
                    assignments: [18882],
                    declarations: [
                      {
                        constant: false,
                        id: 18882,
                        mutability: "mutable",
                        name: "i",
                        nameLocation: "6031:1:54",
                        nodeType: "VariableDeclaration",
                        scope: 18929,
                        src: "6023:9:54",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        typeName: {
                          id: 18881,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "6023:7:54",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        visibility: "internal",
                      },
                    ],
                    id: 18884,
                    initialValue: {
                      hexValue: "30",
                      id: 18883,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "6035:1:54",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0",
                      },
                      value: "0",
                    },
                    nodeType: "VariableDeclarationStatement",
                    src: "6023:13:54",
                  },
                  loopExpression: {
                    expression: {
                      id: 18890,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "UnaryOperation",
                      operator: "++",
                      prefix: false,
                      src: "6055:3:54",
                      subExpression: {
                        id: 18889,
                        name: "i",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18882,
                        src: "6055:1:54",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 18891,
                    nodeType: "ExpressionStatement",
                    src: "6055:3:54",
                  },
                  nodeType: "ForStatement",
                  src: "6018:240:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 18932,
                        name: "copy",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18874,
                        src: "6281:4:54",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      ],
                      id: 18931,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "6274:6:54",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_string_storage_ptr_$",
                        typeString: "type(string storage pointer)",
                      },
                      typeName: {
                        id: 18930,
                        name: "string",
                        nodeType: "ElementaryTypeName",
                        src: "6274:6:54",
                        typeDescriptions: {},
                      },
                    },
                    id: 18933,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6274:12:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                  functionReturnParameters: 18865,
                  id: 18934,
                  nodeType: "Return",
                  src: "6267:19:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_toUpper",
            nameLocation: "5851:8:54",
            parameters: {
              id: 18862,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18861,
                  mutability: "mutable",
                  name: "str",
                  nameLocation: "5874:3:54",
                  nodeType: "VariableDeclaration",
                  scope: 18936,
                  src: "5860:17:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18860,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "5860:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "5859:19:54",
            },
            returnParameters: {
              id: 18865,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18864,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 18936,
                  src: "5901:13:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18863,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "5901:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "5900:15:54",
            },
            scope: 19283,
            stateMutability: "pure",
            virtual: false,
            visibility: "private",
          },
          {
            id: 19053,
            nodeType: "FunctionDefinition",
            src: "6429:1218:54",
            nodes: [],
            body: {
              id: 19052,
              nodeType: "Block",
              src: "6541:1106:54",
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 18954,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            expression: {
                              id: 18949,
                              name: "chain",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18941,
                              src: "6561:5:54",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_struct$_Chain_$18603_memory_ptr",
                                typeString: "struct StdChains.Chain memory",
                              },
                            },
                            id: 18950,
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "6567:6:54",
                            memberName: "rpcUrl",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 18602,
                            src: "6561:12:54",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory",
                            },
                          ],
                          id: 18948,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "6555:5:54",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_bytes_storage_ptr_$",
                            typeString: "type(bytes storage pointer)",
                          },
                          typeName: {
                            id: 18947,
                            name: "bytes",
                            nodeType: "ElementaryTypeName",
                            src: "6555:5:54",
                            typeDescriptions: {},
                          },
                        },
                        id: 18951,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "6555:19:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                      id: 18952,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "6575:6:54",
                      memberName: "length",
                      nodeType: "MemberAccess",
                      src: "6555:26:54",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "==",
                    rightExpression: {
                      hexValue: "30",
                      id: 18953,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "6585:1:54",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0",
                      },
                      value: "0",
                    },
                    src: "6555:31:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 19049,
                  nodeType: "IfStatement",
                  src: "6551:1068:54",
                  trueBody: {
                    id: 19048,
                    nodeType: "Block",
                    src: "6588:1031:54",
                    statements: [
                      {
                        clauses: [
                          {
                            block: {
                              id: 18968,
                              nodeType: "Block",
                              src: "6665:60:54",
                              statements: [
                                {
                                  expression: {
                                    id: 18966,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftHandSide: {
                                      expression: {
                                        id: 18962,
                                        name: "chain",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 18941,
                                        src: "6683:5:54",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_struct$_Chain_$18603_memory_ptr",
                                          typeString:
                                            "struct StdChains.Chain memory",
                                        },
                                      },
                                      id: 18964,
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: true,
                                      memberLocation: "6689:6:54",
                                      memberName: "rpcUrl",
                                      nodeType: "MemberAccess",
                                      referencedDeclaration: 18602,
                                      src: "6683:12:54",
                                      typeDescriptions: {
                                        typeIdentifier: "t_string_memory_ptr",
                                        typeString: "string memory",
                                      },
                                    },
                                    nodeType: "Assignment",
                                    operator: "=",
                                    rightHandSide: {
                                      id: 18965,
                                      name: "configRpcUrl",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 18960,
                                      src: "6698:12:54",
                                      typeDescriptions: {
                                        typeIdentifier: "t_string_memory_ptr",
                                        typeString: "string memory",
                                      },
                                    },
                                    src: "6683:27:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  },
                                  id: 18967,
                                  nodeType: "ExpressionStatement",
                                  src: "6683:27:54",
                                },
                              ],
                            },
                            errorName: "",
                            id: 18969,
                            nodeType: "TryCatchClause",
                            parameters: {
                              id: 18961,
                              nodeType: "ParameterList",
                              parameters: [
                                {
                                  constant: false,
                                  id: 18960,
                                  mutability: "mutable",
                                  name: "configRpcUrl",
                                  nameLocation: "6651:12:54",
                                  nodeType: "VariableDeclaration",
                                  scope: 18969,
                                  src: "6637:26:54",
                                  stateVariable: false,
                                  storageLocation: "memory",
                                  typeDescriptions: {
                                    typeIdentifier: "t_string_memory_ptr",
                                    typeString: "string",
                                  },
                                  typeName: {
                                    id: 18959,
                                    name: "string",
                                    nodeType: "ElementaryTypeName",
                                    src: "6637:6:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_string_storage_ptr",
                                      typeString: "string",
                                    },
                                  },
                                  visibility: "internal",
                                },
                              ],
                              src: "6636:28:54",
                            },
                            src: "6628:97:54",
                          },
                          {
                            block: {
                              id: 19045,
                              nodeType: "Block",
                              src: "6751:858:54",
                              statements: [
                                {
                                  assignments: [18974],
                                  declarations: [
                                    {
                                      constant: false,
                                      id: 18974,
                                      mutability: "mutable",
                                      name: "envName",
                                      nameLocation: "6783:7:54",
                                      nodeType: "VariableDeclaration",
                                      scope: 19045,
                                      src: "6769:21:54",
                                      stateVariable: false,
                                      storageLocation: "memory",
                                      typeDescriptions: {
                                        typeIdentifier: "t_string_memory_ptr",
                                        typeString: "string",
                                      },
                                      typeName: {
                                        id: 18973,
                                        name: "string",
                                        nodeType: "ElementaryTypeName",
                                        src: "6769:6:54",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_string_storage_ptr",
                                          typeString: "string",
                                        },
                                      },
                                      visibility: "internal",
                                    },
                                  ],
                                  id: 18985,
                                  initialValue: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                id: 18980,
                                                name: "chainAlias",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18938,
                                                src: "6826:10:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              },
                                            ],
                                            expression: {
                                              argumentTypes: [
                                                {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              ],
                                              id: 18979,
                                              name: "_toUpper",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 18936,
                                              src: "6817:8:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                typeString:
                                                  "function (string memory) pure returns (string memory)",
                                              },
                                            },
                                            id: 18981,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            kind: "functionCall",
                                            lValueRequested: false,
                                            nameLocations: [],
                                            names: [],
                                            nodeType: "FunctionCall",
                                            src: "6817:20:54",
                                            tryCall: false,
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                          },
                                          {
                                            hexValue: "5f5250435f55524c",
                                            id: 18982,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            kind: "string",
                                            lValueRequested: false,
                                            nodeType: "Literal",
                                            src: "6839:10:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                              typeString:
                                                'literal_string "_RPC_URL"',
                                            },
                                            value: "_RPC_URL",
                                          },
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                            {
                                              typeIdentifier:
                                                "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                              typeString:
                                                'literal_string "_RPC_URL"',
                                            },
                                          ],
                                          expression: {
                                            id: 18977,
                                            name: "abi",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: -1,
                                            src: "6800:3:54",
                                            typeDescriptions: {
                                              typeIdentifier: "t_magic_abi",
                                              typeString: "abi",
                                            },
                                          },
                                          id: 18978,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          lValueRequested: false,
                                          memberLocation: "6804:12:54",
                                          memberName: "encodePacked",
                                          nodeType: "MemberAccess",
                                          src: "6800:16:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                            typeString:
                                              "function () pure returns (bytes memory)",
                                          },
                                        },
                                        id: 18983,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "functionCall",
                                        lValueRequested: false,
                                        nameLocations: [],
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "6800:50:54",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes_memory_ptr",
                                          typeString: "bytes memory",
                                        },
                                      },
                                    ],
                                    expression: {
                                      argumentTypes: [
                                        {
                                          typeIdentifier: "t_bytes_memory_ptr",
                                          typeString: "bytes memory",
                                        },
                                      ],
                                      id: 18976,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      lValueRequested: false,
                                      nodeType: "ElementaryTypeNameExpression",
                                      src: "6793:6:54",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_type$_t_string_storage_ptr_$",
                                        typeString:
                                          "type(string storage pointer)",
                                      },
                                      typeName: {
                                        id: 18975,
                                        name: "string",
                                        nodeType: "ElementaryTypeName",
                                        src: "6793:6:54",
                                        typeDescriptions: {},
                                      },
                                    },
                                    id: 18984,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    kind: "typeConversion",
                                    lValueRequested: false,
                                    nameLocations: [],
                                    names: [],
                                    nodeType: "FunctionCall",
                                    src: "6793:58:54",
                                    tryCall: false,
                                    typeDescriptions: {
                                      typeIdentifier: "t_string_memory_ptr",
                                      typeString: "string memory",
                                    },
                                  },
                                  nodeType: "VariableDeclarationStatement",
                                  src: "6769:82:54",
                                },
                                {
                                  condition: {
                                    id: 18986,
                                    name: "fallbackToDefaultRpcUrls",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 18619,
                                    src: "6873:24:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool",
                                    },
                                  },
                                  falseBody: {
                                    id: 19009,
                                    nodeType: "Block",
                                    src: "7006:77:54",
                                    statements: [
                                      {
                                        expression: {
                                          id: 19007,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          lValueRequested: false,
                                          leftHandSide: {
                                            expression: {
                                              id: 19000,
                                              name: "chain",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 18941,
                                              src: "7028:5:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_struct$_Chain_$18603_memory_ptr",
                                                typeString:
                                                  "struct StdChains.Chain memory",
                                              },
                                            },
                                            id: 19002,
                                            isConstant: false,
                                            isLValue: true,
                                            isPure: false,
                                            lValueRequested: true,
                                            memberLocation: "7034:6:54",
                                            memberName: "rpcUrl",
                                            nodeType: "MemberAccess",
                                            referencedDeclaration: 18602,
                                            src: "7028:12:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                          },
                                          nodeType: "Assignment",
                                          operator: "=",
                                          rightHandSide: {
                                            arguments: [
                                              {
                                                id: 19005,
                                                name: "envName",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18974,
                                                src: "7056:7:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              },
                                            ],
                                            expression: {
                                              argumentTypes: [
                                                {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              ],
                                              expression: {
                                                id: 19003,
                                                name: "vm",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18585,
                                                src: "7043:2:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_contract$_VmSafe_$27769",
                                                  typeString: "contract VmSafe",
                                                },
                                              },
                                              id: 19004,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: false,
                                              lValueRequested: false,
                                              memberLocation: "7046:9:54",
                                              memberName: "envString",
                                              nodeType: "MemberAccess",
                                              referencedDeclaration: 26845,
                                              src: "7043:12:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                typeString:
                                                  "function (string memory) view external returns (string memory)",
                                              },
                                            },
                                            id: 19006,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            kind: "functionCall",
                                            lValueRequested: false,
                                            nameLocations: [],
                                            names: [],
                                            nodeType: "FunctionCall",
                                            src: "7043:21:54",
                                            tryCall: false,
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                          },
                                          src: "7028:36:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_string_memory_ptr",
                                            typeString: "string memory",
                                          },
                                        },
                                        id: 19008,
                                        nodeType: "ExpressionStatement",
                                        src: "7028:36:54",
                                      },
                                    ],
                                  },
                                  id: 19010,
                                  nodeType: "IfStatement",
                                  src: "6869:214:54",
                                  trueBody: {
                                    id: 18999,
                                    nodeType: "Block",
                                    src: "6899:101:54",
                                    statements: [
                                      {
                                        expression: {
                                          id: 18997,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          lValueRequested: false,
                                          leftHandSide: {
                                            expression: {
                                              id: 18987,
                                              name: "chain",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 18941,
                                              src: "6921:5:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_struct$_Chain_$18603_memory_ptr",
                                                typeString:
                                                  "struct StdChains.Chain memory",
                                              },
                                            },
                                            id: 18989,
                                            isConstant: false,
                                            isLValue: true,
                                            isPure: false,
                                            lValueRequested: true,
                                            memberLocation: "6927:6:54",
                                            memberName: "rpcUrl",
                                            nodeType: "MemberAccess",
                                            referencedDeclaration: 18602,
                                            src: "6921:12:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                          },
                                          nodeType: "Assignment",
                                          operator: "=",
                                          rightHandSide: {
                                            arguments: [
                                              {
                                                id: 18992,
                                                name: "envName",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18974,
                                                src: "6945:7:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              },
                                              {
                                                baseExpression: {
                                                  id: 18993,
                                                  name: "defaultRpcUrls",
                                                  nodeType: "Identifier",
                                                  overloadedDeclarations: [],
                                                  referencedDeclaration: 18612,
                                                  src: "6954:14:54",
                                                  typeDescriptions: {
                                                    typeIdentifier:
                                                      "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    typeString:
                                                      "mapping(string memory => string storage ref)",
                                                  },
                                                },
                                                id: 18995,
                                                indexExpression: {
                                                  id: 18994,
                                                  name: "chainAlias",
                                                  nodeType: "Identifier",
                                                  overloadedDeclarations: [],
                                                  referencedDeclaration: 18938,
                                                  src: "6969:10:54",
                                                  typeDescriptions: {
                                                    typeIdentifier:
                                                      "t_string_memory_ptr",
                                                    typeString: "string memory",
                                                  },
                                                },
                                                isConstant: false,
                                                isLValue: true,
                                                isPure: false,
                                                lValueRequested: false,
                                                nodeType: "IndexAccess",
                                                src: "6954:26:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_string_storage",
                                                  typeString:
                                                    "string storage ref",
                                                },
                                              },
                                            ],
                                            expression: {
                                              argumentTypes: [
                                                {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                                {
                                                  typeIdentifier:
                                                    "t_string_storage",
                                                  typeString:
                                                    "string storage ref",
                                                },
                                              ],
                                              expression: {
                                                id: 18990,
                                                name: "vm",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18585,
                                                src: "6936:2:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_contract$_VmSafe_$27769",
                                                  typeString: "contract VmSafe",
                                                },
                                              },
                                              id: 18991,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: false,
                                              lValueRequested: false,
                                              memberLocation: "6939:5:54",
                                              memberName: "envOr",
                                              nodeType: "MemberAccess",
                                              referencedDeclaration: 26976,
                                              src: "6936:8:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                typeString:
                                                  "function (string memory,string memory) external returns (string memory)",
                                              },
                                            },
                                            id: 18996,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            kind: "functionCall",
                                            lValueRequested: false,
                                            nameLocations: [],
                                            names: [],
                                            nodeType: "FunctionCall",
                                            src: "6936:45:54",
                                            tryCall: false,
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_string_memory_ptr",
                                              typeString: "string memory",
                                            },
                                          },
                                          src: "6921:60:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_string_memory_ptr",
                                            typeString: "string memory",
                                          },
                                        },
                                        id: 18998,
                                        nodeType: "ExpressionStatement",
                                        src: "6921:60:54",
                                      },
                                    ],
                                  },
                                },
                                {
                                  assignments: [19012],
                                  declarations: [
                                    {
                                      constant: false,
                                      id: 19012,
                                      mutability: "mutable",
                                      name: "notFoundError",
                                      nameLocation: "7175:13:54",
                                      nodeType: "VariableDeclaration",
                                      scope: 19045,
                                      src: "7162:26:54",
                                      stateVariable: false,
                                      storageLocation: "memory",
                                      typeDescriptions: {
                                        typeIdentifier: "t_bytes_memory_ptr",
                                        typeString: "bytes",
                                      },
                                      typeName: {
                                        id: 19011,
                                        name: "bytes",
                                        nodeType: "ElementaryTypeName",
                                        src: "7162:5:54",
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes_storage_ptr",
                                          typeString: "bytes",
                                        },
                                      },
                                      visibility: "internal",
                                    },
                                  ],
                                  id: 19025,
                                  initialValue: {
                                    arguments: [
                                      {
                                        hexValue:
                                          "4368656174436f64654572726f72",
                                        id: 19015,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        kind: "string",
                                        lValueRequested: false,
                                        nodeType: "Literal",
                                        src: "7235:16:54",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                          typeString:
                                            'literal_string "CheatCodeError"',
                                        },
                                        value: "CheatCodeError",
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                hexValue:
                                                  "696e76616c6964207270632075726c20",
                                                id: 19020,
                                                isConstant: false,
                                                isLValue: false,
                                                isPure: true,
                                                kind: "string",
                                                lValueRequested: false,
                                                nodeType: "Literal",
                                                src: "7277:18:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  typeString:
                                                    'literal_string "invalid rpc url "',
                                                },
                                                value: "invalid rpc url ",
                                              },
                                              {
                                                id: 19021,
                                                name: "chainAlias",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18938,
                                                src: "7297:10:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              },
                                            ],
                                            expression: {
                                              argumentTypes: [
                                                {
                                                  typeIdentifier:
                                                    "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  typeString:
                                                    'literal_string "invalid rpc url "',
                                                },
                                                {
                                                  typeIdentifier:
                                                    "t_string_memory_ptr",
                                                  typeString: "string memory",
                                                },
                                              ],
                                              expression: {
                                                id: 19018,
                                                name: "abi",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: -1,
                                                src: "7260:3:54",
                                                typeDescriptions: {
                                                  typeIdentifier: "t_magic_abi",
                                                  typeString: "abi",
                                                },
                                              },
                                              id: 19019,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: true,
                                              lValueRequested: false,
                                              memberLocation: "7264:12:54",
                                              memberName: "encodePacked",
                                              nodeType: "MemberAccess",
                                              src: "7260:16:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                typeString:
                                                  "function () pure returns (bytes memory)",
                                              },
                                            },
                                            id: 19022,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            kind: "functionCall",
                                            lValueRequested: false,
                                            nameLocations: [],
                                            names: [],
                                            nodeType: "FunctionCall",
                                            src: "7260:48:54",
                                            tryCall: false,
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          },
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          ],
                                          id: 19017,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          lValueRequested: false,
                                          nodeType:
                                            "ElementaryTypeNameExpression",
                                          src: "7253:6:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_type$_t_string_storage_ptr_$",
                                            typeString:
                                              "type(string storage pointer)",
                                          },
                                          typeName: {
                                            id: 19016,
                                            name: "string",
                                            nodeType: "ElementaryTypeName",
                                            src: "7253:6:54",
                                            typeDescriptions: {},
                                          },
                                        },
                                        id: 19023,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "typeConversion",
                                        lValueRequested: false,
                                        nameLocations: [],
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "7253:56:54",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_string_memory_ptr",
                                          typeString: "string memory",
                                        },
                                      },
                                    ],
                                    expression: {
                                      argumentTypes: [
                                        {
                                          typeIdentifier:
                                            "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                          typeString:
                                            'literal_string "CheatCodeError"',
                                        },
                                        {
                                          typeIdentifier: "t_string_memory_ptr",
                                          typeString: "string memory",
                                        },
                                      ],
                                      expression: {
                                        id: 19013,
                                        name: "abi",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: -1,
                                        src: "7211:3:54",
                                        typeDescriptions: {
                                          typeIdentifier: "t_magic_abi",
                                          typeString: "abi",
                                        },
                                      },
                                      id: 19014,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      lValueRequested: false,
                                      memberLocation: "7215:19:54",
                                      memberName: "encodeWithSignature",
                                      nodeType: "MemberAccess",
                                      src: "7211:23:54",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                        typeString:
                                          "function (string memory) pure returns (bytes memory)",
                                      },
                                    },
                                    id: 19024,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    kind: "functionCall",
                                    lValueRequested: false,
                                    nameLocations: [],
                                    names: [],
                                    nodeType: "FunctionCall",
                                    src: "7211:99:54",
                                    tryCall: false,
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes_memory_ptr",
                                      typeString: "bytes memory",
                                    },
                                  },
                                  nodeType: "VariableDeclarationStatement",
                                  src: "7162:148:54",
                                },
                                {
                                  condition: {
                                    commonType: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool",
                                    },
                                    id: 19041,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      commonType: {
                                        typeIdentifier: "t_bytes32",
                                        typeString: "bytes32",
                                      },
                                      id: 19032,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        arguments: [
                                          {
                                            id: 19027,
                                            name: "notFoundError",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 19012,
                                            src: "7342:13:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          },
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          ],
                                          id: 19026,
                                          name: "keccak256",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: -8,
                                          src: "7332:9:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            typeString:
                                              "function (bytes memory) pure returns (bytes32)",
                                          },
                                        },
                                        id: 19028,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "functionCall",
                                        lValueRequested: false,
                                        nameLocations: [],
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "7332:24:54",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes32",
                                          typeString: "bytes32",
                                        },
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "!=",
                                      rightExpression: {
                                        arguments: [
                                          {
                                            id: 19030,
                                            name: "err",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 18971,
                                            src: "7370:3:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          },
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier:
                                                "t_bytes_memory_ptr",
                                              typeString: "bytes memory",
                                            },
                                          ],
                                          id: 19029,
                                          name: "keccak256",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: -8,
                                          src: "7360:9:54",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            typeString:
                                              "function (bytes memory) pure returns (bytes32)",
                                          },
                                        },
                                        id: 19031,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "functionCall",
                                        lValueRequested: false,
                                        nameLocations: [],
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "7360:14:54",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes32",
                                          typeString: "bytes32",
                                        },
                                      },
                                      src: "7332:42:54",
                                      typeDescriptions: {
                                        typeIdentifier: "t_bool",
                                        typeString: "bool",
                                      },
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "||",
                                    rightExpression: {
                                      commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                      id: 19040,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        expression: {
                                          arguments: [
                                            {
                                              expression: {
                                                id: 19035,
                                                name: "chain",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 18941,
                                                src: "7384:5:54",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_struct$_Chain_$18603_memory_ptr",
                                                  typeString:
                                                    "struct StdChains.Chain memory",
                                                },
                                              },
                                              id: 19036,
                                              isConstant: false,
                                              isLValue: true,
                                              isPure: false,
                                              lValueRequested: false,
                                              memberLocation: "7390:6:54",
                                              memberName: "rpcUrl",
                                              nodeType: "MemberAccess",
                                              referencedDeclaration: 18602,
                                              src: "7384:12:54",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_string_memory_ptr",
                                                typeString: "string memory",
                                              },
                                            },
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier:
                                                  "t_string_memory_ptr",
                                                typeString: "string memory",
                                              },
                                            ],
                                            id: 19034,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            lValueRequested: false,
                                            nodeType:
                                              "ElementaryTypeNameExpression",
                                            src: "7378:5:54",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_type$_t_bytes_storage_ptr_$",
                                              typeString:
                                                "type(bytes storage pointer)",
                                            },
                                            typeName: {
                                              id: 19033,
                                              name: "bytes",
                                              nodeType: "ElementaryTypeName",
                                              src: "7378:5:54",
                                              typeDescriptions: {},
                                            },
                                          },
                                          id: 19037,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "typeConversion",
                                          lValueRequested: false,
                                          nameLocations: [],
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "7378:19:54",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_bytes_memory_ptr",
                                            typeString: "bytes memory",
                                          },
                                        },
                                        id: 19038,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        memberLocation: "7398:6:54",
                                        memberName: "length",
                                        nodeType: "MemberAccess",
                                        src: "7378:26:54",
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256",
                                        },
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "==",
                                      rightExpression: {
                                        hexValue: "30",
                                        id: 19039,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        kind: "number",
                                        lValueRequested: false,
                                        nodeType: "Literal",
                                        src: "7408:1:54",
                                        typeDescriptions: {
                                          typeIdentifier: "t_rational_0_by_1",
                                          typeString: "int_const 0",
                                        },
                                        value: "0",
                                      },
                                      src: "7378:31:54",
                                      typeDescriptions: {
                                        typeIdentifier: "t_bool",
                                        typeString: "bool",
                                      },
                                    },
                                    src: "7332:77:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool",
                                    },
                                  },
                                  id: 19044,
                                  nodeType: "IfStatement",
                                  src: "7328:267:54",
                                  trueBody: {
                                    id: 19043,
                                    nodeType: "Block",
                                    src: "7411:184:54",
                                    statements: [
                                      {
                                        AST: {
                                          nodeType: "YulBlock",
                                          src: "7497:80:54",
                                          statements: [
                                            {
                                              expression: {
                                                arguments: [
                                                  {
                                                    arguments: [
                                                      {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "7534:2:54",
                                                        type: "",
                                                        value: "32",
                                                      },
                                                      {
                                                        name: "err",
                                                        nodeType:
                                                          "YulIdentifier",
                                                        src: "7538:3:54",
                                                      },
                                                    ],
                                                    functionName: {
                                                      name: "add",
                                                      nodeType: "YulIdentifier",
                                                      src: "7530:3:54",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "7530:12:54",
                                                  },
                                                  {
                                                    arguments: [
                                                      {
                                                        name: "err",
                                                        nodeType:
                                                          "YulIdentifier",
                                                        src: "7550:3:54",
                                                      },
                                                    ],
                                                    functionName: {
                                                      name: "mload",
                                                      nodeType: "YulIdentifier",
                                                      src: "7544:5:54",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "7544:10:54",
                                                  },
                                                ],
                                                functionName: {
                                                  name: "revert",
                                                  nodeType: "YulIdentifier",
                                                  src: "7523:6:54",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "7523:32:54",
                                              },
                                              nodeType:
                                                "YulExpressionStatement",
                                              src: "7523:32:54",
                                            },
                                          ],
                                        },
                                        documentation:
                                          "@solidity memory-safe-assembly",
                                        evmVersion: "paris",
                                        externalReferences: [
                                          {
                                            declaration: 18971,
                                            isOffset: false,
                                            isSlot: false,
                                            src: "7538:3:54",
                                            valueSize: 1,
                                          },
                                          {
                                            declaration: 18971,
                                            isOffset: false,
                                            isSlot: false,
                                            src: "7550:3:54",
                                            valueSize: 1,
                                          },
                                        ],
                                        id: 19042,
                                        nodeType: "InlineAssembly",
                                        src: "7488:89:54",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                            errorName: "",
                            id: 19046,
                            nodeType: "TryCatchClause",
                            parameters: {
                              id: 18972,
                              nodeType: "ParameterList",
                              parameters: [
                                {
                                  constant: false,
                                  id: 18971,
                                  mutability: "mutable",
                                  name: "err",
                                  nameLocation: "6746:3:54",
                                  nodeType: "VariableDeclaration",
                                  scope: 19046,
                                  src: "6733:16:54",
                                  stateVariable: false,
                                  storageLocation: "memory",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes",
                                  },
                                  typeName: {
                                    id: 18970,
                                    name: "bytes",
                                    nodeType: "ElementaryTypeName",
                                    src: "6733:5:54",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes_storage_ptr",
                                      typeString: "bytes",
                                    },
                                  },
                                  visibility: "internal",
                                },
                              ],
                              src: "6732:18:54",
                            },
                            src: "6726:883:54",
                          },
                        ],
                        externalCall: {
                          arguments: [
                            {
                              id: 18957,
                              name: "chainAlias",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18938,
                              src: "6616:10:54",
                              typeDescriptions: {
                                typeIdentifier: "t_string_memory_ptr",
                                typeString: "string memory",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_string_memory_ptr",
                                typeString: "string memory",
                              },
                            ],
                            expression: {
                              id: 18955,
                              name: "vm",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 18585,
                              src: "6606:2:54",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_VmSafe_$27769",
                                typeString: "contract VmSafe",
                              },
                            },
                            id: 18956,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "6609:6:54",
                            memberName: "rpcUrl",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 27730,
                            src: "6606:9:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                              typeString:
                                "function (string memory) view external returns (string memory)",
                            },
                          },
                          id: 18958,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "6606:21:54",
                          tryCall: true,
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        id: 19047,
                        nodeType: "TryStatement",
                        src: "6602:1007:54",
                      },
                    ],
                  },
                },
                {
                  expression: {
                    id: 19050,
                    name: "chain",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 18941,
                    src: "7635:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                      typeString: "struct StdChains.Chain memory",
                    },
                  },
                  functionReturnParameters: 18946,
                  id: 19051,
                  nodeType: "Return",
                  src: "7628:12:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getChainWithUpdatedRpcUrl",
            nameLocation: "6438:25:54",
            parameters: {
              id: 18942,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18938,
                  mutability: "mutable",
                  name: "chainAlias",
                  nameLocation: "6478:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 19053,
                  src: "6464:24:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 18937,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "6464:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 18941,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "6503:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 19053,
                  src: "6490:18:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                    typeString: "struct StdChains.Chain",
                  },
                  typeName: {
                    id: 18940,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18939,
                      name: "Chain",
                      nameLocations: ["6490:5:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18603,
                      src: "6490:5:54",
                    },
                    referencedDeclaration: 18603,
                    src: "6490:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                      typeString: "struct StdChains.Chain",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "6463:46:54",
            },
            returnParameters: {
              id: 18946,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18945,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 19053,
                  src: "6527:12:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_Chain_$18603_memory_ptr",
                    typeString: "struct StdChains.Chain",
                  },
                  typeName: {
                    id: 18944,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 18943,
                      name: "Chain",
                      nameLocations: ["6527:5:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18603,
                      src: "6527:5:54",
                    },
                    referencedDeclaration: 18603,
                    src: "6527:5:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Chain_$18603_storage_ptr",
                      typeString: "struct StdChains.Chain",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "6526:14:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "private",
          },
          {
            id: 19063,
            nodeType: "FunctionDefinition",
            src: "7653:117:54",
            nodes: [],
            body: {
              id: 19062,
              nodeType: "Block",
              src: "7716:54:54",
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 19060,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 19058,
                      name: "fallbackToDefaultRpcUrls",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18619,
                      src: "7726:24:54",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 19059,
                      name: "useDefault",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19055,
                      src: "7753:10:54",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    src: "7726:37:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 19061,
                  nodeType: "ExpressionStatement",
                  src: "7726:37:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setFallbackToDefaultRpcUrls",
            nameLocation: "7662:27:54",
            parameters: {
              id: 19056,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 19055,
                  mutability: "mutable",
                  name: "useDefault",
                  nameLocation: "7695:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 19063,
                  src: "7690:15:54",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 19054,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "7690:4:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "7689:17:54",
            },
            returnParameters: {
              id: 19057,
              nodeType: "ParameterList",
              parameters: [],
              src: "7716:0:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
          {
            id: 19245,
            nodeType: "FunctionDefinition",
            src: "7776:2751:54",
            nodes: [],
            body: {
              id: 19244,
              nodeType: "Block",
              src: "7815:2712:54",
              nodes: [],
              statements: [
                {
                  condition: {
                    id: 19066,
                    name: "stdChainsInitialized",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 18587,
                    src: "7829:20:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 19068,
                  nodeType: "IfStatement",
                  src: "7825:33:54",
                  trueBody: {
                    functionReturnParameters: 19065,
                    id: 19067,
                    nodeType: "Return",
                    src: "7851:7:54",
                  },
                },
                {
                  expression: {
                    id: 19071,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 19069,
                      name: "stdChainsInitialized",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 18587,
                      src: "7868:20:54",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "74727565",
                      id: 19070,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "7891:4:54",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    src: "7868:27:54",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 19072,
                  nodeType: "ExpressionStatement",
                  src: "7868:27:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "616e76696c",
                        id: 19074,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8018:7:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                          typeString: 'literal_string "anvil"',
                        },
                        value: "anvil",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "416e76696c",
                            id: 19076,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8037:7:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              typeString: 'literal_string "Anvil"',
                            },
                            value: "Anvil",
                          },
                          {
                            hexValue: "3331333337",
                            id: 19077,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8046:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_31337_by_1",
                              typeString: "int_const 31337",
                            },
                            value: "31337",
                          },
                          {
                            hexValue:
                              "687474703a2f2f3132372e302e302e313a38353435",
                            id: 19078,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8053:23:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                              typeString:
                                'literal_string "http://127.0.0.1:8545"',
                            },
                            value: "http://127.0.0.1:8545",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              typeString: 'literal_string "Anvil"',
                            },
                            {
                              typeIdentifier: "t_rational_31337_by_1",
                              typeString: "int_const 31337",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                              typeString:
                                'literal_string "http://127.0.0.1:8545"',
                            },
                          ],
                          id: 19075,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8027:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19079,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8027:50:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                          typeString: 'literal_string "anvil"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19073,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "7992:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19080,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7992:86:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19081,
                  nodeType: "ExpressionStatement",
                  src: "7992:86:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6d61696e6e6574",
                        id: 19083,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8127:9:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                          typeString: 'literal_string "mainnet"',
                        },
                        value: "mainnet",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4d61696e6e6574",
                            id: 19085,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8148:9:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              typeString: 'literal_string "Mainnet"',
                            },
                            value: "Mainnet",
                          },
                          {
                            hexValue: "31",
                            id: 19086,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8159:1:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1_by_1",
                              typeString: "int_const 1",
                            },
                            value: "1",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            id: 19087,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8162:63:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                              typeString:
                                'literal_string "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                            value:
                              "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              typeString: 'literal_string "Mainnet"',
                            },
                            {
                              typeIdentifier: "t_rational_1_by_1",
                              typeString: "int_const 1",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                              typeString:
                                'literal_string "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                          ],
                          id: 19084,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8138:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19088,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8138:88:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                          typeString: 'literal_string "mainnet"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19082,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8088:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19089,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8088:148:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19090,
                  nodeType: "ExpressionStatement",
                  src: "8088:148:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "676f65726c69",
                        id: 19092,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8285:8:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                          typeString: 'literal_string "goerli"',
                        },
                        value: "goerli",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "476f65726c69",
                            id: 19094,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8305:8:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              typeString: 'literal_string "Goerli"',
                            },
                            value: "Goerli",
                          },
                          {
                            hexValue: "35",
                            id: 19095,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8315:1:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_5_by_1",
                              typeString: "int_const 5",
                            },
                            value: "5",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            id: 19096,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8318:62:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                              typeString:
                                'literal_string "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                            value:
                              "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              typeString: 'literal_string "Goerli"',
                            },
                            {
                              typeIdentifier: "t_rational_5_by_1",
                              typeString: "int_const 5",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                              typeString:
                                'literal_string "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                          ],
                          id: 19093,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8295:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19097,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8295:86:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                          typeString: 'literal_string "goerli"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19091,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8246:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19098,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8246:145:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19099,
                  nodeType: "ExpressionStatement",
                  src: "8246:145:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "7365706f6c6961",
                        id: 19101,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8440:9:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                          typeString: 'literal_string "sepolia"',
                        },
                        value: "sepolia",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "5365706f6c6961",
                            id: 19103,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8461:9:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              typeString: 'literal_string "Sepolia"',
                            },
                            value: "Sepolia",
                          },
                          {
                            hexValue: "3131313535313131",
                            id: 19104,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8472:8:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_11155111_by_1",
                              typeString: "int_const 11155111",
                            },
                            value: "11155111",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            id: 19105,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8482:63:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                              typeString:
                                'literal_string "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                            value:
                              "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              typeString: 'literal_string "Sepolia"',
                            },
                            {
                              typeIdentifier: "t_rational_11155111_by_1",
                              typeString: "int_const 11155111",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                              typeString:
                                'literal_string "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"',
                            },
                          ],
                          id: 19102,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8451:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19106,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8451:95:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                          typeString: 'literal_string "sepolia"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19100,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8401:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19107,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8401:155:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19108,
                  nodeType: "ExpressionStatement",
                  src: "8401:155:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6f7074696d69736d",
                        id: 19110,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8592:10:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                          typeString: 'literal_string "optimism"',
                        },
                        value: "optimism",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4f7074696d69736d",
                            id: 19112,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8614:10:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              typeString: 'literal_string "Optimism"',
                            },
                            value: "Optimism",
                          },
                          {
                            hexValue: "3130",
                            id: 19113,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8626:2:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_10_by_1",
                              typeString: "int_const 10",
                            },
                            value: "10",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                            id: 19114,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8630:29:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                              typeString:
                                'literal_string "https://mainnet.optimism.io"',
                            },
                            value: "https://mainnet.optimism.io",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              typeString: 'literal_string "Optimism"',
                            },
                            {
                              typeIdentifier: "t_rational_10_by_1",
                              typeString: "int_const 10",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                              typeString:
                                'literal_string "https://mainnet.optimism.io"',
                            },
                          ],
                          id: 19111,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8604:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19115,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8604:56:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                          typeString: 'literal_string "optimism"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19109,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8566:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19116,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8566:95:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19117,
                  nodeType: "ExpressionStatement",
                  src: "8566:95:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6f7074696d69736d5f676f65726c69",
                        id: 19119,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8697:17:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                          typeString: 'literal_string "optimism_goerli"',
                        },
                        value: "optimism_goerli",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4f7074696d69736d20476f65726c69",
                            id: 19121,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8726:17:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              typeString: 'literal_string "Optimism Goerli"',
                            },
                            value: "Optimism Goerli",
                          },
                          {
                            hexValue: "343230",
                            id: 19122,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8745:3:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_420_by_1",
                              typeString: "int_const 420",
                            },
                            value: "420",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                            id: 19123,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8750:28:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                              typeString:
                                'literal_string "https://goerli.optimism.io"',
                            },
                            value: "https://goerli.optimism.io",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              typeString: 'literal_string "Optimism Goerli"',
                            },
                            {
                              typeIdentifier: "t_rational_420_by_1",
                              typeString: "int_const 420",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                              typeString:
                                'literal_string "https://goerli.optimism.io"',
                            },
                          ],
                          id: 19120,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8716:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19124,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8716:63:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                          typeString: 'literal_string "optimism_goerli"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19118,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8671:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19125,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8671:109:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19126,
                  nodeType: "ExpressionStatement",
                  src: "8671:109:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "617262697472756d5f6f6e65",
                        id: 19128,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8816:14:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                          typeString: 'literal_string "arbitrum_one"',
                        },
                        value: "arbitrum_one",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "417262697472756d204f6e65",
                            id: 19130,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8842:14:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              typeString: 'literal_string "Arbitrum One"',
                            },
                            value: "Arbitrum One",
                          },
                          {
                            hexValue: "3432313631",
                            id: 19131,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8858:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_42161_by_1",
                              typeString: "int_const 42161",
                            },
                            value: "42161",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                            id: 19132,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8865:30:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                              typeString:
                                'literal_string "https://arb1.arbitrum.io/rpc"',
                            },
                            value: "https://arb1.arbitrum.io/rpc",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              typeString: 'literal_string "Arbitrum One"',
                            },
                            {
                              typeIdentifier: "t_rational_42161_by_1",
                              typeString: "int_const 42161",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                              typeString:
                                'literal_string "https://arb1.arbitrum.io/rpc"',
                            },
                          ],
                          id: 19129,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8832:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19133,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8832:64:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                          typeString: 'literal_string "arbitrum_one"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19127,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8790:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19134,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8790:107:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19135,
                  nodeType: "ExpressionStatement",
                  src: "8790:107:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "617262697472756d5f6f6e655f676f65726c69",
                        id: 19137,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8946:21:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                          typeString: 'literal_string "arbitrum_one_goerli"',
                        },
                        value: "arbitrum_one_goerli",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "417262697472756d204f6e6520476f65726c69",
                            id: 19139,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8979:21:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              typeString:
                                'literal_string "Arbitrum One Goerli"',
                            },
                            value: "Arbitrum One Goerli",
                          },
                          {
                            hexValue: "343231363133",
                            id: 19140,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9002:6:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_421613_by_1",
                              typeString: "int_const 421613",
                            },
                            value: "421613",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                            id: 19141,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9010:39:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                              typeString:
                                'literal_string "https://goerli-rollup.arbitrum.io/rpc"',
                            },
                            value: "https://goerli-rollup.arbitrum.io/rpc",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              typeString:
                                'literal_string "Arbitrum One Goerli"',
                            },
                            {
                              typeIdentifier: "t_rational_421613_by_1",
                              typeString: "int_const 421613",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                              typeString:
                                'literal_string "https://goerli-rollup.arbitrum.io/rpc"',
                            },
                          ],
                          id: 19138,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "8969:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19142,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8969:81:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                          typeString: 'literal_string "arbitrum_one_goerli"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19136,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "8907:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19143,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8907:153:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19144,
                  nodeType: "ExpressionStatement",
                  src: "8907:153:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "617262697472756d5f6e6f7661",
                        id: 19146,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9096:15:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                          typeString: 'literal_string "arbitrum_nova"',
                        },
                        value: "arbitrum_nova",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "417262697472756d204e6f7661",
                            id: 19148,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9123:15:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              typeString: 'literal_string "Arbitrum Nova"',
                            },
                            value: "Arbitrum Nova",
                          },
                          {
                            hexValue: "3432313730",
                            id: 19149,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9140:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_42170_by_1",
                              typeString: "int_const 42170",
                            },
                            value: "42170",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                            id: 19150,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9147:30:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                              typeString:
                                'literal_string "https://nova.arbitrum.io/rpc"',
                            },
                            value: "https://nova.arbitrum.io/rpc",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              typeString: 'literal_string "Arbitrum Nova"',
                            },
                            {
                              typeIdentifier: "t_rational_42170_by_1",
                              typeString: "int_const 42170",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                              typeString:
                                'literal_string "https://nova.arbitrum.io/rpc"',
                            },
                          ],
                          id: 19147,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9113:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19151,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9113:65:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                          typeString: 'literal_string "arbitrum_nova"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19145,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9070:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19152,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9070:109:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19153,
                  nodeType: "ExpressionStatement",
                  src: "9070:109:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "706f6c79676f6e",
                        id: 19155,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9215:9:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                          typeString: 'literal_string "polygon"',
                        },
                        value: "polygon",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "506f6c79676f6e",
                            id: 19157,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9236:9:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              typeString: 'literal_string "Polygon"',
                            },
                            value: "Polygon",
                          },
                          {
                            hexValue: "313337",
                            id: 19158,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9247:3:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_137_by_1",
                              typeString: "int_const 137",
                            },
                            value: "137",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                            id: 19159,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9252:25:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                              typeString:
                                'literal_string "https://polygon-rpc.com"',
                            },
                            value: "https://polygon-rpc.com",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              typeString: 'literal_string "Polygon"',
                            },
                            {
                              typeIdentifier: "t_rational_137_by_1",
                              typeString: "int_const 137",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                              typeString:
                                'literal_string "https://polygon-rpc.com"',
                            },
                          ],
                          id: 19156,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9226:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19160,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9226:52:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                          typeString: 'literal_string "polygon"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19154,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9189:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19161,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9189:90:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19162,
                  nodeType: "ExpressionStatement",
                  src: "9189:90:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "706f6c79676f6e5f6d756d626169",
                        id: 19164,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9328:16:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                          typeString: 'literal_string "polygon_mumbai"',
                        },
                        value: "polygon_mumbai",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "506f6c79676f6e204d756d626169",
                            id: 19166,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9356:16:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              typeString: 'literal_string "Polygon Mumbai"',
                            },
                            value: "Polygon Mumbai",
                          },
                          {
                            hexValue: "3830303031",
                            id: 19167,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9374:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_80001_by_1",
                              typeString: "int_const 80001",
                            },
                            value: "80001",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                            id: 19168,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9381:35:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                              typeString:
                                'literal_string "https://rpc-mumbai.maticvigil.com"',
                            },
                            value: "https://rpc-mumbai.maticvigil.com",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              typeString: 'literal_string "Polygon Mumbai"',
                            },
                            {
                              typeIdentifier: "t_rational_80001_by_1",
                              typeString: "int_const 80001",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                              typeString:
                                'literal_string "https://rpc-mumbai.maticvigil.com"',
                            },
                          ],
                          id: 19165,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9346:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19169,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9346:71:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                          typeString: 'literal_string "polygon_mumbai"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19163,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9289:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19170,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9289:138:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19171,
                  nodeType: "ExpressionStatement",
                  src: "9289:138:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6176616c616e636865",
                        id: 19173,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9463:11:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                          typeString: 'literal_string "avalanche"',
                        },
                        value: "avalanche",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4176616c616e636865",
                            id: 19175,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9486:11:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              typeString: 'literal_string "Avalanche"',
                            },
                            value: "Avalanche",
                          },
                          {
                            hexValue: "3433313134",
                            id: 19176,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9499:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_43114_by_1",
                              typeString: "int_const 43114",
                            },
                            value: "43114",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                            id: 19177,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9506:39:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                              typeString:
                                'literal_string "https://api.avax.network/ext/bc/C/rpc"',
                            },
                            value: "https://api.avax.network/ext/bc/C/rpc",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              typeString: 'literal_string "Avalanche"',
                            },
                            {
                              typeIdentifier: "t_rational_43114_by_1",
                              typeString: "int_const 43114",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                              typeString:
                                'literal_string "https://api.avax.network/ext/bc/C/rpc"',
                            },
                          ],
                          id: 19174,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9476:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19178,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9476:70:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                          typeString: 'literal_string "avalanche"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19172,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9437:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19179,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9437:110:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19180,
                  nodeType: "ExpressionStatement",
                  src: "9437:110:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6176616c616e6368655f66756a69",
                        id: 19182,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9596:16:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                          typeString: 'literal_string "avalanche_fuji"',
                        },
                        value: "avalanche_fuji",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4176616c616e6368652046756a69",
                            id: 19184,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9624:16:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              typeString: 'literal_string "Avalanche Fuji"',
                            },
                            value: "Avalanche Fuji",
                          },
                          {
                            hexValue: "3433313133",
                            id: 19185,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9642:5:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_43113_by_1",
                              typeString: "int_const 43113",
                            },
                            value: "43113",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                            id: 19186,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9649:44:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                              typeString:
                                'literal_string "https://api.avax-test.network/ext/bc/C/rpc"',
                            },
                            value: "https://api.avax-test.network/ext/bc/C/rpc",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              typeString: 'literal_string "Avalanche Fuji"',
                            },
                            {
                              typeIdentifier: "t_rational_43113_by_1",
                              typeString: "int_const 43113",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                              typeString:
                                'literal_string "https://api.avax-test.network/ext/bc/C/rpc"',
                            },
                          ],
                          id: 19183,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9614:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19187,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9614:80:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                          typeString: 'literal_string "avalanche_fuji"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19181,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9557:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19188,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9557:147:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19189,
                  nodeType: "ExpressionStatement",
                  src: "9557:147:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "626e625f736d6172745f636861696e",
                        id: 19191,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9753:17:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                          typeString: 'literal_string "bnb_smart_chain"',
                        },
                        value: "bnb_smart_chain",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "424e4220536d61727420436861696e",
                            id: 19193,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9782:17:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              typeString: 'literal_string "BNB Smart Chain"',
                            },
                            value: "BNB Smart Chain",
                          },
                          {
                            hexValue: "3536",
                            id: 19194,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9801:2:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_56_by_1",
                              typeString: "int_const 56",
                            },
                            value: "56",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                            id: 19195,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9805:35:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                              typeString:
                                'literal_string "https://bsc-dataseed1.binance.org"',
                            },
                            value: "https://bsc-dataseed1.binance.org",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              typeString: 'literal_string "BNB Smart Chain"',
                            },
                            {
                              typeIdentifier: "t_rational_56_by_1",
                              typeString: "int_const 56",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                              typeString:
                                'literal_string "https://bsc-dataseed1.binance.org"',
                            },
                          ],
                          id: 19192,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9772:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19196,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9772:69:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                          typeString: 'literal_string "bnb_smart_chain"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19190,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9714:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19197,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9714:137:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19198,
                  nodeType: "ExpressionStatement",
                  src: "9714:137:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue:
                          "626e625f736d6172745f636861696e5f746573746e6574",
                        id: 19200,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "9900:25:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                          typeString:
                            'literal_string "bnb_smart_chain_testnet"',
                        },
                        value: "bnb_smart_chain_testnet",
                      },
                      {
                        arguments: [
                          {
                            hexValue:
                              "424e4220536d61727420436861696e20546573746e6574",
                            id: 19202,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9949:25:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              typeString:
                                'literal_string "BNB Smart Chain Testnet"',
                            },
                            value: "BNB Smart Chain Testnet",
                          },
                          {
                            hexValue: "3937",
                            id: 19203,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9976:2:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_97_by_1",
                              typeString: "int_const 97",
                            },
                            value: "97",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                            id: 19204,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9980:41:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                              typeString:
                                'literal_string "https://rpc.ankr.com/bsc_testnet_chapel"',
                            },
                            value: "https://rpc.ankr.com/bsc_testnet_chapel",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              typeString:
                                'literal_string "BNB Smart Chain Testnet"',
                            },
                            {
                              typeIdentifier: "t_rational_97_by_1",
                              typeString: "int_const 97",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                              typeString:
                                'literal_string "https://rpc.ankr.com/bsc_testnet_chapel"',
                            },
                          ],
                          id: 19201,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "9939:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19205,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9939:83:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                          typeString:
                            'literal_string "bnb_smart_chain_testnet"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19199,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "9861:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19206,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "9861:171:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19207,
                  nodeType: "ExpressionStatement",
                  src: "9861:171:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "676e6f7369735f636861696e",
                        id: 19209,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "10068:14:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                          typeString: 'literal_string "gnosis_chain"',
                        },
                        value: "gnosis_chain",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "476e6f73697320436861696e",
                            id: 19211,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10094:14:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              typeString: 'literal_string "Gnosis Chain"',
                            },
                            value: "Gnosis Chain",
                          },
                          {
                            hexValue: "313030",
                            id: 19212,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10110:3:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_100_by_1",
                              typeString: "int_const 100",
                            },
                            value: "100",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                            id: 19213,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10115:29:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                              typeString:
                                'literal_string "https://rpc.gnosischain.com"',
                            },
                            value: "https://rpc.gnosischain.com",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              typeString: 'literal_string "Gnosis Chain"',
                            },
                            {
                              typeIdentifier: "t_rational_100_by_1",
                              typeString: "int_const 100",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                              typeString:
                                'literal_string "https://rpc.gnosischain.com"',
                            },
                          ],
                          id: 19210,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "10084:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19214,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "10084:61:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                          typeString: 'literal_string "gnosis_chain"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19208,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "10042:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19215,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10042:104:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19216,
                  nodeType: "ExpressionStatement",
                  src: "10042:104:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6d6f6f6e6265616d",
                        id: 19218,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "10182:10:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                          typeString: 'literal_string "moonbeam"',
                        },
                        value: "moonbeam",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4d6f6f6e6265616d",
                            id: 19220,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10204:10:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              typeString: 'literal_string "Moonbeam"',
                            },
                            value: "Moonbeam",
                          },
                          {
                            hexValue: "31323834",
                            id: 19221,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10216:4:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1284_by_1",
                              typeString: "int_const 1284",
                            },
                            value: "1284",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                            id: 19222,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10222:34:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                              typeString:
                                'literal_string "https://rpc.api.moonbeam.network"',
                            },
                            value: "https://rpc.api.moonbeam.network",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              typeString: 'literal_string "Moonbeam"',
                            },
                            {
                              typeIdentifier: "t_rational_1284_by_1",
                              typeString: "int_const 1284",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                              typeString:
                                'literal_string "https://rpc.api.moonbeam.network"',
                            },
                          ],
                          id: 19219,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "10194:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19223,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "10194:63:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                          typeString: 'literal_string "moonbeam"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19217,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "10156:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19224,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10156:102:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19225,
                  nodeType: "ExpressionStatement",
                  src: "10156:102:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6d6f6f6e7269766572",
                        id: 19227,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "10307:11:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                          typeString: 'literal_string "moonriver"',
                        },
                        value: "moonriver",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4d6f6f6e7269766572",
                            id: 19229,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10330:11:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              typeString: 'literal_string "Moonriver"',
                            },
                            value: "Moonriver",
                          },
                          {
                            hexValue: "31323835",
                            id: 19230,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10343:4:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1285_by_1",
                              typeString: "int_const 1285",
                            },
                            value: "1285",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                            id: 19231,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10349:44:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                              typeString:
                                'literal_string "https://rpc.api.moonriver.moonbeam.network"',
                            },
                            value: "https://rpc.api.moonriver.moonbeam.network",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              typeString: 'literal_string "Moonriver"',
                            },
                            {
                              typeIdentifier: "t_rational_1285_by_1",
                              typeString: "int_const 1285",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                              typeString:
                                'literal_string "https://rpc.api.moonriver.moonbeam.network"',
                            },
                          ],
                          id: 19228,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "10320:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19232,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "10320:74:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                          typeString: 'literal_string "moonriver"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19226,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "10268:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19233,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10268:136:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19234,
                  nodeType: "ExpressionStatement",
                  src: "10268:136:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "6d6f6f6e62617365",
                        id: 19236,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "10440:10:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                          typeString: 'literal_string "moonbase"',
                        },
                        value: "moonbase",
                      },
                      {
                        arguments: [
                          {
                            hexValue: "4d6f6f6e62617365",
                            id: 19238,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10462:10:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              typeString: 'literal_string "Moonbase"',
                            },
                            value: "Moonbase",
                          },
                          {
                            hexValue: "31323837",
                            id: 19239,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10474:4:54",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1287_by_1",
                              typeString: "int_const 1287",
                            },
                            value: "1287",
                          },
                          {
                            hexValue:
                              "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                            id: 19240,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "10480:38:54",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                              typeString:
                                'literal_string "https://rpc.testnet.moonbeam.network"',
                            },
                            value: "https://rpc.testnet.moonbeam.network",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              typeString: 'literal_string "Moonbase"',
                            },
                            {
                              typeIdentifier: "t_rational_1287_by_1",
                              typeString: "int_const 1287",
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                              typeString:
                                'literal_string "https://rpc.testnet.moonbeam.network"',
                            },
                          ],
                          id: 19237,
                          name: "ChainData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 18594,
                          src: "10452:9:54",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_struct$_ChainData_$18594_storage_ptr_$",
                            typeString:
                              "type(struct StdChains.ChainData storage pointer)",
                          },
                        },
                        id: 19241,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "structConstructorCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "10452:67:54",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                          typeString: 'literal_string "moonbase"',
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19235,
                      name: "setChainWithDefaultRpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19282,
                      src: "10414:25:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19242,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10414:106:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19243,
                  nodeType: "ExpressionStatement",
                  src: "10414:106:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "initializeStdChains",
            nameLocation: "7785:19:54",
            parameters: {
              id: 19064,
              nodeType: "ParameterList",
              parameters: [],
              src: "7804:2:54",
            },
            returnParameters: {
              id: 19065,
              nodeType: "ParameterList",
              parameters: [],
              src: "7815:0:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "private",
          },
          {
            id: 19282,
            nodeType: "FunctionDefinition",
            src: "10609:305:54",
            nodes: [],
            body: {
              id: 19281,
              nodeType: "Block",
              src: "10702:212:54",
              nodes: [],
              statements: [
                {
                  assignments: [19254],
                  declarations: [
                    {
                      constant: false,
                      id: 19254,
                      mutability: "mutable",
                      name: "rpcUrl",
                      nameLocation: "10726:6:54",
                      nodeType: "VariableDeclaration",
                      scope: 19281,
                      src: "10712:20:54",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string",
                      },
                      typeName: {
                        id: 19253,
                        name: "string",
                        nodeType: "ElementaryTypeName",
                        src: "10712:6:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_storage_ptr",
                          typeString: "string",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 19257,
                  initialValue: {
                    expression: {
                      id: 19255,
                      name: "chain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19250,
                      src: "10735:5:54",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_ChainData_$18594_memory_ptr",
                        typeString: "struct StdChains.ChainData memory",
                      },
                    },
                    id: 19256,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "10741:6:54",
                    memberName: "rpcUrl",
                    nodeType: "MemberAccess",
                    referencedDeclaration: 18593,
                    src: "10735:12:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "10712:35:54",
                },
                {
                  expression: {
                    id: 19262,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 19258,
                        name: "defaultRpcUrls",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18612,
                        src: "10757:14:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                          typeString:
                            "mapping(string memory => string storage ref)",
                        },
                      },
                      id: 19260,
                      indexExpression: {
                        id: 19259,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19247,
                        src: "10772:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "10757:26:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 19261,
                      name: "rpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19254,
                      src: "10786:6:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "10757:35:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 19263,
                  nodeType: "ExpressionStatement",
                  src: "10757:35:54",
                },
                {
                  expression: {
                    id: 19268,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      expression: {
                        id: 19264,
                        name: "chain",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19250,
                        src: "10802:5:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                      id: 19266,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: "10808:6:54",
                      memberName: "rpcUrl",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 18593,
                      src: "10802:12:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "",
                      id: 19267,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "string",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "10817:2:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        typeString: 'literal_string ""',
                      },
                      value: "",
                    },
                    src: "10802:17:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                  id: 19269,
                  nodeType: "ExpressionStatement",
                  src: "10802:17:54",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 19271,
                        name: "chainAlias",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19247,
                        src: "10838:10:54",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        id: 19272,
                        name: "chain",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19250,
                        src: "10850:5:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      ],
                      id: 19270,
                      name: "setChain",
                      nodeType: "Identifier",
                      overloadedDeclarations: [18838, 18859],
                      referencedDeclaration: 18838,
                      src: "10829:8:54",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$18594_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,struct StdChains.ChainData memory)",
                      },
                    },
                    id: 19273,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10829:27:54",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 19274,
                  nodeType: "ExpressionStatement",
                  src: "10829:27:54",
                },
                {
                  expression: {
                    id: 19279,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      expression: {
                        id: 19275,
                        name: "chain",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 19250,
                        src: "10866:5:54",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_ChainData_$18594_memory_ptr",
                          typeString: "struct StdChains.ChainData memory",
                        },
                      },
                      id: 19277,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: "10872:6:54",
                      memberName: "rpcUrl",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 18593,
                      src: "10866:12:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 19278,
                      name: "rpcUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 19254,
                      src: "10881:6:54",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "10866:21:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                  id: 19280,
                  nodeType: "ExpressionStatement",
                  src: "10866:21:54",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setChainWithDefaultRpcUrl",
            nameLocation: "10618:25:54",
            parameters: {
              id: 19251,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 19247,
                  mutability: "mutable",
                  name: "chainAlias",
                  nameLocation: "10658:10:54",
                  nodeType: "VariableDeclaration",
                  scope: 19282,
                  src: "10644:24:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 19246,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "10644:6:54",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 19250,
                  mutability: "mutable",
                  name: "chain",
                  nameLocation: "10687:5:54",
                  nodeType: "VariableDeclaration",
                  scope: 19282,
                  src: "10670:22:54",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_ChainData_$18594_memory_ptr",
                    typeString: "struct StdChains.ChainData",
                  },
                  typeName: {
                    id: 19249,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 19248,
                      name: "ChainData",
                      nameLocations: ["10670:9:54"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 18594,
                      src: "10670:9:54",
                    },
                    referencedDeclaration: 18594,
                    src: "10670:9:54",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_ChainData_$18594_storage_ptr",
                      typeString: "struct StdChains.ChainData",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "10643:50:54",
            },
            returnParameters: {
              id: 19252,
              nodeType: "ParameterList",
              parameters: [],
              src: "10702:0:54",
            },
            scope: 19283,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "private",
          },
        ],
        abstract: true,
        baseContracts: [],
        canonicalName: "StdChains",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 18568,
          nodeType: "StructuredDocumentation",
          src: "99:1799:54",
          text: " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.",
        },
        fullyImplemented: true,
        linearizedBaseContracts: [19283],
        name: "StdChains",
        nameLocation: "1917:9:54",
        scope: 19284,
        usedErrors: [],
      },
    ],
    license: "MIT",
  },
  id: 54,
} as const;
