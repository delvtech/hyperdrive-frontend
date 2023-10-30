export const Vm = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "accesses",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "readSlots",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "writeSlots",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "activeFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "keyAddr",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "allowCheatcodes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "condition",
          "type": "bool"
        }
      ],
      "name": "assume",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "char",
          "type": "string"
        }
      ],
      "name": "breakpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "char",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "breakpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newChainId",
          "type": "uint256"
        }
      ],
      "name": "chainId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "clearMockedCalls",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "closeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newCoinbase",
          "type": "address"
        }
      ],
      "name": "coinbase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "recursive",
          "type": "bool"
        }
      ],
      "name": "createDir",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "deal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "mnemonic",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "index",
          "type": "uint32"
        }
      ],
      "name": "deriveKey",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "mnemonic",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "derivationPath",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "index",
          "type": "uint32"
        }
      ],
      "name": "deriveKey",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newDifficulty",
          "type": "uint256"
        }
      ],
      "name": "difficulty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envAddress",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "value",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBool",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "value",
          "type": "bool[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBytes",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "value",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBytes32",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "value",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envInt",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "value",
          "type": "int256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bytes32[]",
          "name": "defaultValue",
          "type": "bytes32[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "value",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "int256[]",
          "name": "defaultValue",
          "type": "int256[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "value",
          "type": "int256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "defaultValue",
          "type": "bool"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "defaultValue",
          "type": "address"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bytes[]",
          "name": "defaultValue",
          "type": "bytes[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "value",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "uint256[]",
          "name": "defaultValue",
          "type": "uint256[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "value",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "defaultValue",
          "type": "string[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "value",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "defaultValue",
          "type": "bytes"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "defaultValue",
          "type": "bytes32"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "defaultValue",
          "type": "int256"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "defaultValue",
          "type": "address[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "value",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "defaultValue",
          "type": "string"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bool[]",
          "name": "defaultValue",
          "type": "bool[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "value",
          "type": "bool[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envString",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "value",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envString",
      "outputs": [
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envUint",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "value",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "newRuntimeBytecode",
          "type": "bytes"
        }
      ],
      "name": "etch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "gas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "gas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "minGas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCallMinGas",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "minGas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCallMinGas",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "checkTopic1",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic2",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic3",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkData",
          "type": "bool"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "checkTopic1",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic2",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic3",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkData",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "emitter",
          "type": "address"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "emitter",
          "type": "address"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "revertData",
          "type": "bytes4"
        }
      ],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "min",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "max",
          "type": "uint64"
        }
      ],
      "name": "expectSafeMemory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "min",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "max",
          "type": "uint64"
        }
      ],
      "name": "expectSafeMemoryCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newBasefee",
          "type": "uint256"
        }
      ],
      "name": "fee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "commandInput",
          "type": "string[]"
        }
      ],
      "name": "ffi",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "result",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "fsMetadata",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "readOnly",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "modified",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "accessed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            }
          ],
          "internalType": "struct VmSafe.FsMetadata",
          "name": "metadata",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "artifactPath",
          "type": "string"
        }
      ],
      "name": "getCode",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "creationBytecode",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "artifactPath",
          "type": "string"
        }
      ],
      "name": "getDeployedCode",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "runtimeBytecode",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getLabel",
      "outputs": [
        {
          "internalType": "string",
          "name": "currentLabel",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRecordedLogs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32[]",
              "name": "topics",
              "type": "bytes32[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "internalType": "struct VmSafe.Log[]",
          "name": "logs",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPersistent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "persistent",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "newLabel",
          "type": "string"
        }
      ],
      "name": "label",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "slot",
          "type": "bytes32"
        }
      ],
      "name": "load",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "data",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account1",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account2",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "mockCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "mockCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "mockCallRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "mockCallRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "parsedValue",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "parsedValue",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "parsedValue",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "parsedValue",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "parsedValue",
          "type": "int256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "name": "parseJson",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "abiEncodedData",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        }
      ],
      "name": "parseJson",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "abiEncodedData",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonAddressArray",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBoolArray",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "",
          "type": "bool[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes32Array",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytesArray",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonIntArray",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "",
          "type": "int256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        }
      ],
      "name": "parseJsonKeys",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "keys",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonStringArray",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonUintArray",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "parsedValue",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pauseGasMetering",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "name": "prank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        }
      ],
      "name": "prank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "newPrevrandao",
          "type": "bytes32"
        }
      ],
      "name": "prevrandao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectRoot",
      "outputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readCallers",
      "outputs": [
        {
          "internalType": "enum VmSafe.CallerMode",
          "name": "callerMode",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "uint64",
          "name": "maxDepth",
          "type": "uint64"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "uint64",
          "name": "maxDepth",
          "type": "uint64"
        },
        {
          "internalType": "bool",
          "name": "followLinks",
          "type": "bool"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readFile",
      "outputs": [
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readFileBinary",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readLine",
      "outputs": [
        {
          "internalType": "string",
          "name": "line",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "linkPath",
          "type": "string"
        }
      ],
      "name": "readLink",
      "outputs": [
        {
          "internalType": "string",
          "name": "targetPath",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "record",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "recordLogs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "rememberKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "keyAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "recursive",
          "type": "bool"
        }
      ],
      "name": "removeDir",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "removeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "resetNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resumeGasMetering",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "snapshotId",
          "type": "uint256"
        }
      ],
      "name": "revertTo",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        }
      ],
      "name": "revokePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newHeight",
          "type": "uint256"
        }
      ],
      "name": "roll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "rpcAlias",
          "type": "string"
        }
      ],
      "name": "rpcUrl",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rpcUrlStructs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            }
          ],
          "internalType": "struct VmSafe.Rpc[]",
          "name": "urls",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rpcUrls",
      "outputs": [
        {
          "internalType": "string[2][]",
          "name": "urls",
          "type": "string[2][]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "name": "selectFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "values",
          "type": "address[]"
        }
      ],
      "name": "serializeAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "serializeAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bool[]",
          "name": "values",
          "type": "bool[]"
        }
      ],
      "name": "serializeBool",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "serializeBool",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes[]",
          "name": "values",
          "type": "bytes[]"
        }
      ],
      "name": "serializeBytes",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "name": "serializeBytes",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes32[]",
          "name": "values",
          "type": "bytes32[]"
        }
      ],
      "name": "serializeBytes32",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "serializeBytes32",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "serializeInt",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "int256[]",
          "name": "values",
          "type": "int256[]"
        }
      ],
      "name": "serializeInt",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "values",
          "type": "string[]"
        }
      ],
      "name": "serializeString",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "serializeString",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "serializeUint",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "serializeUint",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "setEnv",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "newNonce",
          "type": "uint64"
        }
      ],
      "name": "setNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "newNonce",
          "type": "uint64"
        }
      ],
      "name": "setNonceUnsafe",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "digest",
          "type": "bytes32"
        }
      ],
      "name": "sign",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "skipTest",
          "type": "bool"
        }
      ],
      "name": "skip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "snapshot",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "snapshotId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        }
      ],
      "name": "startPrank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "name": "startPrank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stopBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stopPrank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "slot",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "transact",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "transact",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newGasPrice",
          "type": "uint256"
        }
      ],
      "name": "txGasPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        }
      ],
      "name": "warp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "name": "writeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "writeFileBinary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        }
      ],
      "name": "writeJson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "writeJson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "name": "writeLine",
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
    "accesses(address)": "65bc9481",
    "activeFork()": "2f103f22",
    "addr(uint256)": "ffa18649",
    "allowCheatcodes(address)": "ea060291",
    "assume(bool)": "4c63e562",
    "breakpoint(string)": "f0259e92",
    "breakpoint(string,bool)": "f7d39a8d",
    "broadcast()": "afc98040",
    "broadcast(address)": "e6962cdb",
    "broadcast(uint256)": "f67a965b",
    "chainId(uint256)": "4049ddd2",
    "clearMockedCalls()": "3fdf4e15",
    "closeFile(string)": "48c3241f",
    "coinbase(address)": "ff483c54",
    "createDir(string,bool)": "168b64d3",
    "createFork(string)": "31ba3498",
    "createFork(string,bytes32)": "7ca29682",
    "createFork(string,uint256)": "6ba3ba2b",
    "createSelectFork(string)": "98680034",
    "createSelectFork(string,bytes32)": "84d52b7a",
    "createSelectFork(string,uint256)": "71ee464d",
    "deal(address,uint256)": "c88a5e6d",
    "deriveKey(string,string,uint32)": "6bcb2c1b",
    "deriveKey(string,uint32)": "6229498b",
    "difficulty(uint256)": "46cc92d9",
    "envAddress(string)": "350d56bf",
    "envAddress(string,string)": "ad31b9fa",
    "envBool(string)": "7ed1ec7d",
    "envBool(string,string)": "aaaddeaf",
    "envBytes(string)": "4d7baf06",
    "envBytes(string,string)": "ddc2651b",
    "envBytes32(string)": "97949042",
    "envBytes32(string,string)": "5af231c1",
    "envInt(string)": "892a0c61",
    "envInt(string,string)": "42181150",
    "envOr(string,address)": "561fe540",
    "envOr(string,bool)": "4777f3cf",
    "envOr(string,bytes)": "b3e47705",
    "envOr(string,bytes32)": "b4a85892",
    "envOr(string,int256)": "bbcb713e",
    "envOr(string,string)": "d145736c",
    "envOr(string,string,address[])": "c74e9deb",
    "envOr(string,string,bool[])": "eb85e83b",
    "envOr(string,string,bytes32[])": "2281f367",
    "envOr(string,string,bytes[])": "64bc3e64",
    "envOr(string,string,int256[])": "4700d74b",
    "envOr(string,string,string[])": "859216bc",
    "envOr(string,string,uint256[])": "74318528",
    "envOr(string,uint256)": "5e97348f",
    "envString(string)": "f877cb19",
    "envString(string,string)": "14b02bc9",
    "envUint(string)": "c1978d1f",
    "envUint(string,string)": "f3dec099",
    "etch(address,bytes)": "b4d6c782",
    "expectCall(address,bytes)": "bd6af434",
    "expectCall(address,bytes,uint64)": "c1adbbff",
    "expectCall(address,uint256,bytes)": "f30c7ba3",
    "expectCall(address,uint256,bytes,uint64)": "a2b1a1ae",
    "expectCall(address,uint256,uint64,bytes)": "23361207",
    "expectCall(address,uint256,uint64,bytes,uint64)": "65b7b7cc",
    "expectCallMinGas(address,uint256,uint64,bytes)": "08e4e116",
    "expectCallMinGas(address,uint256,uint64,bytes,uint64)": "e13a1834",
    "expectEmit()": "440ed10d",
    "expectEmit(address)": "86b9620d",
    "expectEmit(bool,bool,bool,bool)": "491cc7c2",
    "expectEmit(bool,bool,bool,bool,address)": "81bad6f3",
    "expectRevert()": "f4844814",
    "expectRevert(bytes)": "f28dceb3",
    "expectRevert(bytes4)": "c31eb0e0",
    "expectSafeMemory(uint64,uint64)": "6d016688",
    "expectSafeMemoryCall(uint64,uint64)": "05838bf4",
    "fee(uint256)": "39b37ab0",
    "ffi(string[])": "89160467",
    "fsMetadata(string)": "af368a08",
    "getCode(string)": "8d1cc925",
    "getDeployedCode(string)": "3ebf73b4",
    "getLabel(address)": "28a249b0",
    "getNonce(address)": "2d0335ab",
    "getRecordedLogs()": "191553a4",
    "isPersistent(address)": "d92d8efd",
    "label(address,string)": "c657c718",
    "load(address,bytes32)": "667f9d70",
    "makePersistent(address)": "57e22dde",
    "makePersistent(address,address)": "4074e0a8",
    "makePersistent(address,address,address)": "efb77a75",
    "makePersistent(address[])": "1d9e269e",
    "mockCall(address,bytes,bytes)": "b96213e4",
    "mockCall(address,uint256,bytes,bytes)": "81409b91",
    "mockCallRevert(address,bytes,bytes)": "dbaad147",
    "mockCallRevert(address,uint256,bytes,bytes)": "d23cd037",
    "parseAddress(string)": "c6ce059d",
    "parseBool(string)": "974ef924",
    "parseBytes(string)": "8f5d232d",
    "parseBytes32(string)": "087e6e81",
    "parseInt(string)": "42346c5e",
    "parseJson(string)": "6a82600a",
    "parseJson(string,string)": "85940ef1",
    "parseJsonAddress(string,string)": "1e19e657",
    "parseJsonAddressArray(string,string)": "2fce7883",
    "parseJsonBool(string,string)": "9f86dc91",
    "parseJsonBoolArray(string,string)": "91f3b94f",
    "parseJsonBytes(string,string)": "fd921be8",
    "parseJsonBytes32(string,string)": "1777e59d",
    "parseJsonBytes32Array(string,string)": "91c75bc3",
    "parseJsonBytesArray(string,string)": "6631aa99",
    "parseJsonInt(string,string)": "7b048ccd",
    "parseJsonIntArray(string,string)": "9983c28a",
    "parseJsonKeys(string,string)": "213e4198",
    "parseJsonString(string,string)": "49c4fac8",
    "parseJsonStringArray(string,string)": "498fdcf4",
    "parseJsonUint(string,string)": "addde2b6",
    "parseJsonUintArray(string,string)": "522074ab",
    "parseUint(string)": "fa91454d",
    "pauseGasMetering()": "d1a5b36f",
    "prank(address)": "ca669fa7",
    "prank(address,address)": "47e50cce",
    "prevrandao(bytes32)": "3b925549",
    "projectRoot()": "d930a0e6",
    "readCallers()": "4ad0bac9",
    "readDir(string)": "c4bc59e0",
    "readDir(string,uint64)": "1497876c",
    "readDir(string,uint64,bool)": "8102d70d",
    "readFile(string)": "60f9bb11",
    "readFileBinary(string)": "16ed7bc4",
    "readLine(string)": "70f55728",
    "readLink(string)": "9f5684a2",
    "record()": "266cf109",
    "recordLogs()": "41af2f52",
    "rememberKey(uint256)": "22100064",
    "removeDir(string,bool)": "45c62011",
    "removeFile(string)": "f1afe04d",
    "resetNonce(address)": "1c72346d",
    "resumeGasMetering()": "2bcd50e0",
    "revertTo(uint256)": "44d7f0a4",
    "revokePersistent(address)": "997a0222",
    "revokePersistent(address[])": "3ce969e6",
    "roll(uint256)": "1f7b4f30",
    "rollFork(bytes32)": "0f29772b",
    "rollFork(uint256)": "d9bbf3a1",
    "rollFork(uint256,bytes32)": "f2830f7b",
    "rollFork(uint256,uint256)": "d74c83a4",
    "rpcUrl(string)": "975a6ce9",
    "rpcUrlStructs()": "9d2ad72a",
    "rpcUrls()": "a85a8418",
    "selectFork(uint256)": "9ebf6827",
    "serializeAddress(string,string,address)": "972c6062",
    "serializeAddress(string,string,address[])": "1e356e1a",
    "serializeBool(string,string,bool)": "ac22e971",
    "serializeBool(string,string,bool[])": "92925aa1",
    "serializeBytes(string,string,bytes)": "f21d52c7",
    "serializeBytes(string,string,bytes[])": "9884b232",
    "serializeBytes32(string,string,bytes32)": "2d812b44",
    "serializeBytes32(string,string,bytes32[])": "201e43e2",
    "serializeInt(string,string,int256)": "3f33db60",
    "serializeInt(string,string,int256[])": "7676e127",
    "serializeString(string,string,string)": "88da6d35",
    "serializeString(string,string,string[])": "561cd6f3",
    "serializeUint(string,string,uint256)": "129e9002",
    "serializeUint(string,string,uint256[])": "fee9a469",
    "setEnv(string,string)": "3d5923ee",
    "setNonce(address,uint64)": "f8e18b57",
    "setNonceUnsafe(address,uint64)": "9b67b21c",
    "sign(uint256,bytes32)": "e341eaa4",
    "skip(bool)": "dd82d13e",
    "snapshot()": "9711715a",
    "startBroadcast()": "7fb5297f",
    "startBroadcast(address)": "7fec2a8d",
    "startBroadcast(uint256)": "ce817d47",
    "startPrank(address)": "06447d56",
    "startPrank(address,address)": "45b56078",
    "stopBroadcast()": "76eadd36",
    "stopPrank()": "90c5013b",
    "store(address,bytes32,bytes32)": "70ca10bb",
    "toString(address)": "56ca623e",
    "toString(bool)": "71dce7da",
    "toString(bytes)": "71aad10d",
    "toString(bytes32)": "b11a19e8",
    "toString(int256)": "a322c40e",
    "toString(uint256)": "6900a3ae",
    "transact(bytes32)": "be646da1",
    "transact(uint256,bytes32)": "4d8abc4b",
    "txGasPrice(uint256)": "48f50c0f",
    "warp(uint256)": "e5d6bf02",
    "writeFile(string,string)": "897e0a97",
    "writeFileBinary(string,bytes)": "1f21fc80",
    "writeJson(string,string)": "e23cd19f",
    "writeJson(string,string,string)": "35d6ad46",
    "writeLine(string,string)": "619d897f"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"accesses\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"readSlots\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"writeSlots\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"activeFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"allowCheatcodes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"condition\",\"type\":\"bool\"}],\"name\":\"assume\",\"outputs\":[],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newChainId\",\"type\":\"uint256\"}],\"name\":\"chainId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"clearMockedCalls\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"closeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newCoinbase\",\"type\":\"address\"}],\"name\":\"coinbase\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"createDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"deal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"derivationPath\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newDifficulty\",\"type\":\"uint256\"}],\"name\":\"difficulty\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"defaultValue\",\"type\":\"bytes32[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"defaultValue\",\"type\":\"int256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"defaultValue\",\"type\":\"bool\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"defaultValue\",\"type\":\"address\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"defaultValue\",\"type\":\"uint256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"defaultValue\",\"type\":\"bytes[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"defaultValue\",\"type\":\"uint256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"defaultValue\",\"type\":\"string[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"defaultValue\",\"type\":\"bytes\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"defaultValue\",\"type\":\"bytes32\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"defaultValue\",\"type\":\"int256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"defaultValue\",\"type\":\"address[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"defaultValue\",\"type\":\"string\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"defaultValue\",\"type\":\"bool[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"newRuntimeBytecode\",\"type\":\"bytes\"}],\"name\":\"etch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"revertData\",\"type\":\"bytes4\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemoryCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newBasefee\",\"type\":\"uint256\"}],\"name\":\"fee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string[]\",\"name\":\"commandInput\",\"type\":\"string[]\"}],\"name\":\"ffi\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"result\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"fsMetadata\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"readOnly\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"modified\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accessed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"created\",\"type\":\"uint256\"}],\"internalType\":\"struct VmSafe.FsMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"creationBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getDeployedCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"runtimeBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getLabel\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"currentLabel\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getNonce\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"nonce\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRecordedLogs\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32[]\",\"name\":\"topics\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"internalType\":\"struct VmSafe.Log[]\",\"name\":\"logs\",\"type\":\"tuple[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isPersistent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"persistent\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"newLabel\",\"type\":\"string\"}],\"name\":\"label\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account2\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"parsedValue\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"parsedValue\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"parsedValue\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"parsedValue\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"parsedValue\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddressArray\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBoolArray\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32Array\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytesArray\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonIntArray\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJsonKeys\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"keys\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonStringArray\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUintArray\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"parsedValue\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pauseGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"newPrevrandao\",\"type\":\"bytes32\"}],\"name\":\"prevrandao\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projectRoot\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"readCallers\",\"outputs\":[{\"internalType\":\"enum VmSafe.CallerMode\",\"name\":\"callerMode\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"followLinks\",\"type\":\"bool\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFile\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFileBinary\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readLine\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"line\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"linkPath\",\"type\":\"string\"}],\"name\":\"readLink\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"targetPath\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"record\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recordLogs\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"rememberKey\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"removeDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"removeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"resetNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"resumeGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"name\":\"revertTo\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newHeight\",\"type\":\"uint256\"}],\"name\":\"roll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"rpcAlias\",\"type\":\"string\"}],\"name\":\"rpcUrl\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrlStructs\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"url\",\"type\":\"string\"}],\"internalType\":\"struct VmSafe.Rpc[]\",\"name\":\"urls\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrls\",\"outputs\":[{\"internalType\":\"string[2][]\",\"name\":\"urls\",\"type\":\"string[2][]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"name\":\"selectFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"values\",\"type\":\"address[]\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"values\",\"type\":\"bool[]\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"values\",\"type\":\"bytes[]\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"values\",\"type\":\"bytes32[]\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"values\",\"type\":\"int256[]\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"values\",\"type\":\"string[]\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setEnv\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonceUnsafe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"digest\",\"type\":\"bytes32\"}],\"name\":\"sign\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"skipTest\",\"type\":\"bool\"}],\"name\":\"skip\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"snapshot\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"store\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newGasPrice\",\"type\":\"uint256\"}],\"name\":\"txGasPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"name\":\"warp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"writeFileBinary\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeLine\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"activeFork()\":{\"notice\":\"Returns the identifier of the currently active fork. Reverts if no fork is currently active.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Vm.sol\":\"Vm\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "accesses",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "readSlots",
              "type": "bytes32[]"
            },
            {
              "internalType": "bytes32[]",
              "name": "writeSlots",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "activeFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "addr",
          "outputs": [
            {
              "internalType": "address",
              "name": "keyAddr",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "allowCheatcodes"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "condition",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "assume"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "char",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "breakpoint"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "char",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "breakpoint"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newChainId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "chainId"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "clearMockedCalls"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeFile"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newCoinbase",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "coinbase"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "recursive",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createDir"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "newBalance",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deal"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "mnemonic",
              "type": "string"
            },
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "deriveKey",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "mnemonic",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "derivationPath",
              "type": "string"
            },
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "deriveKey",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newDifficulty",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "difficulty"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envAddress",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "value",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBool",
          "outputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBool",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "value",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "value",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes32",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "value",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes32",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envInt",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "value",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bytes32[]",
              "name": "defaultValue",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "value",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "int256[]",
              "name": "defaultValue",
              "type": "int256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "value",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "defaultValue",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "defaultValue",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "defaultValue",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bytes[]",
              "name": "defaultValue",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "value",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "defaultValue",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "defaultValue",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "value",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "defaultValue",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "defaultValue",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "defaultValue",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "defaultValue",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "value",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "defaultValue",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bool[]",
              "name": "defaultValue",
              "type": "bool[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "value",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envString",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "value",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envString",
          "outputs": [
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envUint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envUint",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "newRuntimeBytecode",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "etch"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "gas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "gas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "minGas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCallMinGas"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "minGas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCallMinGas"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "checkTopic1",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic2",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic3",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkData",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "checkTopic1",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic2",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic3",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkData",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "revertData",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "min",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "max",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectSafeMemory"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "min",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "max",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectSafeMemoryCall"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newBasefee",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "fee"
        },
        {
          "inputs": [
            {
              "internalType": "string[]",
              "name": "commandInput",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "ffi",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "result",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fsMetadata",
          "outputs": [
            {
              "internalType": "struct VmSafe.FsMetadata",
              "name": "metadata",
              "type": "tuple",
              "components": [
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "readOnly",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "modified",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "accessed",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "created",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "artifactPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCode",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "creationBytecode",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "artifactPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeployedCode",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "runtimeBytecode",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getLabel",
          "outputs": [
            {
              "internalType": "string",
              "name": "currentLabel",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "nonce",
              "type": "uint64"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getRecordedLogs",
          "outputs": [
            {
              "internalType": "struct VmSafe.Log[]",
              "name": "logs",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bytes32[]",
                  "name": "topics",
                  "type": "bytes32[]"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "emitter",
                  "type": "address"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isPersistent",
          "outputs": [
            {
              "internalType": "bool",
              "name": "persistent",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "newLabel",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "label"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "load",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "data",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account1",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account1",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account2",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCallRevert"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCallRevert"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "parsedValue",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBool",
          "outputs": [
            {
              "internalType": "bool",
              "name": "parsedValue",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "parsedValue",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBytes32",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "parsedValue",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "parsedValue",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseJson",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "abiEncodedData",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseJson",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "abiEncodedData",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonAddress",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonAddressArray",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBool",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBoolArray",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes32",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes32Array",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytesArray",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonIntArray",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonKeys",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "keys",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonString",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonStringArray",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonUint",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonUintArray",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseUint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "parsedValue",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pauseGasMetering"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prank"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "newPrevrandao",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prevrandao"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "projectRoot",
          "outputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "readCallers",
          "outputs": [
            {
              "internalType": "enum VmSafe.CallerMode",
              "name": "callerMode",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "maxDepth",
              "type": "uint64"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "maxDepth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "followLinks",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readFile",
          "outputs": [
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readFileBinary",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readLine",
          "outputs": [
            {
              "internalType": "string",
              "name": "line",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "linkPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readLink",
          "outputs": [
            {
              "internalType": "string",
              "name": "targetPath",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "record"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "recordLogs"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rememberKey",
          "outputs": [
            {
              "internalType": "address",
              "name": "keyAddr",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "recursive",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeDir"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeFile"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "resetNonce"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "resumeGasMetering"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "snapshotId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revertTo",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newHeight",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "roll"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "rpcAlias",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrl",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrlStructs",
          "outputs": [
            {
              "internalType": "struct VmSafe.Rpc[]",
              "name": "urls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "key",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrls",
          "outputs": [
            {
              "internalType": "string[2][]",
              "name": "urls",
              "type": "string[2][]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "selectFork"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "values",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeAddress",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeAddress",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bool[]",
              "name": "values",
              "type": "bool[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBool",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBool",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes[]",
              "name": "values",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes32[]",
              "name": "values",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes32",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes32",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeInt",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "int256[]",
              "name": "values",
              "type": "int256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeInt",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "values",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeString",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeString",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeUint",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeUint",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setEnv"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "newNonce",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setNonce"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "newNonce",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setNonceUnsafe"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "digest",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "sign",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "skipTest",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "skip"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "snapshot",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "snapshotId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startPrank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startPrank"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "stopBroadcast"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "stopPrank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "store"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transact"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transact"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newGasPrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "txGasPrice"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "warp"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeFile"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeFileBinary"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeJson"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeJson"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeLine"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "activeFork()": {
            "notice": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
          }
        },
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
        "lib/forge-std/src/Vm.sol": "Vm"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/Vm.sol": {
        "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        "urls": [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/Vm.sol",
    "id": 28242,
    "exportedSymbols": {
      "Vm": [
        28241
      ],
      "VmSafe": [
        27769
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:33435:64",
    "nodes": [
      {
        "id": 26706,
        "nodeType": "PragmaDirective",
        "src": "32:31:64",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 26707,
        "nodeType": "PragmaDirective",
        "src": "65:33:64",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 27769,
        "nodeType": "ContractDefinition",
        "src": "571:21283:64",
        "nodes": [
          {
            "id": 26713,
            "nodeType": "EnumDefinition",
            "src": "594:122:64",
            "nodes": [],
            "canonicalName": "VmSafe.CallerMode",
            "members": [
              {
                "id": 26708,
                "name": "None",
                "nameLocation": "620:4:64",
                "nodeType": "EnumValue",
                "src": "620:4:64"
              },
              {
                "id": 26709,
                "name": "Broadcast",
                "nameLocation": "634:9:64",
                "nodeType": "EnumValue",
                "src": "634:9:64"
              },
              {
                "id": 26710,
                "name": "RecurrentBroadcast",
                "nameLocation": "653:18:64",
                "nodeType": "EnumValue",
                "src": "653:18:64"
              },
              {
                "id": 26711,
                "name": "Prank",
                "nameLocation": "681:5:64",
                "nodeType": "EnumValue",
                "src": "681:5:64"
              },
              {
                "id": 26712,
                "name": "RecurrentPrank",
                "nameLocation": "696:14:64",
                "nodeType": "EnumValue",
                "src": "696:14:64"
              }
            ],
            "name": "CallerMode",
            "nameLocation": "599:10:64"
          },
          {
            "id": 26721,
            "nodeType": "StructDefinition",
            "src": "722:89:64",
            "nodes": [],
            "canonicalName": "VmSafe.Log",
            "members": [
              {
                "constant": false,
                "id": 26716,
                "mutability": "mutable",
                "name": "topics",
                "nameLocation": "753:6:64",
                "nodeType": "VariableDeclaration",
                "scope": 26721,
                "src": "743:16:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 26714,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 26715,
                  "nodeType": "ArrayTypeName",
                  "src": "743:9:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26718,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "775:4:64",
                "nodeType": "VariableDeclaration",
                "scope": 26721,
                "src": "769:10:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 26717,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:5:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26720,
                "mutability": "mutable",
                "name": "emitter",
                "nameLocation": "797:7:64",
                "nodeType": "VariableDeclaration",
                "scope": 26721,
                "src": "789:15:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 26719,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "789:7:64",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Log",
            "nameLocation": "729:3:64",
            "scope": 27769,
            "visibility": "public"
          },
          {
            "id": 26726,
            "nodeType": "StructDefinition",
            "src": "817:58:64",
            "nodes": [],
            "canonicalName": "VmSafe.Rpc",
            "members": [
              {
                "constant": false,
                "id": 26723,
                "mutability": "mutable",
                "name": "key",
                "nameLocation": "845:3:64",
                "nodeType": "VariableDeclaration",
                "scope": 26726,
                "src": "838:10:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26722,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "838:6:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26725,
                "mutability": "mutable",
                "name": "url",
                "nameLocation": "865:3:64",
                "nodeType": "VariableDeclaration",
                "scope": 26726,
                "src": "858:10:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26724,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "858:6:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Rpc",
            "nameLocation": "824:3:64",
            "scope": 27769,
            "visibility": "public"
          },
          {
            "id": 26737,
            "nodeType": "StructDefinition",
            "src": "881:139:64",
            "nodes": [],
            "canonicalName": "VmSafe.DirEntry",
            "members": [
              {
                "constant": false,
                "id": 26728,
                "mutability": "mutable",
                "name": "errorMessage",
                "nameLocation": "914:12:64",
                "nodeType": "VariableDeclaration",
                "scope": 26737,
                "src": "907:19:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26727,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "907:6:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26730,
                "mutability": "mutable",
                "name": "path",
                "nameLocation": "943:4:64",
                "nodeType": "VariableDeclaration",
                "scope": 26737,
                "src": "936:11:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26729,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "936:6:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26732,
                "mutability": "mutable",
                "name": "depth",
                "nameLocation": "964:5:64",
                "nodeType": "VariableDeclaration",
                "scope": 26737,
                "src": "957:12:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 26731,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "957:6:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26734,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "984:5:64",
                "nodeType": "VariableDeclaration",
                "scope": 26737,
                "src": "979:10:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 26733,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "979:4:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26736,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1004:9:64",
                "nodeType": "VariableDeclaration",
                "scope": 26737,
                "src": "999:14:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 26735,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "999:4:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DirEntry",
            "nameLocation": "888:8:64",
            "scope": 27769,
            "visibility": "public"
          },
          {
            "id": 26752,
            "nodeType": "StructDefinition",
            "src": "1026:193:64",
            "nodes": [],
            "canonicalName": "VmSafe.FsMetadata",
            "members": [
              {
                "constant": false,
                "id": 26739,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "1059:5:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1054:10:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 26738,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:4:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26741,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1079:9:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1074:14:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 26740,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:4:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26743,
                "mutability": "mutable",
                "name": "length",
                "nameLocation": "1106:6:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1098:14:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26742,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1098:7:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26745,
                "mutability": "mutable",
                "name": "readOnly",
                "nameLocation": "1127:8:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1122:13:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 26744,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:4:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26747,
                "mutability": "mutable",
                "name": "modified",
                "nameLocation": "1153:8:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1145:16:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26746,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1145:7:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26749,
                "mutability": "mutable",
                "name": "accessed",
                "nameLocation": "1179:8:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1171:16:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26748,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26751,
                "mutability": "mutable",
                "name": "created",
                "nameLocation": "1205:7:64",
                "nodeType": "VariableDeclaration",
                "scope": 26752,
                "src": "1197:15:64",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26750,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:64",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FsMetadata",
            "nameLocation": "1033:10:64",
            "scope": 27769,
            "visibility": "public"
          },
          {
            "id": 26761,
            "nodeType": "FunctionDefinition",
            "src": "1269:81:64",
            "nodes": [],
            "functionSelector": "667f9d70",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1278:4:64",
            "parameters": {
              "id": 26757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26754,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "1291:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26761,
                  "src": "1283:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:64",
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
                  "id": 26756,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1307:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26761,
                  "src": "1299:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26755,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1299:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:30:64"
            },
            "returnParameters": {
              "id": 26760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26759,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26761,
                  "src": "1336:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26758,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1335:14:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26774,
            "nodeType": "FunctionDefinition",
            "src": "1373:104:64",
            "nodes": [],
            "functionSelector": "e341eaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sign",
            "nameLocation": "1382:4:64",
            "parameters": {
              "id": 26766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26763,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1395:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26774,
                  "src": "1387:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26765,
                  "mutability": "mutable",
                  "name": "digest",
                  "nameLocation": "1415:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26774,
                  "src": "1407:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26764,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1386:36:64"
            },
            "returnParameters": {
              "id": 26773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26768,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1452:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26774,
                  "src": "1446:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 26767,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26770,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1463:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26774,
                  "src": "1455:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26769,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1455:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26772,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1474:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26774,
                  "src": "1466:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26771,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:31:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26781,
            "nodeType": "FunctionDefinition",
            "src": "1530:74:64",
            "nodes": [],
            "functionSelector": "ffa18649",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addr",
            "nameLocation": "1539:4:64",
            "parameters": {
              "id": 26777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26776,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1552:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26781,
                  "src": "1544:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:20:64"
            },
            "returnParameters": {
              "id": 26780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26779,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "1595:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26781,
                  "src": "1587:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1586:17:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26788,
            "nodeType": "FunctionDefinition",
            "src": "1645:72:64",
            "nodes": [],
            "functionSelector": "2d0335ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "1654:8:64",
            "parameters": {
              "id": 26784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26783,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1671:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26788,
                  "src": "1663:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26782,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:17:64"
            },
            "returnParameters": {
              "id": 26787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26786,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1710:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26788,
                  "src": "1703:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 26785,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26796,
            "nodeType": "FunctionDefinition",
            "src": "1779:84:64",
            "nodes": [],
            "functionSelector": "89160467",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ffi",
            "nameLocation": "1788:3:64",
            "parameters": {
              "id": 26792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26791,
                  "mutability": "mutable",
                  "name": "commandInput",
                  "nameLocation": "1810:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26796,
                  "src": "1792:30:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26789,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1792:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 26790,
                    "nodeType": "ArrayTypeName",
                    "src": "1792:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1791:32:64"
            },
            "returnParameters": {
              "id": 26795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26794,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1855:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26796,
                  "src": "1842:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26793,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:21:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26803,
            "nodeType": "FunctionDefinition",
            "src": "1902:70:64",
            "nodes": [],
            "functionSelector": "3d5923ee",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setEnv",
            "nameLocation": "1911:6:64",
            "parameters": {
              "id": 26801,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26798,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1934:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26803,
                  "src": "1918:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26797,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26800,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1956:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26803,
                  "src": "1940:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26799,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1940:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:45:64"
            },
            "returnParameters": {
              "id": 26802,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1971:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26810,
            "nodeType": "FunctionDefinition",
            "src": "2031:74:64",
            "nodes": [],
            "functionSelector": "7ed1ec7d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2040:7:64",
            "parameters": {
              "id": 26806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26805,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2064:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26810,
                  "src": "2048:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26804,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2048:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2047:22:64"
            },
            "returnParameters": {
              "id": 26809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26808,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2098:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26810,
                  "src": "2093:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26807,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2093:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2092:12:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26817,
            "nodeType": "FunctionDefinition",
            "src": "2110:77:64",
            "nodes": [],
            "functionSelector": "c1978d1f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2119:7:64",
            "parameters": {
              "id": 26813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26812,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2143:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26817,
                  "src": "2127:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2127:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2126:22:64"
            },
            "returnParameters": {
              "id": 26816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26815,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2180:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26817,
                  "src": "2172:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2171:15:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26824,
            "nodeType": "FunctionDefinition",
            "src": "2192:75:64",
            "nodes": [],
            "functionSelector": "892a0c61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2201:6:64",
            "parameters": {
              "id": 26820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26819,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2224:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26824,
                  "src": "2208:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26818,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2208:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2207:22:64"
            },
            "returnParameters": {
              "id": 26823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26822,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2260:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26824,
                  "src": "2253:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26821,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2253:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2252:14:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26831,
            "nodeType": "FunctionDefinition",
            "src": "2272:80:64",
            "nodes": [],
            "functionSelector": "350d56bf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "2281:10:64",
            "parameters": {
              "id": 26827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26826,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2308:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26831,
                  "src": "2292:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26825,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:22:64"
            },
            "returnParameters": {
              "id": 26830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26829,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2345:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26831,
                  "src": "2337:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2336:15:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26838,
            "nodeType": "FunctionDefinition",
            "src": "2357:80:64",
            "nodes": [],
            "functionSelector": "97949042",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "2366:10:64",
            "parameters": {
              "id": 26834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26833,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2393:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26838,
                  "src": "2377:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26832,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2376:22:64"
            },
            "returnParameters": {
              "id": 26837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26836,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2430:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26838,
                  "src": "2422:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26835,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2421:15:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26845,
            "nodeType": "FunctionDefinition",
            "src": "2442:85:64",
            "nodes": [],
            "functionSelector": "f877cb19",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "2451:9:64",
            "parameters": {
              "id": 26841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26840,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2477:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26845,
                  "src": "2461:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26839,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2460:22:64"
            },
            "returnParameters": {
              "id": 26844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26843,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2520:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26845,
                  "src": "2506:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26842,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2505:21:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26852,
            "nodeType": "FunctionDefinition",
            "src": "2532:83:64",
            "nodes": [],
            "functionSelector": "4d7baf06",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "2541:8:64",
            "parameters": {
              "id": 26848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26847,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2566:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26852,
                  "src": "2550:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26846,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2549:22:64"
            },
            "returnParameters": {
              "id": 26851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26850,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2608:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26852,
                  "src": "2595:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26849,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2595:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2594:20:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26862,
            "nodeType": "FunctionDefinition",
            "src": "2665:106:64",
            "nodes": [],
            "functionSelector": "aaaddeaf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2674:7:64",
            "parameters": {
              "id": 26857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26854,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2698:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26862,
                  "src": "2682:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26853,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2682:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26856,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2720:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26862,
                  "src": "2704:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26855,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2681:45:64"
            },
            "returnParameters": {
              "id": 26861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26860,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2764:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26862,
                  "src": "2750:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26858,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2750:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 26859,
                    "nodeType": "ArrayTypeName",
                    "src": "2750:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2749:21:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26872,
            "nodeType": "FunctionDefinition",
            "src": "2776:109:64",
            "nodes": [],
            "functionSelector": "f3dec099",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2785:7:64",
            "parameters": {
              "id": 26867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26864,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2809:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26872,
                  "src": "2793:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26863,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2793:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26866,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2831:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26872,
                  "src": "2815:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26865,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2792:45:64"
            },
            "returnParameters": {
              "id": 26871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26870,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2878:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26872,
                  "src": "2861:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26868,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2861:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 26869,
                    "nodeType": "ArrayTypeName",
                    "src": "2861:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2860:24:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26882,
            "nodeType": "FunctionDefinition",
            "src": "2890:107:64",
            "nodes": [],
            "functionSelector": "42181150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2899:6:64",
            "parameters": {
              "id": 26877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26874,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2922:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26882,
                  "src": "2906:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26873,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26876,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2944:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26882,
                  "src": "2928:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26875,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2928:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2905:45:64"
            },
            "returnParameters": {
              "id": 26881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26880,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2990:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26882,
                  "src": "2974:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26878,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2974:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 26879,
                    "nodeType": "ArrayTypeName",
                    "src": "2974:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:23:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26892,
            "nodeType": "FunctionDefinition",
            "src": "3002:112:64",
            "nodes": [],
            "functionSelector": "ad31b9fa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "3011:10:64",
            "parameters": {
              "id": 26887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26884,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3038:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26892,
                  "src": "3022:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26883,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26886,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3060:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26892,
                  "src": "3044:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3044:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3021:45:64"
            },
            "returnParameters": {
              "id": 26891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26890,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3107:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26892,
                  "src": "3090:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26888,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3090:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 26889,
                    "nodeType": "ArrayTypeName",
                    "src": "3090:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:24:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26902,
            "nodeType": "FunctionDefinition",
            "src": "3119:112:64",
            "nodes": [],
            "functionSelector": "5af231c1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "3128:10:64",
            "parameters": {
              "id": 26897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26894,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3155:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26902,
                  "src": "3139:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26893,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26896,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3177:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26902,
                  "src": "3161:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26895,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3138:45:64"
            },
            "returnParameters": {
              "id": 26901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26900,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3224:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26902,
                  "src": "3207:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26898,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3207:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 26899,
                    "nodeType": "ArrayTypeName",
                    "src": "3207:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:24:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26912,
            "nodeType": "FunctionDefinition",
            "src": "3236:110:64",
            "nodes": [],
            "functionSelector": "14b02bc9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "3245:9:64",
            "parameters": {
              "id": 26907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26904,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3271:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26912,
                  "src": "3255:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26903,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26906,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3293:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26912,
                  "src": "3277:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26905,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3277:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:45:64"
            },
            "returnParameters": {
              "id": 26911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26910,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3339:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26912,
                  "src": "3323:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26908,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3323:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 26909,
                    "nodeType": "ArrayTypeName",
                    "src": "3323:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3322:23:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26922,
            "nodeType": "FunctionDefinition",
            "src": "3351:108:64",
            "nodes": [],
            "functionSelector": "ddc2651b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "3360:8:64",
            "parameters": {
              "id": 26917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26914,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3385:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26922,
                  "src": "3369:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26913,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3369:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26916,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3407:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26922,
                  "src": "3391:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26915,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3391:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3368:45:64"
            },
            "returnParameters": {
              "id": 26921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26920,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3452:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26922,
                  "src": "3437:20:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26918,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3437:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 26919,
                    "nodeType": "ArrayTypeName",
                    "src": "3437:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3436:22:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26931,
            "nodeType": "FunctionDefinition",
            "src": "3517:86:64",
            "nodes": [],
            "functionSelector": "4777f3cf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3526:5:64",
            "parameters": {
              "id": 26927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26924,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3548:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26931,
                  "src": "3532:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26923,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26926,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3559:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26931,
                  "src": "3554:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26925,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3554:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:41:64"
            },
            "returnParameters": {
              "id": 26930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26929,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3596:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26931,
                  "src": "3591:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26928,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3591:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3590:12:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26940,
            "nodeType": "FunctionDefinition",
            "src": "3608:92:64",
            "nodes": [],
            "functionSelector": "5e97348f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3617:5:64",
            "parameters": {
              "id": 26936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26933,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3639:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26940,
                  "src": "3623:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26932,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26935,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3653:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26940,
                  "src": "3645:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3645:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3622:44:64"
            },
            "returnParameters": {
              "id": 26939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26938,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3693:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26940,
                  "src": "3685:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26937,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3685:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3684:15:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26949,
            "nodeType": "FunctionDefinition",
            "src": "3705:90:64",
            "nodes": [],
            "functionSelector": "bbcb713e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3714:5:64",
            "parameters": {
              "id": 26945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26942,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3736:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26949,
                  "src": "3720:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26941,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26944,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3749:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26949,
                  "src": "3742:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26943,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3742:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3719:43:64"
            },
            "returnParameters": {
              "id": 26948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26947,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3788:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26949,
                  "src": "3781:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26946,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3781:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3780:14:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26958,
            "nodeType": "FunctionDefinition",
            "src": "3800:92:64",
            "nodes": [],
            "functionSelector": "561fe540",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3809:5:64",
            "parameters": {
              "id": 26954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26951,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3831:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26958,
                  "src": "3815:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26950,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26953,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3845:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26958,
                  "src": "3837:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3837:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:44:64"
            },
            "returnParameters": {
              "id": 26957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26956,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3885:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26958,
                  "src": "3877:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3877:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3876:15:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26967,
            "nodeType": "FunctionDefinition",
            "src": "3897:92:64",
            "nodes": [],
            "functionSelector": "b4a85892",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3906:5:64",
            "parameters": {
              "id": 26963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26960,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3928:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26967,
                  "src": "3912:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26959,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3912:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26962,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3942:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26967,
                  "src": "3934:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26961,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3911:44:64"
            },
            "returnParameters": {
              "id": 26966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26965,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3982:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26967,
                  "src": "3974:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26964,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:15:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26976,
            "nodeType": "FunctionDefinition",
            "src": "3994:106:64",
            "nodes": [],
            "functionSelector": "d145736c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4003:5:64",
            "parameters": {
              "id": 26972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26969,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4025:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26976,
                  "src": "4009:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26968,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4009:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26971,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4047:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26976,
                  "src": "4031:28:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26970,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4031:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4008:52:64"
            },
            "returnParameters": {
              "id": 26975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26974,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4093:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26976,
                  "src": "4079:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26973,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4079:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4078:21:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26985,
            "nodeType": "FunctionDefinition",
            "src": "4105:104:64",
            "nodes": [],
            "functionSelector": "b3e47705",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4114:5:64",
            "parameters": {
              "id": 26981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26978,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4136:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26985,
                  "src": "4120:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26977,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4120:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26980,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4157:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26985,
                  "src": "4142:27:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26979,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4142:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4119:51:64"
            },
            "returnParameters": {
              "id": 26984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26983,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4202:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26985,
                  "src": "4189:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26982,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 26998,
            "nodeType": "FunctionDefinition",
            "src": "4277:145:64",
            "nodes": [],
            "functionSelector": "eb85e83b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4286:5:64",
            "parameters": {
              "id": 26993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26987,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4308:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26998,
                  "src": "4292:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26986,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4292:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26989,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4330:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26998,
                  "src": "4314:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26988,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26992,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4353:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26998,
                  "src": "4337:28:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26990,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4337:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 26991,
                    "nodeType": "ArrayTypeName",
                    "src": "4337:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4291:75:64"
            },
            "returnParameters": {
              "id": 26997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26996,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4415:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 26998,
                  "src": "4401:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26994,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4401:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 26995,
                    "nodeType": "ArrayTypeName",
                    "src": "4401:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4400:21:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27011,
            "nodeType": "FunctionDefinition",
            "src": "4427:151:64",
            "nodes": [],
            "functionSelector": "74318528",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4436:5:64",
            "parameters": {
              "id": 27006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27000,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4458:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27011,
                  "src": "4442:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26999,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4442:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27002,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4480:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27011,
                  "src": "4464:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27001,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27005,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4506:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27011,
                  "src": "4487:31:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27003,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4487:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27004,
                    "nodeType": "ArrayTypeName",
                    "src": "4487:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4441:78:64"
            },
            "returnParameters": {
              "id": 27010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27009,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4571:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27011,
                  "src": "4554:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27007,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4554:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27008,
                    "nodeType": "ArrayTypeName",
                    "src": "4554:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:24:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27024,
            "nodeType": "FunctionDefinition",
            "src": "4583:149:64",
            "nodes": [],
            "functionSelector": "4700d74b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4592:5:64",
            "parameters": {
              "id": 27019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27013,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4614:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27024,
                  "src": "4598:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27012,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4598:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27015,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4636:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27024,
                  "src": "4620:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27014,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27018,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4661:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27024,
                  "src": "4643:30:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27016,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27017,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4597:77:64"
            },
            "returnParameters": {
              "id": 27023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27022,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4725:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27024,
                  "src": "4709:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27020,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4709:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27021,
                    "nodeType": "ArrayTypeName",
                    "src": "4709:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:23:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27037,
            "nodeType": "FunctionDefinition",
            "src": "4737:151:64",
            "nodes": [],
            "functionSelector": "c74e9deb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4746:5:64",
            "parameters": {
              "id": 27032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27026,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4768:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27037,
                  "src": "4752:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27025,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4752:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27028,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4790:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27037,
                  "src": "4774:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27027,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4774:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27031,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4816:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27037,
                  "src": "4797:31:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27029,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4797:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27030,
                    "nodeType": "ArrayTypeName",
                    "src": "4797:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4751:78:64"
            },
            "returnParameters": {
              "id": 27036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27035,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4881:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27037,
                  "src": "4864:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27033,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4864:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27034,
                    "nodeType": "ArrayTypeName",
                    "src": "4864:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:24:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27050,
            "nodeType": "FunctionDefinition",
            "src": "4893:151:64",
            "nodes": [],
            "functionSelector": "2281f367",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4902:5:64",
            "parameters": {
              "id": 27045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27039,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4924:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27050,
                  "src": "4908:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27038,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27041,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4946:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27050,
                  "src": "4930:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27040,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4930:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27044,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4972:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27050,
                  "src": "4953:31:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27042,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4953:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27043,
                    "nodeType": "ArrayTypeName",
                    "src": "4953:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4907:78:64"
            },
            "returnParameters": {
              "id": 27049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27048,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5037:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27050,
                  "src": "5020:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27046,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5020:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27047,
                    "nodeType": "ArrayTypeName",
                    "src": "5020:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5019:24:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27063,
            "nodeType": "FunctionDefinition",
            "src": "5049:149:64",
            "nodes": [],
            "functionSelector": "859216bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5058:5:64",
            "parameters": {
              "id": 27058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27052,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5080:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27063,
                  "src": "5064:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27051,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5064:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27054,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5102:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27063,
                  "src": "5086:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27053,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5086:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27057,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5127:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27063,
                  "src": "5109:30:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27055,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5109:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27056,
                    "nodeType": "ArrayTypeName",
                    "src": "5109:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5063:77:64"
            },
            "returnParameters": {
              "id": 27062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27061,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5191:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27063,
                  "src": "5175:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27059,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5175:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27060,
                    "nodeType": "ArrayTypeName",
                    "src": "5175:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5174:23:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27076,
            "nodeType": "FunctionDefinition",
            "src": "5203:147:64",
            "nodes": [],
            "functionSelector": "64bc3e64",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5212:5:64",
            "parameters": {
              "id": 27071,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27065,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5234:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27076,
                  "src": "5218:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27064,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5218:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27067,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5256:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27076,
                  "src": "5240:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27066,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5240:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27070,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5280:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27076,
                  "src": "5263:29:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27068,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5263:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27069,
                    "nodeType": "ArrayTypeName",
                    "src": "5263:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5217:76:64"
            },
            "returnParameters": {
              "id": 27075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27074,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5343:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27076,
                  "src": "5328:20:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27072,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5328:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27073,
                    "nodeType": "ArrayTypeName",
                    "src": "5328:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5327:22:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27079,
            "nodeType": "FunctionDefinition",
            "src": "5399:27:64",
            "nodes": [],
            "functionSelector": "266cf109",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "record",
            "nameLocation": "5408:6:64",
            "parameters": {
              "id": 27077,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5414:2:64"
            },
            "returnParameters": {
              "id": 27078,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27090,
            "nodeType": "FunctionDefinition",
            "src": "5523:109:64",
            "nodes": [],
            "functionSelector": "65bc9481",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accesses",
            "nameLocation": "5532:8:64",
            "parameters": {
              "id": 27082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27081,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5549:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27090,
                  "src": "5541:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5541:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5540:16:64"
            },
            "returnParameters": {
              "id": 27089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27085,
                  "mutability": "mutable",
                  "name": "readSlots",
                  "nameLocation": "5592:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27090,
                  "src": "5575:26:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27083,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5575:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27084,
                    "nodeType": "ArrayTypeName",
                    "src": "5575:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27088,
                  "mutability": "mutable",
                  "name": "writeSlots",
                  "nameLocation": "5620:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27090,
                  "src": "5603:27:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27086,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5603:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27087,
                    "nodeType": "ArrayTypeName",
                    "src": "5603:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:57:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27097,
            "nodeType": "FunctionDefinition",
            "src": "5740:101:64",
            "nodes": [],
            "functionSelector": "8d1cc925",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCode",
            "nameLocation": "5749:7:64",
            "parameters": {
              "id": 27093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27092,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5773:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27097,
                  "src": "5757:28:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27091,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5757:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5756:30:64"
            },
            "returnParameters": {
              "id": 27096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27095,
                  "mutability": "mutable",
                  "name": "creationBytecode",
                  "nameLocation": "5823:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27097,
                  "src": "5810:29:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27094,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:31:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27104,
            "nodeType": "FunctionDefinition",
            "src": "5949:108:64",
            "nodes": [],
            "functionSelector": "3ebf73b4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployedCode",
            "nameLocation": "5958:15:64",
            "parameters": {
              "id": 27100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27099,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5990:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27104,
                  "src": "5974:28:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27098,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:30:64"
            },
            "returnParameters": {
              "id": 27103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27102,
                  "mutability": "mutable",
                  "name": "runtimeBytecode",
                  "nameLocation": "6040:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27104,
                  "src": "6027:28:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27101,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6027:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6026:30:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27111,
            "nodeType": "FunctionDefinition",
            "src": "6102:67:64",
            "nodes": [],
            "functionSelector": "c657c718",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "label",
            "nameLocation": "6111:5:64",
            "parameters": {
              "id": 27109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27106,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6125:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27111,
                  "src": "6117:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:64",
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
                  "id": 27108,
                  "mutability": "mutable",
                  "name": "newLabel",
                  "nameLocation": "6150:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27111,
                  "src": "6134:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27107,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6134:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6116:43:64"
            },
            "returnParameters": {
              "id": 27110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6168:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27118,
            "nodeType": "FunctionDefinition",
            "src": "6222:81:64",
            "nodes": [],
            "functionSelector": "28a249b0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLabel",
            "nameLocation": "6231:8:64",
            "parameters": {
              "id": 27114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27113,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6248:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27118,
                  "src": "6240:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27112,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:17:64"
            },
            "returnParameters": {
              "id": 27117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27116,
                  "mutability": "mutable",
                  "name": "currentLabel",
                  "nameLocation": "6289:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27118,
                  "src": "6275:26:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27115,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:28:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27121,
            "nodeType": "FunctionDefinition",
            "src": "6470:30:64",
            "nodes": [],
            "functionSelector": "afc98040",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6479:9:64",
            "parameters": {
              "id": 27119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6488:2:64"
            },
            "returnParameters": {
              "id": 27120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6499:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27126,
            "nodeType": "FunctionDefinition",
            "src": "6659:44:64",
            "nodes": [],
            "functionSelector": "e6962cdb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6668:9:64",
            "parameters": {
              "id": 27124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27123,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "6686:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27126,
                  "src": "6678:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27122,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6677:16:64"
            },
            "returnParameters": {
              "id": 27125,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6702:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27131,
            "nodeType": "FunctionDefinition",
            "src": "6866:48:64",
            "nodes": [],
            "functionSelector": "f67a965b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6875:9:64",
            "parameters": {
              "id": 27129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27128,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "6893:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27131,
                  "src": "6885:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6885:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6884:20:64"
            },
            "returnParameters": {
              "id": 27130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6913:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27134,
            "nodeType": "FunctionDefinition",
            "src": "7087:35:64",
            "nodes": [],
            "functionSelector": "7fb5297f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7096:14:64",
            "parameters": {
              "id": 27132,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7110:2:64"
            },
            "returnParameters": {
              "id": 27133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7121:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27139,
            "nodeType": "FunctionDefinition",
            "src": "7273:49:64",
            "nodes": [],
            "functionSelector": "7fec2a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7282:14:64",
            "parameters": {
              "id": 27137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27136,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "7305:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27139,
                  "src": "7297:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27135,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:16:64"
            },
            "returnParameters": {
              "id": 27138,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7321:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27144,
            "nodeType": "FunctionDefinition",
            "src": "7477:53:64",
            "nodes": [],
            "functionSelector": "ce817d47",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7486:14:64",
            "parameters": {
              "id": 27142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27141,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "7509:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27144,
                  "src": "7501:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27140,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7500:20:64"
            },
            "returnParameters": {
              "id": 27143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7529:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27147,
            "nodeType": "FunctionDefinition",
            "src": "7580:34:64",
            "nodes": [],
            "functionSelector": "76eadd36",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopBroadcast",
            "nameLocation": "7589:13:64",
            "parameters": {
              "id": 27145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7602:2:64"
            },
            "returnParameters": {
              "id": 27146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7613:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27152,
            "nodeType": "FunctionDefinition",
            "src": "7669:66:64",
            "nodes": [],
            "functionSelector": "d930a0e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "projectRoot",
            "nameLocation": "7678:11:64",
            "parameters": {
              "id": 27148,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7689:2:64"
            },
            "returnParameters": {
              "id": 27151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27150,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7729:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27152,
                  "src": "7715:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7715:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7714:20:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27159,
            "nodeType": "FunctionDefinition",
            "src": "7831:83:64",
            "nodes": [],
            "functionSelector": "60f9bb11",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFile",
            "nameLocation": "7840:8:64",
            "parameters": {
              "id": 27155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27154,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7865:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27159,
                  "src": "7849:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27153,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7849:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7848:22:64"
            },
            "returnParameters": {
              "id": 27158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27157,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7908:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27159,
                  "src": "7894:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7893:20:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27166,
            "nodeType": "FunctionDefinition",
            "src": "8010:88:64",
            "nodes": [],
            "functionSelector": "16ed7bc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFileBinary",
            "nameLocation": "8019:14:64",
            "parameters": {
              "id": 27162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27161,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8050:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27166,
                  "src": "8034:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27160,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8034:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8033:22:64"
            },
            "returnParameters": {
              "id": 27165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27164,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8092:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27166,
                  "src": "8079:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27163,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8079:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8078:19:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27173,
            "nodeType": "FunctionDefinition",
            "src": "8145:83:64",
            "nodes": [],
            "functionSelector": "70f55728",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLine",
            "nameLocation": "8154:8:64",
            "parameters": {
              "id": 27169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27168,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8179:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27173,
                  "src": "8163:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8162:22:64"
            },
            "returnParameters": {
              "id": 27172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27171,
                  "mutability": "mutable",
                  "name": "line",
                  "nameLocation": "8222:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27173,
                  "src": "8208:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27170,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8208:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8207:20:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27180,
            "nodeType": "FunctionDefinition",
            "src": "8394:72:64",
            "nodes": [],
            "functionSelector": "897e0a97",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFile",
            "nameLocation": "8403:9:64",
            "parameters": {
              "id": 27178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27175,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8429:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27180,
                  "src": "8413:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27174,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8413:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27177,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8451:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27180,
                  "src": "8435:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27176,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8435:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8412:44:64"
            },
            "returnParameters": {
              "id": 27179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8465:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27187,
            "nodeType": "FunctionDefinition",
            "src": "8641:77:64",
            "nodes": [],
            "functionSelector": "1f21fc80",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFileBinary",
            "nameLocation": "8650:15:64",
            "parameters": {
              "id": 27185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27182,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8682:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27187,
                  "src": "8666:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27181,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27184,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8703:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27187,
                  "src": "8688:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27183,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8688:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:43:64"
            },
            "returnParameters": {
              "id": 27186,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8717:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27194,
            "nodeType": "FunctionDefinition",
            "src": "8836:72:64",
            "nodes": [],
            "functionSelector": "619d897f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeLine",
            "nameLocation": "8845:9:64",
            "parameters": {
              "id": 27192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27189,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8871:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27194,
                  "src": "8855:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27188,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8855:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27191,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8893:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27194,
                  "src": "8877:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27190,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8877:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8854:44:64"
            },
            "returnParameters": {
              "id": 27193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8907:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27199,
            "nodeType": "FunctionDefinition",
            "src": "9067:50:64",
            "nodes": [],
            "functionSelector": "48c3241f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeFile",
            "nameLocation": "9076:9:64",
            "parameters": {
              "id": 27197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27196,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9102:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27199,
                  "src": "9086:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9085:22:64"
            },
            "returnParameters": {
              "id": 27198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9116:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27204,
            "nodeType": "FunctionDefinition",
            "src": "9443:51:64",
            "nodes": [],
            "functionSelector": "f1afe04d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeFile",
            "nameLocation": "9452:10:64",
            "parameters": {
              "id": 27202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27201,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9479:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27204,
                  "src": "9463:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27200,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9463:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9462:22:64"
            },
            "returnParameters": {
              "id": 27203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9493:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27211,
            "nodeType": "FunctionDefinition",
            "src": "9892:66:64",
            "nodes": [],
            "functionSelector": "168b64d3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createDir",
            "nameLocation": "9901:9:64",
            "parameters": {
              "id": 27209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27206,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9927:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27211,
                  "src": "9911:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27205,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9911:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27208,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "9938:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27211,
                  "src": "9933:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27207,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9933:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9910:38:64"
            },
            "returnParameters": {
              "id": 27210,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9957:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27218,
            "nodeType": "FunctionDefinition",
            "src": "10340:66:64",
            "nodes": [],
            "functionSelector": "45c62011",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeDir",
            "nameLocation": "10349:9:64",
            "parameters": {
              "id": 27216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27213,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10375:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27218,
                  "src": "10359:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27212,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10359:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27215,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "10386:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27218,
                  "src": "10381:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27214,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10358:38:64"
            },
            "returnParameters": {
              "id": 27217,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10405:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27227,
            "nodeType": "FunctionDefinition",
            "src": "10653:89:64",
            "nodes": [],
            "functionSelector": "c4bc59e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10662:7:64",
            "parameters": {
              "id": 27221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27220,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10686:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27227,
                  "src": "10670:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27219,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10670:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10669:22:64"
            },
            "returnParameters": {
              "id": 27226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27225,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10733:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27227,
                  "src": "10715:25:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27223,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27222,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10715:8:64"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26737,
                        "src": "10715:8:64"
                      },
                      "referencedDeclaration": 26737,
                      "src": "10715:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$26737_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27224,
                    "nodeType": "ArrayTypeName",
                    "src": "10715:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10714:27:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27238,
            "nodeType": "FunctionDefinition",
            "src": "10747:106:64",
            "nodes": [],
            "functionSelector": "1497876c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10756:7:64",
            "parameters": {
              "id": 27232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27229,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10780:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27238,
                  "src": "10764:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27228,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10764:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27231,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10793:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27238,
                  "src": "10786:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27230,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10786:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10763:39:64"
            },
            "returnParameters": {
              "id": 27237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27236,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10844:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27238,
                  "src": "10826:25:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27234,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27233,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10826:8:64"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26737,
                        "src": "10826:8:64"
                      },
                      "referencedDeclaration": 26737,
                      "src": "10826:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$26737_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27235,
                    "nodeType": "ArrayTypeName",
                    "src": "10826:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10825:27:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27251,
            "nodeType": "FunctionDefinition",
            "src": "10858:148:64",
            "nodes": [],
            "functionSelector": "8102d70d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10867:7:64",
            "parameters": {
              "id": 27245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27240,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10891:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27251,
                  "src": "10875:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27239,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10875:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27242,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10904:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27251,
                  "src": "10897:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27241,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10897:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27244,
                  "mutability": "mutable",
                  "name": "followLinks",
                  "nameLocation": "10919:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27251,
                  "src": "10914:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10914:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10874:57:64"
            },
            "returnParameters": {
              "id": 27250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27249,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10997:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27251,
                  "src": "10979:25:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27247,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27246,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10979:8:64"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26737,
                        "src": "10979:8:64"
                      },
                      "referencedDeclaration": 26737,
                      "src": "10979:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$26737_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27248,
                    "nodeType": "ArrayTypeName",
                    "src": "10979:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$26737_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10978:27:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27258,
            "nodeType": "FunctionDefinition",
            "src": "11260:93:64",
            "nodes": [],
            "functionSelector": "9f5684a2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLink",
            "nameLocation": "11269:8:64",
            "parameters": {
              "id": 27254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27253,
                  "mutability": "mutable",
                  "name": "linkPath",
                  "nameLocation": "11294:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27258,
                  "src": "11278:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27252,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11278:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11277:26:64"
            },
            "returnParameters": {
              "id": 27257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27256,
                  "mutability": "mutable",
                  "name": "targetPath",
                  "nameLocation": "11341:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27258,
                  "src": "11327:24:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27255,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11327:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11326:26:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27266,
            "nodeType": "FunctionDefinition",
            "src": "11450:93:64",
            "nodes": [],
            "functionSelector": "af368a08",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fsMetadata",
            "nameLocation": "11459:10:64",
            "parameters": {
              "id": 27261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27260,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "11486:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "11470:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27259,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11470:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:22:64"
            },
            "returnParameters": {
              "id": 27265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27264,
                  "mutability": "mutable",
                  "name": "metadata",
                  "nameLocation": "11533:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "11515:26:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FsMetadata_$26752_memory_ptr",
                    "typeString": "struct VmSafe.FsMetadata"
                  },
                  "typeName": {
                    "id": 27263,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 27262,
                      "name": "FsMetadata",
                      "nameLocations": [
                        "11515:10:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26752,
                      "src": "11515:10:64"
                    },
                    "referencedDeclaration": 26752,
                    "src": "11515:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FsMetadata_$26752_storage_ptr",
                      "typeString": "struct VmSafe.FsMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11514:28:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27273,
            "nodeType": "FunctionDefinition",
            "src": "11583:88:64",
            "nodes": [],
            "functionSelector": "56ca623e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11592:8:64",
            "parameters": {
              "id": 27269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27268,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11609:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27273,
                  "src": "11601:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11601:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11600:15:64"
            },
            "returnParameters": {
              "id": 27272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27271,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11653:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27273,
                  "src": "11639:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27270,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11639:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11638:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27280,
            "nodeType": "FunctionDefinition",
            "src": "11676:95:64",
            "nodes": [],
            "functionSelector": "71aad10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11685:8:64",
            "parameters": {
              "id": 27276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27275,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11709:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "11694:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27274,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11694:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11693:22:64"
            },
            "returnParameters": {
              "id": 27279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27278,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11753:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "11739:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27277,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11739:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11738:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27287,
            "nodeType": "FunctionDefinition",
            "src": "11776:88:64",
            "nodes": [],
            "functionSelector": "b11a19e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11785:8:64",
            "parameters": {
              "id": 27283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27282,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11802:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27287,
                  "src": "11794:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27281,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11794:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11793:15:64"
            },
            "returnParameters": {
              "id": 27286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27285,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11846:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27287,
                  "src": "11832:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27284,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11832:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11831:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27294,
            "nodeType": "FunctionDefinition",
            "src": "11869:85:64",
            "nodes": [],
            "functionSelector": "71dce7da",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11878:8:64",
            "parameters": {
              "id": 27290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27289,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11892:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27294,
                  "src": "11887:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27288,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11887:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11886:12:64"
            },
            "returnParameters": {
              "id": 27293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27292,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11936:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27294,
                  "src": "11922:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27291,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11922:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11921:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27301,
            "nodeType": "FunctionDefinition",
            "src": "11959:88:64",
            "nodes": [],
            "functionSelector": "6900a3ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11968:8:64",
            "parameters": {
              "id": 27297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27296,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11985:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27301,
                  "src": "11977:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11977:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11976:15:64"
            },
            "returnParameters": {
              "id": 27300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27299,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12029:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27301,
                  "src": "12015:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27298,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12015:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12014:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27308,
            "nodeType": "FunctionDefinition",
            "src": "12052:87:64",
            "nodes": [],
            "functionSelector": "a322c40e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "12061:8:64",
            "parameters": {
              "id": 27304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27303,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12077:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "12070:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27302,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12070:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12069:14:64"
            },
            "returnParameters": {
              "id": 27307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27306,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12121:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "12107:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27305,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12107:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12106:32:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27315,
            "nodeType": "FunctionDefinition",
            "src": "12180:103:64",
            "nodes": [],
            "functionSelector": "8f5d232d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes",
            "nameLocation": "12189:10:64",
            "parameters": {
              "id": 27311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27310,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12216:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "12200:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27309,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12200:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12199:34:64"
            },
            "returnParameters": {
              "id": 27314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27313,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12270:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "12257:24:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27312,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12257:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12256:26:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27322,
            "nodeType": "FunctionDefinition",
            "src": "12288:100:64",
            "nodes": [],
            "functionSelector": "c6ce059d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseAddress",
            "nameLocation": "12297:12:64",
            "parameters": {
              "id": 27318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27317,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12326:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27322,
                  "src": "12310:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27316,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12310:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12309:34:64"
            },
            "returnParameters": {
              "id": 27321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27320,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12375:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27322,
                  "src": "12367:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12367:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12366:21:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27329,
            "nodeType": "FunctionDefinition",
            "src": "12393:97:64",
            "nodes": [],
            "functionSelector": "fa91454d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseUint",
            "nameLocation": "12402:9:64",
            "parameters": {
              "id": 27325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27324,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12428:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27329,
                  "src": "12412:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27323,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12412:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12411:34:64"
            },
            "returnParameters": {
              "id": 27328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27327,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12477:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27329,
                  "src": "12469:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12469:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12468:21:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27336,
            "nodeType": "FunctionDefinition",
            "src": "12495:95:64",
            "nodes": [],
            "functionSelector": "42346c5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseInt",
            "nameLocation": "12504:8:64",
            "parameters": {
              "id": 27332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27331,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12529:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27336,
                  "src": "12513:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27330,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12513:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12512:34:64"
            },
            "returnParameters": {
              "id": 27335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27334,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12577:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27336,
                  "src": "12570:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27333,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12570:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12569:20:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27343,
            "nodeType": "FunctionDefinition",
            "src": "12595:100:64",
            "nodes": [],
            "functionSelector": "087e6e81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes32",
            "nameLocation": "12604:12:64",
            "parameters": {
              "id": 27339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27338,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12633:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27343,
                  "src": "12617:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27337,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12617:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12616:34:64"
            },
            "returnParameters": {
              "id": 27342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27341,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12682:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27343,
                  "src": "12674:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27340,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12674:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12673:21:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27350,
            "nodeType": "FunctionDefinition",
            "src": "12700:94:64",
            "nodes": [],
            "functionSelector": "974ef924",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBool",
            "nameLocation": "12709:9:64",
            "parameters": {
              "id": 27346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27345,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12735:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27350,
                  "src": "12719:32:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27344,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12719:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12718:34:64"
            },
            "returnParameters": {
              "id": 27349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27348,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12781:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27350,
                  "src": "12776:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27347,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12776:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12775:18:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27353,
            "nodeType": "FunctionDefinition",
            "src": "12838:31:64",
            "nodes": [],
            "functionSelector": "41af2f52",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "recordLogs",
            "nameLocation": "12847:10:64",
            "parameters": {
              "id": 27351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12857:2:64"
            },
            "returnParameters": {
              "id": 27352,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12868:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27360,
            "nodeType": "FunctionDefinition",
            "src": "12908:64:64",
            "nodes": [],
            "functionSelector": "191553a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRecordedLogs",
            "nameLocation": "12917:15:64",
            "parameters": {
              "id": 27354,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12932:2:64"
            },
            "returnParameters": {
              "id": 27359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27358,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "12966:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27360,
                  "src": "12953:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27356,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27355,
                        "name": "Log",
                        "nameLocations": [
                          "12953:3:64"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26721,
                        "src": "12953:3:64"
                      },
                      "referencedDeclaration": 26721,
                      "src": "12953:3:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$26721_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 27357,
                    "nodeType": "ArrayTypeName",
                    "src": "12953:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$26721_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12952:19:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27369,
            "nodeType": "FunctionDefinition",
            "src": "13107:102:64",
            "nodes": [],
            "functionSelector": "6229498b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13116:9:64",
            "parameters": {
              "id": 27365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27362,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13142:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27369,
                  "src": "13126:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27361,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13126:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27364,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13159:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27369,
                  "src": "13152:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 27363,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13152:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13125:40:64"
            },
            "returnParameters": {
              "id": 27368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27367,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13197:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27369,
                  "src": "13189:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27366,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13189:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13188:20:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27380,
            "nodeType": "FunctionDefinition",
            "src": "13325:158:64",
            "nodes": [],
            "functionSelector": "6bcb2c1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13334:9:64",
            "parameters": {
              "id": 27376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27371,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13360:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "13344:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27370,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13344:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27373,
                  "mutability": "mutable",
                  "name": "derivationPath",
                  "nameLocation": "13386:14:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "13370:30:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27372,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13370:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27375,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13409:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "13402:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 27374,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13402:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13343:72:64"
            },
            "returnParameters": {
              "id": 27379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27378,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13471:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "13463:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13463:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13462:20:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27387,
            "nodeType": "FunctionDefinition",
            "src": "13564:76:64",
            "nodes": [],
            "functionSelector": "22100064",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rememberKey",
            "nameLocation": "13573:11:64",
            "parameters": {
              "id": 27383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27382,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13593:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27387,
                  "src": "13585:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13585:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13584:20:64"
            },
            "returnParameters": {
              "id": 27386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27385,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "13631:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27387,
                  "src": "13623:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13622:17:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27396,
            "nodeType": "FunctionDefinition",
            "src": "14673:114:64",
            "nodes": [],
            "functionSelector": "85940ef1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14682:9:64",
            "parameters": {
              "id": 27392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27389,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14708:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27396,
                  "src": "14692:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27388,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14692:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27391,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "14730:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27396,
                  "src": "14714:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27390,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14714:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14691:43:64"
            },
            "returnParameters": {
              "id": 27395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27394,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14771:14:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27396,
                  "src": "14758:27:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27393,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14758:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14757:29:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27403,
            "nodeType": "FunctionDefinition",
            "src": "14792:93:64",
            "nodes": [],
            "functionSelector": "6a82600a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14801:9:64",
            "parameters": {
              "id": 27399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27398,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14827:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27403,
                  "src": "14811:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27397,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14811:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14810:22:64"
            },
            "returnParameters": {
              "id": 27402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27401,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14869:14:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27403,
                  "src": "14856:27:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27400,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14856:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14855:29:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27412,
            "nodeType": "FunctionDefinition",
            "src": "15273:84:64",
            "nodes": [],
            "functionSelector": "addde2b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUint",
            "nameLocation": "15282:13:64",
            "parameters": {
              "id": 27408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27405,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27412,
                  "src": "15296:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27404,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15296:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27407,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27412,
                  "src": "15313:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27406,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15313:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15295:34:64"
            },
            "returnParameters": {
              "id": 27411,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27410,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27412,
                  "src": "15348:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15348:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15347:9:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27422,
            "nodeType": "FunctionDefinition",
            "src": "15362:98:64",
            "nodes": [],
            "functionSelector": "522074ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUintArray",
            "nameLocation": "15371:18:64",
            "parameters": {
              "id": 27417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27422,
                  "src": "15390:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27413,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15390:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27416,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27422,
                  "src": "15407:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27415,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15389:34:64"
            },
            "returnParameters": {
              "id": 27421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27420,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27422,
                  "src": "15442:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27418,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15442:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27419,
                    "nodeType": "ArrayTypeName",
                    "src": "15442:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15441:18:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27431,
            "nodeType": "FunctionDefinition",
            "src": "15465:82:64",
            "nodes": [],
            "functionSelector": "7b048ccd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonInt",
            "nameLocation": "15474:12:64",
            "parameters": {
              "id": 27427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27424,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27431,
                  "src": "15487:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27423,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15487:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27426,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27431,
                  "src": "15504:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27425,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15504:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15486:34:64"
            },
            "returnParameters": {
              "id": 27430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27429,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27431,
                  "src": "15539:6:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27428,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15539:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15538:8:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27441,
            "nodeType": "FunctionDefinition",
            "src": "15552:96:64",
            "nodes": [],
            "functionSelector": "9983c28a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonIntArray",
            "nameLocation": "15561:17:64",
            "parameters": {
              "id": 27436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27433,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "15579:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27432,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15579:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27435,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "15596:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27434,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15596:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15578:34:64"
            },
            "returnParameters": {
              "id": 27440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27439,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "15631:15:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27437,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15631:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27438,
                    "nodeType": "ArrayTypeName",
                    "src": "15631:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15630:17:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27450,
            "nodeType": "FunctionDefinition",
            "src": "15653:81:64",
            "nodes": [],
            "functionSelector": "9f86dc91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBool",
            "nameLocation": "15662:13:64",
            "parameters": {
              "id": 27446,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27443,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27450,
                  "src": "15676:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27442,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15676:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27445,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27450,
                  "src": "15693:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27444,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15693:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15675:34:64"
            },
            "returnParameters": {
              "id": 27449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27448,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27450,
                  "src": "15728:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27447,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15728:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15727:6:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27460,
            "nodeType": "FunctionDefinition",
            "src": "15739:95:64",
            "nodes": [],
            "functionSelector": "91f3b94f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBoolArray",
            "nameLocation": "15748:18:64",
            "parameters": {
              "id": 27455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27452,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27460,
                  "src": "15767:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27451,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15767:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27454,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27460,
                  "src": "15784:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27453,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15784:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15766:34:64"
            },
            "returnParameters": {
              "id": 27459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27458,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27460,
                  "src": "15819:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27456,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "15819:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27457,
                    "nodeType": "ArrayTypeName",
                    "src": "15819:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15818:15:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27469,
            "nodeType": "FunctionDefinition",
            "src": "15839:87:64",
            "nodes": [],
            "functionSelector": "1e19e657",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddress",
            "nameLocation": "15848:16:64",
            "parameters": {
              "id": 27465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27462,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27469,
                  "src": "15865:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27461,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27464,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27469,
                  "src": "15882:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27463,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15882:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15864:34:64"
            },
            "returnParameters": {
              "id": 27468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27467,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27469,
                  "src": "15917:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27466,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15917:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15916:9:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27479,
            "nodeType": "FunctionDefinition",
            "src": "15931:101:64",
            "nodes": [],
            "functionSelector": "2fce7883",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddressArray",
            "nameLocation": "15940:21:64",
            "parameters": {
              "id": 27474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27471,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27479,
                  "src": "15962:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27470,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15962:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27473,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27479,
                  "src": "15979:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27472,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15979:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15961:34:64"
            },
            "returnParameters": {
              "id": 27478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27477,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27479,
                  "src": "16014:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27475,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "16014:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27476,
                    "nodeType": "ArrayTypeName",
                    "src": "16014:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16013:18:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27488,
            "nodeType": "FunctionDefinition",
            "src": "16037:92:64",
            "nodes": [],
            "functionSelector": "49c4fac8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonString",
            "nameLocation": "16046:15:64",
            "parameters": {
              "id": 27484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27481,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27488,
                  "src": "16062:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27480,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16062:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27483,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27488,
                  "src": "16079:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27482,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16079:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16061:34:64"
            },
            "returnParameters": {
              "id": 27487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27486,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27488,
                  "src": "16114:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27485,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16114:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16113:15:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27498,
            "nodeType": "FunctionDefinition",
            "src": "16134:99:64",
            "nodes": [],
            "functionSelector": "498fdcf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonStringArray",
            "nameLocation": "16143:20:64",
            "parameters": {
              "id": 27493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27490,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27498,
                  "src": "16164:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27489,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16164:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27492,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27498,
                  "src": "16181:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27491,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16181:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16163:34:64"
            },
            "returnParameters": {
              "id": 27497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27496,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27498,
                  "src": "16216:15:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27494,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16216:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27495,
                    "nodeType": "ArrayTypeName",
                    "src": "16216:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16215:17:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27507,
            "nodeType": "FunctionDefinition",
            "src": "16238:90:64",
            "nodes": [],
            "functionSelector": "fd921be8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes",
            "nameLocation": "16247:14:64",
            "parameters": {
              "id": 27503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27507,
                  "src": "16262:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16262:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27502,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27507,
                  "src": "16279:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27501,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16279:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16261:34:64"
            },
            "returnParameters": {
              "id": 27506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27505,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27507,
                  "src": "16314:12:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27504,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:14:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27517,
            "nodeType": "FunctionDefinition",
            "src": "16333:97:64",
            "nodes": [],
            "functionSelector": "6631aa99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytesArray",
            "nameLocation": "16342:19:64",
            "parameters": {
              "id": 27512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27509,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27517,
                  "src": "16362:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27508,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16362:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27511,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27517,
                  "src": "16379:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27510,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16379:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16361:34:64"
            },
            "returnParameters": {
              "id": 27516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27515,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27517,
                  "src": "16414:14:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27513,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "16414:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27514,
                    "nodeType": "ArrayTypeName",
                    "src": "16414:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16413:16:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27526,
            "nodeType": "FunctionDefinition",
            "src": "16435:87:64",
            "nodes": [],
            "functionSelector": "1777e59d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32",
            "nameLocation": "16444:16:64",
            "parameters": {
              "id": 27522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27519,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27526,
                  "src": "16461:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27518,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16461:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27521,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27526,
                  "src": "16478:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27520,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16478:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16460:34:64"
            },
            "returnParameters": {
              "id": 27525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27524,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27526,
                  "src": "16513:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27523,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16513:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16512:9:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27536,
            "nodeType": "FunctionDefinition",
            "src": "16527:101:64",
            "nodes": [],
            "functionSelector": "91c75bc3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32Array",
            "nameLocation": "16536:21:64",
            "parameters": {
              "id": 27531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27528,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27536,
                  "src": "16558:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27527,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16558:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27530,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27536,
                  "src": "16575:15:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27529,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16575:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16557:34:64"
            },
            "returnParameters": {
              "id": 27535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27534,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27536,
                  "src": "16610:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27532,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "16610:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27533,
                    "nodeType": "ArrayTypeName",
                    "src": "16610:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16609:18:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27546,
            "nodeType": "FunctionDefinition",
            "src": "16681:106:64",
            "nodes": [],
            "functionSelector": "213e4198",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonKeys",
            "nameLocation": "16690:13:64",
            "parameters": {
              "id": 27541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27538,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "16720:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27546,
                  "src": "16704:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27537,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16704:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27540,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "16742:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27546,
                  "src": "16726:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27539,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16726:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16703:43:64"
            },
            "returnParameters": {
              "id": 27545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27544,
                  "mutability": "mutable",
                  "name": "keys",
                  "nameLocation": "16781:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27546,
                  "src": "16765:20:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27542,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16765:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27543,
                    "nodeType": "ArrayTypeName",
                    "src": "16765:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:22:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27557,
            "nodeType": "FunctionDefinition",
            "src": "16983:142:64",
            "nodes": [],
            "functionSelector": "ac22e971",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "16992:13:64",
            "parameters": {
              "id": 27553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27548,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17022:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27557,
                  "src": "17006:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27547,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17006:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27550,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17049:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27557,
                  "src": "17033:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27549,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17033:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27552,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17064:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27557,
                  "src": "17059:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27551,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17059:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17005:65:64"
            },
            "returnParameters": {
              "id": 27556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27555,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17119:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27557,
                  "src": "17105:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27554,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17104:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27568,
            "nodeType": "FunctionDefinition",
            "src": "17130:145:64",
            "nodes": [],
            "functionSelector": "129e9002",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "17139:13:64",
            "parameters": {
              "id": 27564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27559,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17169:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "17153:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27558,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17153:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27561,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17196:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "17180:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27560,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17180:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27563,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17214:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "17206:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17206:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17152:68:64"
            },
            "returnParameters": {
              "id": 27567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27566,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17269:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "17255:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17255:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17254:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27579,
            "nodeType": "FunctionDefinition",
            "src": "17280:143:64",
            "nodes": [],
            "functionSelector": "3f33db60",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "17289:12:64",
            "parameters": {
              "id": 27575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27570,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17318:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27579,
                  "src": "17302:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27569,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17302:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27572,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17345:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27579,
                  "src": "17329:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27571,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17329:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27574,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17362:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27579,
                  "src": "17355:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27573,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17355:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17301:67:64"
            },
            "returnParameters": {
              "id": 27578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27577,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17417:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27579,
                  "src": "17403:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27576,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17403:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17402:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27590,
            "nodeType": "FunctionDefinition",
            "src": "17428:148:64",
            "nodes": [],
            "functionSelector": "972c6062",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "17437:16:64",
            "parameters": {
              "id": 27586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27581,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17470:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27590,
                  "src": "17454:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27580,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17454:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27583,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17497:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27590,
                  "src": "17481:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27582,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17481:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27585,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17515:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27590,
                  "src": "17507:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17507:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17453:68:64"
            },
            "returnParameters": {
              "id": 27589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27588,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17570:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27590,
                  "src": "17556:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27587,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17556:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27601,
            "nodeType": "FunctionDefinition",
            "src": "17581:148:64",
            "nodes": [],
            "functionSelector": "2d812b44",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "17590:16:64",
            "parameters": {
              "id": 27597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27592,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17623:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27601,
                  "src": "17607:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27591,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17607:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27594,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17650:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27601,
                  "src": "17634:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27593,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17634:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27596,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17668:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27601,
                  "src": "17660:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27595,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "17660:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17606:68:64"
            },
            "returnParameters": {
              "id": 27600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27599,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17723:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27601,
                  "src": "17709:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27598,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17709:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17708:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27612,
            "nodeType": "FunctionDefinition",
            "src": "17734:155:64",
            "nodes": [],
            "functionSelector": "88da6d35",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "17743:15:64",
            "parameters": {
              "id": 27608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27603,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17775:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27612,
                  "src": "17759:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27602,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17759:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27605,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17802:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27612,
                  "src": "17786:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27604,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17786:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27607,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17828:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27612,
                  "src": "17812:21:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27606,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17812:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17758:76:64"
            },
            "returnParameters": {
              "id": 27611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27610,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17883:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27612,
                  "src": "17869:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27609,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17869:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17868:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27623,
            "nodeType": "FunctionDefinition",
            "src": "17894:153:64",
            "nodes": [],
            "functionSelector": "f21d52c7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "17903:14:64",
            "parameters": {
              "id": 27619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27614,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17934:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27623,
                  "src": "17918:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27613,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17918:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27616,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17961:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27623,
                  "src": "17945:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27615,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17945:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27618,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17986:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27623,
                  "src": "17971:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27617,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17971:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17917:75:64"
            },
            "returnParameters": {
              "id": 27622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27621,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18041:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27623,
                  "src": "18027:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27620,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18027:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18026:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27635,
            "nodeType": "FunctionDefinition",
            "src": "18053:154:64",
            "nodes": [],
            "functionSelector": "92925aa1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "18062:13:64",
            "parameters": {
              "id": 27631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27625,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18092:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27635,
                  "src": "18076:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27624,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18076:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27627,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18119:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27635,
                  "src": "18103:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27626,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18103:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27630,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18145:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27635,
                  "src": "18129:22:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27628,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "18129:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27629,
                    "nodeType": "ArrayTypeName",
                    "src": "18129:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18075:77:64"
            },
            "returnParameters": {
              "id": 27634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27633,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18201:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27635,
                  "src": "18187:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27632,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18187:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18186:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27647,
            "nodeType": "FunctionDefinition",
            "src": "18212:157:64",
            "nodes": [],
            "functionSelector": "fee9a469",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "18221:13:64",
            "parameters": {
              "id": 27643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27637,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18251:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27647,
                  "src": "18235:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27636,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18235:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27639,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18278:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27647,
                  "src": "18262:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27638,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18262:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27642,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18307:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27647,
                  "src": "18288:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27640,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18288:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27641,
                    "nodeType": "ArrayTypeName",
                    "src": "18288:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18234:80:64"
            },
            "returnParameters": {
              "id": 27646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27645,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18363:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27647,
                  "src": "18349:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27644,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18349:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18348:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27659,
            "nodeType": "FunctionDefinition",
            "src": "18374:155:64",
            "nodes": [],
            "functionSelector": "7676e127",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "18383:12:64",
            "parameters": {
              "id": 27655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27649,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18412:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27659,
                  "src": "18396:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27648,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18396:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27651,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18439:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27659,
                  "src": "18423:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27650,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27654,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18467:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27659,
                  "src": "18449:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27652,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18449:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27653,
                    "nodeType": "ArrayTypeName",
                    "src": "18449:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18395:79:64"
            },
            "returnParameters": {
              "id": 27658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27657,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18523:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27659,
                  "src": "18509:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27656,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18509:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18508:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27671,
            "nodeType": "FunctionDefinition",
            "src": "18534:160:64",
            "nodes": [],
            "functionSelector": "1e356e1a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "18543:16:64",
            "parameters": {
              "id": 27667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27661,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18576:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27671,
                  "src": "18560:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27660,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18560:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27663,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18603:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27671,
                  "src": "18587:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27662,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18587:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27666,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18632:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27671,
                  "src": "18613:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27664,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "18613:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27665,
                    "nodeType": "ArrayTypeName",
                    "src": "18613:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18559:80:64"
            },
            "returnParameters": {
              "id": 27670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27669,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18688:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27671,
                  "src": "18674:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27668,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18674:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18673:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27683,
            "nodeType": "FunctionDefinition",
            "src": "18699:160:64",
            "nodes": [],
            "functionSelector": "201e43e2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "18708:16:64",
            "parameters": {
              "id": 27679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27673,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18741:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27683,
                  "src": "18725:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27672,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18725:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27675,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18768:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27683,
                  "src": "18752:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27674,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18752:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27678,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18797:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27683,
                  "src": "18778:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27676,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "18778:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27677,
                    "nodeType": "ArrayTypeName",
                    "src": "18778:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18724:80:64"
            },
            "returnParameters": {
              "id": 27682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27681,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18853:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27683,
                  "src": "18839:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27680,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18839:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18838:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27695,
            "nodeType": "FunctionDefinition",
            "src": "18864:158:64",
            "nodes": [],
            "functionSelector": "561cd6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "18873:15:64",
            "parameters": {
              "id": 27691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27685,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18905:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27695,
                  "src": "18889:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27684,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18889:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27687,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18932:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27695,
                  "src": "18916:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27686,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18916:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27690,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18960:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27695,
                  "src": "18942:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27688,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "18942:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27689,
                    "nodeType": "ArrayTypeName",
                    "src": "18942:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18888:79:64"
            },
            "returnParameters": {
              "id": 27694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27693,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19016:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27695,
                  "src": "19002:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19002:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19001:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27707,
            "nodeType": "FunctionDefinition",
            "src": "19027:156:64",
            "nodes": [],
            "functionSelector": "9884b232",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "19036:14:64",
            "parameters": {
              "id": 27703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27697,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "19067:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27707,
                  "src": "19051:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27696,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19051:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27699,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "19094:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27707,
                  "src": "19078:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27698,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19078:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27702,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "19121:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27707,
                  "src": "19104:23:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27700,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "19104:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27701,
                    "nodeType": "ArrayTypeName",
                    "src": "19104:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19050:78:64"
            },
            "returnParameters": {
              "id": 27706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27705,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19177:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27707,
                  "src": "19163:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19163:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19162:20:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27714,
            "nodeType": "FunctionDefinition",
            "src": "20424:72:64",
            "nodes": [],
            "functionSelector": "e23cd19f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20433:9:64",
            "parameters": {
              "id": 27712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27709,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20459:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27714,
                  "src": "20443:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27708,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20443:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27711,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20481:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27714,
                  "src": "20465:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27710,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20465:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20442:44:64"
            },
            "returnParameters": {
              "id": 27713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20495:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27723,
            "nodeType": "FunctionDefinition",
            "src": "20717:98:64",
            "nodes": [],
            "functionSelector": "35d6ad46",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20726:9:64",
            "parameters": {
              "id": 27721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27716,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20752:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27723,
                  "src": "20736:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27715,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20736:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27718,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20774:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27723,
                  "src": "20758:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27717,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20758:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27720,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "20796:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27723,
                  "src": "20780:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27719,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20780:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20735:70:64"
            },
            "returnParameters": {
              "id": 27722,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20814:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27730,
            "nodeType": "FunctionDefinition",
            "src": "20867:85:64",
            "nodes": [],
            "functionSelector": "975a6ce9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrl",
            "nameLocation": "20876:6:64",
            "parameters": {
              "id": 27726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27725,
                  "mutability": "mutable",
                  "name": "rpcAlias",
                  "nameLocation": "20899:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "20883:24:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27724,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20883:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20882:26:64"
            },
            "returnParameters": {
              "id": 27729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27728,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20946:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "20932:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27727,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20932:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20931:20:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27738,
            "nodeType": "FunctionDefinition",
            "src": "21020:67:64",
            "nodes": [],
            "functionSelector": "a85a8418",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrls",
            "nameLocation": "21029:7:64",
            "parameters": {
              "id": 27731,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21036:2:64"
            },
            "returnParameters": {
              "id": 27737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27736,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21081:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27738,
                  "src": "21062:23:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_string_memory_ptr_$2_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[2][]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 27732,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "21062:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "id": 27734,
                      "length": {
                        "hexValue": "32",
                        "id": 27733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21069:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "21062:9:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$2_storage_ptr",
                        "typeString": "string[2]"
                      }
                    },
                    "id": 27735,
                    "nodeType": "ArrayTypeName",
                    "src": "21062:11:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_string_storage_$2_storage_$dyn_storage_ptr",
                      "typeString": "string[2][]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21061:25:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27745,
            "nodeType": "FunctionDefinition",
            "src": "21150:67:64",
            "nodes": [],
            "functionSelector": "9d2ad72a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrlStructs",
            "nameLocation": "21159:13:64",
            "parameters": {
              "id": 27739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21172:2:64"
            },
            "returnParameters": {
              "id": 27744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27743,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21211:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27745,
                  "src": "21198:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Rpc_$26726_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Rpc[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27741,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27740,
                        "name": "Rpc",
                        "nameLocations": [
                          "21198:3:64"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26726,
                        "src": "21198:3:64"
                      },
                      "referencedDeclaration": 26726,
                      "src": "21198:3:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Rpc_$26726_storage_ptr",
                        "typeString": "struct VmSafe.Rpc"
                      }
                    },
                    "id": 27742,
                    "nodeType": "ArrayTypeName",
                    "src": "21198:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Rpc_$26726_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Rpc[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21197:19:64"
            },
            "scope": 27769,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27750,
            "nodeType": "FunctionDefinition",
            "src": "21310:46:64",
            "nodes": [],
            "functionSelector": "4c63e562",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assume",
            "nameLocation": "21319:6:64",
            "parameters": {
              "id": 27748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27747,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "21331:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27750,
                  "src": "21326:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27746,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21326:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21325:16:64"
            },
            "returnParameters": {
              "id": 27749,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21355:0:64"
            },
            "scope": 27769,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27753,
            "nodeType": "FunctionDefinition",
            "src": "21445:37:64",
            "nodes": [],
            "functionSelector": "d1a5b36f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pauseGasMetering",
            "nameLocation": "21454:16:64",
            "parameters": {
              "id": 27751,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21470:2:64"
            },
            "returnParameters": {
              "id": 27752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21481:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27756,
            "nodeType": "FunctionDefinition",
            "src": "21570:38:64",
            "nodes": [],
            "functionSelector": "2bcd50e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resumeGasMetering",
            "nameLocation": "21579:17:64",
            "parameters": {
              "id": 27754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21596:2:64"
            },
            "returnParameters": {
              "id": 27755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21607:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27761,
            "nodeType": "FunctionDefinition",
            "src": "21667:51:64",
            "nodes": [],
            "functionSelector": "f0259e92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21676:10:64",
            "parameters": {
              "id": 27759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27758,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21703:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27761,
                  "src": "21687:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27757,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21687:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21686:22:64"
            },
            "returnParameters": {
              "id": 27760,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21717:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27768,
            "nodeType": "FunctionDefinition",
            "src": "21789:63:64",
            "nodes": [],
            "functionSelector": "f7d39a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21798:10:64",
            "parameters": {
              "id": 27766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27763,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21825:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27768,
                  "src": "21809:20:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27762,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21809:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27765,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21836:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27768,
                  "src": "21831:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27764,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21831:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21808:34:64"
            },
            "returnParameters": {
              "id": 27767,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21851:0:64"
            },
            "scope": 27769,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "VmSafe",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          27769
        ],
        "name": "VmSafe",
        "nameLocation": "581:6:64",
        "scope": 28242,
        "usedErrors": []
      },
      {
        "id": 28241,
        "nodeType": "ContractDefinition",
        "src": "21856:11610:64",
        "nodes": [
          {
            "id": 27776,
            "nodeType": "FunctionDefinition",
            "src": "21913:45:64",
            "nodes": [],
            "functionSelector": "e5d6bf02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "warp",
            "nameLocation": "21922:4:64",
            "parameters": {
              "id": 27774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27773,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "21935:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27776,
                  "src": "21927:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21927:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21926:22:64"
            },
            "returnParameters": {
              "id": 27775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27781,
            "nodeType": "FunctionDefinition",
            "src": "21988:42:64",
            "nodes": [],
            "functionSelector": "1f7b4f30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "roll",
            "nameLocation": "21997:4:64",
            "parameters": {
              "id": 27779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27778,
                  "mutability": "mutable",
                  "name": "newHeight",
                  "nameLocation": "22010:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27781,
                  "src": "22002:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27777,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22002:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22001:19:64"
            },
            "returnParameters": {
              "id": 27780,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22029:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27786,
            "nodeType": "FunctionDefinition",
            "src": "22061:42:64",
            "nodes": [],
            "functionSelector": "39b37ab0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fee",
            "nameLocation": "22070:3:64",
            "parameters": {
              "id": 27784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27783,
                  "mutability": "mutable",
                  "name": "newBasefee",
                  "nameLocation": "22082:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27786,
                  "src": "22074:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27782,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22074:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22073:20:64"
            },
            "returnParameters": {
              "id": 27785,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22102:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27791,
            "nodeType": "FunctionDefinition",
            "src": "22279:52:64",
            "nodes": [],
            "functionSelector": "46cc92d9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "difficulty",
            "nameLocation": "22288:10:64",
            "parameters": {
              "id": 27789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27788,
                  "mutability": "mutable",
                  "name": "newDifficulty",
                  "nameLocation": "22307:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27791,
                  "src": "22299:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27787,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22299:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22298:23:64"
            },
            "returnParameters": {
              "id": 27790,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22330:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27796,
            "nodeType": "FunctionDefinition",
            "src": "22501:52:64",
            "nodes": [],
            "functionSelector": "3b925549",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prevrandao",
            "nameLocation": "22510:10:64",
            "parameters": {
              "id": 27794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27793,
                  "mutability": "mutable",
                  "name": "newPrevrandao",
                  "nameLocation": "22529:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27796,
                  "src": "22521:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27792,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22521:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22520:23:64"
            },
            "returnParameters": {
              "id": 27795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22552:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27801,
            "nodeType": "FunctionDefinition",
            "src": "22584:46:64",
            "nodes": [],
            "functionSelector": "4049ddd2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "chainId",
            "nameLocation": "22593:7:64",
            "parameters": {
              "id": 27799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27798,
                  "mutability": "mutable",
                  "name": "newChainId",
                  "nameLocation": "22609:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27801,
                  "src": "22601:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22601:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22600:20:64"
            },
            "returnParameters": {
              "id": 27800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22629:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27806,
            "nodeType": "FunctionDefinition",
            "src": "22659:50:64",
            "nodes": [],
            "functionSelector": "48f50c0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "txGasPrice",
            "nameLocation": "22668:10:64",
            "parameters": {
              "id": 27804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27803,
                  "mutability": "mutable",
                  "name": "newGasPrice",
                  "nameLocation": "22687:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27806,
                  "src": "22679:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27802,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22679:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22678:21:64"
            },
            "returnParameters": {
              "id": 27805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22708:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27815,
            "nodeType": "FunctionDefinition",
            "src": "22765:69:64",
            "nodes": [],
            "functionSelector": "70ca10bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "store",
            "nameLocation": "22774:5:64",
            "parameters": {
              "id": 27813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27808,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "22788:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27815,
                  "src": "22780:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22780:7:64",
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
                  "id": 27810,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "22804:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27815,
                  "src": "22796:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27809,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22796:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27812,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22818:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27815,
                  "src": "22810:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27811,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22810:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22779:45:64"
            },
            "returnParameters": {
              "id": 27814,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22833:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27822,
            "nodeType": "FunctionDefinition",
            "src": "22929:61:64",
            "nodes": [],
            "functionSelector": "f8e18b57",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonce",
            "nameLocation": "22938:8:64",
            "parameters": {
              "id": 27820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27817,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "22955:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27822,
                  "src": "22947:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22947:7:64",
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
                  "id": 27819,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "22971:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27822,
                  "src": "22964:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27818,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "22964:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22946:34:64"
            },
            "returnParameters": {
              "id": 27821,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22989:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27829,
            "nodeType": "FunctionDefinition",
            "src": "23053:67:64",
            "nodes": [],
            "functionSelector": "9b67b21c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonceUnsafe",
            "nameLocation": "23062:14:64",
            "parameters": {
              "id": 27827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27824,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23085:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27829,
                  "src": "23077:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27823,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23077:7:64",
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
                  "id": 27826,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "23101:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27829,
                  "src": "23094:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27825,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "23094:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23076:34:64"
            },
            "returnParameters": {
              "id": 27828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23119:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27834,
            "nodeType": "FunctionDefinition",
            "src": "23205:46:64",
            "nodes": [],
            "functionSelector": "1c72346d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resetNonce",
            "nameLocation": "23214:10:64",
            "parameters": {
              "id": 27832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27831,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23233:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27834,
                  "src": "23225:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27830,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23225:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23224:17:64"
            },
            "returnParameters": {
              "id": 27833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23250:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27839,
            "nodeType": "FunctionDefinition",
            "src": "23321:43:64",
            "nodes": [],
            "functionSelector": "ca669fa7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23330:5:64",
            "parameters": {
              "id": 27837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27836,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23344:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27839,
                  "src": "23336:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23336:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23335:19:64"
            },
            "returnParameters": {
              "id": 27838,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23363:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27844,
            "nodeType": "FunctionDefinition",
            "src": "23466:48:64",
            "nodes": [],
            "functionSelector": "06447d56",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23475:10:64",
            "parameters": {
              "id": 27842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27841,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23494:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27844,
                  "src": "23486:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27840,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23486:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23485:19:64"
            },
            "returnParameters": {
              "id": 27843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23513:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27851,
            "nodeType": "FunctionDefinition",
            "src": "23626:61:64",
            "nodes": [],
            "functionSelector": "47e50cce",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23635:5:64",
            "parameters": {
              "id": 27849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27846,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23649:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27851,
                  "src": "23641:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27845,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23641:7:64",
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
                  "id": 27848,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23668:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27851,
                  "src": "23660:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23660:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23640:37:64"
            },
            "returnParameters": {
              "id": 27850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23686:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27858,
            "nodeType": "FunctionDefinition",
            "src": "23831:66:64",
            "nodes": [],
            "functionSelector": "45b56078",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23840:10:64",
            "parameters": {
              "id": 27856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27853,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23859:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27858,
                  "src": "23851:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27852,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23851:7:64",
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
                  "id": 27855,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23878:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27858,
                  "src": "23870:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23870:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23850:37:64"
            },
            "returnParameters": {
              "id": 27857,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23896:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27861,
            "nodeType": "FunctionDefinition",
            "src": "23967:30:64",
            "nodes": [],
            "functionSelector": "90c5013b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopPrank",
            "nameLocation": "23976:9:64",
            "parameters": {
              "id": 27859,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23985:2:64"
            },
            "returnParameters": {
              "id": 27860,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23996:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27871,
            "nodeType": "FunctionDefinition",
            "src": "24122:101:64",
            "nodes": [],
            "functionSelector": "4ad0bac9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readCallers",
            "nameLocation": "24131:11:64",
            "parameters": {
              "id": 27862,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24142:2:64"
            },
            "returnParameters": {
              "id": 27870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27865,
                  "mutability": "mutable",
                  "name": "callerMode",
                  "nameLocation": "24174:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27871,
                  "src": "24163:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_CallerMode_$26713",
                    "typeString": "enum VmSafe.CallerMode"
                  },
                  "typeName": {
                    "id": 27864,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 27863,
                      "name": "CallerMode",
                      "nameLocations": [
                        "24163:10:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26713,
                      "src": "24163:10:64"
                    },
                    "referencedDeclaration": 26713,
                    "src": "24163:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_CallerMode_$26713",
                      "typeString": "enum VmSafe.CallerMode"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27867,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "24194:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27871,
                  "src": "24186:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24186:7:64",
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
                  "id": 27869,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "24213:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27871,
                  "src": "24205:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24205:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24162:60:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27878,
            "nodeType": "FunctionDefinition",
            "src": "24260:60:64",
            "nodes": [],
            "functionSelector": "c88a5e6d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deal",
            "nameLocation": "24269:4:64",
            "parameters": {
              "id": 27876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27873,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "24282:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27878,
                  "src": "24274:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24274:7:64",
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
                  "id": 27875,
                  "mutability": "mutable",
                  "name": "newBalance",
                  "nameLocation": "24299:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27878,
                  "src": "24291:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24291:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24273:37:64"
            },
            "returnParameters": {
              "id": 27877,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24319:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27885,
            "nodeType": "FunctionDefinition",
            "src": "24354:74:64",
            "nodes": [],
            "functionSelector": "b4d6c782",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "etch",
            "nameLocation": "24363:4:64",
            "parameters": {
              "id": 27883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27880,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "24376:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27885,
                  "src": "24368:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24368:7:64",
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
                  "id": 27882,
                  "mutability": "mutable",
                  "name": "newRuntimeBytecode",
                  "nameLocation": "24399:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27885,
                  "src": "24384:33:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27881,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24384:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24367:51:64"
            },
            "returnParameters": {
              "id": 27884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24427:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27890,
            "nodeType": "FunctionDefinition",
            "src": "24504:38:64",
            "nodes": [],
            "functionSelector": "dd82d13e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "skip",
            "nameLocation": "24513:4:64",
            "parameters": {
              "id": 27888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27887,
                  "mutability": "mutable",
                  "name": "skipTest",
                  "nameLocation": "24523:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27890,
                  "src": "24518:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27886,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "24518:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24517:15:64"
            },
            "returnParameters": {
              "id": 27889,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24541:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27895,
            "nodeType": "FunctionDefinition",
            "src": "24584:58:64",
            "nodes": [],
            "functionSelector": "f28dceb3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24593:12:64",
            "parameters": {
              "id": 27893,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27892,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24621:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27895,
                  "src": "24606:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27891,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24606:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24605:27:64"
            },
            "returnParameters": {
              "id": 27894,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24641:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27900,
            "nodeType": "FunctionDefinition",
            "src": "24647:50:64",
            "nodes": [],
            "functionSelector": "c31eb0e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24656:12:64",
            "parameters": {
              "id": 27898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27897,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24676:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27900,
                  "src": "24669:17:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 27896,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "24669:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24668:19:64"
            },
            "returnParameters": {
              "id": 27899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24696:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27903,
            "nodeType": "FunctionDefinition",
            "src": "24702:33:64",
            "nodes": [],
            "functionSelector": "f4844814",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24711:12:64",
            "parameters": {
              "id": 27901,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24723:2:64"
            },
            "returnParameters": {
              "id": 27902,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24734:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27906,
            "nodeType": "FunctionDefinition",
            "src": "25067:31:64",
            "nodes": [],
            "functionSelector": "440ed10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25076:10:64",
            "parameters": {
              "id": 27904,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25086:2:64"
            },
            "returnParameters": {
              "id": 27905,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25097:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27911,
            "nodeType": "FunctionDefinition",
            "src": "25103:46:64",
            "nodes": [],
            "functionSelector": "86b9620d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25112:10:64",
            "parameters": {
              "id": 27909,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27908,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25131:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27911,
                  "src": "25123:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27907,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25123:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25122:17:64"
            },
            "returnParameters": {
              "id": 27910,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25148:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27922,
            "nodeType": "FunctionDefinition",
            "src": "25559:99:64",
            "nodes": [],
            "functionSelector": "491cc7c2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25568:10:64",
            "parameters": {
              "id": 27920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27913,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25584:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27922,
                  "src": "25579:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27912,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25579:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27915,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25602:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27922,
                  "src": "25597:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27914,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25597:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27917,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25620:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27922,
                  "src": "25615:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27916,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25615:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27919,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25638:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27922,
                  "src": "25633:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27918,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25633:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25578:70:64"
            },
            "returnParameters": {
              "id": 27921,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25657:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27935,
            "nodeType": "FunctionDefinition",
            "src": "25663:124:64",
            "nodes": [],
            "functionSelector": "81bad6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25672:10:64",
            "parameters": {
              "id": 27933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27924,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25688:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27935,
                  "src": "25683:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27923,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25683:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27926,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25706:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27935,
                  "src": "25701:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27925,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25701:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27928,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25724:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27935,
                  "src": "25719:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27927,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25719:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27930,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25742:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27935,
                  "src": "25737:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25737:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27932,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25761:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27935,
                  "src": "25753:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25753:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25682:87:64"
            },
            "returnParameters": {
              "id": 27934,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25786:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27944,
            "nodeType": "FunctionDefinition",
            "src": "26043:91:64",
            "nodes": [],
            "functionSelector": "b96213e4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26052:8:64",
            "parameters": {
              "id": 27942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27937,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26069:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "26061:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27936,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26061:7:64",
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
                  "id": 27939,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26092:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "26077:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27938,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26077:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27941,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26113:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "26098:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27940,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26098:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26060:64:64"
            },
            "returnParameters": {
              "id": 27943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26133:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27955,
            "nodeType": "FunctionDefinition",
            "src": "26302:109:64",
            "nodes": [],
            "functionSelector": "81409b91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26311:8:64",
            "parameters": {
              "id": 27953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27946,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26328:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27955,
                  "src": "26320:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27945,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26320:7:64",
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
                  "id": 27948,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26344:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27955,
                  "src": "26336:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26336:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27950,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26369:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27955,
                  "src": "26354:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27949,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26354:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27952,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26390:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27955,
                  "src": "26375:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27951,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26375:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26319:82:64"
            },
            "returnParameters": {
              "id": 27954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26410:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27964,
            "nodeType": "FunctionDefinition",
            "src": "26480:97:64",
            "nodes": [],
            "functionSelector": "dbaad147",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26489:14:64",
            "parameters": {
              "id": 27962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27957,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26512:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27964,
                  "src": "26504:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26504:7:64",
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
                  "id": 27959,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26535:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27964,
                  "src": "26520:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27958,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26520:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27961,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26556:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27964,
                  "src": "26541:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27960,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26541:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26503:64:64"
            },
            "returnParameters": {
              "id": 27963,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26576:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27975,
            "nodeType": "FunctionDefinition",
            "src": "26673:123:64",
            "nodes": [],
            "functionSelector": "d23cd037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26682:14:64",
            "parameters": {
              "id": 27973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27966,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26705:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27975,
                  "src": "26697:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26697:7:64",
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
                  "id": 27968,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26721:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27975,
                  "src": "26713:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27967,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26713:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27970,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26746:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27975,
                  "src": "26731:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27969,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26731:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27972,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26767:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27975,
                  "src": "26752:25:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27971,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26752:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26696:82:64"
            },
            "returnParameters": {
              "id": 27974,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26795:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27978,
            "nodeType": "FunctionDefinition",
            "src": "26832:37:64",
            "nodes": [],
            "functionSelector": "3fdf4e15",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "clearMockedCalls",
            "nameLocation": "26841:16:64",
            "parameters": {
              "id": 27976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26857:2:64"
            },
            "returnParameters": {
              "id": 27977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26868:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27985,
            "nodeType": "FunctionDefinition",
            "src": "26997:66:64",
            "nodes": [],
            "functionSelector": "bd6af434",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27006:10:64",
            "parameters": {
              "id": 27983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27980,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27025:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27985,
                  "src": "27017:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27017:7:64",
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
                  "id": 27982,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27048:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27985,
                  "src": "27033:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27981,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27033:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27016:37:64"
            },
            "returnParameters": {
              "id": 27984,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27062:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27994,
            "nodeType": "FunctionDefinition",
            "src": "27148:80:64",
            "nodes": [],
            "functionSelector": "c1adbbff",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27157:10:64",
            "parameters": {
              "id": 27992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27987,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27176:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27994,
                  "src": "27168:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27168:7:64",
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
                  "id": 27989,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27199:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27994,
                  "src": "27184:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27988,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27184:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27991,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27212:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 27994,
                  "src": "27205:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27990,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27205:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27167:51:64"
            },
            "returnParameters": {
              "id": 27993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27227:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28003,
            "nodeType": "FunctionDefinition",
            "src": "27311:84:64",
            "nodes": [],
            "functionSelector": "f30c7ba3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27320:10:64",
            "parameters": {
              "id": 28001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27996,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27339:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28003,
                  "src": "27331:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27331:7:64",
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
                  "id": 27998,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27355:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28003,
                  "src": "27347:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27347:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28000,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27380:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28003,
                  "src": "27365:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27999,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27365:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27330:55:64"
            },
            "returnParameters": {
              "id": 28002,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27394:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28014,
            "nodeType": "FunctionDefinition",
            "src": "27493:98:64",
            "nodes": [],
            "functionSelector": "a2b1a1ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27502:10:64",
            "parameters": {
              "id": 28012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28005,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27521:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "27513:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28004,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27513:7:64",
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
                  "id": 28007,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27537:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "27529:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28006,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27529:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28009,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27562:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "27547:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28008,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27547:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28011,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27575:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "27568:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28010,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27568:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27512:69:64"
            },
            "returnParameters": {
              "id": 28013,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27590:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28025,
            "nodeType": "FunctionDefinition",
            "src": "27680:96:64",
            "nodes": [],
            "functionSelector": "23361207",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27689:10:64",
            "parameters": {
              "id": 28023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28016,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27708:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28025,
                  "src": "27700:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28015,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27700:7:64",
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
                  "id": 28018,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27724:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28025,
                  "src": "27716:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28017,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27716:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28020,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27741:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28025,
                  "src": "27734:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28019,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27734:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28022,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27761:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28025,
                  "src": "27746:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28021,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27746:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27699:67:64"
            },
            "returnParameters": {
              "id": 28024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27775:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28038,
            "nodeType": "FunctionDefinition",
            "src": "27881:110:64",
            "nodes": [],
            "functionSelector": "65b7b7cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27890:10:64",
            "parameters": {
              "id": 28036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28027,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27909:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28038,
                  "src": "27901:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27901:7:64",
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
                  "id": 28029,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27925:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28038,
                  "src": "27917:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27917:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28031,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27942:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28038,
                  "src": "27935:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28030,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27935:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28033,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27962:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28038,
                  "src": "27947:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28032,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27947:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28035,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27975:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28038,
                  "src": "27968:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28034,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27968:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27900:81:64"
            },
            "returnParameters": {
              "id": 28037,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27990:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28049,
            "nodeType": "FunctionDefinition",
            "src": "28105:105:64",
            "nodes": [],
            "functionSelector": "08e4e116",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28114:16:64",
            "parameters": {
              "id": 28047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28040,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28139:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "28131:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28039,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28131:7:64",
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
                  "id": 28042,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28155:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "28147:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28147:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28044,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28172:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "28165:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28043,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28165:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28046,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28195:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "28180:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28045,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28180:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28130:70:64"
            },
            "returnParameters": {
              "id": 28048,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28209:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28062,
            "nodeType": "FunctionDefinition",
            "src": "28339:127:64",
            "nodes": [],
            "functionSelector": "e13a1834",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28348:16:64",
            "parameters": {
              "id": 28060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28051,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28373:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28062,
                  "src": "28365:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28050,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28365:7:64",
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
                  "id": 28053,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28389:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28062,
                  "src": "28381:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28381:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28055,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28406:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28062,
                  "src": "28399:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28054,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28399:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28057,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28429:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28062,
                  "src": "28414:19:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28056,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28414:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28059,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "28442:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28062,
                  "src": "28435:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28058,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28435:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28364:84:64"
            },
            "returnParameters": {
              "id": 28061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28465:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28069,
            "nodeType": "FunctionDefinition",
            "src": "28692:59:64",
            "nodes": [],
            "functionSelector": "6d016688",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemory",
            "nameLocation": "28701:16:64",
            "parameters": {
              "id": 28067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28064,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "28725:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28069,
                  "src": "28718:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28063,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28718:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28066,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "28737:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28069,
                  "src": "28730:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28065,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28730:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28717:24:64"
            },
            "returnParameters": {
              "id": 28068,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28750:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28076,
            "nodeType": "FunctionDefinition",
            "src": "28989:63:64",
            "nodes": [],
            "functionSelector": "05838bf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemoryCall",
            "nameLocation": "28998:20:64",
            "parameters": {
              "id": 28074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28071,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "29026:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28076,
                  "src": "29019:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28070,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29019:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28073,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "29038:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28076,
                  "src": "29031:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28072,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29031:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29018:24:64"
            },
            "returnParameters": {
              "id": 28075,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29051:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28081,
            "nodeType": "FunctionDefinition",
            "src": "29084:48:64",
            "nodes": [],
            "functionSelector": "ff483c54",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "coinbase",
            "nameLocation": "29093:8:64",
            "parameters": {
              "id": 28079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28078,
                  "mutability": "mutable",
                  "name": "newCoinbase",
                  "nameLocation": "29110:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28081,
                  "src": "29102:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "29102:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29101:21:64"
            },
            "returnParameters": {
              "id": 28080,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29131:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28086,
            "nodeType": "FunctionDefinition",
            "src": "29282:58:64",
            "nodes": [],
            "functionSelector": "9711715a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "snapshot",
            "nameLocation": "29291:8:64",
            "parameters": {
              "id": 28082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29299:2:64"
            },
            "returnParameters": {
              "id": 28085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28084,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29328:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28086,
                  "src": "29320:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29320:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29319:20:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28093,
            "nodeType": "FunctionDefinition",
            "src": "29532:70:64",
            "nodes": [],
            "functionSelector": "44d7f0a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revertTo",
            "nameLocation": "29541:8:64",
            "parameters": {
              "id": 28089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28088,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29558:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28093,
                  "src": "29550:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29550:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29549:20:64"
            },
            "returnParameters": {
              "id": 28092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28091,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "29593:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28093,
                  "src": "29588:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28090,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29588:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29587:14:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28102,
            "nodeType": "FunctionDefinition",
            "src": "29706:103:64",
            "nodes": [],
            "functionSelector": "6ba3ba2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29715:10:64",
            "parameters": {
              "id": 28098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28095,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29742:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "29726:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28094,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29726:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28097,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "29762:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "29754:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29754:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29725:49:64"
            },
            "returnParameters": {
              "id": 28101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28100,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "29801:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "29793:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29793:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29792:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28109,
            "nodeType": "FunctionDefinition",
            "src": "29926:82:64",
            "nodes": [],
            "functionSelector": "31ba3498",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29935:10:64",
            "parameters": {
              "id": 28105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28104,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29962:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28109,
                  "src": "29946:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28103,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29946:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29945:28:64"
            },
            "returnParameters": {
              "id": 28108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28107,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30000:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28109,
                  "src": "29992:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29992:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29991:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28118,
            "nodeType": "FunctionDefinition",
            "src": "30229:98:64",
            "nodes": [],
            "functionSelector": "7ca29682",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "30238:10:64",
            "parameters": {
              "id": 28114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28111,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30265:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "30249:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28110,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30249:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28113,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30285:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "30277:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28112,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30277:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30248:44:64"
            },
            "returnParameters": {
              "id": 28117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28116,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30319:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "30311:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30311:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30310:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28127,
            "nodeType": "FunctionDefinition",
            "src": "30450:109:64",
            "nodes": [],
            "functionSelector": "71ee464d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30459:16:64",
            "parameters": {
              "id": 28123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28120,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30492:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28127,
                  "src": "30476:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30476:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28122,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "30512:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28127,
                  "src": "30504:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30504:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30475:49:64"
            },
            "returnParameters": {
              "id": 28126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28125,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30551:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28127,
                  "src": "30543:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30543:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30542:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28136,
            "nodeType": "FunctionDefinition",
            "src": "30793:104:64",
            "nodes": [],
            "functionSelector": "84d52b7a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30802:16:64",
            "parameters": {
              "id": 28132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28129,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30835:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28136,
                  "src": "30819:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28128,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28131,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30855:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28136,
                  "src": "30847:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28130,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30847:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:44:64"
            },
            "returnParameters": {
              "id": 28135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28134,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30889:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28136,
                  "src": "30881:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28133,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30881:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30880:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28143,
            "nodeType": "FunctionDefinition",
            "src": "31031:88:64",
            "nodes": [],
            "functionSelector": "98680034",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "31040:16:64",
            "parameters": {
              "id": 28139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28138,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "31073:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28143,
                  "src": "31057:26:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28137,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "31057:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31056:28:64"
            },
            "returnParameters": {
              "id": 28142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28141,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31111:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28143,
                  "src": "31103:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28140,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31103:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31102:16:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28148,
            "nodeType": "FunctionDefinition",
            "src": "31230:45:64",
            "nodes": [],
            "functionSelector": "9ebf6827",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "selectFork",
            "nameLocation": "31239:10:64",
            "parameters": {
              "id": 28146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28145,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31258:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28148,
                  "src": "31250:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31250:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31249:16:64"
            },
            "returnParameters": {
              "id": 28147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31274:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28154,
            "nodeType": "FunctionDefinition",
            "src": "31381:61:64",
            "nodes": [],
            "documentation": {
              "id": 28149,
              "nodeType": "StructuredDocumentation",
              "src": "31280:96:64",
              "text": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
            },
            "functionSelector": "2f103f22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "activeFork",
            "nameLocation": "31390:10:64",
            "parameters": {
              "id": 28150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31400:2:64"
            },
            "returnParameters": {
              "id": 28153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28152,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31434:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28154,
                  "src": "31426:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28151,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31426:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31425:16:64"
            },
            "scope": 28241,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28159,
            "nodeType": "FunctionDefinition",
            "src": "31577:48:64",
            "nodes": [],
            "functionSelector": "d9bbf3a1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31586:8:64",
            "parameters": {
              "id": 28157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28156,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31603:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28159,
                  "src": "31595:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31595:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31594:21:64"
            },
            "returnParameters": {
              "id": 28158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31624:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28164,
            "nodeType": "FunctionDefinition",
            "src": "31835:43:64",
            "nodes": [],
            "functionSelector": "0f29772b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31844:8:64",
            "parameters": {
              "id": 28162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28161,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "31861:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28164,
                  "src": "31853:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28160,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "31853:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31852:16:64"
            },
            "returnParameters": {
              "id": 28163,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31877:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28171,
            "nodeType": "FunctionDefinition",
            "src": "31935:64:64",
            "nodes": [],
            "functionSelector": "d74c83a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31944:8:64",
            "parameters": {
              "id": 28169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28166,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31961:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28171,
                  "src": "31953:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31953:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28168,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31977:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28171,
                  "src": "31969:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28167,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31969:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31952:37:64"
            },
            "returnParameters": {
              "id": 28170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31998:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28178,
            "nodeType": "FunctionDefinition",
            "src": "32132:59:64",
            "nodes": [],
            "functionSelector": "f2830f7b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "32141:8:64",
            "parameters": {
              "id": 28176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28173,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "32158:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28178,
                  "src": "32150:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32150:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28175,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "32174:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28178,
                  "src": "32166:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28174,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32166:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32149:32:64"
            },
            "returnParameters": {
              "id": 28177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32190:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28183,
            "nodeType": "FunctionDefinition",
            "src": "32390:50:64",
            "nodes": [],
            "functionSelector": "57e22dde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32399:14:64",
            "parameters": {
              "id": 28181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28180,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32422:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28183,
                  "src": "32414:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32414:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32413:17:64"
            },
            "returnParameters": {
              "id": 28182,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32439:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28190,
            "nodeType": "FunctionDefinition",
            "src": "32445:69:64",
            "nodes": [],
            "functionSelector": "4074e0a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32454:14:64",
            "parameters": {
              "id": 28188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28185,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32477:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28190,
                  "src": "32469:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28184,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32469:7:64",
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
                  "id": 28187,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32495:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28190,
                  "src": "32487:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32487:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32468:36:64"
            },
            "returnParameters": {
              "id": 28189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32513:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28199,
            "nodeType": "FunctionDefinition",
            "src": "32519:87:64",
            "nodes": [],
            "functionSelector": "efb77a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32528:14:64",
            "parameters": {
              "id": 28197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28192,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32551:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28199,
                  "src": "32543:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28191,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32543:7:64",
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
                  "id": 28194,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32569:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28199,
                  "src": "32561:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28193,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32561:7:64",
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
                  "id": 28196,
                  "mutability": "mutable",
                  "name": "account2",
                  "nameLocation": "32587:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28199,
                  "src": "32579:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28195,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32579:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32542:54:64"
            },
            "returnParameters": {
              "id": 28198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32605:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28205,
            "nodeType": "FunctionDefinition",
            "src": "32611:62:64",
            "nodes": [],
            "functionSelector": "1d9e269e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32620:14:64",
            "parameters": {
              "id": 28203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28202,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32654:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28205,
                  "src": "32635:27:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28200,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32635:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28201,
                    "nodeType": "ArrayTypeName",
                    "src": "32635:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32634:29:64"
            },
            "returnParameters": {
              "id": 28204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32672:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28210,
            "nodeType": "FunctionDefinition",
            "src": "32767:52:64",
            "nodes": [],
            "functionSelector": "997a0222",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32776:16:64",
            "parameters": {
              "id": 28208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28207,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32801:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28210,
                  "src": "32793:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28206,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32793:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32792:17:64"
            },
            "returnParameters": {
              "id": 28209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32818:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28216,
            "nodeType": "FunctionDefinition",
            "src": "32824:64:64",
            "nodes": [],
            "functionSelector": "3ce969e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32833:16:64",
            "parameters": {
              "id": 28214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28213,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32869:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28216,
                  "src": "32850:27:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28211,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32850:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28212,
                    "nodeType": "ArrayTypeName",
                    "src": "32850:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32849:29:64"
            },
            "returnParameters": {
              "id": 28215,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32887:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28223,
            "nodeType": "FunctionDefinition",
            "src": "32952:79:64",
            "nodes": [],
            "functionSelector": "d92d8efd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPersistent",
            "nameLocation": "32961:12:64",
            "parameters": {
              "id": 28219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28218,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32982:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28223,
                  "src": "32974:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28217,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32974:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32973:17:64"
            },
            "returnParameters": {
              "id": 28222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28221,
                  "mutability": "mutable",
                  "name": "persistent",
                  "nameLocation": "33019:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28223,
                  "src": "33014:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28220,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "33014:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33013:17:64"
            },
            "scope": 28241,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28228,
            "nodeType": "FunctionDefinition",
            "src": "33112:51:64",
            "nodes": [],
            "functionSelector": "ea060291",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowCheatcodes",
            "nameLocation": "33121:15:64",
            "parameters": {
              "id": 28226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28225,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "33145:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28228,
                  "src": "33137:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28224,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33137:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33136:17:64"
            },
            "returnParameters": {
              "id": 28227,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33162:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28233,
            "nodeType": "FunctionDefinition",
            "src": "33263:43:64",
            "nodes": [],
            "functionSelector": "be646da1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33272:8:64",
            "parameters": {
              "id": 28231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28230,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33289:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28233,
                  "src": "33281:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28229,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33281:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33280:16:64"
            },
            "returnParameters": {
              "id": 28232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33305:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28240,
            "nodeType": "FunctionDefinition",
            "src": "33405:59:64",
            "nodes": [],
            "functionSelector": "4d8abc4b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33414:8:64",
            "parameters": {
              "id": 28238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28235,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "33431:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28240,
                  "src": "33423:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33423:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28237,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33447:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 28240,
                  "src": "33439:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28236,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33439:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33422:32:64"
            },
            "returnParameters": {
              "id": 28239,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33463:0:64"
            },
            "scope": 28241,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 27770,
              "name": "VmSafe",
              "nameLocations": [
                "21872:6:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 27769,
              "src": "21872:6:64"
            },
            "id": 27771,
            "nodeType": "InheritanceSpecifier",
            "src": "21872:6:64"
          }
        ],
        "canonicalName": "Vm",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          28241,
          27769
        ],
        "name": "Vm",
        "nameLocation": "21866:2:64",
        "scope": 28242,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 64
} as const;
