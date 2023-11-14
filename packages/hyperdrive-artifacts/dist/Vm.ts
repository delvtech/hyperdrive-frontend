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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"accesses\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"readSlots\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"writeSlots\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"activeFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"allowCheatcodes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"condition\",\"type\":\"bool\"}],\"name\":\"assume\",\"outputs\":[],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newChainId\",\"type\":\"uint256\"}],\"name\":\"chainId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"clearMockedCalls\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"closeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newCoinbase\",\"type\":\"address\"}],\"name\":\"coinbase\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"createDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"deal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"derivationPath\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newDifficulty\",\"type\":\"uint256\"}],\"name\":\"difficulty\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"defaultValue\",\"type\":\"bytes32[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"defaultValue\",\"type\":\"int256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"defaultValue\",\"type\":\"bool\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"defaultValue\",\"type\":\"address\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"defaultValue\",\"type\":\"uint256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"defaultValue\",\"type\":\"bytes[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"defaultValue\",\"type\":\"uint256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"defaultValue\",\"type\":\"string[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"defaultValue\",\"type\":\"bytes\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"defaultValue\",\"type\":\"bytes32\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"defaultValue\",\"type\":\"int256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"defaultValue\",\"type\":\"address[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"defaultValue\",\"type\":\"string\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"defaultValue\",\"type\":\"bool[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"newRuntimeBytecode\",\"type\":\"bytes\"}],\"name\":\"etch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"revertData\",\"type\":\"bytes4\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemoryCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newBasefee\",\"type\":\"uint256\"}],\"name\":\"fee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string[]\",\"name\":\"commandInput\",\"type\":\"string[]\"}],\"name\":\"ffi\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"result\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"fsMetadata\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"readOnly\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"modified\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accessed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"created\",\"type\":\"uint256\"}],\"internalType\":\"struct VmSafe.FsMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"creationBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getDeployedCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"runtimeBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getLabel\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"currentLabel\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getNonce\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"nonce\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRecordedLogs\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32[]\",\"name\":\"topics\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"internalType\":\"struct VmSafe.Log[]\",\"name\":\"logs\",\"type\":\"tuple[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isPersistent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"persistent\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"newLabel\",\"type\":\"string\"}],\"name\":\"label\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account2\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"parsedValue\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"parsedValue\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"parsedValue\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"parsedValue\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"parsedValue\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddressArray\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBoolArray\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32Array\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytesArray\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonIntArray\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJsonKeys\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"keys\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonStringArray\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUintArray\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"parsedValue\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pauseGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"newPrevrandao\",\"type\":\"bytes32\"}],\"name\":\"prevrandao\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projectRoot\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"readCallers\",\"outputs\":[{\"internalType\":\"enum VmSafe.CallerMode\",\"name\":\"callerMode\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"followLinks\",\"type\":\"bool\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFile\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFileBinary\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readLine\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"line\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"linkPath\",\"type\":\"string\"}],\"name\":\"readLink\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"targetPath\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"record\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recordLogs\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"rememberKey\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"removeDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"removeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"resetNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"resumeGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"name\":\"revertTo\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newHeight\",\"type\":\"uint256\"}],\"name\":\"roll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"rpcAlias\",\"type\":\"string\"}],\"name\":\"rpcUrl\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrlStructs\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"url\",\"type\":\"string\"}],\"internalType\":\"struct VmSafe.Rpc[]\",\"name\":\"urls\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrls\",\"outputs\":[{\"internalType\":\"string[2][]\",\"name\":\"urls\",\"type\":\"string[2][]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"name\":\"selectFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"values\",\"type\":\"address[]\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"values\",\"type\":\"bool[]\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"values\",\"type\":\"bytes[]\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"values\",\"type\":\"bytes32[]\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"values\",\"type\":\"int256[]\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"values\",\"type\":\"string[]\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setEnv\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonceUnsafe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"digest\",\"type\":\"bytes32\"}],\"name\":\"sign\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"skipTest\",\"type\":\"bool\"}],\"name\":\"skip\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"snapshot\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"store\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newGasPrice\",\"type\":\"uint256\"}],\"name\":\"txGasPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"name\":\"warp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"writeFileBinary\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeLine\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"activeFork()\":{\"notice\":\"Returns the identifier of the currently active fork. Reverts if no fork is currently active.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Vm.sol\":\"Vm\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
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
    "id": 29528,
    "exportedSymbols": {
      "Vm": [
        29527
      ],
      "VmSafe": [
        29055
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:33435:76",
    "nodes": [
      {
        "id": 27992,
        "nodeType": "PragmaDirective",
        "src": "32:31:76",
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
        "id": 27993,
        "nodeType": "PragmaDirective",
        "src": "65:33:76",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 29055,
        "nodeType": "ContractDefinition",
        "src": "571:21283:76",
        "nodes": [
          {
            "id": 27999,
            "nodeType": "EnumDefinition",
            "src": "594:122:76",
            "nodes": [],
            "canonicalName": "VmSafe.CallerMode",
            "members": [
              {
                "id": 27994,
                "name": "None",
                "nameLocation": "620:4:76",
                "nodeType": "EnumValue",
                "src": "620:4:76"
              },
              {
                "id": 27995,
                "name": "Broadcast",
                "nameLocation": "634:9:76",
                "nodeType": "EnumValue",
                "src": "634:9:76"
              },
              {
                "id": 27996,
                "name": "RecurrentBroadcast",
                "nameLocation": "653:18:76",
                "nodeType": "EnumValue",
                "src": "653:18:76"
              },
              {
                "id": 27997,
                "name": "Prank",
                "nameLocation": "681:5:76",
                "nodeType": "EnumValue",
                "src": "681:5:76"
              },
              {
                "id": 27998,
                "name": "RecurrentPrank",
                "nameLocation": "696:14:76",
                "nodeType": "EnumValue",
                "src": "696:14:76"
              }
            ],
            "name": "CallerMode",
            "nameLocation": "599:10:76"
          },
          {
            "id": 28007,
            "nodeType": "StructDefinition",
            "src": "722:89:76",
            "nodes": [],
            "canonicalName": "VmSafe.Log",
            "members": [
              {
                "constant": false,
                "id": 28002,
                "mutability": "mutable",
                "name": "topics",
                "nameLocation": "753:6:76",
                "nodeType": "VariableDeclaration",
                "scope": 28007,
                "src": "743:16:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 28000,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 28001,
                  "nodeType": "ArrayTypeName",
                  "src": "743:9:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28004,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "775:4:76",
                "nodeType": "VariableDeclaration",
                "scope": 28007,
                "src": "769:10:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 28003,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:5:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28006,
                "mutability": "mutable",
                "name": "emitter",
                "nameLocation": "797:7:76",
                "nodeType": "VariableDeclaration",
                "scope": 28007,
                "src": "789:15:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 28005,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "789:7:76",
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
            "nameLocation": "729:3:76",
            "scope": 29055,
            "visibility": "public"
          },
          {
            "id": 28012,
            "nodeType": "StructDefinition",
            "src": "817:58:76",
            "nodes": [],
            "canonicalName": "VmSafe.Rpc",
            "members": [
              {
                "constant": false,
                "id": 28009,
                "mutability": "mutable",
                "name": "key",
                "nameLocation": "845:3:76",
                "nodeType": "VariableDeclaration",
                "scope": 28012,
                "src": "838:10:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28008,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "838:6:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28011,
                "mutability": "mutable",
                "name": "url",
                "nameLocation": "865:3:76",
                "nodeType": "VariableDeclaration",
                "scope": 28012,
                "src": "858:10:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28010,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "858:6:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Rpc",
            "nameLocation": "824:3:76",
            "scope": 29055,
            "visibility": "public"
          },
          {
            "id": 28023,
            "nodeType": "StructDefinition",
            "src": "881:139:76",
            "nodes": [],
            "canonicalName": "VmSafe.DirEntry",
            "members": [
              {
                "constant": false,
                "id": 28014,
                "mutability": "mutable",
                "name": "errorMessage",
                "nameLocation": "914:12:76",
                "nodeType": "VariableDeclaration",
                "scope": 28023,
                "src": "907:19:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28013,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "907:6:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28016,
                "mutability": "mutable",
                "name": "path",
                "nameLocation": "943:4:76",
                "nodeType": "VariableDeclaration",
                "scope": 28023,
                "src": "936:11:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28015,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "936:6:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28018,
                "mutability": "mutable",
                "name": "depth",
                "nameLocation": "964:5:76",
                "nodeType": "VariableDeclaration",
                "scope": 28023,
                "src": "957:12:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 28017,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "957:6:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28020,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "984:5:76",
                "nodeType": "VariableDeclaration",
                "scope": 28023,
                "src": "979:10:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 28019,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "979:4:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28022,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1004:9:76",
                "nodeType": "VariableDeclaration",
                "scope": 28023,
                "src": "999:14:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 28021,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "999:4:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DirEntry",
            "nameLocation": "888:8:76",
            "scope": 29055,
            "visibility": "public"
          },
          {
            "id": 28038,
            "nodeType": "StructDefinition",
            "src": "1026:193:76",
            "nodes": [],
            "canonicalName": "VmSafe.FsMetadata",
            "members": [
              {
                "constant": false,
                "id": 28025,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "1059:5:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1054:10:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 28024,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:4:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28027,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1079:9:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1074:14:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 28026,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:4:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28029,
                "mutability": "mutable",
                "name": "length",
                "nameLocation": "1106:6:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1098:14:76",
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
                  "src": "1098:7:76",
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
                "name": "readOnly",
                "nameLocation": "1127:8:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1122:13:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 28030,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:4:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28033,
                "mutability": "mutable",
                "name": "modified",
                "nameLocation": "1153:8:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1145:16:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 28032,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1145:7:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28035,
                "mutability": "mutable",
                "name": "accessed",
                "nameLocation": "1179:8:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1171:16:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 28034,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28037,
                "mutability": "mutable",
                "name": "created",
                "nameLocation": "1205:7:76",
                "nodeType": "VariableDeclaration",
                "scope": 28038,
                "src": "1197:15:76",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 28036,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:76",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FsMetadata",
            "nameLocation": "1033:10:76",
            "scope": 29055,
            "visibility": "public"
          },
          {
            "id": 28047,
            "nodeType": "FunctionDefinition",
            "src": "1269:81:76",
            "nodes": [],
            "functionSelector": "667f9d70",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1278:4:76",
            "parameters": {
              "id": 28043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28040,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "1291:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28047,
                  "src": "1283:14:76",
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
                    "src": "1283:7:76",
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
                  "name": "slot",
                  "nameLocation": "1307:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28047,
                  "src": "1299:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28041,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1299:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:30:76"
            },
            "returnParameters": {
              "id": 28046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28045,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28047,
                  "src": "1336:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28044,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1335:14:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28060,
            "nodeType": "FunctionDefinition",
            "src": "1373:104:76",
            "nodes": [],
            "functionSelector": "e341eaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sign",
            "nameLocation": "1382:4:76",
            "parameters": {
              "id": 28052,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28049,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1395:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28060,
                  "src": "1387:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28051,
                  "mutability": "mutable",
                  "name": "digest",
                  "nameLocation": "1415:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28060,
                  "src": "1407:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28050,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1386:36:76"
            },
            "returnParameters": {
              "id": 28059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28054,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1452:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28060,
                  "src": "1446:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 28053,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28056,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1463:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28060,
                  "src": "1455:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28055,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1455:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28058,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1474:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28060,
                  "src": "1466:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28057,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:31:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28067,
            "nodeType": "FunctionDefinition",
            "src": "1530:74:76",
            "nodes": [],
            "functionSelector": "ffa18649",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addr",
            "nameLocation": "1539:4:76",
            "parameters": {
              "id": 28063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28062,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1552:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28067,
                  "src": "1544:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28061,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:20:76"
            },
            "returnParameters": {
              "id": 28066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28065,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "1595:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28067,
                  "src": "1587:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28064,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1586:17:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28074,
            "nodeType": "FunctionDefinition",
            "src": "1645:72:76",
            "nodes": [],
            "functionSelector": "2d0335ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "1654:8:76",
            "parameters": {
              "id": 28070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28069,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1671:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28074,
                  "src": "1663:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:17:76"
            },
            "returnParameters": {
              "id": 28073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28072,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1710:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28074,
                  "src": "1703:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28071,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28082,
            "nodeType": "FunctionDefinition",
            "src": "1779:84:76",
            "nodes": [],
            "functionSelector": "89160467",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ffi",
            "nameLocation": "1788:3:76",
            "parameters": {
              "id": 28078,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28077,
                  "mutability": "mutable",
                  "name": "commandInput",
                  "nameLocation": "1810:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28082,
                  "src": "1792:30:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28075,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1792:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28076,
                    "nodeType": "ArrayTypeName",
                    "src": "1792:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1791:32:76"
            },
            "returnParameters": {
              "id": 28081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28080,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1855:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28082,
                  "src": "1842:19:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28079,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:21:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28089,
            "nodeType": "FunctionDefinition",
            "src": "1902:70:76",
            "nodes": [],
            "functionSelector": "3d5923ee",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setEnv",
            "nameLocation": "1911:6:76",
            "parameters": {
              "id": 28087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28084,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1934:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28089,
                  "src": "1918:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28083,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28086,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1956:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28089,
                  "src": "1940:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28085,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1940:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:45:76"
            },
            "returnParameters": {
              "id": 28088,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1971:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28096,
            "nodeType": "FunctionDefinition",
            "src": "2031:74:76",
            "nodes": [],
            "functionSelector": "7ed1ec7d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2040:7:76",
            "parameters": {
              "id": 28092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28091,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2064:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28096,
                  "src": "2048:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28090,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2048:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2047:22:76"
            },
            "returnParameters": {
              "id": 28095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28094,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2098:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28096,
                  "src": "2093:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28093,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2093:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2092:12:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28103,
            "nodeType": "FunctionDefinition",
            "src": "2110:77:76",
            "nodes": [],
            "functionSelector": "c1978d1f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2119:7:76",
            "parameters": {
              "id": 28099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28098,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2143:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28103,
                  "src": "2127:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28097,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2127:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2126:22:76"
            },
            "returnParameters": {
              "id": 28102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28101,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2180:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28103,
                  "src": "2172:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2171:15:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28110,
            "nodeType": "FunctionDefinition",
            "src": "2192:75:76",
            "nodes": [],
            "functionSelector": "892a0c61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2201:6:76",
            "parameters": {
              "id": 28106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28105,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2224:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28110,
                  "src": "2208:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28104,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2208:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2207:22:76"
            },
            "returnParameters": {
              "id": 28109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28108,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2260:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28110,
                  "src": "2253:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28107,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2253:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2252:14:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28117,
            "nodeType": "FunctionDefinition",
            "src": "2272:80:76",
            "nodes": [],
            "functionSelector": "350d56bf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "2281:10:76",
            "parameters": {
              "id": 28113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28112,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2308:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28117,
                  "src": "2292:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28111,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:22:76"
            },
            "returnParameters": {
              "id": 28116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28115,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2345:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28117,
                  "src": "2337:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2336:15:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28124,
            "nodeType": "FunctionDefinition",
            "src": "2357:80:76",
            "nodes": [],
            "functionSelector": "97949042",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "2366:10:76",
            "parameters": {
              "id": 28120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28119,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2393:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28124,
                  "src": "2377:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28118,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2376:22:76"
            },
            "returnParameters": {
              "id": 28123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28122,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2430:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28124,
                  "src": "2422:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28121,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2421:15:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28131,
            "nodeType": "FunctionDefinition",
            "src": "2442:85:76",
            "nodes": [],
            "functionSelector": "f877cb19",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "2451:9:76",
            "parameters": {
              "id": 28127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28126,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2477:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28131,
                  "src": "2461:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28125,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2460:22:76"
            },
            "returnParameters": {
              "id": 28130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28129,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2520:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28131,
                  "src": "2506:19:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28128,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2505:21:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28138,
            "nodeType": "FunctionDefinition",
            "src": "2532:83:76",
            "nodes": [],
            "functionSelector": "4d7baf06",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "2541:8:76",
            "parameters": {
              "id": 28134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28133,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2566:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28138,
                  "src": "2550:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2549:22:76"
            },
            "returnParameters": {
              "id": 28137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28136,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2608:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28138,
                  "src": "2595:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28135,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2595:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2594:20:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28148,
            "nodeType": "FunctionDefinition",
            "src": "2665:106:76",
            "nodes": [],
            "functionSelector": "aaaddeaf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2674:7:76",
            "parameters": {
              "id": 28143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28140,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2698:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28148,
                  "src": "2682:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28139,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2682:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28142,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2720:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28148,
                  "src": "2704:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28141,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2681:45:76"
            },
            "returnParameters": {
              "id": 28147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28146,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2764:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28148,
                  "src": "2750:19:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28144,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2750:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28145,
                    "nodeType": "ArrayTypeName",
                    "src": "2750:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2749:21:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28158,
            "nodeType": "FunctionDefinition",
            "src": "2776:109:76",
            "nodes": [],
            "functionSelector": "f3dec099",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2785:7:76",
            "parameters": {
              "id": 28153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28150,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2809:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28158,
                  "src": "2793:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2793:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28152,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2831:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28158,
                  "src": "2815:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28151,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2792:45:76"
            },
            "returnParameters": {
              "id": 28157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28156,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2878:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28158,
                  "src": "2861:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28154,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2861:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28155,
                    "nodeType": "ArrayTypeName",
                    "src": "2861:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2860:24:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28168,
            "nodeType": "FunctionDefinition",
            "src": "2890:107:76",
            "nodes": [],
            "functionSelector": "42181150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2899:6:76",
            "parameters": {
              "id": 28163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28160,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2922:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28168,
                  "src": "2906:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28159,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28162,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2944:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28168,
                  "src": "2928:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28161,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2928:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2905:45:76"
            },
            "returnParameters": {
              "id": 28167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28166,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2990:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28168,
                  "src": "2974:21:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28164,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2974:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28165,
                    "nodeType": "ArrayTypeName",
                    "src": "2974:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:23:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28178,
            "nodeType": "FunctionDefinition",
            "src": "3002:112:76",
            "nodes": [],
            "functionSelector": "ad31b9fa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "3011:10:76",
            "parameters": {
              "id": 28173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28170,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3038:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28178,
                  "src": "3022:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28169,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28172,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3060:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28178,
                  "src": "3044:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28171,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3044:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3021:45:76"
            },
            "returnParameters": {
              "id": 28177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28176,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3107:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28178,
                  "src": "3090:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28174,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3090:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28175,
                    "nodeType": "ArrayTypeName",
                    "src": "3090:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:24:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28188,
            "nodeType": "FunctionDefinition",
            "src": "3119:112:76",
            "nodes": [],
            "functionSelector": "5af231c1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "3128:10:76",
            "parameters": {
              "id": 28183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28180,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3155:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28188,
                  "src": "3139:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28179,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28182,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3177:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28188,
                  "src": "3161:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28181,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3138:45:76"
            },
            "returnParameters": {
              "id": 28187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28186,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3224:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28188,
                  "src": "3207:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28184,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3207:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28185,
                    "nodeType": "ArrayTypeName",
                    "src": "3207:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:24:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28198,
            "nodeType": "FunctionDefinition",
            "src": "3236:110:76",
            "nodes": [],
            "functionSelector": "14b02bc9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "3245:9:76",
            "parameters": {
              "id": 28193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28190,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3271:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28198,
                  "src": "3255:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28189,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28192,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3293:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28198,
                  "src": "3277:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28191,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3277:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:45:76"
            },
            "returnParameters": {
              "id": 28197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28196,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3339:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28198,
                  "src": "3323:21:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28194,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3323:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28195,
                    "nodeType": "ArrayTypeName",
                    "src": "3323:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3322:23:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28208,
            "nodeType": "FunctionDefinition",
            "src": "3351:108:76",
            "nodes": [],
            "functionSelector": "ddc2651b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "3360:8:76",
            "parameters": {
              "id": 28203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28200,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3385:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28208,
                  "src": "3369:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28199,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3369:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28202,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3407:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28208,
                  "src": "3391:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28201,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3391:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3368:45:76"
            },
            "returnParameters": {
              "id": 28207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28206,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3452:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28208,
                  "src": "3437:20:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28204,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3437:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28205,
                    "nodeType": "ArrayTypeName",
                    "src": "3437:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3436:22:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28217,
            "nodeType": "FunctionDefinition",
            "src": "3517:86:76",
            "nodes": [],
            "functionSelector": "4777f3cf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3526:5:76",
            "parameters": {
              "id": 28213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28210,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3548:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28217,
                  "src": "3532:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28209,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28212,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3559:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28217,
                  "src": "3554:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28211,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3554:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:41:76"
            },
            "returnParameters": {
              "id": 28216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28215,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3596:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28217,
                  "src": "3591:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28214,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3591:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3590:12:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28226,
            "nodeType": "FunctionDefinition",
            "src": "3608:92:76",
            "nodes": [],
            "functionSelector": "5e97348f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3617:5:76",
            "parameters": {
              "id": 28222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28219,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3639:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28226,
                  "src": "3623:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28218,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28221,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3653:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28226,
                  "src": "3645:20:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3645:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3622:44:76"
            },
            "returnParameters": {
              "id": 28225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28224,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3693:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28226,
                  "src": "3685:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3685:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3684:15:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28235,
            "nodeType": "FunctionDefinition",
            "src": "3705:90:76",
            "nodes": [],
            "functionSelector": "bbcb713e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3714:5:76",
            "parameters": {
              "id": 28231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28228,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3736:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28235,
                  "src": "3720:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28227,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28230,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3749:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28235,
                  "src": "3742:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28229,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3742:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3719:43:76"
            },
            "returnParameters": {
              "id": 28234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28233,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3788:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28235,
                  "src": "3781:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28232,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3781:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3780:14:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28244,
            "nodeType": "FunctionDefinition",
            "src": "3800:92:76",
            "nodes": [],
            "functionSelector": "561fe540",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3809:5:76",
            "parameters": {
              "id": 28240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28237,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3831:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28244,
                  "src": "3815:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28236,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28239,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3845:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28244,
                  "src": "3837:20:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3837:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:44:76"
            },
            "returnParameters": {
              "id": 28243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28242,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3885:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28244,
                  "src": "3877:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3877:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3876:15:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28253,
            "nodeType": "FunctionDefinition",
            "src": "3897:92:76",
            "nodes": [],
            "functionSelector": "b4a85892",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3906:5:76",
            "parameters": {
              "id": 28249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28246,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3928:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28253,
                  "src": "3912:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28245,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3912:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28248,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3942:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28253,
                  "src": "3934:20:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28247,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3911:44:76"
            },
            "returnParameters": {
              "id": 28252,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28251,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3982:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28253,
                  "src": "3974:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28250,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:15:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28262,
            "nodeType": "FunctionDefinition",
            "src": "3994:106:76",
            "nodes": [],
            "functionSelector": "d145736c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4003:5:76",
            "parameters": {
              "id": 28258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28255,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4025:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28262,
                  "src": "4009:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28254,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4009:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28257,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4047:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28262,
                  "src": "4031:28:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28256,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4031:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4008:52:76"
            },
            "returnParameters": {
              "id": 28261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28260,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4093:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28262,
                  "src": "4079:19:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28259,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4079:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4078:21:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28271,
            "nodeType": "FunctionDefinition",
            "src": "4105:104:76",
            "nodes": [],
            "functionSelector": "b3e47705",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4114:5:76",
            "parameters": {
              "id": 28267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28264,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4136:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28271,
                  "src": "4120:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28263,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4120:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28266,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4157:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28271,
                  "src": "4142:27:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28265,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4142:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4119:51:76"
            },
            "returnParameters": {
              "id": 28270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28269,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4202:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28271,
                  "src": "4189:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28268,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28284,
            "nodeType": "FunctionDefinition",
            "src": "4277:145:76",
            "nodes": [],
            "functionSelector": "eb85e83b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4286:5:76",
            "parameters": {
              "id": 28279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28273,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4308:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28284,
                  "src": "4292:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28272,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4292:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28275,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4330:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28284,
                  "src": "4314:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28274,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28278,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4353:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28284,
                  "src": "4337:28:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28276,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4337:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28277,
                    "nodeType": "ArrayTypeName",
                    "src": "4337:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4291:75:76"
            },
            "returnParameters": {
              "id": 28283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28282,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4415:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28284,
                  "src": "4401:19:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28280,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4401:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28281,
                    "nodeType": "ArrayTypeName",
                    "src": "4401:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4400:21:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28297,
            "nodeType": "FunctionDefinition",
            "src": "4427:151:76",
            "nodes": [],
            "functionSelector": "74318528",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4436:5:76",
            "parameters": {
              "id": 28292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28286,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4458:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28297,
                  "src": "4442:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28285,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4442:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28288,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4480:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28297,
                  "src": "4464:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28287,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28291,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4506:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28297,
                  "src": "4487:31:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28289,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4487:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28290,
                    "nodeType": "ArrayTypeName",
                    "src": "4487:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4441:78:76"
            },
            "returnParameters": {
              "id": 28296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28295,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4571:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28297,
                  "src": "4554:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28293,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4554:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28294,
                    "nodeType": "ArrayTypeName",
                    "src": "4554:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:24:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28310,
            "nodeType": "FunctionDefinition",
            "src": "4583:149:76",
            "nodes": [],
            "functionSelector": "4700d74b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4592:5:76",
            "parameters": {
              "id": 28305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28299,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4614:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28310,
                  "src": "4598:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28298,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4598:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28301,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4636:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28310,
                  "src": "4620:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28300,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28304,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4661:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28310,
                  "src": "4643:30:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28302,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28303,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4597:77:76"
            },
            "returnParameters": {
              "id": 28309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28308,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4725:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28310,
                  "src": "4709:21:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28306,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4709:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28307,
                    "nodeType": "ArrayTypeName",
                    "src": "4709:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:23:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28323,
            "nodeType": "FunctionDefinition",
            "src": "4737:151:76",
            "nodes": [],
            "functionSelector": "c74e9deb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4746:5:76",
            "parameters": {
              "id": 28318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28312,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4768:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28323,
                  "src": "4752:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28311,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4752:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28314,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4790:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28323,
                  "src": "4774:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28313,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4774:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28317,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4816:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28323,
                  "src": "4797:31:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28315,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4797:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28316,
                    "nodeType": "ArrayTypeName",
                    "src": "4797:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4751:78:76"
            },
            "returnParameters": {
              "id": 28322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28321,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4881:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28323,
                  "src": "4864:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28319,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4864:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28320,
                    "nodeType": "ArrayTypeName",
                    "src": "4864:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:24:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28336,
            "nodeType": "FunctionDefinition",
            "src": "4893:151:76",
            "nodes": [],
            "functionSelector": "2281f367",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4902:5:76",
            "parameters": {
              "id": 28331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28325,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4924:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28336,
                  "src": "4908:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28327,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4946:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28336,
                  "src": "4930:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28326,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4930:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28330,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4972:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28336,
                  "src": "4953:31:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28328,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4953:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28329,
                    "nodeType": "ArrayTypeName",
                    "src": "4953:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4907:78:76"
            },
            "returnParameters": {
              "id": 28335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28334,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5037:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28336,
                  "src": "5020:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28332,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5020:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28333,
                    "nodeType": "ArrayTypeName",
                    "src": "5020:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5019:24:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28349,
            "nodeType": "FunctionDefinition",
            "src": "5049:149:76",
            "nodes": [],
            "functionSelector": "859216bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5058:5:76",
            "parameters": {
              "id": 28344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28338,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5080:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28349,
                  "src": "5064:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28337,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5064:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28340,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5102:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28349,
                  "src": "5086:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28339,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5086:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28343,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5127:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28349,
                  "src": "5109:30:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28341,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5109:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28342,
                    "nodeType": "ArrayTypeName",
                    "src": "5109:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5063:77:76"
            },
            "returnParameters": {
              "id": 28348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28347,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5191:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28349,
                  "src": "5175:21:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28345,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5175:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28346,
                    "nodeType": "ArrayTypeName",
                    "src": "5175:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5174:23:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28362,
            "nodeType": "FunctionDefinition",
            "src": "5203:147:76",
            "nodes": [],
            "functionSelector": "64bc3e64",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5212:5:76",
            "parameters": {
              "id": 28357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28351,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5234:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28362,
                  "src": "5218:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28350,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5218:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28353,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5256:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28362,
                  "src": "5240:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28352,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5240:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28356,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5280:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28362,
                  "src": "5263:29:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28354,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5263:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28355,
                    "nodeType": "ArrayTypeName",
                    "src": "5263:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5217:76:76"
            },
            "returnParameters": {
              "id": 28361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28360,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5343:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28362,
                  "src": "5328:20:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28358,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5328:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28359,
                    "nodeType": "ArrayTypeName",
                    "src": "5328:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5327:22:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28365,
            "nodeType": "FunctionDefinition",
            "src": "5399:27:76",
            "nodes": [],
            "functionSelector": "266cf109",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "record",
            "nameLocation": "5408:6:76",
            "parameters": {
              "id": 28363,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5414:2:76"
            },
            "returnParameters": {
              "id": 28364,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28376,
            "nodeType": "FunctionDefinition",
            "src": "5523:109:76",
            "nodes": [],
            "functionSelector": "65bc9481",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accesses",
            "nameLocation": "5532:8:76",
            "parameters": {
              "id": 28368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28367,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5549:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28376,
                  "src": "5541:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28366,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5541:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5540:16:76"
            },
            "returnParameters": {
              "id": 28375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28371,
                  "mutability": "mutable",
                  "name": "readSlots",
                  "nameLocation": "5592:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28376,
                  "src": "5575:26:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28369,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5575:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28370,
                    "nodeType": "ArrayTypeName",
                    "src": "5575:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28374,
                  "mutability": "mutable",
                  "name": "writeSlots",
                  "nameLocation": "5620:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28376,
                  "src": "5603:27:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28372,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5603:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28373,
                    "nodeType": "ArrayTypeName",
                    "src": "5603:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:57:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28383,
            "nodeType": "FunctionDefinition",
            "src": "5740:101:76",
            "nodes": [],
            "functionSelector": "8d1cc925",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCode",
            "nameLocation": "5749:7:76",
            "parameters": {
              "id": 28379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28378,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5773:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28383,
                  "src": "5757:28:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28377,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5757:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5756:30:76"
            },
            "returnParameters": {
              "id": 28382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28381,
                  "mutability": "mutable",
                  "name": "creationBytecode",
                  "nameLocation": "5823:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28383,
                  "src": "5810:29:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28380,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:31:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28390,
            "nodeType": "FunctionDefinition",
            "src": "5949:108:76",
            "nodes": [],
            "functionSelector": "3ebf73b4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployedCode",
            "nameLocation": "5958:15:76",
            "parameters": {
              "id": 28386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28385,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5990:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28390,
                  "src": "5974:28:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:30:76"
            },
            "returnParameters": {
              "id": 28389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28388,
                  "mutability": "mutable",
                  "name": "runtimeBytecode",
                  "nameLocation": "6040:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28390,
                  "src": "6027:28:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28387,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6027:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6026:30:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28397,
            "nodeType": "FunctionDefinition",
            "src": "6102:67:76",
            "nodes": [],
            "functionSelector": "c657c718",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "label",
            "nameLocation": "6111:5:76",
            "parameters": {
              "id": 28395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28392,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6125:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28397,
                  "src": "6117:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28391,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:76",
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
                  "id": 28394,
                  "mutability": "mutable",
                  "name": "newLabel",
                  "nameLocation": "6150:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28397,
                  "src": "6134:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28393,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6134:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6116:43:76"
            },
            "returnParameters": {
              "id": 28396,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6168:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28404,
            "nodeType": "FunctionDefinition",
            "src": "6222:81:76",
            "nodes": [],
            "functionSelector": "28a249b0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLabel",
            "nameLocation": "6231:8:76",
            "parameters": {
              "id": 28400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28399,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6248:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28404,
                  "src": "6240:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:17:76"
            },
            "returnParameters": {
              "id": 28403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28402,
                  "mutability": "mutable",
                  "name": "currentLabel",
                  "nameLocation": "6289:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28404,
                  "src": "6275:26:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28401,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:28:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28407,
            "nodeType": "FunctionDefinition",
            "src": "6470:30:76",
            "nodes": [],
            "functionSelector": "afc98040",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6479:9:76",
            "parameters": {
              "id": 28405,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6488:2:76"
            },
            "returnParameters": {
              "id": 28406,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6499:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28412,
            "nodeType": "FunctionDefinition",
            "src": "6659:44:76",
            "nodes": [],
            "functionSelector": "e6962cdb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6668:9:76",
            "parameters": {
              "id": 28410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28409,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "6686:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28412,
                  "src": "6678:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28408,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6677:16:76"
            },
            "returnParameters": {
              "id": 28411,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6702:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28417,
            "nodeType": "FunctionDefinition",
            "src": "6866:48:76",
            "nodes": [],
            "functionSelector": "f67a965b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6875:9:76",
            "parameters": {
              "id": 28415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28414,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "6893:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28417,
                  "src": "6885:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6885:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6884:20:76"
            },
            "returnParameters": {
              "id": 28416,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6913:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28420,
            "nodeType": "FunctionDefinition",
            "src": "7087:35:76",
            "nodes": [],
            "functionSelector": "7fb5297f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7096:14:76",
            "parameters": {
              "id": 28418,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7110:2:76"
            },
            "returnParameters": {
              "id": 28419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7121:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28425,
            "nodeType": "FunctionDefinition",
            "src": "7273:49:76",
            "nodes": [],
            "functionSelector": "7fec2a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7282:14:76",
            "parameters": {
              "id": 28423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28422,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "7305:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28425,
                  "src": "7297:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:16:76"
            },
            "returnParameters": {
              "id": 28424,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7321:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28430,
            "nodeType": "FunctionDefinition",
            "src": "7477:53:76",
            "nodes": [],
            "functionSelector": "ce817d47",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7486:14:76",
            "parameters": {
              "id": 28428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28427,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "7509:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28430,
                  "src": "7501:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7500:20:76"
            },
            "returnParameters": {
              "id": 28429,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7529:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28433,
            "nodeType": "FunctionDefinition",
            "src": "7580:34:76",
            "nodes": [],
            "functionSelector": "76eadd36",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopBroadcast",
            "nameLocation": "7589:13:76",
            "parameters": {
              "id": 28431,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7602:2:76"
            },
            "returnParameters": {
              "id": 28432,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7613:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28438,
            "nodeType": "FunctionDefinition",
            "src": "7669:66:76",
            "nodes": [],
            "functionSelector": "d930a0e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "projectRoot",
            "nameLocation": "7678:11:76",
            "parameters": {
              "id": 28434,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7689:2:76"
            },
            "returnParameters": {
              "id": 28437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28436,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7729:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28438,
                  "src": "7715:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28435,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7715:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7714:20:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28445,
            "nodeType": "FunctionDefinition",
            "src": "7831:83:76",
            "nodes": [],
            "functionSelector": "60f9bb11",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFile",
            "nameLocation": "7840:8:76",
            "parameters": {
              "id": 28441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28440,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7865:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28445,
                  "src": "7849:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28439,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7849:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7848:22:76"
            },
            "returnParameters": {
              "id": 28444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28443,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7908:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28445,
                  "src": "7894:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28442,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7893:20:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28452,
            "nodeType": "FunctionDefinition",
            "src": "8010:88:76",
            "nodes": [],
            "functionSelector": "16ed7bc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFileBinary",
            "nameLocation": "8019:14:76",
            "parameters": {
              "id": 28448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28447,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8050:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28452,
                  "src": "8034:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28446,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8034:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8033:22:76"
            },
            "returnParameters": {
              "id": 28451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28450,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8092:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28452,
                  "src": "8079:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28449,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8079:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8078:19:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28459,
            "nodeType": "FunctionDefinition",
            "src": "8145:83:76",
            "nodes": [],
            "functionSelector": "70f55728",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLine",
            "nameLocation": "8154:8:76",
            "parameters": {
              "id": 28455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28454,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8179:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28459,
                  "src": "8163:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28453,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8162:22:76"
            },
            "returnParameters": {
              "id": 28458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28457,
                  "mutability": "mutable",
                  "name": "line",
                  "nameLocation": "8222:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28459,
                  "src": "8208:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28456,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8208:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8207:20:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28466,
            "nodeType": "FunctionDefinition",
            "src": "8394:72:76",
            "nodes": [],
            "functionSelector": "897e0a97",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFile",
            "nameLocation": "8403:9:76",
            "parameters": {
              "id": 28464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28461,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8429:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28466,
                  "src": "8413:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28460,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8413:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28463,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8451:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28466,
                  "src": "8435:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28462,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8435:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8412:44:76"
            },
            "returnParameters": {
              "id": 28465,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8465:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28473,
            "nodeType": "FunctionDefinition",
            "src": "8641:77:76",
            "nodes": [],
            "functionSelector": "1f21fc80",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFileBinary",
            "nameLocation": "8650:15:76",
            "parameters": {
              "id": 28471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28468,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8682:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28473,
                  "src": "8666:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28467,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28470,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8703:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28473,
                  "src": "8688:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28469,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8688:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:43:76"
            },
            "returnParameters": {
              "id": 28472,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8717:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28480,
            "nodeType": "FunctionDefinition",
            "src": "8836:72:76",
            "nodes": [],
            "functionSelector": "619d897f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeLine",
            "nameLocation": "8845:9:76",
            "parameters": {
              "id": 28478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28475,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8871:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28480,
                  "src": "8855:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28474,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8855:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28477,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8893:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28480,
                  "src": "8877:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28476,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8877:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8854:44:76"
            },
            "returnParameters": {
              "id": 28479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8907:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28485,
            "nodeType": "FunctionDefinition",
            "src": "9067:50:76",
            "nodes": [],
            "functionSelector": "48c3241f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeFile",
            "nameLocation": "9076:9:76",
            "parameters": {
              "id": 28483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28482,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9102:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28485,
                  "src": "9086:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28481,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9085:22:76"
            },
            "returnParameters": {
              "id": 28484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9116:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28490,
            "nodeType": "FunctionDefinition",
            "src": "9443:51:76",
            "nodes": [],
            "functionSelector": "f1afe04d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeFile",
            "nameLocation": "9452:10:76",
            "parameters": {
              "id": 28488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28487,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9479:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28490,
                  "src": "9463:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28486,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9463:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9462:22:76"
            },
            "returnParameters": {
              "id": 28489,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9493:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28497,
            "nodeType": "FunctionDefinition",
            "src": "9892:66:76",
            "nodes": [],
            "functionSelector": "168b64d3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createDir",
            "nameLocation": "9901:9:76",
            "parameters": {
              "id": 28495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28492,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9927:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28497,
                  "src": "9911:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28491,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9911:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28494,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "9938:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28497,
                  "src": "9933:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28493,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9933:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9910:38:76"
            },
            "returnParameters": {
              "id": 28496,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9957:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28504,
            "nodeType": "FunctionDefinition",
            "src": "10340:66:76",
            "nodes": [],
            "functionSelector": "45c62011",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeDir",
            "nameLocation": "10349:9:76",
            "parameters": {
              "id": 28502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28499,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10375:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28504,
                  "src": "10359:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28498,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10359:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28501,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "10386:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28504,
                  "src": "10381:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28500,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10358:38:76"
            },
            "returnParameters": {
              "id": 28503,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10405:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28513,
            "nodeType": "FunctionDefinition",
            "src": "10653:89:76",
            "nodes": [],
            "functionSelector": "c4bc59e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10662:7:76",
            "parameters": {
              "id": 28507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28506,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10686:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28513,
                  "src": "10670:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28505,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10670:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10669:22:76"
            },
            "returnParameters": {
              "id": 28512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28511,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10733:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28513,
                  "src": "10715:25:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28509,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28508,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10715:8:76"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28023,
                        "src": "10715:8:76"
                      },
                      "referencedDeclaration": 28023,
                      "src": "10715:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$28023_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 28510,
                    "nodeType": "ArrayTypeName",
                    "src": "10715:10:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10714:27:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28524,
            "nodeType": "FunctionDefinition",
            "src": "10747:106:76",
            "nodes": [],
            "functionSelector": "1497876c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10756:7:76",
            "parameters": {
              "id": 28518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28515,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10780:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28524,
                  "src": "10764:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28514,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10764:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28517,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10793:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28524,
                  "src": "10786:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28516,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10786:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10763:39:76"
            },
            "returnParameters": {
              "id": 28523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28522,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10844:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28524,
                  "src": "10826:25:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28520,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28519,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10826:8:76"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28023,
                        "src": "10826:8:76"
                      },
                      "referencedDeclaration": 28023,
                      "src": "10826:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$28023_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 28521,
                    "nodeType": "ArrayTypeName",
                    "src": "10826:10:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10825:27:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28537,
            "nodeType": "FunctionDefinition",
            "src": "10858:148:76",
            "nodes": [],
            "functionSelector": "8102d70d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10867:7:76",
            "parameters": {
              "id": 28531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28526,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10891:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28537,
                  "src": "10875:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28525,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10875:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28528,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10904:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28537,
                  "src": "10897:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28527,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10897:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28530,
                  "mutability": "mutable",
                  "name": "followLinks",
                  "nameLocation": "10919:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28537,
                  "src": "10914:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28529,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10914:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10874:57:76"
            },
            "returnParameters": {
              "id": 28536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28535,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10997:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28537,
                  "src": "10979:25:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28533,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28532,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10979:8:76"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28023,
                        "src": "10979:8:76"
                      },
                      "referencedDeclaration": 28023,
                      "src": "10979:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$28023_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 28534,
                    "nodeType": "ArrayTypeName",
                    "src": "10979:10:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$28023_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10978:27:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28544,
            "nodeType": "FunctionDefinition",
            "src": "11260:93:76",
            "nodes": [],
            "functionSelector": "9f5684a2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLink",
            "nameLocation": "11269:8:76",
            "parameters": {
              "id": 28540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28539,
                  "mutability": "mutable",
                  "name": "linkPath",
                  "nameLocation": "11294:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28544,
                  "src": "11278:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28538,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11278:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11277:26:76"
            },
            "returnParameters": {
              "id": 28543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28542,
                  "mutability": "mutable",
                  "name": "targetPath",
                  "nameLocation": "11341:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28544,
                  "src": "11327:24:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28541,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11327:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11326:26:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28552,
            "nodeType": "FunctionDefinition",
            "src": "11450:93:76",
            "nodes": [],
            "functionSelector": "af368a08",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fsMetadata",
            "nameLocation": "11459:10:76",
            "parameters": {
              "id": 28547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28546,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "11486:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28552,
                  "src": "11470:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11470:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:22:76"
            },
            "returnParameters": {
              "id": 28551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28550,
                  "mutability": "mutable",
                  "name": "metadata",
                  "nameLocation": "11533:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28552,
                  "src": "11515:26:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FsMetadata_$28038_memory_ptr",
                    "typeString": "struct VmSafe.FsMetadata"
                  },
                  "typeName": {
                    "id": 28549,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28548,
                      "name": "FsMetadata",
                      "nameLocations": [
                        "11515:10:76"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 28038,
                      "src": "11515:10:76"
                    },
                    "referencedDeclaration": 28038,
                    "src": "11515:10:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FsMetadata_$28038_storage_ptr",
                      "typeString": "struct VmSafe.FsMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11514:28:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28559,
            "nodeType": "FunctionDefinition",
            "src": "11583:88:76",
            "nodes": [],
            "functionSelector": "56ca623e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11592:8:76",
            "parameters": {
              "id": 28555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28554,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11609:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28559,
                  "src": "11601:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11601:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11600:15:76"
            },
            "returnParameters": {
              "id": 28558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28557,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11653:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28559,
                  "src": "11639:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28556,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11639:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11638:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28566,
            "nodeType": "FunctionDefinition",
            "src": "11676:95:76",
            "nodes": [],
            "functionSelector": "71aad10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11685:8:76",
            "parameters": {
              "id": 28562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28561,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11709:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28566,
                  "src": "11694:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28560,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11694:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11693:22:76"
            },
            "returnParameters": {
              "id": 28565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28564,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11753:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28566,
                  "src": "11739:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28563,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11739:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11738:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28573,
            "nodeType": "FunctionDefinition",
            "src": "11776:88:76",
            "nodes": [],
            "functionSelector": "b11a19e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11785:8:76",
            "parameters": {
              "id": 28569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28568,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11802:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28573,
                  "src": "11794:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28567,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11794:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11793:15:76"
            },
            "returnParameters": {
              "id": 28572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28571,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11846:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28573,
                  "src": "11832:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28570,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11832:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11831:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28580,
            "nodeType": "FunctionDefinition",
            "src": "11869:85:76",
            "nodes": [],
            "functionSelector": "71dce7da",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11878:8:76",
            "parameters": {
              "id": 28576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28575,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11892:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28580,
                  "src": "11887:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28574,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11887:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11886:12:76"
            },
            "returnParameters": {
              "id": 28579,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28578,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11936:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28580,
                  "src": "11922:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28577,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11922:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11921:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28587,
            "nodeType": "FunctionDefinition",
            "src": "11959:88:76",
            "nodes": [],
            "functionSelector": "6900a3ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11968:8:76",
            "parameters": {
              "id": 28583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28582,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11985:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28587,
                  "src": "11977:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11977:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11976:15:76"
            },
            "returnParameters": {
              "id": 28586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28585,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12029:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28587,
                  "src": "12015:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28584,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12015:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12014:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28594,
            "nodeType": "FunctionDefinition",
            "src": "12052:87:76",
            "nodes": [],
            "functionSelector": "a322c40e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "12061:8:76",
            "parameters": {
              "id": 28590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28589,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12077:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28594,
                  "src": "12070:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28588,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12070:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12069:14:76"
            },
            "returnParameters": {
              "id": 28593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28592,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12121:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28594,
                  "src": "12107:30:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28591,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12107:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12106:32:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28601,
            "nodeType": "FunctionDefinition",
            "src": "12180:103:76",
            "nodes": [],
            "functionSelector": "8f5d232d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes",
            "nameLocation": "12189:10:76",
            "parameters": {
              "id": 28597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28596,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12216:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28601,
                  "src": "12200:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28595,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12200:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12199:34:76"
            },
            "returnParameters": {
              "id": 28600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28599,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12270:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28601,
                  "src": "12257:24:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28598,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12257:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12256:26:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28608,
            "nodeType": "FunctionDefinition",
            "src": "12288:100:76",
            "nodes": [],
            "functionSelector": "c6ce059d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseAddress",
            "nameLocation": "12297:12:76",
            "parameters": {
              "id": 28604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28603,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12326:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28608,
                  "src": "12310:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28602,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12310:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12309:34:76"
            },
            "returnParameters": {
              "id": 28607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28606,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12375:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28608,
                  "src": "12367:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28605,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12367:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12366:21:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28615,
            "nodeType": "FunctionDefinition",
            "src": "12393:97:76",
            "nodes": [],
            "functionSelector": "fa91454d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseUint",
            "nameLocation": "12402:9:76",
            "parameters": {
              "id": 28611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28610,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12428:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28615,
                  "src": "12412:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28609,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12412:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12411:34:76"
            },
            "returnParameters": {
              "id": 28614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28613,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12477:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28615,
                  "src": "12469:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28612,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12469:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12468:21:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28622,
            "nodeType": "FunctionDefinition",
            "src": "12495:95:76",
            "nodes": [],
            "functionSelector": "42346c5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseInt",
            "nameLocation": "12504:8:76",
            "parameters": {
              "id": 28618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28617,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12529:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28622,
                  "src": "12513:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28616,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12513:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12512:34:76"
            },
            "returnParameters": {
              "id": 28621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28620,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12577:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28622,
                  "src": "12570:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28619,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12570:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12569:20:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28629,
            "nodeType": "FunctionDefinition",
            "src": "12595:100:76",
            "nodes": [],
            "functionSelector": "087e6e81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes32",
            "nameLocation": "12604:12:76",
            "parameters": {
              "id": 28625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28624,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12633:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28629,
                  "src": "12617:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28623,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12617:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12616:34:76"
            },
            "returnParameters": {
              "id": 28628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28627,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12682:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28629,
                  "src": "12674:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28626,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12674:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12673:21:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28636,
            "nodeType": "FunctionDefinition",
            "src": "12700:94:76",
            "nodes": [],
            "functionSelector": "974ef924",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBool",
            "nameLocation": "12709:9:76",
            "parameters": {
              "id": 28632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28631,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12735:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28636,
                  "src": "12719:32:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28630,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12719:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12718:34:76"
            },
            "returnParameters": {
              "id": 28635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28634,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12781:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28636,
                  "src": "12776:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28633,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12776:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12775:18:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28639,
            "nodeType": "FunctionDefinition",
            "src": "12838:31:76",
            "nodes": [],
            "functionSelector": "41af2f52",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "recordLogs",
            "nameLocation": "12847:10:76",
            "parameters": {
              "id": 28637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12857:2:76"
            },
            "returnParameters": {
              "id": 28638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12868:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28646,
            "nodeType": "FunctionDefinition",
            "src": "12908:64:76",
            "nodes": [],
            "functionSelector": "191553a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRecordedLogs",
            "nameLocation": "12917:15:76",
            "parameters": {
              "id": 28640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12932:2:76"
            },
            "returnParameters": {
              "id": 28645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28644,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "12966:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28646,
                  "src": "12953:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28642,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28641,
                        "name": "Log",
                        "nameLocations": [
                          "12953:3:76"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28007,
                        "src": "12953:3:76"
                      },
                      "referencedDeclaration": 28007,
                      "src": "12953:3:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$28007_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 28643,
                    "nodeType": "ArrayTypeName",
                    "src": "12953:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12952:19:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28655,
            "nodeType": "FunctionDefinition",
            "src": "13107:102:76",
            "nodes": [],
            "functionSelector": "6229498b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13116:9:76",
            "parameters": {
              "id": 28651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28648,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13142:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28655,
                  "src": "13126:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28647,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13126:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28650,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13159:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28655,
                  "src": "13152:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 28649,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13152:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13125:40:76"
            },
            "returnParameters": {
              "id": 28654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28653,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13197:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28655,
                  "src": "13189:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28652,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13189:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13188:20:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28666,
            "nodeType": "FunctionDefinition",
            "src": "13325:158:76",
            "nodes": [],
            "functionSelector": "6bcb2c1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13334:9:76",
            "parameters": {
              "id": 28662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28657,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13360:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28666,
                  "src": "13344:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28656,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13344:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28659,
                  "mutability": "mutable",
                  "name": "derivationPath",
                  "nameLocation": "13386:14:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28666,
                  "src": "13370:30:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28658,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13370:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28661,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13409:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28666,
                  "src": "13402:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 28660,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13402:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13343:72:76"
            },
            "returnParameters": {
              "id": 28665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28664,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13471:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28666,
                  "src": "13463:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13463:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13462:20:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28673,
            "nodeType": "FunctionDefinition",
            "src": "13564:76:76",
            "nodes": [],
            "functionSelector": "22100064",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rememberKey",
            "nameLocation": "13573:11:76",
            "parameters": {
              "id": 28669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28668,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13593:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28673,
                  "src": "13585:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13585:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13584:20:76"
            },
            "returnParameters": {
              "id": 28672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28671,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "13631:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28673,
                  "src": "13623:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28670,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13622:17:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28682,
            "nodeType": "FunctionDefinition",
            "src": "14673:114:76",
            "nodes": [],
            "functionSelector": "85940ef1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14682:9:76",
            "parameters": {
              "id": 28678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28675,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14708:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28682,
                  "src": "14692:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28674,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14692:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28677,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "14730:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28682,
                  "src": "14714:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28676,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14714:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14691:43:76"
            },
            "returnParameters": {
              "id": 28681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28680,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14771:14:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28682,
                  "src": "14758:27:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28679,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14758:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14757:29:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28689,
            "nodeType": "FunctionDefinition",
            "src": "14792:93:76",
            "nodes": [],
            "functionSelector": "6a82600a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14801:9:76",
            "parameters": {
              "id": 28685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28684,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14827:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28689,
                  "src": "14811:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28683,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14811:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14810:22:76"
            },
            "returnParameters": {
              "id": 28688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28687,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14869:14:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28689,
                  "src": "14856:27:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28686,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14856:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14855:29:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28698,
            "nodeType": "FunctionDefinition",
            "src": "15273:84:76",
            "nodes": [],
            "functionSelector": "addde2b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUint",
            "nameLocation": "15282:13:76",
            "parameters": {
              "id": 28694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28691,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28698,
                  "src": "15296:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28690,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15296:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28693,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28698,
                  "src": "15313:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15313:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15295:34:76"
            },
            "returnParameters": {
              "id": 28697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28698,
                  "src": "15348:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15348:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15347:9:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28708,
            "nodeType": "FunctionDefinition",
            "src": "15362:98:76",
            "nodes": [],
            "functionSelector": "522074ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUintArray",
            "nameLocation": "15371:18:76",
            "parameters": {
              "id": 28703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28700,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28708,
                  "src": "15390:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28699,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15390:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28702,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28708,
                  "src": "15407:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28701,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15389:34:76"
            },
            "returnParameters": {
              "id": 28707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28706,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28708,
                  "src": "15442:16:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28704,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15442:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28705,
                    "nodeType": "ArrayTypeName",
                    "src": "15442:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15441:18:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28717,
            "nodeType": "FunctionDefinition",
            "src": "15465:82:76",
            "nodes": [],
            "functionSelector": "7b048ccd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonInt",
            "nameLocation": "15474:12:76",
            "parameters": {
              "id": 28713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28710,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28717,
                  "src": "15487:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28709,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15487:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28712,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28717,
                  "src": "15504:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28711,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15504:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15486:34:76"
            },
            "returnParameters": {
              "id": 28716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28715,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28717,
                  "src": "15539:6:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28714,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15539:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15538:8:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28727,
            "nodeType": "FunctionDefinition",
            "src": "15552:96:76",
            "nodes": [],
            "functionSelector": "9983c28a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonIntArray",
            "nameLocation": "15561:17:76",
            "parameters": {
              "id": 28722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28719,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28727,
                  "src": "15579:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28718,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15579:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28721,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28727,
                  "src": "15596:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28720,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15596:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15578:34:76"
            },
            "returnParameters": {
              "id": 28726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28725,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28727,
                  "src": "15631:15:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28723,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15631:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28724,
                    "nodeType": "ArrayTypeName",
                    "src": "15631:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15630:17:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28736,
            "nodeType": "FunctionDefinition",
            "src": "15653:81:76",
            "nodes": [],
            "functionSelector": "9f86dc91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBool",
            "nameLocation": "15662:13:76",
            "parameters": {
              "id": 28732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28729,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28736,
                  "src": "15676:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28728,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15676:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28731,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28736,
                  "src": "15693:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28730,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15693:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15675:34:76"
            },
            "returnParameters": {
              "id": 28735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28734,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28736,
                  "src": "15728:4:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28733,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15728:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15727:6:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28746,
            "nodeType": "FunctionDefinition",
            "src": "15739:95:76",
            "nodes": [],
            "functionSelector": "91f3b94f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBoolArray",
            "nameLocation": "15748:18:76",
            "parameters": {
              "id": 28741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28738,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28746,
                  "src": "15767:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28737,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15767:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28740,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28746,
                  "src": "15784:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28739,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15784:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15766:34:76"
            },
            "returnParameters": {
              "id": 28745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28744,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28746,
                  "src": "15819:13:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28742,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "15819:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28743,
                    "nodeType": "ArrayTypeName",
                    "src": "15819:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15818:15:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28755,
            "nodeType": "FunctionDefinition",
            "src": "15839:87:76",
            "nodes": [],
            "functionSelector": "1e19e657",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddress",
            "nameLocation": "15848:16:76",
            "parameters": {
              "id": 28751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28748,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "15865:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28747,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28750,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "15882:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28749,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15882:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15864:34:76"
            },
            "returnParameters": {
              "id": 28754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28753,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "15917:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15917:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15916:9:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28765,
            "nodeType": "FunctionDefinition",
            "src": "15931:101:76",
            "nodes": [],
            "functionSelector": "2fce7883",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddressArray",
            "nameLocation": "15940:21:76",
            "parameters": {
              "id": 28760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28757,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28765,
                  "src": "15962:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28756,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15962:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28759,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28765,
                  "src": "15979:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28758,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15979:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15961:34:76"
            },
            "returnParameters": {
              "id": 28764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28763,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28765,
                  "src": "16014:16:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28761,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "16014:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28762,
                    "nodeType": "ArrayTypeName",
                    "src": "16014:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16013:18:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28774,
            "nodeType": "FunctionDefinition",
            "src": "16037:92:76",
            "nodes": [],
            "functionSelector": "49c4fac8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonString",
            "nameLocation": "16046:15:76",
            "parameters": {
              "id": 28770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28767,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28774,
                  "src": "16062:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28766,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16062:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28769,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28774,
                  "src": "16079:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28768,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16079:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16061:34:76"
            },
            "returnParameters": {
              "id": 28773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28772,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28774,
                  "src": "16114:13:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28771,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16114:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16113:15:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28784,
            "nodeType": "FunctionDefinition",
            "src": "16134:99:76",
            "nodes": [],
            "functionSelector": "498fdcf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonStringArray",
            "nameLocation": "16143:20:76",
            "parameters": {
              "id": 28779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28784,
                  "src": "16164:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28775,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16164:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28778,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28784,
                  "src": "16181:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28777,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16181:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16163:34:76"
            },
            "returnParameters": {
              "id": 28783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28782,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28784,
                  "src": "16216:15:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28780,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16216:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28781,
                    "nodeType": "ArrayTypeName",
                    "src": "16216:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16215:17:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28793,
            "nodeType": "FunctionDefinition",
            "src": "16238:90:76",
            "nodes": [],
            "functionSelector": "fd921be8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes",
            "nameLocation": "16247:14:76",
            "parameters": {
              "id": 28789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28786,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28793,
                  "src": "16262:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28785,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16262:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28788,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28793,
                  "src": "16279:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28787,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16279:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16261:34:76"
            },
            "returnParameters": {
              "id": 28792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28791,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28793,
                  "src": "16314:12:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28790,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:14:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28803,
            "nodeType": "FunctionDefinition",
            "src": "16333:97:76",
            "nodes": [],
            "functionSelector": "6631aa99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytesArray",
            "nameLocation": "16342:19:76",
            "parameters": {
              "id": 28798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28795,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "16362:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28794,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16362:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28797,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "16379:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28796,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16379:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16361:34:76"
            },
            "returnParameters": {
              "id": 28802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28801,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "16414:14:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28799,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "16414:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28800,
                    "nodeType": "ArrayTypeName",
                    "src": "16414:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16413:16:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28812,
            "nodeType": "FunctionDefinition",
            "src": "16435:87:76",
            "nodes": [],
            "functionSelector": "1777e59d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32",
            "nameLocation": "16444:16:76",
            "parameters": {
              "id": 28808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28812,
                  "src": "16461:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28804,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16461:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28807,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28812,
                  "src": "16478:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28806,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16478:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16460:34:76"
            },
            "returnParameters": {
              "id": 28811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28810,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28812,
                  "src": "16513:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28809,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16513:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16512:9:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28822,
            "nodeType": "FunctionDefinition",
            "src": "16527:101:76",
            "nodes": [],
            "functionSelector": "91c75bc3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32Array",
            "nameLocation": "16536:21:76",
            "parameters": {
              "id": 28817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28814,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28822,
                  "src": "16558:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16558:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28816,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28822,
                  "src": "16575:15:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28815,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16575:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16557:34:76"
            },
            "returnParameters": {
              "id": 28821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28820,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28822,
                  "src": "16610:16:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28818,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "16610:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28819,
                    "nodeType": "ArrayTypeName",
                    "src": "16610:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16609:18:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28832,
            "nodeType": "FunctionDefinition",
            "src": "16681:106:76",
            "nodes": [],
            "functionSelector": "213e4198",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonKeys",
            "nameLocation": "16690:13:76",
            "parameters": {
              "id": 28827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28824,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "16720:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28832,
                  "src": "16704:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28823,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16704:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28826,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "16742:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28832,
                  "src": "16726:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28825,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16726:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16703:43:76"
            },
            "returnParameters": {
              "id": 28831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28830,
                  "mutability": "mutable",
                  "name": "keys",
                  "nameLocation": "16781:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28832,
                  "src": "16765:20:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28828,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16765:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28829,
                    "nodeType": "ArrayTypeName",
                    "src": "16765:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:22:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28843,
            "nodeType": "FunctionDefinition",
            "src": "16983:142:76",
            "nodes": [],
            "functionSelector": "ac22e971",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "16992:13:76",
            "parameters": {
              "id": 28839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28834,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17022:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28843,
                  "src": "17006:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28833,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17006:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28836,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17049:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28843,
                  "src": "17033:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28835,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17033:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28838,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17064:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28843,
                  "src": "17059:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17059:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17005:65:76"
            },
            "returnParameters": {
              "id": 28842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28841,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17119:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28843,
                  "src": "17105:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28840,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17104:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28854,
            "nodeType": "FunctionDefinition",
            "src": "17130:145:76",
            "nodes": [],
            "functionSelector": "129e9002",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "17139:13:76",
            "parameters": {
              "id": 28850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28845,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17169:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28854,
                  "src": "17153:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28844,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17153:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28847,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17196:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28854,
                  "src": "17180:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28846,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17180:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28849,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17214:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28854,
                  "src": "17206:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17206:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17152:68:76"
            },
            "returnParameters": {
              "id": 28853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28852,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17269:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28854,
                  "src": "17255:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28851,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17255:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17254:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28865,
            "nodeType": "FunctionDefinition",
            "src": "17280:143:76",
            "nodes": [],
            "functionSelector": "3f33db60",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "17289:12:76",
            "parameters": {
              "id": 28861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28856,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17318:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28865,
                  "src": "17302:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28855,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17302:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28858,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17345:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28865,
                  "src": "17329:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28857,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17329:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28860,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17362:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28865,
                  "src": "17355:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28859,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17355:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17301:67:76"
            },
            "returnParameters": {
              "id": 28864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28863,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17417:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28865,
                  "src": "17403:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28862,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17403:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17402:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28876,
            "nodeType": "FunctionDefinition",
            "src": "17428:148:76",
            "nodes": [],
            "functionSelector": "972c6062",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "17437:16:76",
            "parameters": {
              "id": 28872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28867,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17470:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28876,
                  "src": "17454:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28866,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17454:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28869,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17497:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28876,
                  "src": "17481:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28868,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17481:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28871,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17515:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28876,
                  "src": "17507:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17507:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17453:68:76"
            },
            "returnParameters": {
              "id": 28875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28874,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17570:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28876,
                  "src": "17556:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28873,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17556:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28887,
            "nodeType": "FunctionDefinition",
            "src": "17581:148:76",
            "nodes": [],
            "functionSelector": "2d812b44",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "17590:16:76",
            "parameters": {
              "id": 28883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28878,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17623:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28887,
                  "src": "17607:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28877,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17607:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28880,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17650:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28887,
                  "src": "17634:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28879,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17634:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28882,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17668:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28887,
                  "src": "17660:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28881,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "17660:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17606:68:76"
            },
            "returnParameters": {
              "id": 28886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28885,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17723:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28887,
                  "src": "17709:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28884,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17709:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17708:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28898,
            "nodeType": "FunctionDefinition",
            "src": "17734:155:76",
            "nodes": [],
            "functionSelector": "88da6d35",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "17743:15:76",
            "parameters": {
              "id": 28894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28889,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17775:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28898,
                  "src": "17759:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28888,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17759:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28891,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17802:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28898,
                  "src": "17786:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28890,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17786:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28893,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17828:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28898,
                  "src": "17812:21:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28892,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17812:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17758:76:76"
            },
            "returnParameters": {
              "id": 28897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28896,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17883:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28898,
                  "src": "17869:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28895,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17869:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17868:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28909,
            "nodeType": "FunctionDefinition",
            "src": "17894:153:76",
            "nodes": [],
            "functionSelector": "f21d52c7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "17903:14:76",
            "parameters": {
              "id": 28905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28900,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17934:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28909,
                  "src": "17918:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28899,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17918:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28902,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17961:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28909,
                  "src": "17945:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28901,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17945:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28904,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17986:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28909,
                  "src": "17971:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28903,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17971:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17917:75:76"
            },
            "returnParameters": {
              "id": 28908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28907,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18041:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28909,
                  "src": "18027:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28906,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18027:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18026:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28921,
            "nodeType": "FunctionDefinition",
            "src": "18053:154:76",
            "nodes": [],
            "functionSelector": "92925aa1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "18062:13:76",
            "parameters": {
              "id": 28917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28911,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18092:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28921,
                  "src": "18076:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28910,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18076:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28913,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18119:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28921,
                  "src": "18103:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28912,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18103:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28916,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18145:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28921,
                  "src": "18129:22:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28914,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "18129:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28915,
                    "nodeType": "ArrayTypeName",
                    "src": "18129:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18075:77:76"
            },
            "returnParameters": {
              "id": 28920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28919,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18201:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28921,
                  "src": "18187:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28918,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18187:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18186:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28933,
            "nodeType": "FunctionDefinition",
            "src": "18212:157:76",
            "nodes": [],
            "functionSelector": "fee9a469",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "18221:13:76",
            "parameters": {
              "id": 28929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28923,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18251:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28933,
                  "src": "18235:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28922,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18235:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28925,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18278:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28933,
                  "src": "18262:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28924,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18262:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28928,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18307:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28933,
                  "src": "18288:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28926,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18288:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28927,
                    "nodeType": "ArrayTypeName",
                    "src": "18288:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18234:80:76"
            },
            "returnParameters": {
              "id": 28932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28931,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18363:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28933,
                  "src": "18349:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28930,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18349:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18348:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28945,
            "nodeType": "FunctionDefinition",
            "src": "18374:155:76",
            "nodes": [],
            "functionSelector": "7676e127",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "18383:12:76",
            "parameters": {
              "id": 28941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28935,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18412:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28945,
                  "src": "18396:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28934,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18396:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28937,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18439:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28945,
                  "src": "18423:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28936,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28940,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18467:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28945,
                  "src": "18449:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28938,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18449:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28939,
                    "nodeType": "ArrayTypeName",
                    "src": "18449:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18395:79:76"
            },
            "returnParameters": {
              "id": 28944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28943,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18523:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28945,
                  "src": "18509:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28942,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18509:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18508:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28957,
            "nodeType": "FunctionDefinition",
            "src": "18534:160:76",
            "nodes": [],
            "functionSelector": "1e356e1a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "18543:16:76",
            "parameters": {
              "id": 28953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28947,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18576:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28957,
                  "src": "18560:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28946,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18560:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28949,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18603:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28957,
                  "src": "18587:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28948,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18587:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28952,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18632:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28957,
                  "src": "18613:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28950,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "18613:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28951,
                    "nodeType": "ArrayTypeName",
                    "src": "18613:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18559:80:76"
            },
            "returnParameters": {
              "id": 28956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28955,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18688:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28957,
                  "src": "18674:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28954,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18674:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18673:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28969,
            "nodeType": "FunctionDefinition",
            "src": "18699:160:76",
            "nodes": [],
            "functionSelector": "201e43e2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "18708:16:76",
            "parameters": {
              "id": 28965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28959,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18741:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28969,
                  "src": "18725:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28958,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18725:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28961,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18768:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28969,
                  "src": "18752:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28960,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18752:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28964,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18797:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28969,
                  "src": "18778:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28962,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "18778:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28963,
                    "nodeType": "ArrayTypeName",
                    "src": "18778:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18724:80:76"
            },
            "returnParameters": {
              "id": 28968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28967,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18853:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28969,
                  "src": "18839:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28966,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18839:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18838:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28981,
            "nodeType": "FunctionDefinition",
            "src": "18864:158:76",
            "nodes": [],
            "functionSelector": "561cd6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "18873:15:76",
            "parameters": {
              "id": 28977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28971,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18905:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28981,
                  "src": "18889:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28970,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18889:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28973,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18932:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28981,
                  "src": "18916:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28972,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18916:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28976,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18960:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28981,
                  "src": "18942:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28974,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "18942:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28975,
                    "nodeType": "ArrayTypeName",
                    "src": "18942:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18888:79:76"
            },
            "returnParameters": {
              "id": 28980,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28979,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19016:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28981,
                  "src": "19002:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28978,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19002:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19001:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28993,
            "nodeType": "FunctionDefinition",
            "src": "19027:156:76",
            "nodes": [],
            "functionSelector": "9884b232",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "19036:14:76",
            "parameters": {
              "id": 28989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28983,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "19067:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28993,
                  "src": "19051:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28982,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19051:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28985,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "19094:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28993,
                  "src": "19078:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28984,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19078:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28988,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "19121:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28993,
                  "src": "19104:23:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28986,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "19104:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28987,
                    "nodeType": "ArrayTypeName",
                    "src": "19104:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19050:78:76"
            },
            "returnParameters": {
              "id": 28992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28991,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19177:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 28993,
                  "src": "19163:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28990,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19163:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19162:20:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29000,
            "nodeType": "FunctionDefinition",
            "src": "20424:72:76",
            "nodes": [],
            "functionSelector": "e23cd19f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20433:9:76",
            "parameters": {
              "id": 28998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28995,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20459:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29000,
                  "src": "20443:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28994,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20443:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28997,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20481:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29000,
                  "src": "20465:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28996,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20465:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20442:44:76"
            },
            "returnParameters": {
              "id": 28999,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20495:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29009,
            "nodeType": "FunctionDefinition",
            "src": "20717:98:76",
            "nodes": [],
            "functionSelector": "35d6ad46",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20726:9:76",
            "parameters": {
              "id": 29007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29002,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20752:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29009,
                  "src": "20736:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29001,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20736:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29004,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20774:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29009,
                  "src": "20758:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29003,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20758:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29006,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "20796:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29009,
                  "src": "20780:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29005,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20780:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20735:70:76"
            },
            "returnParameters": {
              "id": 29008,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20814:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29016,
            "nodeType": "FunctionDefinition",
            "src": "20867:85:76",
            "nodes": [],
            "functionSelector": "975a6ce9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrl",
            "nameLocation": "20876:6:76",
            "parameters": {
              "id": 29012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29011,
                  "mutability": "mutable",
                  "name": "rpcAlias",
                  "nameLocation": "20899:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29016,
                  "src": "20883:24:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29010,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20883:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20882:26:76"
            },
            "returnParameters": {
              "id": 29015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29014,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20946:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29016,
                  "src": "20932:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29013,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20932:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20931:20:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29024,
            "nodeType": "FunctionDefinition",
            "src": "21020:67:76",
            "nodes": [],
            "functionSelector": "a85a8418",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrls",
            "nameLocation": "21029:7:76",
            "parameters": {
              "id": 29017,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21036:2:76"
            },
            "returnParameters": {
              "id": 29023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29022,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21081:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29024,
                  "src": "21062:23:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_string_memory_ptr_$2_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[2][]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 29018,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "21062:6:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "id": 29020,
                      "length": {
                        "hexValue": "32",
                        "id": 29019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21069:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "21062:9:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$2_storage_ptr",
                        "typeString": "string[2]"
                      }
                    },
                    "id": 29021,
                    "nodeType": "ArrayTypeName",
                    "src": "21062:11:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_string_storage_$2_storage_$dyn_storage_ptr",
                      "typeString": "string[2][]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21061:25:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29031,
            "nodeType": "FunctionDefinition",
            "src": "21150:67:76",
            "nodes": [],
            "functionSelector": "9d2ad72a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrlStructs",
            "nameLocation": "21159:13:76",
            "parameters": {
              "id": 29025,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21172:2:76"
            },
            "returnParameters": {
              "id": 29030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29029,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21211:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29031,
                  "src": "21198:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Rpc_$28012_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Rpc[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 29027,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 29026,
                        "name": "Rpc",
                        "nameLocations": [
                          "21198:3:76"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28012,
                        "src": "21198:3:76"
                      },
                      "referencedDeclaration": 28012,
                      "src": "21198:3:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Rpc_$28012_storage_ptr",
                        "typeString": "struct VmSafe.Rpc"
                      }
                    },
                    "id": 29028,
                    "nodeType": "ArrayTypeName",
                    "src": "21198:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Rpc_$28012_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Rpc[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21197:19:76"
            },
            "scope": 29055,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29036,
            "nodeType": "FunctionDefinition",
            "src": "21310:46:76",
            "nodes": [],
            "functionSelector": "4c63e562",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assume",
            "nameLocation": "21319:6:76",
            "parameters": {
              "id": 29034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29033,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "21331:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29036,
                  "src": "21326:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29032,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21326:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21325:16:76"
            },
            "returnParameters": {
              "id": 29035,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21355:0:76"
            },
            "scope": 29055,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29039,
            "nodeType": "FunctionDefinition",
            "src": "21445:37:76",
            "nodes": [],
            "functionSelector": "d1a5b36f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pauseGasMetering",
            "nameLocation": "21454:16:76",
            "parameters": {
              "id": 29037,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21470:2:76"
            },
            "returnParameters": {
              "id": 29038,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21481:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29042,
            "nodeType": "FunctionDefinition",
            "src": "21570:38:76",
            "nodes": [],
            "functionSelector": "2bcd50e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resumeGasMetering",
            "nameLocation": "21579:17:76",
            "parameters": {
              "id": 29040,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21596:2:76"
            },
            "returnParameters": {
              "id": 29041,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21607:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29047,
            "nodeType": "FunctionDefinition",
            "src": "21667:51:76",
            "nodes": [],
            "functionSelector": "f0259e92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21676:10:76",
            "parameters": {
              "id": 29045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29044,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21703:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29047,
                  "src": "21687:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29043,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21687:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21686:22:76"
            },
            "returnParameters": {
              "id": 29046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21717:0:76"
            },
            "scope": 29055,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29054,
            "nodeType": "FunctionDefinition",
            "src": "21789:63:76",
            "nodes": [],
            "functionSelector": "f7d39a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21798:10:76",
            "parameters": {
              "id": 29052,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29049,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21825:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29054,
                  "src": "21809:20:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29048,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21809:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29051,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21836:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29054,
                  "src": "21831:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29050,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21831:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21808:34:76"
            },
            "returnParameters": {
              "id": 29053,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21851:0:76"
            },
            "scope": 29055,
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
          29055
        ],
        "name": "VmSafe",
        "nameLocation": "581:6:76",
        "scope": 29528,
        "usedErrors": []
      },
      {
        "id": 29527,
        "nodeType": "ContractDefinition",
        "src": "21856:11610:76",
        "nodes": [
          {
            "id": 29062,
            "nodeType": "FunctionDefinition",
            "src": "21913:45:76",
            "nodes": [],
            "functionSelector": "e5d6bf02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "warp",
            "nameLocation": "21922:4:76",
            "parameters": {
              "id": 29060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29059,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "21935:12:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29062,
                  "src": "21927:20:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29058,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21927:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21926:22:76"
            },
            "returnParameters": {
              "id": 29061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29067,
            "nodeType": "FunctionDefinition",
            "src": "21988:42:76",
            "nodes": [],
            "functionSelector": "1f7b4f30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "roll",
            "nameLocation": "21997:4:76",
            "parameters": {
              "id": 29065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29064,
                  "mutability": "mutable",
                  "name": "newHeight",
                  "nameLocation": "22010:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29067,
                  "src": "22002:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29063,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22002:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22001:19:76"
            },
            "returnParameters": {
              "id": 29066,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22029:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29072,
            "nodeType": "FunctionDefinition",
            "src": "22061:42:76",
            "nodes": [],
            "functionSelector": "39b37ab0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fee",
            "nameLocation": "22070:3:76",
            "parameters": {
              "id": 29070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29069,
                  "mutability": "mutable",
                  "name": "newBasefee",
                  "nameLocation": "22082:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29072,
                  "src": "22074:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22074:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22073:20:76"
            },
            "returnParameters": {
              "id": 29071,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22102:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29077,
            "nodeType": "FunctionDefinition",
            "src": "22279:52:76",
            "nodes": [],
            "functionSelector": "46cc92d9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "difficulty",
            "nameLocation": "22288:10:76",
            "parameters": {
              "id": 29075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29074,
                  "mutability": "mutable",
                  "name": "newDifficulty",
                  "nameLocation": "22307:13:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29077,
                  "src": "22299:21:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29073,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22299:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22298:23:76"
            },
            "returnParameters": {
              "id": 29076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22330:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29082,
            "nodeType": "FunctionDefinition",
            "src": "22501:52:76",
            "nodes": [],
            "functionSelector": "3b925549",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prevrandao",
            "nameLocation": "22510:10:76",
            "parameters": {
              "id": 29080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29079,
                  "mutability": "mutable",
                  "name": "newPrevrandao",
                  "nameLocation": "22529:13:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29082,
                  "src": "22521:21:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29078,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22521:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22520:23:76"
            },
            "returnParameters": {
              "id": 29081,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22552:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29087,
            "nodeType": "FunctionDefinition",
            "src": "22584:46:76",
            "nodes": [],
            "functionSelector": "4049ddd2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "chainId",
            "nameLocation": "22593:7:76",
            "parameters": {
              "id": 29085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29084,
                  "mutability": "mutable",
                  "name": "newChainId",
                  "nameLocation": "22609:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29087,
                  "src": "22601:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22601:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22600:20:76"
            },
            "returnParameters": {
              "id": 29086,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22629:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29092,
            "nodeType": "FunctionDefinition",
            "src": "22659:50:76",
            "nodes": [],
            "functionSelector": "48f50c0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "txGasPrice",
            "nameLocation": "22668:10:76",
            "parameters": {
              "id": 29090,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29089,
                  "mutability": "mutable",
                  "name": "newGasPrice",
                  "nameLocation": "22687:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29092,
                  "src": "22679:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29088,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22679:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22678:21:76"
            },
            "returnParameters": {
              "id": 29091,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22708:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29101,
            "nodeType": "FunctionDefinition",
            "src": "22765:69:76",
            "nodes": [],
            "functionSelector": "70ca10bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "store",
            "nameLocation": "22774:5:76",
            "parameters": {
              "id": 29099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29094,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "22788:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29101,
                  "src": "22780:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29093,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22780:7:76",
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
                  "id": 29096,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "22804:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29101,
                  "src": "22796:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29095,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22796:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29098,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22818:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29101,
                  "src": "22810:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29097,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22810:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22779:45:76"
            },
            "returnParameters": {
              "id": 29100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22833:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29108,
            "nodeType": "FunctionDefinition",
            "src": "22929:61:76",
            "nodes": [],
            "functionSelector": "f8e18b57",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonce",
            "nameLocation": "22938:8:76",
            "parameters": {
              "id": 29106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29103,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "22955:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29108,
                  "src": "22947:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22947:7:76",
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
                  "id": 29105,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "22971:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29108,
                  "src": "22964:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29104,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "22964:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22946:34:76"
            },
            "returnParameters": {
              "id": 29107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22989:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29115,
            "nodeType": "FunctionDefinition",
            "src": "23053:67:76",
            "nodes": [],
            "functionSelector": "9b67b21c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonceUnsafe",
            "nameLocation": "23062:14:76",
            "parameters": {
              "id": 29113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29110,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23085:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29115,
                  "src": "23077:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23077:7:76",
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
                  "id": 29112,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "23101:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29115,
                  "src": "23094:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29111,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "23094:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23076:34:76"
            },
            "returnParameters": {
              "id": 29114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23119:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29120,
            "nodeType": "FunctionDefinition",
            "src": "23205:46:76",
            "nodes": [],
            "functionSelector": "1c72346d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resetNonce",
            "nameLocation": "23214:10:76",
            "parameters": {
              "id": 29118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29117,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23233:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29120,
                  "src": "23225:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29116,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23225:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23224:17:76"
            },
            "returnParameters": {
              "id": 29119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23250:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29125,
            "nodeType": "FunctionDefinition",
            "src": "23321:43:76",
            "nodes": [],
            "functionSelector": "ca669fa7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23330:5:76",
            "parameters": {
              "id": 29123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29122,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23344:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29125,
                  "src": "23336:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23336:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23335:19:76"
            },
            "returnParameters": {
              "id": 29124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23363:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29130,
            "nodeType": "FunctionDefinition",
            "src": "23466:48:76",
            "nodes": [],
            "functionSelector": "06447d56",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23475:10:76",
            "parameters": {
              "id": 29128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29127,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23494:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29130,
                  "src": "23486:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23486:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23485:19:76"
            },
            "returnParameters": {
              "id": 29129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23513:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29137,
            "nodeType": "FunctionDefinition",
            "src": "23626:61:76",
            "nodes": [],
            "functionSelector": "47e50cce",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23635:5:76",
            "parameters": {
              "id": 29135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29132,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23649:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29137,
                  "src": "23641:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29131,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23641:7:76",
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
                  "id": 29134,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23668:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29137,
                  "src": "23660:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29133,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23660:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23640:37:76"
            },
            "returnParameters": {
              "id": 29136,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23686:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29144,
            "nodeType": "FunctionDefinition",
            "src": "23831:66:76",
            "nodes": [],
            "functionSelector": "45b56078",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23840:10:76",
            "parameters": {
              "id": 29142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29139,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23859:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29144,
                  "src": "23851:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23851:7:76",
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
                  "id": 29141,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23878:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29144,
                  "src": "23870:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29140,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23870:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23850:37:76"
            },
            "returnParameters": {
              "id": 29143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23896:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29147,
            "nodeType": "FunctionDefinition",
            "src": "23967:30:76",
            "nodes": [],
            "functionSelector": "90c5013b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopPrank",
            "nameLocation": "23976:9:76",
            "parameters": {
              "id": 29145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23985:2:76"
            },
            "returnParameters": {
              "id": 29146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23996:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29157,
            "nodeType": "FunctionDefinition",
            "src": "24122:101:76",
            "nodes": [],
            "functionSelector": "4ad0bac9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readCallers",
            "nameLocation": "24131:11:76",
            "parameters": {
              "id": 29148,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24142:2:76"
            },
            "returnParameters": {
              "id": 29156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29151,
                  "mutability": "mutable",
                  "name": "callerMode",
                  "nameLocation": "24174:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29157,
                  "src": "24163:21:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_CallerMode_$27999",
                    "typeString": "enum VmSafe.CallerMode"
                  },
                  "typeName": {
                    "id": 29150,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29149,
                      "name": "CallerMode",
                      "nameLocations": [
                        "24163:10:76"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27999,
                      "src": "24163:10:76"
                    },
                    "referencedDeclaration": 27999,
                    "src": "24163:10:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_CallerMode_$27999",
                      "typeString": "enum VmSafe.CallerMode"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29153,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "24194:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29157,
                  "src": "24186:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24186:7:76",
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
                  "id": 29155,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "24213:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29157,
                  "src": "24205:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24205:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24162:60:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29164,
            "nodeType": "FunctionDefinition",
            "src": "24260:60:76",
            "nodes": [],
            "functionSelector": "c88a5e6d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deal",
            "nameLocation": "24269:4:76",
            "parameters": {
              "id": 29162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29159,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "24282:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29164,
                  "src": "24274:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29158,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24274:7:76",
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
                  "id": 29161,
                  "mutability": "mutable",
                  "name": "newBalance",
                  "nameLocation": "24299:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29164,
                  "src": "24291:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29160,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24291:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24273:37:76"
            },
            "returnParameters": {
              "id": 29163,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24319:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29171,
            "nodeType": "FunctionDefinition",
            "src": "24354:74:76",
            "nodes": [],
            "functionSelector": "b4d6c782",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "etch",
            "nameLocation": "24363:4:76",
            "parameters": {
              "id": 29169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29166,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "24376:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29171,
                  "src": "24368:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29165,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24368:7:76",
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
                  "id": 29168,
                  "mutability": "mutable",
                  "name": "newRuntimeBytecode",
                  "nameLocation": "24399:18:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29171,
                  "src": "24384:33:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29167,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24384:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24367:51:76"
            },
            "returnParameters": {
              "id": 29170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24427:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29176,
            "nodeType": "FunctionDefinition",
            "src": "24504:38:76",
            "nodes": [],
            "functionSelector": "dd82d13e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "skip",
            "nameLocation": "24513:4:76",
            "parameters": {
              "id": 29174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29173,
                  "mutability": "mutable",
                  "name": "skipTest",
                  "nameLocation": "24523:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29176,
                  "src": "24518:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29172,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "24518:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24517:15:76"
            },
            "returnParameters": {
              "id": 29175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24541:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29181,
            "nodeType": "FunctionDefinition",
            "src": "24584:58:76",
            "nodes": [],
            "functionSelector": "f28dceb3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24593:12:76",
            "parameters": {
              "id": 29179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29178,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24621:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29181,
                  "src": "24606:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29177,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24606:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24605:27:76"
            },
            "returnParameters": {
              "id": 29180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24641:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29186,
            "nodeType": "FunctionDefinition",
            "src": "24647:50:76",
            "nodes": [],
            "functionSelector": "c31eb0e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24656:12:76",
            "parameters": {
              "id": 29184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29183,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24676:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29186,
                  "src": "24669:17:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 29182,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "24669:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24668:19:76"
            },
            "returnParameters": {
              "id": 29185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24696:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29189,
            "nodeType": "FunctionDefinition",
            "src": "24702:33:76",
            "nodes": [],
            "functionSelector": "f4844814",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24711:12:76",
            "parameters": {
              "id": 29187,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24723:2:76"
            },
            "returnParameters": {
              "id": 29188,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24734:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29192,
            "nodeType": "FunctionDefinition",
            "src": "25067:31:76",
            "nodes": [],
            "functionSelector": "440ed10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25076:10:76",
            "parameters": {
              "id": 29190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25086:2:76"
            },
            "returnParameters": {
              "id": 29191,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25097:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29197,
            "nodeType": "FunctionDefinition",
            "src": "25103:46:76",
            "nodes": [],
            "functionSelector": "86b9620d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25112:10:76",
            "parameters": {
              "id": 29195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29194,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25131:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29197,
                  "src": "25123:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29193,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25123:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25122:17:76"
            },
            "returnParameters": {
              "id": 29196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25148:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29208,
            "nodeType": "FunctionDefinition",
            "src": "25559:99:76",
            "nodes": [],
            "functionSelector": "491cc7c2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25568:10:76",
            "parameters": {
              "id": 29206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29199,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25584:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29208,
                  "src": "25579:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29198,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25579:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29201,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25602:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29208,
                  "src": "25597:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29200,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25597:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29203,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25620:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29208,
                  "src": "25615:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29202,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25615:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29205,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25638:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29208,
                  "src": "25633:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29204,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25633:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25578:70:76"
            },
            "returnParameters": {
              "id": 29207,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25657:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29221,
            "nodeType": "FunctionDefinition",
            "src": "25663:124:76",
            "nodes": [],
            "functionSelector": "81bad6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25672:10:76",
            "parameters": {
              "id": 29219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29210,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25688:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29221,
                  "src": "25683:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29209,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25683:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29212,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25706:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29221,
                  "src": "25701:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29211,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25701:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29214,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25724:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29221,
                  "src": "25719:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29213,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25719:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29216,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25742:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29221,
                  "src": "25737:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29215,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25737:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29218,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25761:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29221,
                  "src": "25753:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29217,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25753:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25682:87:76"
            },
            "returnParameters": {
              "id": 29220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25786:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29230,
            "nodeType": "FunctionDefinition",
            "src": "26043:91:76",
            "nodes": [],
            "functionSelector": "b96213e4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26052:8:76",
            "parameters": {
              "id": 29228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29223,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26069:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29230,
                  "src": "26061:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26061:7:76",
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
                  "id": 29225,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26092:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29230,
                  "src": "26077:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29224,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26077:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29227,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26113:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29230,
                  "src": "26098:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29226,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26098:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26060:64:76"
            },
            "returnParameters": {
              "id": 29229,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26133:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29241,
            "nodeType": "FunctionDefinition",
            "src": "26302:109:76",
            "nodes": [],
            "functionSelector": "81409b91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26311:8:76",
            "parameters": {
              "id": 29239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29232,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26328:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29241,
                  "src": "26320:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29231,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26320:7:76",
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
                  "id": 29234,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26344:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29241,
                  "src": "26336:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29233,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26336:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29236,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26369:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29241,
                  "src": "26354:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29235,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26354:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29238,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26390:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29241,
                  "src": "26375:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29237,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26375:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26319:82:76"
            },
            "returnParameters": {
              "id": 29240,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26410:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29250,
            "nodeType": "FunctionDefinition",
            "src": "26480:97:76",
            "nodes": [],
            "functionSelector": "dbaad147",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26489:14:76",
            "parameters": {
              "id": 29248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29243,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26512:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29250,
                  "src": "26504:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29242,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26504:7:76",
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
                  "id": 29245,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26535:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29250,
                  "src": "26520:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29244,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26520:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29247,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26556:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29250,
                  "src": "26541:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29246,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26541:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26503:64:76"
            },
            "returnParameters": {
              "id": 29249,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26576:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29261,
            "nodeType": "FunctionDefinition",
            "src": "26673:123:76",
            "nodes": [],
            "functionSelector": "d23cd037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26682:14:76",
            "parameters": {
              "id": 29259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29252,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26705:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29261,
                  "src": "26697:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29251,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26697:7:76",
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
                  "id": 29254,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26721:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29261,
                  "src": "26713:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26713:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29256,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26746:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29261,
                  "src": "26731:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29255,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26731:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29258,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26767:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29261,
                  "src": "26752:25:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29257,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26752:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26696:82:76"
            },
            "returnParameters": {
              "id": 29260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26795:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29264,
            "nodeType": "FunctionDefinition",
            "src": "26832:37:76",
            "nodes": [],
            "functionSelector": "3fdf4e15",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "clearMockedCalls",
            "nameLocation": "26841:16:76",
            "parameters": {
              "id": 29262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26857:2:76"
            },
            "returnParameters": {
              "id": 29263,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26868:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29271,
            "nodeType": "FunctionDefinition",
            "src": "26997:66:76",
            "nodes": [],
            "functionSelector": "bd6af434",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27006:10:76",
            "parameters": {
              "id": 29269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29266,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27025:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29271,
                  "src": "27017:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29265,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27017:7:76",
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
                  "id": 29268,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27048:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29271,
                  "src": "27033:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29267,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27033:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27016:37:76"
            },
            "returnParameters": {
              "id": 29270,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27062:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29280,
            "nodeType": "FunctionDefinition",
            "src": "27148:80:76",
            "nodes": [],
            "functionSelector": "c1adbbff",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27157:10:76",
            "parameters": {
              "id": 29278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29273,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27176:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29280,
                  "src": "27168:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27168:7:76",
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
                  "id": 29275,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27199:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29280,
                  "src": "27184:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29274,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27184:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29277,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27212:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29280,
                  "src": "27205:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29276,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27205:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27167:51:76"
            },
            "returnParameters": {
              "id": 29279,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27227:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29289,
            "nodeType": "FunctionDefinition",
            "src": "27311:84:76",
            "nodes": [],
            "functionSelector": "f30c7ba3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27320:10:76",
            "parameters": {
              "id": 29287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29282,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27339:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29289,
                  "src": "27331:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27331:7:76",
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
                  "id": 29284,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27355:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29289,
                  "src": "27347:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27347:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29286,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27380:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29289,
                  "src": "27365:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29285,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27365:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27330:55:76"
            },
            "returnParameters": {
              "id": 29288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27394:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29300,
            "nodeType": "FunctionDefinition",
            "src": "27493:98:76",
            "nodes": [],
            "functionSelector": "a2b1a1ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27502:10:76",
            "parameters": {
              "id": 29298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29291,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27521:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29300,
                  "src": "27513:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27513:7:76",
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
                  "id": 29293,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27537:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29300,
                  "src": "27529:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29292,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27529:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29295,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27562:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29300,
                  "src": "27547:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29294,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27547:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29297,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27575:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29300,
                  "src": "27568:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29296,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27568:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27512:69:76"
            },
            "returnParameters": {
              "id": 29299,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27590:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29311,
            "nodeType": "FunctionDefinition",
            "src": "27680:96:76",
            "nodes": [],
            "functionSelector": "23361207",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27689:10:76",
            "parameters": {
              "id": 29309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29302,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27708:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29311,
                  "src": "27700:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27700:7:76",
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
                  "id": 29304,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27724:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29311,
                  "src": "27716:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27716:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29306,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27741:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29311,
                  "src": "27734:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29305,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27734:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29308,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27761:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29311,
                  "src": "27746:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29307,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27746:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27699:67:76"
            },
            "returnParameters": {
              "id": 29310,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27775:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29324,
            "nodeType": "FunctionDefinition",
            "src": "27881:110:76",
            "nodes": [],
            "functionSelector": "65b7b7cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27890:10:76",
            "parameters": {
              "id": 29322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29313,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27909:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29324,
                  "src": "27901:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29312,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27901:7:76",
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
                  "id": 29315,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27925:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29324,
                  "src": "27917:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29314,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27917:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29317,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27942:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29324,
                  "src": "27935:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29316,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27935:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29319,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27962:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29324,
                  "src": "27947:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29318,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27947:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29321,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27975:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29324,
                  "src": "27968:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29320,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27968:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27900:81:76"
            },
            "returnParameters": {
              "id": 29323,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27990:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29335,
            "nodeType": "FunctionDefinition",
            "src": "28105:105:76",
            "nodes": [],
            "functionSelector": "08e4e116",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28114:16:76",
            "parameters": {
              "id": 29333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29326,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28139:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "28131:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28131:7:76",
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
                  "id": 29328,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28155:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "28147:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29327,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28147:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29330,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28172:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "28165:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29329,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28165:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29332,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28195:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "28180:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29331,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28180:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28130:70:76"
            },
            "returnParameters": {
              "id": 29334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28209:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29348,
            "nodeType": "FunctionDefinition",
            "src": "28339:127:76",
            "nodes": [],
            "functionSelector": "e13a1834",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28348:16:76",
            "parameters": {
              "id": 29346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29337,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28373:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29348,
                  "src": "28365:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29336,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28365:7:76",
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
                  "id": 29339,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28389:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29348,
                  "src": "28381:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28381:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29341,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28406:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29348,
                  "src": "28399:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29340,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28399:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29343,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28429:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29348,
                  "src": "28414:19:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29342,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28414:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29345,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "28442:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29348,
                  "src": "28435:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29344,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28435:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28364:84:76"
            },
            "returnParameters": {
              "id": 29347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28465:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29355,
            "nodeType": "FunctionDefinition",
            "src": "28692:59:76",
            "nodes": [],
            "functionSelector": "6d016688",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemory",
            "nameLocation": "28701:16:76",
            "parameters": {
              "id": 29353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29350,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "28725:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29355,
                  "src": "28718:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29349,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28718:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29352,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "28737:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29355,
                  "src": "28730:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29351,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28730:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28717:24:76"
            },
            "returnParameters": {
              "id": 29354,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28750:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29362,
            "nodeType": "FunctionDefinition",
            "src": "28989:63:76",
            "nodes": [],
            "functionSelector": "05838bf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemoryCall",
            "nameLocation": "28998:20:76",
            "parameters": {
              "id": 29360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29357,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "29026:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29362,
                  "src": "29019:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29356,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29019:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29359,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "29038:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29362,
                  "src": "29031:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 29358,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29031:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29018:24:76"
            },
            "returnParameters": {
              "id": 29361,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29051:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29367,
            "nodeType": "FunctionDefinition",
            "src": "29084:48:76",
            "nodes": [],
            "functionSelector": "ff483c54",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "coinbase",
            "nameLocation": "29093:8:76",
            "parameters": {
              "id": 29365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29364,
                  "mutability": "mutable",
                  "name": "newCoinbase",
                  "nameLocation": "29110:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29367,
                  "src": "29102:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "29102:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29101:21:76"
            },
            "returnParameters": {
              "id": 29366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29131:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29372,
            "nodeType": "FunctionDefinition",
            "src": "29282:58:76",
            "nodes": [],
            "functionSelector": "9711715a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "snapshot",
            "nameLocation": "29291:8:76",
            "parameters": {
              "id": 29368,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29299:2:76"
            },
            "returnParameters": {
              "id": 29371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29370,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29328:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29372,
                  "src": "29320:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29320:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29319:20:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29379,
            "nodeType": "FunctionDefinition",
            "src": "29532:70:76",
            "nodes": [],
            "functionSelector": "44d7f0a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revertTo",
            "nameLocation": "29541:8:76",
            "parameters": {
              "id": 29375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29374,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29558:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29379,
                  "src": "29550:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29550:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29549:20:76"
            },
            "returnParameters": {
              "id": 29378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29377,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "29593:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29379,
                  "src": "29588:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29376,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29588:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29587:14:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29388,
            "nodeType": "FunctionDefinition",
            "src": "29706:103:76",
            "nodes": [],
            "functionSelector": "6ba3ba2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29715:10:76",
            "parameters": {
              "id": 29384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29381,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29742:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29388,
                  "src": "29726:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29380,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29726:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29383,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "29762:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29388,
                  "src": "29754:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29754:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29725:49:76"
            },
            "returnParameters": {
              "id": 29387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29386,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "29801:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29388,
                  "src": "29793:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29793:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29792:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29395,
            "nodeType": "FunctionDefinition",
            "src": "29926:82:76",
            "nodes": [],
            "functionSelector": "31ba3498",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29935:10:76",
            "parameters": {
              "id": 29391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29390,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29962:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29395,
                  "src": "29946:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29389,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29946:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29945:28:76"
            },
            "returnParameters": {
              "id": 29394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29393,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30000:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29395,
                  "src": "29992:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29992:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29991:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29404,
            "nodeType": "FunctionDefinition",
            "src": "30229:98:76",
            "nodes": [],
            "functionSelector": "7ca29682",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "30238:10:76",
            "parameters": {
              "id": 29400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29397,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30265:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29404,
                  "src": "30249:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29396,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30249:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29399,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30285:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29404,
                  "src": "30277:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29398,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30277:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30248:44:76"
            },
            "returnParameters": {
              "id": 29403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29402,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30319:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29404,
                  "src": "30311:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29401,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30311:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30310:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29413,
            "nodeType": "FunctionDefinition",
            "src": "30450:109:76",
            "nodes": [],
            "functionSelector": "71ee464d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30459:16:76",
            "parameters": {
              "id": 29409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29406,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30492:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29413,
                  "src": "30476:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29405,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30476:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29408,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "30512:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29413,
                  "src": "30504:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30504:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30475:49:76"
            },
            "returnParameters": {
              "id": 29412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29411,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30551:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29413,
                  "src": "30543:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30543:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30542:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29422,
            "nodeType": "FunctionDefinition",
            "src": "30793:104:76",
            "nodes": [],
            "functionSelector": "84d52b7a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30802:16:76",
            "parameters": {
              "id": 29418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29415,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30835:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29422,
                  "src": "30819:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29417,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30855:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29422,
                  "src": "30847:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29416,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30847:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:44:76"
            },
            "returnParameters": {
              "id": 29421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29420,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30889:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29422,
                  "src": "30881:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30881:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30880:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29429,
            "nodeType": "FunctionDefinition",
            "src": "31031:88:76",
            "nodes": [],
            "functionSelector": "98680034",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "31040:16:76",
            "parameters": {
              "id": 29425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29424,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "31073:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29429,
                  "src": "31057:26:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29423,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "31057:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31056:28:76"
            },
            "returnParameters": {
              "id": 29428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29427,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31111:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29429,
                  "src": "31103:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31103:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31102:16:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29434,
            "nodeType": "FunctionDefinition",
            "src": "31230:45:76",
            "nodes": [],
            "functionSelector": "9ebf6827",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "selectFork",
            "nameLocation": "31239:10:76",
            "parameters": {
              "id": 29432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29431,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31258:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29434,
                  "src": "31250:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31250:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31249:16:76"
            },
            "returnParameters": {
              "id": 29433,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31274:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29440,
            "nodeType": "FunctionDefinition",
            "src": "31381:61:76",
            "nodes": [],
            "documentation": {
              "id": 29435,
              "nodeType": "StructuredDocumentation",
              "src": "31280:96:76",
              "text": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
            },
            "functionSelector": "2f103f22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "activeFork",
            "nameLocation": "31390:10:76",
            "parameters": {
              "id": 29436,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31400:2:76"
            },
            "returnParameters": {
              "id": 29439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29438,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31434:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29440,
                  "src": "31426:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31426:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31425:16:76"
            },
            "scope": 29527,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29445,
            "nodeType": "FunctionDefinition",
            "src": "31577:48:76",
            "nodes": [],
            "functionSelector": "d9bbf3a1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31586:8:76",
            "parameters": {
              "id": 29443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29442,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31603:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29445,
                  "src": "31595:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31595:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31594:21:76"
            },
            "returnParameters": {
              "id": 29444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31624:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29450,
            "nodeType": "FunctionDefinition",
            "src": "31835:43:76",
            "nodes": [],
            "functionSelector": "0f29772b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31844:8:76",
            "parameters": {
              "id": 29448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29447,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "31861:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29450,
                  "src": "31853:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29446,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "31853:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31852:16:76"
            },
            "returnParameters": {
              "id": 29449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31877:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29457,
            "nodeType": "FunctionDefinition",
            "src": "31935:64:76",
            "nodes": [],
            "functionSelector": "d74c83a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31944:8:76",
            "parameters": {
              "id": 29455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29452,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31961:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29457,
                  "src": "31953:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29451,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31953:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29454,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31977:11:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29457,
                  "src": "31969:19:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31969:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31952:37:76"
            },
            "returnParameters": {
              "id": 29456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31998:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29464,
            "nodeType": "FunctionDefinition",
            "src": "32132:59:76",
            "nodes": [],
            "functionSelector": "f2830f7b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "32141:8:76",
            "parameters": {
              "id": 29462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29459,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "32158:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29464,
                  "src": "32150:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29458,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32150:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29461,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "32174:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29464,
                  "src": "32166:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29460,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32166:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32149:32:76"
            },
            "returnParameters": {
              "id": 29463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32190:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29469,
            "nodeType": "FunctionDefinition",
            "src": "32390:50:76",
            "nodes": [],
            "functionSelector": "57e22dde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32399:14:76",
            "parameters": {
              "id": 29467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29466,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32422:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29469,
                  "src": "32414:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29465,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32414:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32413:17:76"
            },
            "returnParameters": {
              "id": 29468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32439:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29476,
            "nodeType": "FunctionDefinition",
            "src": "32445:69:76",
            "nodes": [],
            "functionSelector": "4074e0a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32454:14:76",
            "parameters": {
              "id": 29474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29471,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32477:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29476,
                  "src": "32469:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32469:7:76",
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
                  "id": 29473,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32495:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29476,
                  "src": "32487:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29472,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32487:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32468:36:76"
            },
            "returnParameters": {
              "id": 29475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32513:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29485,
            "nodeType": "FunctionDefinition",
            "src": "32519:87:76",
            "nodes": [],
            "functionSelector": "efb77a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32528:14:76",
            "parameters": {
              "id": 29483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29478,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32551:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29485,
                  "src": "32543:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29477,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32543:7:76",
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
                  "id": 29480,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32569:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29485,
                  "src": "32561:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29479,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32561:7:76",
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
                  "id": 29482,
                  "mutability": "mutable",
                  "name": "account2",
                  "nameLocation": "32587:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29485,
                  "src": "32579:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29481,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32579:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32542:54:76"
            },
            "returnParameters": {
              "id": 29484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32605:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29491,
            "nodeType": "FunctionDefinition",
            "src": "32611:62:76",
            "nodes": [],
            "functionSelector": "1d9e269e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32620:14:76",
            "parameters": {
              "id": 29489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29488,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32654:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29491,
                  "src": "32635:27:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 29486,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32635:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 29487,
                    "nodeType": "ArrayTypeName",
                    "src": "32635:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32634:29:76"
            },
            "returnParameters": {
              "id": 29490,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32672:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29496,
            "nodeType": "FunctionDefinition",
            "src": "32767:52:76",
            "nodes": [],
            "functionSelector": "997a0222",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32776:16:76",
            "parameters": {
              "id": 29494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29493,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32801:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29496,
                  "src": "32793:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29492,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32793:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32792:17:76"
            },
            "returnParameters": {
              "id": 29495,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32818:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29502,
            "nodeType": "FunctionDefinition",
            "src": "32824:64:76",
            "nodes": [],
            "functionSelector": "3ce969e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32833:16:76",
            "parameters": {
              "id": 29500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29499,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32869:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29502,
                  "src": "32850:27:76",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 29497,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32850:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 29498,
                    "nodeType": "ArrayTypeName",
                    "src": "32850:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32849:29:76"
            },
            "returnParameters": {
              "id": 29501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32887:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29509,
            "nodeType": "FunctionDefinition",
            "src": "32952:79:76",
            "nodes": [],
            "functionSelector": "d92d8efd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPersistent",
            "nameLocation": "32961:12:76",
            "parameters": {
              "id": 29505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29504,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32982:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29509,
                  "src": "32974:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32974:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32973:17:76"
            },
            "returnParameters": {
              "id": 29508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29507,
                  "mutability": "mutable",
                  "name": "persistent",
                  "nameLocation": "33019:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29509,
                  "src": "33014:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29506,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "33014:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33013:17:76"
            },
            "scope": 29527,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29514,
            "nodeType": "FunctionDefinition",
            "src": "33112:51:76",
            "nodes": [],
            "functionSelector": "ea060291",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowCheatcodes",
            "nameLocation": "33121:15:76",
            "parameters": {
              "id": 29512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29511,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "33145:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29514,
                  "src": "33137:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29510,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33137:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33136:17:76"
            },
            "returnParameters": {
              "id": 29513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33162:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29519,
            "nodeType": "FunctionDefinition",
            "src": "33263:43:76",
            "nodes": [],
            "functionSelector": "be646da1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33272:8:76",
            "parameters": {
              "id": 29517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29516,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33289:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29519,
                  "src": "33281:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29515,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33281:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33280:16:76"
            },
            "returnParameters": {
              "id": 29518,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33305:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 29526,
            "nodeType": "FunctionDefinition",
            "src": "33405:59:76",
            "nodes": [],
            "functionSelector": "4d8abc4b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33414:8:76",
            "parameters": {
              "id": 29524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29521,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "33431:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29526,
                  "src": "33423:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33423:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29523,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33447:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 29526,
                  "src": "33439:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29522,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33439:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33422:32:76"
            },
            "returnParameters": {
              "id": 29525,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33463:0:76"
            },
            "scope": 29527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 29056,
              "name": "VmSafe",
              "nameLocations": [
                "21872:6:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 29055,
              "src": "21872:6:76"
            },
            "id": 29057,
            "nodeType": "InheritanceSpecifier",
            "src": "21872:6:76"
          }
        ],
        "canonicalName": "Vm",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          29527,
          29055
        ],
        "name": "Vm",
        "nameLocation": "21866:2:76",
        "scope": 29528,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 76
} as const;
