export const SafeTransferLib = {
  abi: [],
  bytecode: {
    object:
      "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201745e55dcb8929b1ec1415d5b897196a9ec619aa74513cd99900029f739e3b7464736f6c63430008130033",
    sourceMap:
      "586:5368:98:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5368:98;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201745e55dcb8929b1ec1415d5b897196a9ec619aa74513cd99900029f739e3b7464736f6c63430008130033",
    sourceMap: "586:5368:98:-:0;;;;;;;;",
    linkReferences: {},
  },
  methodIdentifiers: {},
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[],"devdoc":{"author":"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)","details":"Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.","kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"notice":"Safe ETH and ERC20 transfer library that gracefully handles missing return values.","version":1}},"settings":{"compilationTarget":{"lib/solmate/src/utils/SafeTransferLib.sol":"SafeTransferLib"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/solmate/src/tokens/ERC20.sol":{"keccak256":"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10","license":"AGPL-3.0-only","urls":["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35","dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"]},"lib/solmate/src/utils/SafeTransferLib.sol":{"keccak256":"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a","license":"AGPL-3.0-only","urls":["bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4","dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"]}},"version":1}',
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
        "lib/solmate/src/utils/SafeTransferLib.sol": "SafeTransferLib",
      },
      libraries: {},
    },
    sources: {
      "lib/solmate/src/tokens/ERC20.sol": {
        keccak256:
          "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        urls: [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        keccak256:
          "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        urls: [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU",
        ],
        license: "AGPL-3.0-only",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "lib/solmate/src/utils/SafeTransferLib.sol",
    id: 63560,
    exportedSymbols: {
      ERC20: [63250],
      SafeTransferLib: [63559],
    },
    nodeType: "SourceUnit",
    src: "42:5913:98",
    nodes: [
      {
        id: 63476,
        nodeType: "PragmaDirective",
        src: "42:24:98",
        nodes: [],
        literals: ["solidity", ">=", "0.8", ".0"],
      },
      {
        id: 63478,
        nodeType: "ImportDirective",
        src: "68:42:98",
        nodes: [],
        absolutePath: "lib/solmate/src/tokens/ERC20.sol",
        file: "../tokens/ERC20.sol",
        nameLocation: "-1:-1:-1",
        scope: 63560,
        sourceUnit: 63251,
        symbolAliases: [
          {
            foreign: {
              id: 63477,
              name: "ERC20",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 63250,
              src: "76:5:98",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 63559,
        nodeType: "ContractDefinition",
        src: "586:5368:98",
        nodes: [
          {
            id: 63496,
            nodeType: "FunctionDefinition",
            src: "799:339:98",
            nodes: [],
            body: {
              id: 63495,
              nodeType: "Block",
              src: "861:277:98",
              nodes: [],
              statements: [
                {
                  assignments: [63487],
                  declarations: [
                    {
                      constant: false,
                      id: 63487,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "876:7:98",
                      nodeType: "VariableDeclaration",
                      scope: 63495,
                      src: "871:12:98",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 63486,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "871:4:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 63488,
                  nodeType: "VariableDeclarationStatement",
                  src: "871:12:98",
                },
                {
                  AST: {
                    nodeType: "YulBlock",
                    src: "946:136:98",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1026:46:98",
                        value: {
                          arguments: [
                            {
                              arguments: [],
                              functionName: {
                                name: "gas",
                                nodeType: "YulIdentifier",
                                src: "1042:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1042:5:98",
                            },
                            {
                              name: "to",
                              nodeType: "YulIdentifier",
                              src: "1049:2:98",
                            },
                            {
                              name: "amount",
                              nodeType: "YulIdentifier",
                              src: "1053:6:98",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1061:1:98",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1064:1:98",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1067:1:98",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1070:1:98",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "call",
                            nodeType: "YulIdentifier",
                            src: "1037:4:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1037:35:98",
                        },
                        variableNames: [
                          {
                            name: "success",
                            nodeType: "YulIdentifier",
                            src: "1026:7:98",
                          },
                        ],
                      },
                    ],
                  },
                  documentation: "@solidity memory-safe-assembly",
                  evmVersion: "paris",
                  externalReferences: [
                    {
                      declaration: 63483,
                      isOffset: false,
                      isSlot: false,
                      src: "1053:6:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63487,
                      isOffset: false,
                      isSlot: false,
                      src: "1026:7:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63481,
                      isOffset: false,
                      isSlot: false,
                      src: "1049:2:98",
                      valueSize: 1,
                    },
                  ],
                  id: 63489,
                  nodeType: "InlineAssembly",
                  src: "937:145:98",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 63491,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 63487,
                        src: "1100:7:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "4554485f5452414e534645525f4641494c4544",
                        id: 63492,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1109:21:98",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29",
                          typeString: 'literal_string "ETH_TRANSFER_FAILED"',
                        },
                        value: "ETH_TRANSFER_FAILED",
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
                            "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29",
                          typeString: 'literal_string "ETH_TRANSFER_FAILED"',
                        },
                      ],
                      id: 63490,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "1092:7:98",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 63493,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1092:39:98",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 63494,
                  nodeType: "ExpressionStatement",
                  src: "1092:39:98",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeTransferETH",
            nameLocation: "808:15:98",
            parameters: {
              id: 63484,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 63481,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "832:2:98",
                  nodeType: "VariableDeclaration",
                  scope: 63496,
                  src: "824:10:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 63480,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "824:7:98",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63483,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "844:6:98",
                  nodeType: "VariableDeclaration",
                  scope: 63496,
                  src: "836:14:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 63482,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "836:7:98",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "823:28:98",
            },
            returnParameters: {
              id: 63485,
              nodeType: "ParameterList",
              parameters: [],
              src: "861:0:98",
            },
            scope: 63559,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
          {
            id: 63518,
            nodeType: "FunctionDefinition",
            src: "1328:1616:98",
            nodes: [],
            body: {
              id: 63517,
              nodeType: "Block",
              src: "1456:1488:98",
              nodes: [],
              statements: [
                {
                  assignments: [63509],
                  declarations: [
                    {
                      constant: false,
                      id: 63509,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "1471:7:98",
                      nodeType: "VariableDeclaration",
                      scope: 63517,
                      src: "1466:12:98",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 63508,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "1466:4:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 63510,
                  nodeType: "VariableDeclarationStatement",
                  src: "1466:12:98",
                },
                {
                  AST: {
                    nodeType: "YulBlock",
                    src: "1541:1346:98",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1605:36:98",
                        value: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1636:4:98",
                              type: "",
                              value: "0x40",
                            },
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "1630:5:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1630:11:98",
                        },
                        variables: [
                          {
                            name: "freeMemoryPointer",
                            nodeType: "YulTypedName",
                            src: "1609:17:98",
                            type: "",
                          },
                        ],
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "freeMemoryPointer",
                              nodeType: "YulIdentifier",
                              src: "1759:17:98",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1778:66:98",
                              type: "",
                              value:
                                "0x23b872dd00000000000000000000000000000000000000000000000000000000",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1752:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1752:93:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1752:93:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "1869:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1888:1:98",
                                  type: "",
                                  value: "4",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1865:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1865:25:98",
                            },
                            {
                              name: "from",
                              nodeType: "YulIdentifier",
                              src: "1892:4:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1858:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1858:39:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1858:39:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "1952:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1971:2:98",
                                  type: "",
                                  value: "36",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1948:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1948:26:98",
                            },
                            {
                              name: "to",
                              nodeType: "YulIdentifier",
                              src: "1976:2:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1941:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1941:38:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1941:38:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "2032:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2051:2:98",
                                  type: "",
                                  value: "68",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "2028:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2028:26:98",
                            },
                            {
                              name: "amount",
                              nodeType: "YulIdentifier",
                              src: "2056:6:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "2021:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2021:42:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2021:42:98",
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "2110:767:98",
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
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "2337:1:98",
                                              type: "",
                                              value: "0",
                                            },
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "2331:5:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "2331:8:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "2341:1:98",
                                          type: "",
                                          value: "1",
                                        },
                                      ],
                                      functionName: {
                                        name: "eq",
                                        nodeType: "YulIdentifier",
                                        src: "2328:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "2328:15:98",
                                    },
                                    {
                                      arguments: [
                                        {
                                          arguments: [],
                                          functionName: {
                                            name: "returndatasize",
                                            nodeType: "YulIdentifier",
                                            src: "2348:14:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "2348:16:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "2366:2:98",
                                          type: "",
                                          value: "31",
                                        },
                                      ],
                                      functionName: {
                                        name: "gt",
                                        nodeType: "YulIdentifier",
                                        src: "2345:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "2345:24:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "and",
                                    nodeType: "YulIdentifier",
                                    src: "2324:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2324:46:98",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [],
                                      functionName: {
                                        name: "returndatasize",
                                        nodeType: "YulIdentifier",
                                        src: "2379:14:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "2379:16:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "iszero",
                                    nodeType: "YulIdentifier",
                                    src: "2372:6:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2372:24:98",
                                },
                              ],
                              functionName: {
                                name: "or",
                                nodeType: "YulIdentifier",
                                src: "2321:2:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2321:76:98",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [],
                                  functionName: {
                                    name: "gas",
                                    nodeType: "YulIdentifier",
                                    src: "2816:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2816:5:98",
                                },
                                {
                                  name: "token",
                                  nodeType: "YulIdentifier",
                                  src: "2823:5:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2830:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "2833:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2852:3:98",
                                  type: "",
                                  value: "100",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2857:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "2860:2:98",
                                  type: "",
                                  value: "32",
                                },
                              ],
                              functionName: {
                                name: "call",
                                nodeType: "YulIdentifier",
                                src: "2811:4:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2811:52:98",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "2121:3:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2121:756:98",
                        },
                        variableNames: [
                          {
                            name: "success",
                            nodeType: "YulIdentifier",
                            src: "2110:7:98",
                          },
                        ],
                      },
                    ],
                  },
                  documentation: "@solidity memory-safe-assembly",
                  evmVersion: "paris",
                  externalReferences: [
                    {
                      declaration: 63505,
                      isOffset: false,
                      isSlot: false,
                      src: "2056:6:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63501,
                      isOffset: false,
                      isSlot: false,
                      src: "1892:4:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63509,
                      isOffset: false,
                      isSlot: false,
                      src: "2110:7:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63503,
                      isOffset: false,
                      isSlot: false,
                      src: "1976:2:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63499,
                      isOffset: false,
                      isSlot: false,
                      src: "2823:5:98",
                      valueSize: 1,
                    },
                  ],
                  id: 63511,
                  nodeType: "InlineAssembly",
                  src: "1532:1355:98",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 63513,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 63509,
                        src: "2905:7:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "5452414e534645525f46524f4d5f4641494c4544",
                        id: 63514,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2914:22:98",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7",
                          typeString: 'literal_string "TRANSFER_FROM_FAILED"',
                        },
                        value: "TRANSFER_FROM_FAILED",
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
                            "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7",
                          typeString: 'literal_string "TRANSFER_FROM_FAILED"',
                        },
                      ],
                      id: 63512,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "2897:7:98",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 63515,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2897:40:98",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 63516,
                  nodeType: "ExpressionStatement",
                  src: "2897:40:98",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeTransferFrom",
            nameLocation: "1337:16:98",
            parameters: {
              id: 63506,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 63499,
                  mutability: "mutable",
                  name: "token",
                  nameLocation: "1369:5:98",
                  nodeType: "VariableDeclaration",
                  scope: 63518,
                  src: "1363:11:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_ERC20_$63250",
                    typeString: "contract ERC20",
                  },
                  typeName: {
                    id: 63498,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 63497,
                      name: "ERC20",
                      nameLocations: ["1363:5:98"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 63250,
                      src: "1363:5:98",
                    },
                    referencedDeclaration: 63250,
                    src: "1363:5:98",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ERC20_$63250",
                      typeString: "contract ERC20",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63501,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "1392:4:98",
                  nodeType: "VariableDeclaration",
                  scope: 63518,
                  src: "1384:12:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 63500,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1384:7:98",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63503,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "1414:2:98",
                  nodeType: "VariableDeclaration",
                  scope: 63518,
                  src: "1406:10:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 63502,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1406:7:98",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63505,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "1434:6:98",
                  nodeType: "VariableDeclaration",
                  scope: 63518,
                  src: "1426:14:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 63504,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1426:7:98",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1353:93:98",
            },
            returnParameters: {
              id: 63507,
              nodeType: "ParameterList",
              parameters: [],
              src: "1456:0:98",
            },
            scope: 63559,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
          {
            id: 63538,
            nodeType: "FunctionDefinition",
            src: "2950:1499:98",
            nodes: [],
            body: {
              id: 63537,
              nodeType: "Block",
              src: "3052:1397:98",
              nodes: [],
              statements: [
                {
                  assignments: [63529],
                  declarations: [
                    {
                      constant: false,
                      id: 63529,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "3067:7:98",
                      nodeType: "VariableDeclaration",
                      scope: 63537,
                      src: "3062:12:98",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 63528,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "3062:4:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 63530,
                  nodeType: "VariableDeclarationStatement",
                  src: "3062:12:98",
                },
                {
                  AST: {
                    nodeType: "YulBlock",
                    src: "3137:1260:98",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "3201:36:98",
                        value: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3232:4:98",
                              type: "",
                              value: "0x40",
                            },
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "3226:5:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3226:11:98",
                        },
                        variables: [
                          {
                            name: "freeMemoryPointer",
                            nodeType: "YulTypedName",
                            src: "3205:17:98",
                            type: "",
                          },
                        ],
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "freeMemoryPointer",
                              nodeType: "YulIdentifier",
                              src: "3355:17:98",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3374:66:98",
                              type: "",
                              value:
                                "0xa9059cbb00000000000000000000000000000000000000000000000000000000",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3348:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3348:93:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3348:93:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "3465:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "3484:1:98",
                                  type: "",
                                  value: "4",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3461:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3461:25:98",
                            },
                            {
                              name: "to",
                              nodeType: "YulIdentifier",
                              src: "3488:2:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3454:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3454:37:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3454:37:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "3544:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "3563:2:98",
                                  type: "",
                                  value: "36",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3540:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3540:26:98",
                            },
                            {
                              name: "amount",
                              nodeType: "YulIdentifier",
                              src: "3568:6:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3533:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3533:42:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3533:42:98",
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "3622:765:98",
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
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "3849:1:98",
                                              type: "",
                                              value: "0",
                                            },
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "3843:5:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "3843:8:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "3853:1:98",
                                          type: "",
                                          value: "1",
                                        },
                                      ],
                                      functionName: {
                                        name: "eq",
                                        nodeType: "YulIdentifier",
                                        src: "3840:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "3840:15:98",
                                    },
                                    {
                                      arguments: [
                                        {
                                          arguments: [],
                                          functionName: {
                                            name: "returndatasize",
                                            nodeType: "YulIdentifier",
                                            src: "3860:14:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "3860:16:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "3878:2:98",
                                          type: "",
                                          value: "31",
                                        },
                                      ],
                                      functionName: {
                                        name: "gt",
                                        nodeType: "YulIdentifier",
                                        src: "3857:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "3857:24:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "and",
                                    nodeType: "YulIdentifier",
                                    src: "3836:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3836:46:98",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [],
                                      functionName: {
                                        name: "returndatasize",
                                        nodeType: "YulIdentifier",
                                        src: "3891:14:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "3891:16:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "iszero",
                                    nodeType: "YulIdentifier",
                                    src: "3884:6:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3884:24:98",
                                },
                              ],
                              functionName: {
                                name: "or",
                                nodeType: "YulIdentifier",
                                src: "3833:2:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3833:76:98",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [],
                                  functionName: {
                                    name: "gas",
                                    nodeType: "YulIdentifier",
                                    src: "4327:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4327:5:98",
                                },
                                {
                                  name: "token",
                                  nodeType: "YulIdentifier",
                                  src: "4334:5:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4341:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "4344:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4363:2:98",
                                  type: "",
                                  value: "68",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4367:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4370:2:98",
                                  type: "",
                                  value: "32",
                                },
                              ],
                              functionName: {
                                name: "call",
                                nodeType: "YulIdentifier",
                                src: "4322:4:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4322:51:98",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "3633:3:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3633:754:98",
                        },
                        variableNames: [
                          {
                            name: "success",
                            nodeType: "YulIdentifier",
                            src: "3622:7:98",
                          },
                        ],
                      },
                    ],
                  },
                  documentation: "@solidity memory-safe-assembly",
                  evmVersion: "paris",
                  externalReferences: [
                    {
                      declaration: 63525,
                      isOffset: false,
                      isSlot: false,
                      src: "3568:6:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63529,
                      isOffset: false,
                      isSlot: false,
                      src: "3622:7:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63523,
                      isOffset: false,
                      isSlot: false,
                      src: "3488:2:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63521,
                      isOffset: false,
                      isSlot: false,
                      src: "4334:5:98",
                      valueSize: 1,
                    },
                  ],
                  id: 63531,
                  nodeType: "InlineAssembly",
                  src: "3128:1269:98",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 63533,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 63529,
                        src: "4415:7:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "5452414e534645525f4641494c4544",
                        id: 63534,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4424:17:98",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                          typeString: 'literal_string "TRANSFER_FAILED"',
                        },
                        value: "TRANSFER_FAILED",
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
                            "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                          typeString: 'literal_string "TRANSFER_FAILED"',
                        },
                      ],
                      id: 63532,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "4407:7:98",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 63535,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4407:35:98",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 63536,
                  nodeType: "ExpressionStatement",
                  src: "4407:35:98",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeTransfer",
            nameLocation: "2959:12:98",
            parameters: {
              id: 63526,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 63521,
                  mutability: "mutable",
                  name: "token",
                  nameLocation: "2987:5:98",
                  nodeType: "VariableDeclaration",
                  scope: 63538,
                  src: "2981:11:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_ERC20_$63250",
                    typeString: "contract ERC20",
                  },
                  typeName: {
                    id: 63520,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 63519,
                      name: "ERC20",
                      nameLocations: ["2981:5:98"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 63250,
                      src: "2981:5:98",
                    },
                    referencedDeclaration: 63250,
                    src: "2981:5:98",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ERC20_$63250",
                      typeString: "contract ERC20",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63523,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "3010:2:98",
                  nodeType: "VariableDeclaration",
                  scope: 63538,
                  src: "3002:10:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 63522,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3002:7:98",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63525,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "3030:6:98",
                  nodeType: "VariableDeclaration",
                  scope: 63538,
                  src: "3022:14:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 63524,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3022:7:98",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2971:71:98",
            },
            returnParameters: {
              id: 63527,
              nodeType: "ParameterList",
              parameters: [],
              src: "3052:0:98",
            },
            scope: 63559,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
          {
            id: 63558,
            nodeType: "FunctionDefinition",
            src: "4455:1497:98",
            nodes: [],
            body: {
              id: 63557,
              nodeType: "Block",
              src: "4556:1396:98",
              nodes: [],
              statements: [
                {
                  assignments: [63549],
                  declarations: [
                    {
                      constant: false,
                      id: 63549,
                      mutability: "mutable",
                      name: "success",
                      nameLocation: "4571:7:98",
                      nodeType: "VariableDeclaration",
                      scope: 63557,
                      src: "4566:12:98",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      typeName: {
                        id: 63548,
                        name: "bool",
                        nodeType: "ElementaryTypeName",
                        src: "4566:4:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 63550,
                  nodeType: "VariableDeclarationStatement",
                  src: "4566:12:98",
                },
                {
                  AST: {
                    nodeType: "YulBlock",
                    src: "4641:1260:98",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4705:36:98",
                        value: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4736:4:98",
                              type: "",
                              value: "0x40",
                            },
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "4730:5:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4730:11:98",
                        },
                        variables: [
                          {
                            name: "freeMemoryPointer",
                            nodeType: "YulTypedName",
                            src: "4709:17:98",
                            type: "",
                          },
                        ],
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "freeMemoryPointer",
                              nodeType: "YulIdentifier",
                              src: "4859:17:98",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4878:66:98",
                              type: "",
                              value:
                                "0x095ea7b300000000000000000000000000000000000000000000000000000000",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4852:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4852:93:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4852:93:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "4969:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4988:1:98",
                                  type: "",
                                  value: "4",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4965:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4965:25:98",
                            },
                            {
                              name: "to",
                              nodeType: "YulIdentifier",
                              src: "4992:2:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4958:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4958:37:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4958:37:98",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "5048:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5067:2:98",
                                  type: "",
                                  value: "36",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5044:3:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5044:26:98",
                            },
                            {
                              name: "amount",
                              nodeType: "YulIdentifier",
                              src: "5072:6:98",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "5037:6:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5037:42:98",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5037:42:98",
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "5126:765:98",
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
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "5353:1:98",
                                              type: "",
                                              value: "0",
                                            },
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "5347:5:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "5347:8:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "5357:1:98",
                                          type: "",
                                          value: "1",
                                        },
                                      ],
                                      functionName: {
                                        name: "eq",
                                        nodeType: "YulIdentifier",
                                        src: "5344:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "5344:15:98",
                                    },
                                    {
                                      arguments: [
                                        {
                                          arguments: [],
                                          functionName: {
                                            name: "returndatasize",
                                            nodeType: "YulIdentifier",
                                            src: "5364:14:98",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "5364:16:98",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "5382:2:98",
                                          type: "",
                                          value: "31",
                                        },
                                      ],
                                      functionName: {
                                        name: "gt",
                                        nodeType: "YulIdentifier",
                                        src: "5361:2:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "5361:24:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "and",
                                    nodeType: "YulIdentifier",
                                    src: "5340:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5340:46:98",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [],
                                      functionName: {
                                        name: "returndatasize",
                                        nodeType: "YulIdentifier",
                                        src: "5395:14:98",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "5395:16:98",
                                    },
                                  ],
                                  functionName: {
                                    name: "iszero",
                                    nodeType: "YulIdentifier",
                                    src: "5388:6:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5388:24:98",
                                },
                              ],
                              functionName: {
                                name: "or",
                                nodeType: "YulIdentifier",
                                src: "5337:2:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5337:76:98",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [],
                                  functionName: {
                                    name: "gas",
                                    nodeType: "YulIdentifier",
                                    src: "5831:3:98",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5831:5:98",
                                },
                                {
                                  name: "token",
                                  nodeType: "YulIdentifier",
                                  src: "5838:5:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5845:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  name: "freeMemoryPointer",
                                  nodeType: "YulIdentifier",
                                  src: "5848:17:98",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5867:2:98",
                                  type: "",
                                  value: "68",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5871:1:98",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5874:2:98",
                                  type: "",
                                  value: "32",
                                },
                              ],
                              functionName: {
                                name: "call",
                                nodeType: "YulIdentifier",
                                src: "5826:4:98",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5826:51:98",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "5137:3:98",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5137:754:98",
                        },
                        variableNames: [
                          {
                            name: "success",
                            nodeType: "YulIdentifier",
                            src: "5126:7:98",
                          },
                        ],
                      },
                    ],
                  },
                  documentation: "@solidity memory-safe-assembly",
                  evmVersion: "paris",
                  externalReferences: [
                    {
                      declaration: 63545,
                      isOffset: false,
                      isSlot: false,
                      src: "5072:6:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63549,
                      isOffset: false,
                      isSlot: false,
                      src: "5126:7:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63543,
                      isOffset: false,
                      isSlot: false,
                      src: "4992:2:98",
                      valueSize: 1,
                    },
                    {
                      declaration: 63541,
                      isOffset: false,
                      isSlot: false,
                      src: "5838:5:98",
                      valueSize: 1,
                    },
                  ],
                  id: 63551,
                  nodeType: "InlineAssembly",
                  src: "4632:1269:98",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 63553,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 63549,
                        src: "5919:7:98",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "415050524f56455f4641494c4544",
                        id: 63554,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5928:16:98",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2",
                          typeString: 'literal_string "APPROVE_FAILED"',
                        },
                        value: "APPROVE_FAILED",
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
                            "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2",
                          typeString: 'literal_string "APPROVE_FAILED"',
                        },
                      ],
                      id: 63552,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "5911:7:98",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 63555,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5911:34:98",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 63556,
                  nodeType: "ExpressionStatement",
                  src: "5911:34:98",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeApprove",
            nameLocation: "4464:11:98",
            parameters: {
              id: 63546,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 63541,
                  mutability: "mutable",
                  name: "token",
                  nameLocation: "4491:5:98",
                  nodeType: "VariableDeclaration",
                  scope: 63558,
                  src: "4485:11:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_ERC20_$63250",
                    typeString: "contract ERC20",
                  },
                  typeName: {
                    id: 63540,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 63539,
                      name: "ERC20",
                      nameLocations: ["4485:5:98"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 63250,
                      src: "4485:5:98",
                    },
                    referencedDeclaration: 63250,
                    src: "4485:5:98",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_ERC20_$63250",
                      typeString: "contract ERC20",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63543,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "4514:2:98",
                  nodeType: "VariableDeclaration",
                  scope: 63558,
                  src: "4506:10:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 63542,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "4506:7:98",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63545,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "4534:6:98",
                  nodeType: "VariableDeclaration",
                  scope: 63558,
                  src: "4526:14:98",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 63544,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "4526:7:98",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "4475:71:98",
            },
            returnParameters: {
              id: 63547,
              nodeType: "ParameterList",
              parameters: [],
              src: "4556:0:98",
            },
            scope: 63559,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: "SafeTransferLib",
        contractDependencies: [],
        contractKind: "library",
        documentation: {
          id: 63479,
          nodeType: "StructuredDocumentation",
          src: "112:474:98",
          text: "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.",
        },
        fullyImplemented: true,
        linearizedBaseContracts: [63559],
        name: "SafeTransferLib",
        nameLocation: "594:15:98",
        scope: 63560,
        usedErrors: [],
      },
    ],
    license: "AGPL-3.0-only",
  },
  id: 98,
} as const;
