export const IWETH = {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
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
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
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
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
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
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "wad",
          type: "uint256",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
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
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "deposit()": "d0e30db0",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "withdraw(uint256)": "2e1a7d4d",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"events":{"Approval(address,address,uint256)":{"details":"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."},"Transfer(address,address,uint256)":{"details":"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."}},"kind":"dev","methods":{"allowance(address,address)":{"details":"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."},"approve(address,uint256)":{"details":"Sets `amount` as the allowance of `spender` over the caller\'s tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender\'s allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."},"balanceOf(address)":{"details":"Returns the amount of tokens owned by `account`."},"totalSupply()":{"details":"Returns the amount of tokens in existence."},"transfer(address,uint256)":{"details":"Moves `amount` tokens from the caller\'s account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."},"transferFrom(address,address,uint256)":{"details":"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller\'s allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/src/interfaces/IWETH.sol":"IWETH"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IWETH.sol":{"keccak256":"0x52018af7fb236144f5f43f45a56802aa8abd0bca97fda459dd2871b01bc6331a","license":"Apache-2.0","urls":["bzz-raw://5f4ea422000e0d344e7577feb233f2b8d1894814c984e80f392ce6a65e9271c7","dweb:/ipfs/QmSPoHWYog7cutHuVgkDimCChnAhsHrotaG9TAJ9TmYFyE"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]}},"version":1}',
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
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Approval",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Transfer",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "allowance",
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
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "approve",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "payable",
          type: "function",
          name: "deposit",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "totalSupply",
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
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transfer",
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
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFrom",
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
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "withdraw",
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "allowance(address,address)": {
            details:
              "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.",
          },
          "approve(address,uint256)": {
            details:
              "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.",
          },
          "balanceOf(address)": {
            details: "Returns the amount of tokens owned by `account`.",
          },
          "totalSupply()": {
            details: "Returns the amount of tokens in existence.",
          },
          "transfer(address,uint256)": {
            details:
              "Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.",
          },
          "transferFrom(address,address,uint256)": {
            details:
              "Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.",
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
        "contracts/src/interfaces/IWETH.sol": "IWETH",
      },
      libraries: {},
    },
    sources: {
      "contracts/src/interfaces/IERC20.sol": {
        keccak256:
          "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        urls: [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w",
        ],
        license: "MIT",
      },
      "contracts/src/interfaces/IWETH.sol": {
        keccak256:
          "0x52018af7fb236144f5f43f45a56802aa8abd0bca97fda459dd2871b01bc6331a",
        urls: [
          "bzz-raw://5f4ea422000e0d344e7577feb233f2b8d1894814c984e80f392ce6a65e9271c7",
          "dweb:/ipfs/QmSPoHWYog7cutHuVgkDimCChnAhsHrotaG9TAJ9TmYFyE",
        ],
        license: "Apache-2.0",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        urls: [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":
        {
          keccak256:
            "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
          urls: [
            "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
            "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        keccak256:
          "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        urls: [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        keccak256:
          "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        urls: [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "contracts/src/interfaces/IWETH.sol",
    id: 7673,
    exportedSymbols: {
      IERC20: [6461],
      IWETH: [7672],
    },
    nodeType: "SourceUnit",
    src: "39:182:30",
    nodes: [
      {
        id: 7659,
        nodeType: "PragmaDirective",
        src: "39:23:30",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 7661,
        nodeType: "ImportDirective",
        src: "64:38:30",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IERC20.sol",
        file: "./IERC20.sol",
        nameLocation: "-1:-1:-1",
        scope: 7673,
        sourceUnit: 6462,
        symbolAliases: [
          {
            foreign: {
              id: 7660,
              name: "IERC20",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6461,
              src: "73:6:30",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 7672,
        nodeType: "ContractDefinition",
        src: "104:116:30",
        nodes: [
          {
            id: 7666,
            nodeType: "FunctionDefinition",
            src: "136:36:30",
            nodes: [],
            functionSelector: "d0e30db0",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "deposit",
            nameLocation: "145:7:30",
            parameters: {
              id: 7664,
              nodeType: "ParameterList",
              parameters: [],
              src: "152:2:30",
            },
            returnParameters: {
              id: 7665,
              nodeType: "ParameterList",
              parameters: [],
              src: "171:0:30",
            },
            scope: 7672,
            stateMutability: "payable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 7671,
            nodeType: "FunctionDefinition",
            src: "178:40:30",
            nodes: [],
            functionSelector: "2e1a7d4d",
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "withdraw",
            nameLocation: "187:8:30",
            parameters: {
              id: 7669,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 7668,
                  mutability: "mutable",
                  name: "wad",
                  nameLocation: "204:3:30",
                  nodeType: "VariableDeclaration",
                  scope: 7671,
                  src: "196:11:30",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 7667,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "196:7:30",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "195:13:30",
            },
            returnParameters: {
              id: 7670,
              nodeType: "ParameterList",
              parameters: [],
              src: "217:0:30",
            },
            scope: 7672,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 7662,
              name: "IERC20",
              nameLocations: ["123:6:30"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 6461,
              src: "123:6:30",
            },
            id: 7663,
            nodeType: "InheritanceSpecifier",
            src: "123:6:30",
          },
        ],
        canonicalName: "IWETH",
        contractDependencies: [],
        contractKind: "interface",
        fullyImplemented: false,
        linearizedBaseContracts: [7672, 6461, 58980],
        name: "IWETH",
        nameLocation: "114:5:30",
        scope: 7673,
        usedErrors: [],
      },
    ],
    license: "Apache-2.0",
  },
  id: 30,
} as const;
