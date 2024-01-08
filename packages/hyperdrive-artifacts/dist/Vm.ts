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
    "id": 32878,
    "exportedSymbols": {
      "Vm": [
        32877
      ],
      "VmSafe": [
        32405
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:33435:87",
    "nodes": [
      {
        "id": 31342,
        "nodeType": "PragmaDirective",
        "src": "32:31:87",
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
        "id": 31343,
        "nodeType": "PragmaDirective",
        "src": "65:33:87",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 32405,
        "nodeType": "ContractDefinition",
        "src": "571:21283:87",
        "nodes": [
          {
            "id": 31349,
            "nodeType": "EnumDefinition",
            "src": "594:122:87",
            "nodes": [],
            "canonicalName": "VmSafe.CallerMode",
            "members": [
              {
                "id": 31344,
                "name": "None",
                "nameLocation": "620:4:87",
                "nodeType": "EnumValue",
                "src": "620:4:87"
              },
              {
                "id": 31345,
                "name": "Broadcast",
                "nameLocation": "634:9:87",
                "nodeType": "EnumValue",
                "src": "634:9:87"
              },
              {
                "id": 31346,
                "name": "RecurrentBroadcast",
                "nameLocation": "653:18:87",
                "nodeType": "EnumValue",
                "src": "653:18:87"
              },
              {
                "id": 31347,
                "name": "Prank",
                "nameLocation": "681:5:87",
                "nodeType": "EnumValue",
                "src": "681:5:87"
              },
              {
                "id": 31348,
                "name": "RecurrentPrank",
                "nameLocation": "696:14:87",
                "nodeType": "EnumValue",
                "src": "696:14:87"
              }
            ],
            "name": "CallerMode",
            "nameLocation": "599:10:87"
          },
          {
            "id": 31357,
            "nodeType": "StructDefinition",
            "src": "722:89:87",
            "nodes": [],
            "canonicalName": "VmSafe.Log",
            "members": [
              {
                "constant": false,
                "id": 31352,
                "mutability": "mutable",
                "name": "topics",
                "nameLocation": "753:6:87",
                "nodeType": "VariableDeclaration",
                "scope": 31357,
                "src": "743:16:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 31350,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 31351,
                  "nodeType": "ArrayTypeName",
                  "src": "743:9:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31354,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "775:4:87",
                "nodeType": "VariableDeclaration",
                "scope": 31357,
                "src": "769:10:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 31353,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:5:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31356,
                "mutability": "mutable",
                "name": "emitter",
                "nameLocation": "797:7:87",
                "nodeType": "VariableDeclaration",
                "scope": 31357,
                "src": "789:15:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 31355,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "789:7:87",
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
            "nameLocation": "729:3:87",
            "scope": 32405,
            "visibility": "public"
          },
          {
            "id": 31362,
            "nodeType": "StructDefinition",
            "src": "817:58:87",
            "nodes": [],
            "canonicalName": "VmSafe.Rpc",
            "members": [
              {
                "constant": false,
                "id": 31359,
                "mutability": "mutable",
                "name": "key",
                "nameLocation": "845:3:87",
                "nodeType": "VariableDeclaration",
                "scope": 31362,
                "src": "838:10:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 31358,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "838:6:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31361,
                "mutability": "mutable",
                "name": "url",
                "nameLocation": "865:3:87",
                "nodeType": "VariableDeclaration",
                "scope": 31362,
                "src": "858:10:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 31360,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "858:6:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Rpc",
            "nameLocation": "824:3:87",
            "scope": 32405,
            "visibility": "public"
          },
          {
            "id": 31373,
            "nodeType": "StructDefinition",
            "src": "881:139:87",
            "nodes": [],
            "canonicalName": "VmSafe.DirEntry",
            "members": [
              {
                "constant": false,
                "id": 31364,
                "mutability": "mutable",
                "name": "errorMessage",
                "nameLocation": "914:12:87",
                "nodeType": "VariableDeclaration",
                "scope": 31373,
                "src": "907:19:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 31363,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "907:6:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31366,
                "mutability": "mutable",
                "name": "path",
                "nameLocation": "943:4:87",
                "nodeType": "VariableDeclaration",
                "scope": 31373,
                "src": "936:11:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 31365,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "936:6:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31368,
                "mutability": "mutable",
                "name": "depth",
                "nameLocation": "964:5:87",
                "nodeType": "VariableDeclaration",
                "scope": 31373,
                "src": "957:12:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 31367,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "957:6:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31370,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "984:5:87",
                "nodeType": "VariableDeclaration",
                "scope": 31373,
                "src": "979:10:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 31369,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "979:4:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31372,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1004:9:87",
                "nodeType": "VariableDeclaration",
                "scope": 31373,
                "src": "999:14:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 31371,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "999:4:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DirEntry",
            "nameLocation": "888:8:87",
            "scope": 32405,
            "visibility": "public"
          },
          {
            "id": 31388,
            "nodeType": "StructDefinition",
            "src": "1026:193:87",
            "nodes": [],
            "canonicalName": "VmSafe.FsMetadata",
            "members": [
              {
                "constant": false,
                "id": 31375,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "1059:5:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1054:10:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 31374,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:4:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31377,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1079:9:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1074:14:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 31376,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:4:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31379,
                "mutability": "mutable",
                "name": "length",
                "nameLocation": "1106:6:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1098:14:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31378,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1098:7:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31381,
                "mutability": "mutable",
                "name": "readOnly",
                "nameLocation": "1127:8:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1122:13:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 31380,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:4:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31383,
                "mutability": "mutable",
                "name": "modified",
                "nameLocation": "1153:8:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1145:16:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31382,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1145:7:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31385,
                "mutability": "mutable",
                "name": "accessed",
                "nameLocation": "1179:8:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1171:16:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31384,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31387,
                "mutability": "mutable",
                "name": "created",
                "nameLocation": "1205:7:87",
                "nodeType": "VariableDeclaration",
                "scope": 31388,
                "src": "1197:15:87",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31386,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:87",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FsMetadata",
            "nameLocation": "1033:10:87",
            "scope": 32405,
            "visibility": "public"
          },
          {
            "id": 31397,
            "nodeType": "FunctionDefinition",
            "src": "1269:81:87",
            "nodes": [],
            "functionSelector": "667f9d70",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1278:4:87",
            "parameters": {
              "id": 31393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31390,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "1291:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31397,
                  "src": "1283:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:87",
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
                  "id": 31392,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1307:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31397,
                  "src": "1299:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31391,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1299:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:30:87"
            },
            "returnParameters": {
              "id": 31396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31395,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31397,
                  "src": "1336:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31394,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1335:14:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31410,
            "nodeType": "FunctionDefinition",
            "src": "1373:104:87",
            "nodes": [],
            "functionSelector": "e341eaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sign",
            "nameLocation": "1382:4:87",
            "parameters": {
              "id": 31402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31399,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1395:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31410,
                  "src": "1387:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31401,
                  "mutability": "mutable",
                  "name": "digest",
                  "nameLocation": "1415:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31410,
                  "src": "1407:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31400,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1386:36:87"
            },
            "returnParameters": {
              "id": 31409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31404,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1452:1:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31410,
                  "src": "1446:7:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 31403,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31406,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1463:1:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31410,
                  "src": "1455:9:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31405,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1455:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31408,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1474:1:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31410,
                  "src": "1466:9:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31407,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:31:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31417,
            "nodeType": "FunctionDefinition",
            "src": "1530:74:87",
            "nodes": [],
            "functionSelector": "ffa18649",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addr",
            "nameLocation": "1539:4:87",
            "parameters": {
              "id": 31413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31412,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1552:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31417,
                  "src": "1544:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31411,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:20:87"
            },
            "returnParameters": {
              "id": 31416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31415,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "1595:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31417,
                  "src": "1587:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1586:17:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31424,
            "nodeType": "FunctionDefinition",
            "src": "1645:72:87",
            "nodes": [],
            "functionSelector": "2d0335ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "1654:8:87",
            "parameters": {
              "id": 31420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31419,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1671:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31424,
                  "src": "1663:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31418,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:17:87"
            },
            "returnParameters": {
              "id": 31423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31422,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1710:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31424,
                  "src": "1703:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 31421,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31432,
            "nodeType": "FunctionDefinition",
            "src": "1779:84:87",
            "nodes": [],
            "functionSelector": "89160467",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ffi",
            "nameLocation": "1788:3:87",
            "parameters": {
              "id": 31428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31427,
                  "mutability": "mutable",
                  "name": "commandInput",
                  "nameLocation": "1810:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31432,
                  "src": "1792:30:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31425,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1792:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 31426,
                    "nodeType": "ArrayTypeName",
                    "src": "1792:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1791:32:87"
            },
            "returnParameters": {
              "id": 31431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31430,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1855:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31432,
                  "src": "1842:19:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31429,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:21:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31439,
            "nodeType": "FunctionDefinition",
            "src": "1902:70:87",
            "nodes": [],
            "functionSelector": "3d5923ee",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setEnv",
            "nameLocation": "1911:6:87",
            "parameters": {
              "id": 31437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31434,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1934:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31439,
                  "src": "1918:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31433,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31436,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1956:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31439,
                  "src": "1940:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31435,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1940:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:45:87"
            },
            "returnParameters": {
              "id": 31438,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1971:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31446,
            "nodeType": "FunctionDefinition",
            "src": "2031:74:87",
            "nodes": [],
            "functionSelector": "7ed1ec7d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2040:7:87",
            "parameters": {
              "id": 31442,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31441,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2064:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31446,
                  "src": "2048:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31440,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2048:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2047:22:87"
            },
            "returnParameters": {
              "id": 31445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31444,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2098:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31446,
                  "src": "2093:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31443,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2093:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2092:12:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31453,
            "nodeType": "FunctionDefinition",
            "src": "2110:77:87",
            "nodes": [],
            "functionSelector": "c1978d1f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2119:7:87",
            "parameters": {
              "id": 31449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31448,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2143:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31453,
                  "src": "2127:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31447,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2127:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2126:22:87"
            },
            "returnParameters": {
              "id": 31452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31451,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2180:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31453,
                  "src": "2172:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2171:15:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31460,
            "nodeType": "FunctionDefinition",
            "src": "2192:75:87",
            "nodes": [],
            "functionSelector": "892a0c61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2201:6:87",
            "parameters": {
              "id": 31456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31455,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2224:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31460,
                  "src": "2208:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31454,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2208:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2207:22:87"
            },
            "returnParameters": {
              "id": 31459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31458,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2260:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31460,
                  "src": "2253:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31457,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2253:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2252:14:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31467,
            "nodeType": "FunctionDefinition",
            "src": "2272:80:87",
            "nodes": [],
            "functionSelector": "350d56bf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "2281:10:87",
            "parameters": {
              "id": 31463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31462,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2308:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31467,
                  "src": "2292:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31461,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:22:87"
            },
            "returnParameters": {
              "id": 31466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31465,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2345:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31467,
                  "src": "2337:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2336:15:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31474,
            "nodeType": "FunctionDefinition",
            "src": "2357:80:87",
            "nodes": [],
            "functionSelector": "97949042",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "2366:10:87",
            "parameters": {
              "id": 31470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31469,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2393:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31474,
                  "src": "2377:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31468,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2376:22:87"
            },
            "returnParameters": {
              "id": 31473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31472,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2430:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31474,
                  "src": "2422:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31471,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2421:15:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31481,
            "nodeType": "FunctionDefinition",
            "src": "2442:85:87",
            "nodes": [],
            "functionSelector": "f877cb19",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "2451:9:87",
            "parameters": {
              "id": 31477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31476,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2477:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31481,
                  "src": "2461:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2460:22:87"
            },
            "returnParameters": {
              "id": 31480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31479,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2520:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31481,
                  "src": "2506:19:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31478,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2505:21:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31488,
            "nodeType": "FunctionDefinition",
            "src": "2532:83:87",
            "nodes": [],
            "functionSelector": "4d7baf06",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "2541:8:87",
            "parameters": {
              "id": 31484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31483,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2566:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31488,
                  "src": "2550:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31482,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2549:22:87"
            },
            "returnParameters": {
              "id": 31487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31486,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2608:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31488,
                  "src": "2595:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31485,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2595:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2594:20:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31498,
            "nodeType": "FunctionDefinition",
            "src": "2665:106:87",
            "nodes": [],
            "functionSelector": "aaaddeaf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2674:7:87",
            "parameters": {
              "id": 31493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31490,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2698:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31498,
                  "src": "2682:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31489,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2682:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31492,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2720:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31498,
                  "src": "2704:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31491,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2681:45:87"
            },
            "returnParameters": {
              "id": 31497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31496,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2764:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31498,
                  "src": "2750:19:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31494,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2750:4:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 31495,
                    "nodeType": "ArrayTypeName",
                    "src": "2750:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2749:21:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31508,
            "nodeType": "FunctionDefinition",
            "src": "2776:109:87",
            "nodes": [],
            "functionSelector": "f3dec099",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2785:7:87",
            "parameters": {
              "id": 31503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31500,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2809:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31508,
                  "src": "2793:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2793:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31502,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2831:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31508,
                  "src": "2815:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31501,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2792:45:87"
            },
            "returnParameters": {
              "id": 31507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31506,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2878:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31508,
                  "src": "2861:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31504,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2861:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 31505,
                    "nodeType": "ArrayTypeName",
                    "src": "2861:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2860:24:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31518,
            "nodeType": "FunctionDefinition",
            "src": "2890:107:87",
            "nodes": [],
            "functionSelector": "42181150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2899:6:87",
            "parameters": {
              "id": 31513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31510,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2922:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31518,
                  "src": "2906:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31509,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31512,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2944:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31518,
                  "src": "2928:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31511,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2928:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2905:45:87"
            },
            "returnParameters": {
              "id": 31517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31516,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2990:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31518,
                  "src": "2974:21:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31514,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2974:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 31515,
                    "nodeType": "ArrayTypeName",
                    "src": "2974:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:23:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31528,
            "nodeType": "FunctionDefinition",
            "src": "3002:112:87",
            "nodes": [],
            "functionSelector": "ad31b9fa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "3011:10:87",
            "parameters": {
              "id": 31523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31520,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3038:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31528,
                  "src": "3022:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31519,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31522,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3060:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31528,
                  "src": "3044:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31521,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3044:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3021:45:87"
            },
            "returnParameters": {
              "id": 31527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31526,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3107:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31528,
                  "src": "3090:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31524,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3090:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 31525,
                    "nodeType": "ArrayTypeName",
                    "src": "3090:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:24:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31538,
            "nodeType": "FunctionDefinition",
            "src": "3119:112:87",
            "nodes": [],
            "functionSelector": "5af231c1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "3128:10:87",
            "parameters": {
              "id": 31533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31530,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3155:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31538,
                  "src": "3139:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31529,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31532,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3177:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31538,
                  "src": "3161:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31531,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3138:45:87"
            },
            "returnParameters": {
              "id": 31537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31536,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3224:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31538,
                  "src": "3207:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31534,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3207:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31535,
                    "nodeType": "ArrayTypeName",
                    "src": "3207:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:24:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31548,
            "nodeType": "FunctionDefinition",
            "src": "3236:110:87",
            "nodes": [],
            "functionSelector": "14b02bc9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "3245:9:87",
            "parameters": {
              "id": 31543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31540,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3271:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31548,
                  "src": "3255:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31539,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31542,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3293:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31548,
                  "src": "3277:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31541,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3277:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:45:87"
            },
            "returnParameters": {
              "id": 31547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31546,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3339:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31548,
                  "src": "3323:21:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31544,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3323:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 31545,
                    "nodeType": "ArrayTypeName",
                    "src": "3323:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3322:23:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31558,
            "nodeType": "FunctionDefinition",
            "src": "3351:108:87",
            "nodes": [],
            "functionSelector": "ddc2651b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "3360:8:87",
            "parameters": {
              "id": 31553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31550,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3385:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31558,
                  "src": "3369:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31549,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3369:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31552,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3407:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31558,
                  "src": "3391:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31551,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3391:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3368:45:87"
            },
            "returnParameters": {
              "id": 31557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31556,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3452:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31558,
                  "src": "3437:20:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31554,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3437:5:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 31555,
                    "nodeType": "ArrayTypeName",
                    "src": "3437:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3436:22:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31567,
            "nodeType": "FunctionDefinition",
            "src": "3517:86:87",
            "nodes": [],
            "functionSelector": "4777f3cf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3526:5:87",
            "parameters": {
              "id": 31563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31560,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3548:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31567,
                  "src": "3532:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31559,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31562,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3559:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31567,
                  "src": "3554:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31561,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3554:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:41:87"
            },
            "returnParameters": {
              "id": 31566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31565,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3596:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31567,
                  "src": "3591:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31564,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3591:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3590:12:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31576,
            "nodeType": "FunctionDefinition",
            "src": "3608:92:87",
            "nodes": [],
            "functionSelector": "5e97348f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3617:5:87",
            "parameters": {
              "id": 31572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31569,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3639:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31576,
                  "src": "3623:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31568,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31571,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3653:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31576,
                  "src": "3645:20:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3645:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3622:44:87"
            },
            "returnParameters": {
              "id": 31575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31574,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3693:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31576,
                  "src": "3685:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3685:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3684:15:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31585,
            "nodeType": "FunctionDefinition",
            "src": "3705:90:87",
            "nodes": [],
            "functionSelector": "bbcb713e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3714:5:87",
            "parameters": {
              "id": 31581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31578,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3736:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31585,
                  "src": "3720:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31577,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31580,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3749:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31585,
                  "src": "3742:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31579,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3742:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3719:43:87"
            },
            "returnParameters": {
              "id": 31584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31583,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3788:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31585,
                  "src": "3781:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31582,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3781:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3780:14:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31594,
            "nodeType": "FunctionDefinition",
            "src": "3800:92:87",
            "nodes": [],
            "functionSelector": "561fe540",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3809:5:87",
            "parameters": {
              "id": 31590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31587,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3831:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31594,
                  "src": "3815:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31586,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31589,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3845:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31594,
                  "src": "3837:20:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31588,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3837:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:44:87"
            },
            "returnParameters": {
              "id": 31593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31592,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3885:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31594,
                  "src": "3877:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31591,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3877:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3876:15:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31603,
            "nodeType": "FunctionDefinition",
            "src": "3897:92:87",
            "nodes": [],
            "functionSelector": "b4a85892",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3906:5:87",
            "parameters": {
              "id": 31599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31596,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3928:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31603,
                  "src": "3912:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31595,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3912:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31598,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3942:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31603,
                  "src": "3934:20:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31597,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3911:44:87"
            },
            "returnParameters": {
              "id": 31602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31601,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3982:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31603,
                  "src": "3974:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31600,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:15:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31612,
            "nodeType": "FunctionDefinition",
            "src": "3994:106:87",
            "nodes": [],
            "functionSelector": "d145736c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4003:5:87",
            "parameters": {
              "id": 31608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31605,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4025:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31612,
                  "src": "4009:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31604,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4009:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31607,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4047:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31612,
                  "src": "4031:28:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31606,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4031:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4008:52:87"
            },
            "returnParameters": {
              "id": 31611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31610,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4093:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31612,
                  "src": "4079:19:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31609,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4079:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4078:21:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31621,
            "nodeType": "FunctionDefinition",
            "src": "4105:104:87",
            "nodes": [],
            "functionSelector": "b3e47705",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4114:5:87",
            "parameters": {
              "id": 31617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31614,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4136:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31621,
                  "src": "4120:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31613,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4120:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31616,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4157:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31621,
                  "src": "4142:27:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31615,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4142:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4119:51:87"
            },
            "returnParameters": {
              "id": 31620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31619,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4202:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31621,
                  "src": "4189:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31618,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31634,
            "nodeType": "FunctionDefinition",
            "src": "4277:145:87",
            "nodes": [],
            "functionSelector": "eb85e83b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4286:5:87",
            "parameters": {
              "id": 31629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31623,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4308:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31634,
                  "src": "4292:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31622,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4292:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31625,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4330:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31634,
                  "src": "4314:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31624,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31628,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4353:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31634,
                  "src": "4337:28:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31626,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4337:4:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 31627,
                    "nodeType": "ArrayTypeName",
                    "src": "4337:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4291:75:87"
            },
            "returnParameters": {
              "id": 31633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31632,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4415:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31634,
                  "src": "4401:19:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31630,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4401:4:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 31631,
                    "nodeType": "ArrayTypeName",
                    "src": "4401:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4400:21:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31647,
            "nodeType": "FunctionDefinition",
            "src": "4427:151:87",
            "nodes": [],
            "functionSelector": "74318528",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4436:5:87",
            "parameters": {
              "id": 31642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31636,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4458:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31647,
                  "src": "4442:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31635,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4442:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31638,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4480:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31647,
                  "src": "4464:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31637,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31641,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4506:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31647,
                  "src": "4487:31:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31639,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4487:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 31640,
                    "nodeType": "ArrayTypeName",
                    "src": "4487:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4441:78:87"
            },
            "returnParameters": {
              "id": 31646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31645,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4571:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31647,
                  "src": "4554:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31643,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4554:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 31644,
                    "nodeType": "ArrayTypeName",
                    "src": "4554:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:24:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31660,
            "nodeType": "FunctionDefinition",
            "src": "4583:149:87",
            "nodes": [],
            "functionSelector": "4700d74b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4592:5:87",
            "parameters": {
              "id": 31655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31649,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4614:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4598:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31648,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4598:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31651,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4636:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4620:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31650,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31654,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4661:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4643:30:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31652,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 31653,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4597:77:87"
            },
            "returnParameters": {
              "id": 31659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31658,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4725:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4709:21:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31656,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4709:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 31657,
                    "nodeType": "ArrayTypeName",
                    "src": "4709:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:23:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31673,
            "nodeType": "FunctionDefinition",
            "src": "4737:151:87",
            "nodes": [],
            "functionSelector": "c74e9deb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4746:5:87",
            "parameters": {
              "id": 31668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31662,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4768:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31673,
                  "src": "4752:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31661,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4752:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31664,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4790:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31673,
                  "src": "4774:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31663,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4774:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31667,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4816:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31673,
                  "src": "4797:31:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31665,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4797:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 31666,
                    "nodeType": "ArrayTypeName",
                    "src": "4797:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4751:78:87"
            },
            "returnParameters": {
              "id": 31672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31671,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4881:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31673,
                  "src": "4864:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31669,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4864:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 31670,
                    "nodeType": "ArrayTypeName",
                    "src": "4864:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:24:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31686,
            "nodeType": "FunctionDefinition",
            "src": "4893:151:87",
            "nodes": [],
            "functionSelector": "2281f367",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4902:5:87",
            "parameters": {
              "id": 31681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31675,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4924:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31686,
                  "src": "4908:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31674,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31677,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4946:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31686,
                  "src": "4930:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31676,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4930:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31680,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4972:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31686,
                  "src": "4953:31:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31678,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4953:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31679,
                    "nodeType": "ArrayTypeName",
                    "src": "4953:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4907:78:87"
            },
            "returnParameters": {
              "id": 31685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31684,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5037:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31686,
                  "src": "5020:22:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31682,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5020:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31683,
                    "nodeType": "ArrayTypeName",
                    "src": "5020:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5019:24:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31699,
            "nodeType": "FunctionDefinition",
            "src": "5049:149:87",
            "nodes": [],
            "functionSelector": "859216bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5058:5:87",
            "parameters": {
              "id": 31694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31688,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5080:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31699,
                  "src": "5064:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31687,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5064:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31690,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5102:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31699,
                  "src": "5086:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31689,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5086:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31693,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5127:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31699,
                  "src": "5109:30:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31691,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5109:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 31692,
                    "nodeType": "ArrayTypeName",
                    "src": "5109:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5063:77:87"
            },
            "returnParameters": {
              "id": 31698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31697,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5191:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31699,
                  "src": "5175:21:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31695,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5175:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 31696,
                    "nodeType": "ArrayTypeName",
                    "src": "5175:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5174:23:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31712,
            "nodeType": "FunctionDefinition",
            "src": "5203:147:87",
            "nodes": [],
            "functionSelector": "64bc3e64",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5212:5:87",
            "parameters": {
              "id": 31707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31701,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5234:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31712,
                  "src": "5218:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31700,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5218:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31703,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5256:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31712,
                  "src": "5240:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31702,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5240:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31706,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5280:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31712,
                  "src": "5263:29:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31704,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5263:5:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 31705,
                    "nodeType": "ArrayTypeName",
                    "src": "5263:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5217:76:87"
            },
            "returnParameters": {
              "id": 31711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31710,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5343:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31712,
                  "src": "5328:20:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31708,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5328:5:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 31709,
                    "nodeType": "ArrayTypeName",
                    "src": "5328:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5327:22:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31715,
            "nodeType": "FunctionDefinition",
            "src": "5399:27:87",
            "nodes": [],
            "functionSelector": "266cf109",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "record",
            "nameLocation": "5408:6:87",
            "parameters": {
              "id": 31713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5414:2:87"
            },
            "returnParameters": {
              "id": 31714,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31726,
            "nodeType": "FunctionDefinition",
            "src": "5523:109:87",
            "nodes": [],
            "functionSelector": "65bc9481",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accesses",
            "nameLocation": "5532:8:87",
            "parameters": {
              "id": 31718,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31717,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5549:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31726,
                  "src": "5541:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31716,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5541:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5540:16:87"
            },
            "returnParameters": {
              "id": 31725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31721,
                  "mutability": "mutable",
                  "name": "readSlots",
                  "nameLocation": "5592:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31726,
                  "src": "5575:26:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31719,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5575:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31720,
                    "nodeType": "ArrayTypeName",
                    "src": "5575:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31724,
                  "mutability": "mutable",
                  "name": "writeSlots",
                  "nameLocation": "5620:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31726,
                  "src": "5603:27:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31722,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5603:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31723,
                    "nodeType": "ArrayTypeName",
                    "src": "5603:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:57:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31733,
            "nodeType": "FunctionDefinition",
            "src": "5740:101:87",
            "nodes": [],
            "functionSelector": "8d1cc925",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCode",
            "nameLocation": "5749:7:87",
            "parameters": {
              "id": 31729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31728,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5773:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31733,
                  "src": "5757:28:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31727,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5757:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5756:30:87"
            },
            "returnParameters": {
              "id": 31732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31731,
                  "mutability": "mutable",
                  "name": "creationBytecode",
                  "nameLocation": "5823:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31733,
                  "src": "5810:29:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31730,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:31:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31740,
            "nodeType": "FunctionDefinition",
            "src": "5949:108:87",
            "nodes": [],
            "functionSelector": "3ebf73b4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployedCode",
            "nameLocation": "5958:15:87",
            "parameters": {
              "id": 31736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31735,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5990:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31740,
                  "src": "5974:28:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31734,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:30:87"
            },
            "returnParameters": {
              "id": 31739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31738,
                  "mutability": "mutable",
                  "name": "runtimeBytecode",
                  "nameLocation": "6040:15:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31740,
                  "src": "6027:28:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31737,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6027:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6026:30:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31747,
            "nodeType": "FunctionDefinition",
            "src": "6102:67:87",
            "nodes": [],
            "functionSelector": "c657c718",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "label",
            "nameLocation": "6111:5:87",
            "parameters": {
              "id": 31745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31742,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6125:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31747,
                  "src": "6117:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:87",
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
                  "id": 31744,
                  "mutability": "mutable",
                  "name": "newLabel",
                  "nameLocation": "6150:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31747,
                  "src": "6134:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31743,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6134:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6116:43:87"
            },
            "returnParameters": {
              "id": 31746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6168:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31754,
            "nodeType": "FunctionDefinition",
            "src": "6222:81:87",
            "nodes": [],
            "functionSelector": "28a249b0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLabel",
            "nameLocation": "6231:8:87",
            "parameters": {
              "id": 31750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31749,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6248:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31754,
                  "src": "6240:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31748,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:17:87"
            },
            "returnParameters": {
              "id": 31753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31752,
                  "mutability": "mutable",
                  "name": "currentLabel",
                  "nameLocation": "6289:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31754,
                  "src": "6275:26:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31751,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:28:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31757,
            "nodeType": "FunctionDefinition",
            "src": "6470:30:87",
            "nodes": [],
            "functionSelector": "afc98040",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6479:9:87",
            "parameters": {
              "id": 31755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6488:2:87"
            },
            "returnParameters": {
              "id": 31756,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6499:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31762,
            "nodeType": "FunctionDefinition",
            "src": "6659:44:87",
            "nodes": [],
            "functionSelector": "e6962cdb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6668:9:87",
            "parameters": {
              "id": 31760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31759,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "6686:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31762,
                  "src": "6678:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31758,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6677:16:87"
            },
            "returnParameters": {
              "id": 31761,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6702:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31767,
            "nodeType": "FunctionDefinition",
            "src": "6866:48:87",
            "nodes": [],
            "functionSelector": "f67a965b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6875:9:87",
            "parameters": {
              "id": 31765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31764,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "6893:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31767,
                  "src": "6885:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31763,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6885:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6884:20:87"
            },
            "returnParameters": {
              "id": 31766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6913:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31770,
            "nodeType": "FunctionDefinition",
            "src": "7087:35:87",
            "nodes": [],
            "functionSelector": "7fb5297f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7096:14:87",
            "parameters": {
              "id": 31768,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7110:2:87"
            },
            "returnParameters": {
              "id": 31769,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7121:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31775,
            "nodeType": "FunctionDefinition",
            "src": "7273:49:87",
            "nodes": [],
            "functionSelector": "7fec2a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7282:14:87",
            "parameters": {
              "id": 31773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31772,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "7305:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31775,
                  "src": "7297:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:16:87"
            },
            "returnParameters": {
              "id": 31774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7321:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31780,
            "nodeType": "FunctionDefinition",
            "src": "7477:53:87",
            "nodes": [],
            "functionSelector": "ce817d47",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7486:14:87",
            "parameters": {
              "id": 31778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31777,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "7509:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31780,
                  "src": "7501:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7500:20:87"
            },
            "returnParameters": {
              "id": 31779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7529:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31783,
            "nodeType": "FunctionDefinition",
            "src": "7580:34:87",
            "nodes": [],
            "functionSelector": "76eadd36",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopBroadcast",
            "nameLocation": "7589:13:87",
            "parameters": {
              "id": 31781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7602:2:87"
            },
            "returnParameters": {
              "id": 31782,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7613:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31788,
            "nodeType": "FunctionDefinition",
            "src": "7669:66:87",
            "nodes": [],
            "functionSelector": "d930a0e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "projectRoot",
            "nameLocation": "7678:11:87",
            "parameters": {
              "id": 31784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7689:2:87"
            },
            "returnParameters": {
              "id": 31787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31786,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7729:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31788,
                  "src": "7715:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31785,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7715:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7714:20:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31795,
            "nodeType": "FunctionDefinition",
            "src": "7831:83:87",
            "nodes": [],
            "functionSelector": "60f9bb11",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFile",
            "nameLocation": "7840:8:87",
            "parameters": {
              "id": 31791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31790,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7865:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31795,
                  "src": "7849:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31789,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7849:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7848:22:87"
            },
            "returnParameters": {
              "id": 31794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31793,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7908:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31795,
                  "src": "7894:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31792,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7893:20:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31802,
            "nodeType": "FunctionDefinition",
            "src": "8010:88:87",
            "nodes": [],
            "functionSelector": "16ed7bc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFileBinary",
            "nameLocation": "8019:14:87",
            "parameters": {
              "id": 31798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31797,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8050:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31802,
                  "src": "8034:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31796,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8034:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8033:22:87"
            },
            "returnParameters": {
              "id": 31801,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31800,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8092:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31802,
                  "src": "8079:17:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31799,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8079:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8078:19:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31809,
            "nodeType": "FunctionDefinition",
            "src": "8145:83:87",
            "nodes": [],
            "functionSelector": "70f55728",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLine",
            "nameLocation": "8154:8:87",
            "parameters": {
              "id": 31805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31804,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8179:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31809,
                  "src": "8163:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31803,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8162:22:87"
            },
            "returnParameters": {
              "id": 31808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31807,
                  "mutability": "mutable",
                  "name": "line",
                  "nameLocation": "8222:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31809,
                  "src": "8208:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31806,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8208:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8207:20:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31816,
            "nodeType": "FunctionDefinition",
            "src": "8394:72:87",
            "nodes": [],
            "functionSelector": "897e0a97",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFile",
            "nameLocation": "8403:9:87",
            "parameters": {
              "id": 31814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31811,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8429:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31816,
                  "src": "8413:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31810,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8413:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31813,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8451:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31816,
                  "src": "8435:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31812,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8435:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8412:44:87"
            },
            "returnParameters": {
              "id": 31815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8465:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31823,
            "nodeType": "FunctionDefinition",
            "src": "8641:77:87",
            "nodes": [],
            "functionSelector": "1f21fc80",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFileBinary",
            "nameLocation": "8650:15:87",
            "parameters": {
              "id": 31821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31818,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8682:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31823,
                  "src": "8666:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31817,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31820,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8703:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31823,
                  "src": "8688:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31819,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8688:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:43:87"
            },
            "returnParameters": {
              "id": 31822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8717:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31830,
            "nodeType": "FunctionDefinition",
            "src": "8836:72:87",
            "nodes": [],
            "functionSelector": "619d897f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeLine",
            "nameLocation": "8845:9:87",
            "parameters": {
              "id": 31828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31825,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8871:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31830,
                  "src": "8855:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31824,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8855:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31827,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8893:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31830,
                  "src": "8877:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31826,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8877:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8854:44:87"
            },
            "returnParameters": {
              "id": 31829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8907:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31835,
            "nodeType": "FunctionDefinition",
            "src": "9067:50:87",
            "nodes": [],
            "functionSelector": "48c3241f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeFile",
            "nameLocation": "9076:9:87",
            "parameters": {
              "id": 31833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31832,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9102:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31835,
                  "src": "9086:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31831,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9085:22:87"
            },
            "returnParameters": {
              "id": 31834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9116:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31840,
            "nodeType": "FunctionDefinition",
            "src": "9443:51:87",
            "nodes": [],
            "functionSelector": "f1afe04d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeFile",
            "nameLocation": "9452:10:87",
            "parameters": {
              "id": 31838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31837,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9479:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31840,
                  "src": "9463:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31836,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9463:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9462:22:87"
            },
            "returnParameters": {
              "id": 31839,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9493:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31847,
            "nodeType": "FunctionDefinition",
            "src": "9892:66:87",
            "nodes": [],
            "functionSelector": "168b64d3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createDir",
            "nameLocation": "9901:9:87",
            "parameters": {
              "id": 31845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31842,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9927:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31847,
                  "src": "9911:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31841,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9911:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31844,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "9938:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31847,
                  "src": "9933:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31843,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9933:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9910:38:87"
            },
            "returnParameters": {
              "id": 31846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9957:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31854,
            "nodeType": "FunctionDefinition",
            "src": "10340:66:87",
            "nodes": [],
            "functionSelector": "45c62011",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeDir",
            "nameLocation": "10349:9:87",
            "parameters": {
              "id": 31852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31849,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10375:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31854,
                  "src": "10359:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31848,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10359:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31851,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "10386:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31854,
                  "src": "10381:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31850,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10358:38:87"
            },
            "returnParameters": {
              "id": 31853,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10405:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31863,
            "nodeType": "FunctionDefinition",
            "src": "10653:89:87",
            "nodes": [],
            "functionSelector": "c4bc59e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10662:7:87",
            "parameters": {
              "id": 31857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31856,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10686:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31863,
                  "src": "10670:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31855,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10670:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10669:22:87"
            },
            "returnParameters": {
              "id": 31862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31861,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10733:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31863,
                  "src": "10715:25:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31859,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 31858,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10715:8:87"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31373,
                        "src": "10715:8:87"
                      },
                      "referencedDeclaration": 31373,
                      "src": "10715:8:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$31373_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 31860,
                    "nodeType": "ArrayTypeName",
                    "src": "10715:10:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10714:27:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31874,
            "nodeType": "FunctionDefinition",
            "src": "10747:106:87",
            "nodes": [],
            "functionSelector": "1497876c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10756:7:87",
            "parameters": {
              "id": 31868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31865,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10780:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31874,
                  "src": "10764:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31864,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10764:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31867,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10793:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31874,
                  "src": "10786:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 31866,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10786:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10763:39:87"
            },
            "returnParameters": {
              "id": 31873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31872,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10844:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31874,
                  "src": "10826:25:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31870,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 31869,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10826:8:87"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31373,
                        "src": "10826:8:87"
                      },
                      "referencedDeclaration": 31373,
                      "src": "10826:8:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$31373_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 31871,
                    "nodeType": "ArrayTypeName",
                    "src": "10826:10:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10825:27:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31887,
            "nodeType": "FunctionDefinition",
            "src": "10858:148:87",
            "nodes": [],
            "functionSelector": "8102d70d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10867:7:87",
            "parameters": {
              "id": 31881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31876,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10891:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31887,
                  "src": "10875:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31875,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10875:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31878,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10904:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31887,
                  "src": "10897:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 31877,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10897:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31880,
                  "mutability": "mutable",
                  "name": "followLinks",
                  "nameLocation": "10919:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31887,
                  "src": "10914:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31879,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10914:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10874:57:87"
            },
            "returnParameters": {
              "id": 31886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31885,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10997:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31887,
                  "src": "10979:25:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31883,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 31882,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10979:8:87"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31373,
                        "src": "10979:8:87"
                      },
                      "referencedDeclaration": 31373,
                      "src": "10979:8:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$31373_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 31884,
                    "nodeType": "ArrayTypeName",
                    "src": "10979:10:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$31373_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10978:27:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31894,
            "nodeType": "FunctionDefinition",
            "src": "11260:93:87",
            "nodes": [],
            "functionSelector": "9f5684a2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLink",
            "nameLocation": "11269:8:87",
            "parameters": {
              "id": 31890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31889,
                  "mutability": "mutable",
                  "name": "linkPath",
                  "nameLocation": "11294:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31894,
                  "src": "11278:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31888,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11278:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11277:26:87"
            },
            "returnParameters": {
              "id": 31893,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31892,
                  "mutability": "mutable",
                  "name": "targetPath",
                  "nameLocation": "11341:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31894,
                  "src": "11327:24:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31891,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11327:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11326:26:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31902,
            "nodeType": "FunctionDefinition",
            "src": "11450:93:87",
            "nodes": [],
            "functionSelector": "af368a08",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fsMetadata",
            "nameLocation": "11459:10:87",
            "parameters": {
              "id": 31897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31896,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "11486:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31902,
                  "src": "11470:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31895,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11470:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:22:87"
            },
            "returnParameters": {
              "id": 31901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31900,
                  "mutability": "mutable",
                  "name": "metadata",
                  "nameLocation": "11533:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31902,
                  "src": "11515:26:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FsMetadata_$31388_memory_ptr",
                    "typeString": "struct VmSafe.FsMetadata"
                  },
                  "typeName": {
                    "id": 31899,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31898,
                      "name": "FsMetadata",
                      "nameLocations": [
                        "11515:10:87"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31388,
                      "src": "11515:10:87"
                    },
                    "referencedDeclaration": 31388,
                    "src": "11515:10:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FsMetadata_$31388_storage_ptr",
                      "typeString": "struct VmSafe.FsMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11514:28:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31909,
            "nodeType": "FunctionDefinition",
            "src": "11583:88:87",
            "nodes": [],
            "functionSelector": "56ca623e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11592:8:87",
            "parameters": {
              "id": 31905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31904,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11609:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31909,
                  "src": "11601:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11601:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11600:15:87"
            },
            "returnParameters": {
              "id": 31908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31907,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11653:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31909,
                  "src": "11639:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31906,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11639:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11638:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31916,
            "nodeType": "FunctionDefinition",
            "src": "11676:95:87",
            "nodes": [],
            "functionSelector": "71aad10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11685:8:87",
            "parameters": {
              "id": 31912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31911,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11709:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31916,
                  "src": "11694:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31910,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11694:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11693:22:87"
            },
            "returnParameters": {
              "id": 31915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31914,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11753:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31916,
                  "src": "11739:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31913,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11739:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11738:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31923,
            "nodeType": "FunctionDefinition",
            "src": "11776:88:87",
            "nodes": [],
            "functionSelector": "b11a19e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11785:8:87",
            "parameters": {
              "id": 31919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31918,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11802:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31923,
                  "src": "11794:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31917,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11794:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11793:15:87"
            },
            "returnParameters": {
              "id": 31922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31921,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11846:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31923,
                  "src": "11832:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31920,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11832:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11831:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31930,
            "nodeType": "FunctionDefinition",
            "src": "11869:85:87",
            "nodes": [],
            "functionSelector": "71dce7da",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11878:8:87",
            "parameters": {
              "id": 31926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31925,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11892:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31930,
                  "src": "11887:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31924,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11887:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11886:12:87"
            },
            "returnParameters": {
              "id": 31929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31928,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11936:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31930,
                  "src": "11922:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31927,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11922:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11921:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31937,
            "nodeType": "FunctionDefinition",
            "src": "11959:88:87",
            "nodes": [],
            "functionSelector": "6900a3ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11968:8:87",
            "parameters": {
              "id": 31933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31932,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11985:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31937,
                  "src": "11977:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11977:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11976:15:87"
            },
            "returnParameters": {
              "id": 31936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31935,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12029:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31937,
                  "src": "12015:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31934,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12015:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12014:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31944,
            "nodeType": "FunctionDefinition",
            "src": "12052:87:87",
            "nodes": [],
            "functionSelector": "a322c40e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "12061:8:87",
            "parameters": {
              "id": 31940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31939,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12077:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31944,
                  "src": "12070:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31938,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12070:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12069:14:87"
            },
            "returnParameters": {
              "id": 31943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31942,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12121:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31944,
                  "src": "12107:30:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31941,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12107:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12106:32:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31951,
            "nodeType": "FunctionDefinition",
            "src": "12180:103:87",
            "nodes": [],
            "functionSelector": "8f5d232d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes",
            "nameLocation": "12189:10:87",
            "parameters": {
              "id": 31947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31946,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12216:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31951,
                  "src": "12200:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31945,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12200:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12199:34:87"
            },
            "returnParameters": {
              "id": 31950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31949,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12270:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31951,
                  "src": "12257:24:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31948,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12257:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12256:26:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31958,
            "nodeType": "FunctionDefinition",
            "src": "12288:100:87",
            "nodes": [],
            "functionSelector": "c6ce059d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseAddress",
            "nameLocation": "12297:12:87",
            "parameters": {
              "id": 31954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31953,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12326:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31958,
                  "src": "12310:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31952,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12310:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12309:34:87"
            },
            "returnParameters": {
              "id": 31957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31956,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12375:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31958,
                  "src": "12367:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12367:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12366:21:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31965,
            "nodeType": "FunctionDefinition",
            "src": "12393:97:87",
            "nodes": [],
            "functionSelector": "fa91454d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseUint",
            "nameLocation": "12402:9:87",
            "parameters": {
              "id": 31961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31960,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12428:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31965,
                  "src": "12412:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31959,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12412:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12411:34:87"
            },
            "returnParameters": {
              "id": 31964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31963,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12477:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31965,
                  "src": "12469:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31962,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12469:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12468:21:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31972,
            "nodeType": "FunctionDefinition",
            "src": "12495:95:87",
            "nodes": [],
            "functionSelector": "42346c5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseInt",
            "nameLocation": "12504:8:87",
            "parameters": {
              "id": 31968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31967,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12529:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31972,
                  "src": "12513:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31966,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12513:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12512:34:87"
            },
            "returnParameters": {
              "id": 31971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31970,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12577:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31972,
                  "src": "12570:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31969,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12570:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12569:20:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31979,
            "nodeType": "FunctionDefinition",
            "src": "12595:100:87",
            "nodes": [],
            "functionSelector": "087e6e81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes32",
            "nameLocation": "12604:12:87",
            "parameters": {
              "id": 31975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31974,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12633:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31979,
                  "src": "12617:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31973,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12617:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12616:34:87"
            },
            "returnParameters": {
              "id": 31978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31977,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12682:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31979,
                  "src": "12674:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31976,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12674:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12673:21:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31986,
            "nodeType": "FunctionDefinition",
            "src": "12700:94:87",
            "nodes": [],
            "functionSelector": "974ef924",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBool",
            "nameLocation": "12709:9:87",
            "parameters": {
              "id": 31982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31981,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12735:16:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "12719:32:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31980,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12719:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12718:34:87"
            },
            "returnParameters": {
              "id": 31985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31984,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12781:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "12776:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31983,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12776:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12775:18:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31989,
            "nodeType": "FunctionDefinition",
            "src": "12838:31:87",
            "nodes": [],
            "functionSelector": "41af2f52",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "recordLogs",
            "nameLocation": "12847:10:87",
            "parameters": {
              "id": 31987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12857:2:87"
            },
            "returnParameters": {
              "id": 31988,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12868:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31996,
            "nodeType": "FunctionDefinition",
            "src": "12908:64:87",
            "nodes": [],
            "functionSelector": "191553a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRecordedLogs",
            "nameLocation": "12917:15:87",
            "parameters": {
              "id": 31990,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12932:2:87"
            },
            "returnParameters": {
              "id": 31995,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31994,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "12966:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 31996,
                  "src": "12953:17:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$31357_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31992,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 31991,
                        "name": "Log",
                        "nameLocations": [
                          "12953:3:87"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31357,
                        "src": "12953:3:87"
                      },
                      "referencedDeclaration": 31357,
                      "src": "12953:3:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$31357_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 31993,
                    "nodeType": "ArrayTypeName",
                    "src": "12953:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$31357_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12952:19:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32005,
            "nodeType": "FunctionDefinition",
            "src": "13107:102:87",
            "nodes": [],
            "functionSelector": "6229498b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13116:9:87",
            "parameters": {
              "id": 32001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31998,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13142:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32005,
                  "src": "13126:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31997,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13126:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32000,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13159:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32005,
                  "src": "13152:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 31999,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13152:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13125:40:87"
            },
            "returnParameters": {
              "id": 32004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32003,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13197:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32005,
                  "src": "13189:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13189:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13188:20:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32016,
            "nodeType": "FunctionDefinition",
            "src": "13325:158:87",
            "nodes": [],
            "functionSelector": "6bcb2c1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13334:9:87",
            "parameters": {
              "id": 32012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32007,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13360:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32016,
                  "src": "13344:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32006,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13344:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32009,
                  "mutability": "mutable",
                  "name": "derivationPath",
                  "nameLocation": "13386:14:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32016,
                  "src": "13370:30:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32008,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13370:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32011,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13409:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32016,
                  "src": "13402:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 32010,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13402:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13343:72:87"
            },
            "returnParameters": {
              "id": 32015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32014,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13471:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32016,
                  "src": "13463:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13463:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13462:20:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32023,
            "nodeType": "FunctionDefinition",
            "src": "13564:76:87",
            "nodes": [],
            "functionSelector": "22100064",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rememberKey",
            "nameLocation": "13573:11:87",
            "parameters": {
              "id": 32019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32018,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13593:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32023,
                  "src": "13585:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32017,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13585:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13584:20:87"
            },
            "returnParameters": {
              "id": 32022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32021,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "13631:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32023,
                  "src": "13623:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13622:17:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32032,
            "nodeType": "FunctionDefinition",
            "src": "14673:114:87",
            "nodes": [],
            "functionSelector": "85940ef1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14682:9:87",
            "parameters": {
              "id": 32028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32025,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14708:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32032,
                  "src": "14692:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32024,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14692:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32027,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "14730:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32032,
                  "src": "14714:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32026,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14714:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14691:43:87"
            },
            "returnParameters": {
              "id": 32031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32030,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14771:14:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32032,
                  "src": "14758:27:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32029,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14758:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14757:29:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32039,
            "nodeType": "FunctionDefinition",
            "src": "14792:93:87",
            "nodes": [],
            "functionSelector": "6a82600a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14801:9:87",
            "parameters": {
              "id": 32035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32034,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14827:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32039,
                  "src": "14811:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32033,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14811:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14810:22:87"
            },
            "returnParameters": {
              "id": 32038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32037,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14869:14:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32039,
                  "src": "14856:27:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32036,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14856:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14855:29:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32048,
            "nodeType": "FunctionDefinition",
            "src": "15273:84:87",
            "nodes": [],
            "functionSelector": "addde2b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUint",
            "nameLocation": "15282:13:87",
            "parameters": {
              "id": 32044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32041,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32048,
                  "src": "15296:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32040,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15296:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32043,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32048,
                  "src": "15313:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32042,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15313:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15295:34:87"
            },
            "returnParameters": {
              "id": 32047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32046,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32048,
                  "src": "15348:7:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15348:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15347:9:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32058,
            "nodeType": "FunctionDefinition",
            "src": "15362:98:87",
            "nodes": [],
            "functionSelector": "522074ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUintArray",
            "nameLocation": "15371:18:87",
            "parameters": {
              "id": 32053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32050,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32058,
                  "src": "15390:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32049,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15390:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32052,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32058,
                  "src": "15407:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32051,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15389:34:87"
            },
            "returnParameters": {
              "id": 32057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32056,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32058,
                  "src": "15442:16:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32054,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15442:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 32055,
                    "nodeType": "ArrayTypeName",
                    "src": "15442:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15441:18:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32067,
            "nodeType": "FunctionDefinition",
            "src": "15465:82:87",
            "nodes": [],
            "functionSelector": "7b048ccd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonInt",
            "nameLocation": "15474:12:87",
            "parameters": {
              "id": 32063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32060,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32067,
                  "src": "15487:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32059,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15487:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32062,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32067,
                  "src": "15504:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32061,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15504:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15486:34:87"
            },
            "returnParameters": {
              "id": 32066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32065,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32067,
                  "src": "15539:6:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 32064,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15539:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15538:8:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32077,
            "nodeType": "FunctionDefinition",
            "src": "15552:96:87",
            "nodes": [],
            "functionSelector": "9983c28a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonIntArray",
            "nameLocation": "15561:17:87",
            "parameters": {
              "id": 32072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32069,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32077,
                  "src": "15579:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32068,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15579:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32071,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32077,
                  "src": "15596:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32070,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15596:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15578:34:87"
            },
            "returnParameters": {
              "id": 32076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32075,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32077,
                  "src": "15631:15:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32073,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15631:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 32074,
                    "nodeType": "ArrayTypeName",
                    "src": "15631:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15630:17:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32086,
            "nodeType": "FunctionDefinition",
            "src": "15653:81:87",
            "nodes": [],
            "functionSelector": "9f86dc91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBool",
            "nameLocation": "15662:13:87",
            "parameters": {
              "id": 32082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32079,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32086,
                  "src": "15676:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32078,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15676:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32081,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32086,
                  "src": "15693:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32080,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15693:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15675:34:87"
            },
            "returnParameters": {
              "id": 32085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32084,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32086,
                  "src": "15728:4:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32083,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15728:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15727:6:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32096,
            "nodeType": "FunctionDefinition",
            "src": "15739:95:87",
            "nodes": [],
            "functionSelector": "91f3b94f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBoolArray",
            "nameLocation": "15748:18:87",
            "parameters": {
              "id": 32091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32088,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32096,
                  "src": "15767:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32087,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15767:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32090,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32096,
                  "src": "15784:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32089,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15784:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15766:34:87"
            },
            "returnParameters": {
              "id": 32095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32094,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32096,
                  "src": "15819:13:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32092,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "15819:4:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 32093,
                    "nodeType": "ArrayTypeName",
                    "src": "15819:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15818:15:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32105,
            "nodeType": "FunctionDefinition",
            "src": "15839:87:87",
            "nodes": [],
            "functionSelector": "1e19e657",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddress",
            "nameLocation": "15848:16:87",
            "parameters": {
              "id": 32101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32098,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32105,
                  "src": "15865:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32097,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32100,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32105,
                  "src": "15882:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15882:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15864:34:87"
            },
            "returnParameters": {
              "id": 32104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32103,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32105,
                  "src": "15917:7:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15917:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15916:9:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32115,
            "nodeType": "FunctionDefinition",
            "src": "15931:101:87",
            "nodes": [],
            "functionSelector": "2fce7883",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddressArray",
            "nameLocation": "15940:21:87",
            "parameters": {
              "id": 32110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32107,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32115,
                  "src": "15962:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32106,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15962:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32109,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32115,
                  "src": "15979:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32108,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15979:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15961:34:87"
            },
            "returnParameters": {
              "id": 32114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32113,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32115,
                  "src": "16014:16:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32111,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "16014:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32112,
                    "nodeType": "ArrayTypeName",
                    "src": "16014:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16013:18:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32124,
            "nodeType": "FunctionDefinition",
            "src": "16037:92:87",
            "nodes": [],
            "functionSelector": "49c4fac8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonString",
            "nameLocation": "16046:15:87",
            "parameters": {
              "id": 32120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32117,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32124,
                  "src": "16062:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32116,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16062:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32119,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32124,
                  "src": "16079:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32118,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16079:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16061:34:87"
            },
            "returnParameters": {
              "id": 32123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32122,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32124,
                  "src": "16114:13:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16114:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16113:15:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32134,
            "nodeType": "FunctionDefinition",
            "src": "16134:99:87",
            "nodes": [],
            "functionSelector": "498fdcf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonStringArray",
            "nameLocation": "16143:20:87",
            "parameters": {
              "id": 32129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32126,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32134,
                  "src": "16164:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32125,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16164:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32128,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32134,
                  "src": "16181:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32127,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16181:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16163:34:87"
            },
            "returnParameters": {
              "id": 32133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32132,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32134,
                  "src": "16216:15:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32130,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16216:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 32131,
                    "nodeType": "ArrayTypeName",
                    "src": "16216:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16215:17:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32143,
            "nodeType": "FunctionDefinition",
            "src": "16238:90:87",
            "nodes": [],
            "functionSelector": "fd921be8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes",
            "nameLocation": "16247:14:87",
            "parameters": {
              "id": 32139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32143,
                  "src": "16262:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32135,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16262:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32138,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32143,
                  "src": "16279:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32137,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16279:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16261:34:87"
            },
            "returnParameters": {
              "id": 32142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32141,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32143,
                  "src": "16314:12:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32140,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:14:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32153,
            "nodeType": "FunctionDefinition",
            "src": "16333:97:87",
            "nodes": [],
            "functionSelector": "6631aa99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytesArray",
            "nameLocation": "16342:19:87",
            "parameters": {
              "id": 32148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32145,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "16362:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16362:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32147,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "16379:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32146,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16379:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16361:34:87"
            },
            "returnParameters": {
              "id": 32152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32151,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "16414:14:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32149,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "16414:5:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 32150,
                    "nodeType": "ArrayTypeName",
                    "src": "16414:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16413:16:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32162,
            "nodeType": "FunctionDefinition",
            "src": "16435:87:87",
            "nodes": [],
            "functionSelector": "1777e59d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32",
            "nameLocation": "16444:16:87",
            "parameters": {
              "id": 32158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32155,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32162,
                  "src": "16461:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16461:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32157,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32162,
                  "src": "16478:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16478:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16460:34:87"
            },
            "returnParameters": {
              "id": 32161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32160,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32162,
                  "src": "16513:7:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32159,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16513:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16512:9:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32172,
            "nodeType": "FunctionDefinition",
            "src": "16527:101:87",
            "nodes": [],
            "functionSelector": "91c75bc3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32Array",
            "nameLocation": "16536:21:87",
            "parameters": {
              "id": 32167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32164,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32172,
                  "src": "16558:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32163,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16558:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32166,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32172,
                  "src": "16575:15:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32165,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16575:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16557:34:87"
            },
            "returnParameters": {
              "id": 32171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32172,
                  "src": "16610:16:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32168,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "16610:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 32169,
                    "nodeType": "ArrayTypeName",
                    "src": "16610:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16609:18:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32182,
            "nodeType": "FunctionDefinition",
            "src": "16681:106:87",
            "nodes": [],
            "functionSelector": "213e4198",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonKeys",
            "nameLocation": "16690:13:87",
            "parameters": {
              "id": 32177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32174,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "16720:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32182,
                  "src": "16704:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32173,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16704:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32176,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "16742:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32182,
                  "src": "16726:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32175,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16726:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16703:43:87"
            },
            "returnParameters": {
              "id": 32181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32180,
                  "mutability": "mutable",
                  "name": "keys",
                  "nameLocation": "16781:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32182,
                  "src": "16765:20:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32178,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16765:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 32179,
                    "nodeType": "ArrayTypeName",
                    "src": "16765:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:22:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32193,
            "nodeType": "FunctionDefinition",
            "src": "16983:142:87",
            "nodes": [],
            "functionSelector": "ac22e971",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "16992:13:87",
            "parameters": {
              "id": 32189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32184,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17022:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32193,
                  "src": "17006:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32183,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17006:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32186,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17049:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32193,
                  "src": "17033:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32185,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17033:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32188,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17064:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32193,
                  "src": "17059:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32187,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17059:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17005:65:87"
            },
            "returnParameters": {
              "id": 32192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32191,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17119:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32193,
                  "src": "17105:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32190,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17104:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32204,
            "nodeType": "FunctionDefinition",
            "src": "17130:145:87",
            "nodes": [],
            "functionSelector": "129e9002",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "17139:13:87",
            "parameters": {
              "id": 32200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32195,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17169:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32204,
                  "src": "17153:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32194,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17153:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32197,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17196:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32204,
                  "src": "17180:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32196,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17180:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32199,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17214:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32204,
                  "src": "17206:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32198,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17206:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17152:68:87"
            },
            "returnParameters": {
              "id": 32203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32202,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17269:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32204,
                  "src": "17255:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32201,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17255:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17254:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32215,
            "nodeType": "FunctionDefinition",
            "src": "17280:143:87",
            "nodes": [],
            "functionSelector": "3f33db60",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "17289:12:87",
            "parameters": {
              "id": 32211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32206,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17318:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32215,
                  "src": "17302:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32205,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17302:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32208,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17345:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32215,
                  "src": "17329:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32207,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17329:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32210,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17362:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32215,
                  "src": "17355:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 32209,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17355:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17301:67:87"
            },
            "returnParameters": {
              "id": 32214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32213,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17417:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32215,
                  "src": "17403:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32212,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17403:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17402:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32226,
            "nodeType": "FunctionDefinition",
            "src": "17428:148:87",
            "nodes": [],
            "functionSelector": "972c6062",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "17437:16:87",
            "parameters": {
              "id": 32222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32217,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17470:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32226,
                  "src": "17454:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32216,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17454:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32219,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17497:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32226,
                  "src": "17481:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32218,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17481:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32221,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17515:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32226,
                  "src": "17507:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32220,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17507:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17453:68:87"
            },
            "returnParameters": {
              "id": 32225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32224,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17570:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32226,
                  "src": "17556:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17556:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32237,
            "nodeType": "FunctionDefinition",
            "src": "17581:148:87",
            "nodes": [],
            "functionSelector": "2d812b44",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "17590:16:87",
            "parameters": {
              "id": 32233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32228,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17623:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32237,
                  "src": "17607:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32227,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17607:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32230,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17650:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32237,
                  "src": "17634:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32229,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17634:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32232,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17668:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32237,
                  "src": "17660:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32231,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "17660:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17606:68:87"
            },
            "returnParameters": {
              "id": 32236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32235,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17723:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32237,
                  "src": "17709:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32234,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17709:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17708:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32248,
            "nodeType": "FunctionDefinition",
            "src": "17734:155:87",
            "nodes": [],
            "functionSelector": "88da6d35",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "17743:15:87",
            "parameters": {
              "id": 32244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32239,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17775:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32248,
                  "src": "17759:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32238,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17759:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32241,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17802:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32248,
                  "src": "17786:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32240,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17786:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32243,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17828:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32248,
                  "src": "17812:21:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32242,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17812:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17758:76:87"
            },
            "returnParameters": {
              "id": 32247,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32246,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17883:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32248,
                  "src": "17869:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32245,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17869:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17868:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32259,
            "nodeType": "FunctionDefinition",
            "src": "17894:153:87",
            "nodes": [],
            "functionSelector": "f21d52c7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "17903:14:87",
            "parameters": {
              "id": 32255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32250,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17934:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32259,
                  "src": "17918:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32249,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17918:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32252,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17961:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32259,
                  "src": "17945:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32251,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17945:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32254,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17986:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32259,
                  "src": "17971:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32253,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17971:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17917:75:87"
            },
            "returnParameters": {
              "id": 32258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32257,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18041:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32259,
                  "src": "18027:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32256,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18027:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18026:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32271,
            "nodeType": "FunctionDefinition",
            "src": "18053:154:87",
            "nodes": [],
            "functionSelector": "92925aa1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "18062:13:87",
            "parameters": {
              "id": 32267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32261,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18092:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32271,
                  "src": "18076:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32260,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18076:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32263,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18119:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32271,
                  "src": "18103:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32262,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18103:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32266,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18145:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32271,
                  "src": "18129:22:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32264,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "18129:4:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 32265,
                    "nodeType": "ArrayTypeName",
                    "src": "18129:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18075:77:87"
            },
            "returnParameters": {
              "id": 32270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32269,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18201:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32271,
                  "src": "18187:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32268,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18187:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18186:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32283,
            "nodeType": "FunctionDefinition",
            "src": "18212:157:87",
            "nodes": [],
            "functionSelector": "fee9a469",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "18221:13:87",
            "parameters": {
              "id": 32279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32273,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18251:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32283,
                  "src": "18235:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32272,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18235:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32275,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18278:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32283,
                  "src": "18262:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32274,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18262:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32278,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18307:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32283,
                  "src": "18288:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32276,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18288:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 32277,
                    "nodeType": "ArrayTypeName",
                    "src": "18288:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18234:80:87"
            },
            "returnParameters": {
              "id": 32282,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32281,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18363:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32283,
                  "src": "18349:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32280,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18349:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18348:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32295,
            "nodeType": "FunctionDefinition",
            "src": "18374:155:87",
            "nodes": [],
            "functionSelector": "7676e127",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "18383:12:87",
            "parameters": {
              "id": 32291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32285,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18412:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32295,
                  "src": "18396:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32284,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18396:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32287,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18439:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32295,
                  "src": "18423:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32286,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32290,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18467:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32295,
                  "src": "18449:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32288,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18449:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 32289,
                    "nodeType": "ArrayTypeName",
                    "src": "18449:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18395:79:87"
            },
            "returnParameters": {
              "id": 32294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32293,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18523:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32295,
                  "src": "18509:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32292,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18509:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18508:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32307,
            "nodeType": "FunctionDefinition",
            "src": "18534:160:87",
            "nodes": [],
            "functionSelector": "1e356e1a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "18543:16:87",
            "parameters": {
              "id": 32303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32297,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18576:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32307,
                  "src": "18560:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32296,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18560:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32299,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18603:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32307,
                  "src": "18587:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32298,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18587:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32302,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18632:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32307,
                  "src": "18613:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32300,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "18613:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32301,
                    "nodeType": "ArrayTypeName",
                    "src": "18613:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18559:80:87"
            },
            "returnParameters": {
              "id": 32306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32305,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18688:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32307,
                  "src": "18674:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32304,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18674:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18673:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32319,
            "nodeType": "FunctionDefinition",
            "src": "18699:160:87",
            "nodes": [],
            "functionSelector": "201e43e2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "18708:16:87",
            "parameters": {
              "id": 32315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32309,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18741:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32319,
                  "src": "18725:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32308,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18725:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32311,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18768:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32319,
                  "src": "18752:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32310,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18752:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32314,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18797:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32319,
                  "src": "18778:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32312,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "18778:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 32313,
                    "nodeType": "ArrayTypeName",
                    "src": "18778:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18724:80:87"
            },
            "returnParameters": {
              "id": 32318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32317,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18853:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32319,
                  "src": "18839:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32316,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18839:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18838:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32331,
            "nodeType": "FunctionDefinition",
            "src": "18864:158:87",
            "nodes": [],
            "functionSelector": "561cd6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "18873:15:87",
            "parameters": {
              "id": 32327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32321,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18905:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32331,
                  "src": "18889:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32320,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18889:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32323,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18932:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32331,
                  "src": "18916:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32322,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18916:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32326,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18960:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32331,
                  "src": "18942:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32324,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "18942:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 32325,
                    "nodeType": "ArrayTypeName",
                    "src": "18942:8:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18888:79:87"
            },
            "returnParameters": {
              "id": 32330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32329,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19016:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32331,
                  "src": "19002:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32328,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19002:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19001:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32343,
            "nodeType": "FunctionDefinition",
            "src": "19027:156:87",
            "nodes": [],
            "functionSelector": "9884b232",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "19036:14:87",
            "parameters": {
              "id": 32339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32333,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "19067:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32343,
                  "src": "19051:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32332,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19051:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32335,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "19094:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32343,
                  "src": "19078:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32334,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19078:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32338,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "19121:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32343,
                  "src": "19104:23:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32336,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "19104:5:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 32337,
                    "nodeType": "ArrayTypeName",
                    "src": "19104:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19050:78:87"
            },
            "returnParameters": {
              "id": 32342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32341,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19177:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32343,
                  "src": "19163:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32340,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19163:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19162:20:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32350,
            "nodeType": "FunctionDefinition",
            "src": "20424:72:87",
            "nodes": [],
            "functionSelector": "e23cd19f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20433:9:87",
            "parameters": {
              "id": 32348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32345,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20459:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32350,
                  "src": "20443:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32344,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20443:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32347,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20481:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32350,
                  "src": "20465:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32346,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20465:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20442:44:87"
            },
            "returnParameters": {
              "id": 32349,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20495:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32359,
            "nodeType": "FunctionDefinition",
            "src": "20717:98:87",
            "nodes": [],
            "functionSelector": "35d6ad46",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20726:9:87",
            "parameters": {
              "id": 32357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32352,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20752:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32359,
                  "src": "20736:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32351,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20736:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32354,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20774:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32359,
                  "src": "20758:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32353,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20758:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32356,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "20796:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32359,
                  "src": "20780:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32355,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20780:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20735:70:87"
            },
            "returnParameters": {
              "id": 32358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20814:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32366,
            "nodeType": "FunctionDefinition",
            "src": "20867:85:87",
            "nodes": [],
            "functionSelector": "975a6ce9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrl",
            "nameLocation": "20876:6:87",
            "parameters": {
              "id": 32362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32361,
                  "mutability": "mutable",
                  "name": "rpcAlias",
                  "nameLocation": "20899:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32366,
                  "src": "20883:24:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32360,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20883:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20882:26:87"
            },
            "returnParameters": {
              "id": 32365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32364,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20946:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32366,
                  "src": "20932:18:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32363,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20932:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20931:20:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32374,
            "nodeType": "FunctionDefinition",
            "src": "21020:67:87",
            "nodes": [],
            "functionSelector": "a85a8418",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrls",
            "nameLocation": "21029:7:87",
            "parameters": {
              "id": 32367,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21036:2:87"
            },
            "returnParameters": {
              "id": 32373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32372,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21081:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32374,
                  "src": "21062:23:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_string_memory_ptr_$2_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[2][]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 32368,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "21062:6:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "id": 32370,
                      "length": {
                        "hexValue": "32",
                        "id": 32369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21069:1:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "21062:9:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$2_storage_ptr",
                        "typeString": "string[2]"
                      }
                    },
                    "id": 32371,
                    "nodeType": "ArrayTypeName",
                    "src": "21062:11:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_string_storage_$2_storage_$dyn_storage_ptr",
                      "typeString": "string[2][]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21061:25:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32381,
            "nodeType": "FunctionDefinition",
            "src": "21150:67:87",
            "nodes": [],
            "functionSelector": "9d2ad72a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrlStructs",
            "nameLocation": "21159:13:87",
            "parameters": {
              "id": 32375,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21172:2:87"
            },
            "returnParameters": {
              "id": 32380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32379,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21211:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32381,
                  "src": "21198:17:87",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Rpc_$31362_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Rpc[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32377,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32376,
                        "name": "Rpc",
                        "nameLocations": [
                          "21198:3:87"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31362,
                        "src": "21198:3:87"
                      },
                      "referencedDeclaration": 31362,
                      "src": "21198:3:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Rpc_$31362_storage_ptr",
                        "typeString": "struct VmSafe.Rpc"
                      }
                    },
                    "id": 32378,
                    "nodeType": "ArrayTypeName",
                    "src": "21198:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Rpc_$31362_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Rpc[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21197:19:87"
            },
            "scope": 32405,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32386,
            "nodeType": "FunctionDefinition",
            "src": "21310:46:87",
            "nodes": [],
            "functionSelector": "4c63e562",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assume",
            "nameLocation": "21319:6:87",
            "parameters": {
              "id": 32384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32383,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "21331:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32386,
                  "src": "21326:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32382,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21326:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21325:16:87"
            },
            "returnParameters": {
              "id": 32385,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21355:0:87"
            },
            "scope": 32405,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32389,
            "nodeType": "FunctionDefinition",
            "src": "21445:37:87",
            "nodes": [],
            "functionSelector": "d1a5b36f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pauseGasMetering",
            "nameLocation": "21454:16:87",
            "parameters": {
              "id": 32387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21470:2:87"
            },
            "returnParameters": {
              "id": 32388,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21481:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32392,
            "nodeType": "FunctionDefinition",
            "src": "21570:38:87",
            "nodes": [],
            "functionSelector": "2bcd50e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resumeGasMetering",
            "nameLocation": "21579:17:87",
            "parameters": {
              "id": 32390,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21596:2:87"
            },
            "returnParameters": {
              "id": 32391,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21607:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32397,
            "nodeType": "FunctionDefinition",
            "src": "21667:51:87",
            "nodes": [],
            "functionSelector": "f0259e92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21676:10:87",
            "parameters": {
              "id": 32395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32394,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21703:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32397,
                  "src": "21687:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32393,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21687:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21686:22:87"
            },
            "returnParameters": {
              "id": 32396,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21717:0:87"
            },
            "scope": 32405,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32404,
            "nodeType": "FunctionDefinition",
            "src": "21789:63:87",
            "nodes": [],
            "functionSelector": "f7d39a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21798:10:87",
            "parameters": {
              "id": 32402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32399,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21825:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32404,
                  "src": "21809:20:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32398,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21809:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32401,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21836:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32404,
                  "src": "21831:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32400,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21831:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21808:34:87"
            },
            "returnParameters": {
              "id": 32403,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21851:0:87"
            },
            "scope": 32405,
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
          32405
        ],
        "name": "VmSafe",
        "nameLocation": "581:6:87",
        "scope": 32878,
        "usedErrors": []
      },
      {
        "id": 32877,
        "nodeType": "ContractDefinition",
        "src": "21856:11610:87",
        "nodes": [
          {
            "id": 32412,
            "nodeType": "FunctionDefinition",
            "src": "21913:45:87",
            "nodes": [],
            "functionSelector": "e5d6bf02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "warp",
            "nameLocation": "21922:4:87",
            "parameters": {
              "id": 32410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32409,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "21935:12:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32412,
                  "src": "21927:20:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32408,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21927:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21926:22:87"
            },
            "returnParameters": {
              "id": 32411,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32417,
            "nodeType": "FunctionDefinition",
            "src": "21988:42:87",
            "nodes": [],
            "functionSelector": "1f7b4f30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "roll",
            "nameLocation": "21997:4:87",
            "parameters": {
              "id": 32415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32414,
                  "mutability": "mutable",
                  "name": "newHeight",
                  "nameLocation": "22010:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32417,
                  "src": "22002:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22002:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22001:19:87"
            },
            "returnParameters": {
              "id": 32416,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22029:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32422,
            "nodeType": "FunctionDefinition",
            "src": "22061:42:87",
            "nodes": [],
            "functionSelector": "39b37ab0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fee",
            "nameLocation": "22070:3:87",
            "parameters": {
              "id": 32420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32419,
                  "mutability": "mutable",
                  "name": "newBasefee",
                  "nameLocation": "22082:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32422,
                  "src": "22074:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22074:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22073:20:87"
            },
            "returnParameters": {
              "id": 32421,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22102:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32427,
            "nodeType": "FunctionDefinition",
            "src": "22279:52:87",
            "nodes": [],
            "functionSelector": "46cc92d9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "difficulty",
            "nameLocation": "22288:10:87",
            "parameters": {
              "id": 32425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32424,
                  "mutability": "mutable",
                  "name": "newDifficulty",
                  "nameLocation": "22307:13:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32427,
                  "src": "22299:21:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32423,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22299:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22298:23:87"
            },
            "returnParameters": {
              "id": 32426,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22330:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32432,
            "nodeType": "FunctionDefinition",
            "src": "22501:52:87",
            "nodes": [],
            "functionSelector": "3b925549",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prevrandao",
            "nameLocation": "22510:10:87",
            "parameters": {
              "id": 32430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32429,
                  "mutability": "mutable",
                  "name": "newPrevrandao",
                  "nameLocation": "22529:13:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32432,
                  "src": "22521:21:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32428,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22521:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22520:23:87"
            },
            "returnParameters": {
              "id": 32431,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22552:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32437,
            "nodeType": "FunctionDefinition",
            "src": "22584:46:87",
            "nodes": [],
            "functionSelector": "4049ddd2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "chainId",
            "nameLocation": "22593:7:87",
            "parameters": {
              "id": 32435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32434,
                  "mutability": "mutable",
                  "name": "newChainId",
                  "nameLocation": "22609:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32437,
                  "src": "22601:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22601:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22600:20:87"
            },
            "returnParameters": {
              "id": 32436,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22629:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32442,
            "nodeType": "FunctionDefinition",
            "src": "22659:50:87",
            "nodes": [],
            "functionSelector": "48f50c0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "txGasPrice",
            "nameLocation": "22668:10:87",
            "parameters": {
              "id": 32440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32439,
                  "mutability": "mutable",
                  "name": "newGasPrice",
                  "nameLocation": "22687:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32442,
                  "src": "22679:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22679:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22678:21:87"
            },
            "returnParameters": {
              "id": 32441,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22708:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32451,
            "nodeType": "FunctionDefinition",
            "src": "22765:69:87",
            "nodes": [],
            "functionSelector": "70ca10bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "store",
            "nameLocation": "22774:5:87",
            "parameters": {
              "id": 32449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32444,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "22788:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32451,
                  "src": "22780:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22780:7:87",
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
                  "id": 32446,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "22804:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32451,
                  "src": "22796:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32445,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22796:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32448,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22818:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32451,
                  "src": "22810:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32447,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22810:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22779:45:87"
            },
            "returnParameters": {
              "id": 32450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22833:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32458,
            "nodeType": "FunctionDefinition",
            "src": "22929:61:87",
            "nodes": [],
            "functionSelector": "f8e18b57",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonce",
            "nameLocation": "22938:8:87",
            "parameters": {
              "id": 32456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32453,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "22955:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32458,
                  "src": "22947:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32452,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22947:7:87",
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
                  "id": 32455,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "22971:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32458,
                  "src": "22964:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32454,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "22964:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22946:34:87"
            },
            "returnParameters": {
              "id": 32457,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22989:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32465,
            "nodeType": "FunctionDefinition",
            "src": "23053:67:87",
            "nodes": [],
            "functionSelector": "9b67b21c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonceUnsafe",
            "nameLocation": "23062:14:87",
            "parameters": {
              "id": 32463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32460,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23085:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32465,
                  "src": "23077:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23077:7:87",
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
                  "id": 32462,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "23101:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32465,
                  "src": "23094:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32461,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "23094:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23076:34:87"
            },
            "returnParameters": {
              "id": 32464,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23119:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32470,
            "nodeType": "FunctionDefinition",
            "src": "23205:46:87",
            "nodes": [],
            "functionSelector": "1c72346d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resetNonce",
            "nameLocation": "23214:10:87",
            "parameters": {
              "id": 32468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32467,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23233:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32470,
                  "src": "23225:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32466,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23225:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23224:17:87"
            },
            "returnParameters": {
              "id": 32469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23250:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32475,
            "nodeType": "FunctionDefinition",
            "src": "23321:43:87",
            "nodes": [],
            "functionSelector": "ca669fa7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23330:5:87",
            "parameters": {
              "id": 32473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32472,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23344:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32475,
                  "src": "23336:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32471,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23336:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23335:19:87"
            },
            "returnParameters": {
              "id": 32474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23363:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32480,
            "nodeType": "FunctionDefinition",
            "src": "23466:48:87",
            "nodes": [],
            "functionSelector": "06447d56",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23475:10:87",
            "parameters": {
              "id": 32478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32477,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23494:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32480,
                  "src": "23486:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32476,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23486:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23485:19:87"
            },
            "returnParameters": {
              "id": 32479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23513:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32487,
            "nodeType": "FunctionDefinition",
            "src": "23626:61:87",
            "nodes": [],
            "functionSelector": "47e50cce",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23635:5:87",
            "parameters": {
              "id": 32485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32482,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23649:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32487,
                  "src": "23641:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32481,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23641:7:87",
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
                  "id": 32484,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23668:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32487,
                  "src": "23660:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32483,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23660:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23640:37:87"
            },
            "returnParameters": {
              "id": 32486,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23686:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32494,
            "nodeType": "FunctionDefinition",
            "src": "23831:66:87",
            "nodes": [],
            "functionSelector": "45b56078",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23840:10:87",
            "parameters": {
              "id": 32492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32489,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23859:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32494,
                  "src": "23851:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32488,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23851:7:87",
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
                  "id": 32491,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23878:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32494,
                  "src": "23870:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32490,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23870:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23850:37:87"
            },
            "returnParameters": {
              "id": 32493,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23896:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32497,
            "nodeType": "FunctionDefinition",
            "src": "23967:30:87",
            "nodes": [],
            "functionSelector": "90c5013b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopPrank",
            "nameLocation": "23976:9:87",
            "parameters": {
              "id": 32495,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23985:2:87"
            },
            "returnParameters": {
              "id": 32496,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23996:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32507,
            "nodeType": "FunctionDefinition",
            "src": "24122:101:87",
            "nodes": [],
            "functionSelector": "4ad0bac9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readCallers",
            "nameLocation": "24131:11:87",
            "parameters": {
              "id": 32498,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24142:2:87"
            },
            "returnParameters": {
              "id": 32506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32501,
                  "mutability": "mutable",
                  "name": "callerMode",
                  "nameLocation": "24174:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32507,
                  "src": "24163:21:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_CallerMode_$31349",
                    "typeString": "enum VmSafe.CallerMode"
                  },
                  "typeName": {
                    "id": 32500,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32499,
                      "name": "CallerMode",
                      "nameLocations": [
                        "24163:10:87"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31349,
                      "src": "24163:10:87"
                    },
                    "referencedDeclaration": 31349,
                    "src": "24163:10:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_CallerMode_$31349",
                      "typeString": "enum VmSafe.CallerMode"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32503,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "24194:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32507,
                  "src": "24186:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32502,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24186:7:87",
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
                  "id": 32505,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "24213:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32507,
                  "src": "24205:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32504,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24205:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24162:60:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32514,
            "nodeType": "FunctionDefinition",
            "src": "24260:60:87",
            "nodes": [],
            "functionSelector": "c88a5e6d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deal",
            "nameLocation": "24269:4:87",
            "parameters": {
              "id": 32512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32509,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "24282:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32514,
                  "src": "24274:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32508,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24274:7:87",
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
                  "id": 32511,
                  "mutability": "mutable",
                  "name": "newBalance",
                  "nameLocation": "24299:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32514,
                  "src": "24291:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24291:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24273:37:87"
            },
            "returnParameters": {
              "id": 32513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24319:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32521,
            "nodeType": "FunctionDefinition",
            "src": "24354:74:87",
            "nodes": [],
            "functionSelector": "b4d6c782",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "etch",
            "nameLocation": "24363:4:87",
            "parameters": {
              "id": 32519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32516,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "24376:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32521,
                  "src": "24368:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24368:7:87",
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
                  "id": 32518,
                  "mutability": "mutable",
                  "name": "newRuntimeBytecode",
                  "nameLocation": "24399:18:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32521,
                  "src": "24384:33:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32517,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24384:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24367:51:87"
            },
            "returnParameters": {
              "id": 32520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24427:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32526,
            "nodeType": "FunctionDefinition",
            "src": "24504:38:87",
            "nodes": [],
            "functionSelector": "dd82d13e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "skip",
            "nameLocation": "24513:4:87",
            "parameters": {
              "id": 32524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32523,
                  "mutability": "mutable",
                  "name": "skipTest",
                  "nameLocation": "24523:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32526,
                  "src": "24518:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32522,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "24518:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24517:15:87"
            },
            "returnParameters": {
              "id": 32525,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24541:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32531,
            "nodeType": "FunctionDefinition",
            "src": "24584:58:87",
            "nodes": [],
            "functionSelector": "f28dceb3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24593:12:87",
            "parameters": {
              "id": 32529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32528,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24621:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32531,
                  "src": "24606:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32527,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24606:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24605:27:87"
            },
            "returnParameters": {
              "id": 32530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24641:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32536,
            "nodeType": "FunctionDefinition",
            "src": "24647:50:87",
            "nodes": [],
            "functionSelector": "c31eb0e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24656:12:87",
            "parameters": {
              "id": 32534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32533,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24676:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32536,
                  "src": "24669:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 32532,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "24669:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24668:19:87"
            },
            "returnParameters": {
              "id": 32535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24696:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32539,
            "nodeType": "FunctionDefinition",
            "src": "24702:33:87",
            "nodes": [],
            "functionSelector": "f4844814",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24711:12:87",
            "parameters": {
              "id": 32537,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24723:2:87"
            },
            "returnParameters": {
              "id": 32538,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24734:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32542,
            "nodeType": "FunctionDefinition",
            "src": "25067:31:87",
            "nodes": [],
            "functionSelector": "440ed10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25076:10:87",
            "parameters": {
              "id": 32540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25086:2:87"
            },
            "returnParameters": {
              "id": 32541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25097:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32547,
            "nodeType": "FunctionDefinition",
            "src": "25103:46:87",
            "nodes": [],
            "functionSelector": "86b9620d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25112:10:87",
            "parameters": {
              "id": 32545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32544,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25131:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32547,
                  "src": "25123:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32543,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25123:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25122:17:87"
            },
            "returnParameters": {
              "id": 32546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25148:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32558,
            "nodeType": "FunctionDefinition",
            "src": "25559:99:87",
            "nodes": [],
            "functionSelector": "491cc7c2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25568:10:87",
            "parameters": {
              "id": 32556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32549,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25584:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32558,
                  "src": "25579:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32548,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25579:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32551,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25602:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32558,
                  "src": "25597:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32550,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25597:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32553,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25620:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32558,
                  "src": "25615:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32552,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25615:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32555,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25638:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32558,
                  "src": "25633:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32554,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25633:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25578:70:87"
            },
            "returnParameters": {
              "id": 32557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25657:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32571,
            "nodeType": "FunctionDefinition",
            "src": "25663:124:87",
            "nodes": [],
            "functionSelector": "81bad6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25672:10:87",
            "parameters": {
              "id": 32569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32560,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25688:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32571,
                  "src": "25683:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32559,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25683:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32562,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25706:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32571,
                  "src": "25701:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32561,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25701:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32564,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25724:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32571,
                  "src": "25719:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32563,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25719:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32566,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25742:9:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32571,
                  "src": "25737:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32565,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25737:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32568,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25761:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32571,
                  "src": "25753:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32567,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25753:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25682:87:87"
            },
            "returnParameters": {
              "id": 32570,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25786:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32580,
            "nodeType": "FunctionDefinition",
            "src": "26043:91:87",
            "nodes": [],
            "functionSelector": "b96213e4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26052:8:87",
            "parameters": {
              "id": 32578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32573,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26069:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32580,
                  "src": "26061:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26061:7:87",
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
                  "id": 32575,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26092:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32580,
                  "src": "26077:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32574,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26077:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32577,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26113:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32580,
                  "src": "26098:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32576,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26098:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26060:64:87"
            },
            "returnParameters": {
              "id": 32579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26133:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32591,
            "nodeType": "FunctionDefinition",
            "src": "26302:109:87",
            "nodes": [],
            "functionSelector": "81409b91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26311:8:87",
            "parameters": {
              "id": 32589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32582,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26328:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32591,
                  "src": "26320:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32581,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26320:7:87",
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
                  "id": 32584,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26344:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32591,
                  "src": "26336:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26336:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32586,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26369:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32591,
                  "src": "26354:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32585,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26354:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32588,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26390:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32591,
                  "src": "26375:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32587,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26375:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26319:82:87"
            },
            "returnParameters": {
              "id": 32590,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26410:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32600,
            "nodeType": "FunctionDefinition",
            "src": "26480:97:87",
            "nodes": [],
            "functionSelector": "dbaad147",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26489:14:87",
            "parameters": {
              "id": 32598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32593,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26512:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32600,
                  "src": "26504:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26504:7:87",
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
                  "id": 32595,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26535:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32600,
                  "src": "26520:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32594,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26520:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32597,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26556:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32600,
                  "src": "26541:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32596,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26541:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26503:64:87"
            },
            "returnParameters": {
              "id": 32599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26576:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32611,
            "nodeType": "FunctionDefinition",
            "src": "26673:123:87",
            "nodes": [],
            "functionSelector": "d23cd037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26682:14:87",
            "parameters": {
              "id": 32609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32602,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26705:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32611,
                  "src": "26697:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26697:7:87",
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
                  "id": 32604,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26721:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32611,
                  "src": "26713:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26713:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32606,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26746:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32611,
                  "src": "26731:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32605,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26731:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32608,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26767:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32611,
                  "src": "26752:25:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32607,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26752:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26696:82:87"
            },
            "returnParameters": {
              "id": 32610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26795:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32614,
            "nodeType": "FunctionDefinition",
            "src": "26832:37:87",
            "nodes": [],
            "functionSelector": "3fdf4e15",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "clearMockedCalls",
            "nameLocation": "26841:16:87",
            "parameters": {
              "id": 32612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26857:2:87"
            },
            "returnParameters": {
              "id": 32613,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26868:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32621,
            "nodeType": "FunctionDefinition",
            "src": "26997:66:87",
            "nodes": [],
            "functionSelector": "bd6af434",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27006:10:87",
            "parameters": {
              "id": 32619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32616,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27025:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32621,
                  "src": "27017:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27017:7:87",
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
                  "id": 32618,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27048:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32621,
                  "src": "27033:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32617,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27033:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27016:37:87"
            },
            "returnParameters": {
              "id": 32620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27062:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32630,
            "nodeType": "FunctionDefinition",
            "src": "27148:80:87",
            "nodes": [],
            "functionSelector": "c1adbbff",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27157:10:87",
            "parameters": {
              "id": 32628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32623,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27176:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32630,
                  "src": "27168:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27168:7:87",
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
                  "id": 32625,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27199:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32630,
                  "src": "27184:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32624,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27184:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32627,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27212:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32630,
                  "src": "27205:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32626,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27205:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27167:51:87"
            },
            "returnParameters": {
              "id": 32629,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27227:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32639,
            "nodeType": "FunctionDefinition",
            "src": "27311:84:87",
            "nodes": [],
            "functionSelector": "f30c7ba3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27320:10:87",
            "parameters": {
              "id": 32637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32632,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27339:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32639,
                  "src": "27331:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27331:7:87",
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
                  "id": 32634,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27355:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32639,
                  "src": "27347:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27347:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32636,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27380:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32639,
                  "src": "27365:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32635,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27365:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27330:55:87"
            },
            "returnParameters": {
              "id": 32638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27394:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32650,
            "nodeType": "FunctionDefinition",
            "src": "27493:98:87",
            "nodes": [],
            "functionSelector": "a2b1a1ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27502:10:87",
            "parameters": {
              "id": 32648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32641,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27521:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32650,
                  "src": "27513:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27513:7:87",
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
                  "id": 32643,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27537:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32650,
                  "src": "27529:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27529:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32645,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27562:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32650,
                  "src": "27547:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32644,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27547:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32647,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27575:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32650,
                  "src": "27568:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32646,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27568:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27512:69:87"
            },
            "returnParameters": {
              "id": 32649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27590:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32661,
            "nodeType": "FunctionDefinition",
            "src": "27680:96:87",
            "nodes": [],
            "functionSelector": "23361207",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27689:10:87",
            "parameters": {
              "id": 32659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32652,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27708:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32661,
                  "src": "27700:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32651,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27700:7:87",
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
                  "id": 32654,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27724:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32661,
                  "src": "27716:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32653,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27716:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32656,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27741:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32661,
                  "src": "27734:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32655,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27734:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32658,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27761:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32661,
                  "src": "27746:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32657,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27746:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27699:67:87"
            },
            "returnParameters": {
              "id": 32660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27775:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32674,
            "nodeType": "FunctionDefinition",
            "src": "27881:110:87",
            "nodes": [],
            "functionSelector": "65b7b7cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27890:10:87",
            "parameters": {
              "id": 32672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32663,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27909:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32674,
                  "src": "27901:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32662,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27901:7:87",
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
                  "id": 32665,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27925:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32674,
                  "src": "27917:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32664,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27917:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32667,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27942:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32674,
                  "src": "27935:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32666,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27935:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32669,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27962:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32674,
                  "src": "27947:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32668,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27947:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32671,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27975:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32674,
                  "src": "27968:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32670,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27968:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27900:81:87"
            },
            "returnParameters": {
              "id": 32673,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27990:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32685,
            "nodeType": "FunctionDefinition",
            "src": "28105:105:87",
            "nodes": [],
            "functionSelector": "08e4e116",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28114:16:87",
            "parameters": {
              "id": 32683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32676,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28139:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32685,
                  "src": "28131:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28131:7:87",
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
                  "id": 32678,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28155:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32685,
                  "src": "28147:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28147:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32680,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28172:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32685,
                  "src": "28165:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32679,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28165:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32682,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28195:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32685,
                  "src": "28180:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32681,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28180:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28130:70:87"
            },
            "returnParameters": {
              "id": 32684,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28209:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32698,
            "nodeType": "FunctionDefinition",
            "src": "28339:127:87",
            "nodes": [],
            "functionSelector": "e13a1834",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28348:16:87",
            "parameters": {
              "id": 32696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32687,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28373:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32698,
                  "src": "28365:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28365:7:87",
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
                  "id": 32689,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28389:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32698,
                  "src": "28381:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28381:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32691,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28406:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32698,
                  "src": "28399:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32690,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28399:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32693,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28429:4:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32698,
                  "src": "28414:19:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32692,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28414:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32695,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "28442:5:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32698,
                  "src": "28435:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32694,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28435:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28364:84:87"
            },
            "returnParameters": {
              "id": 32697,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28465:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32705,
            "nodeType": "FunctionDefinition",
            "src": "28692:59:87",
            "nodes": [],
            "functionSelector": "6d016688",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemory",
            "nameLocation": "28701:16:87",
            "parameters": {
              "id": 32703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32700,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "28725:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32705,
                  "src": "28718:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32699,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28718:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32702,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "28737:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32705,
                  "src": "28730:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32701,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28730:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28717:24:87"
            },
            "returnParameters": {
              "id": 32704,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28750:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32712,
            "nodeType": "FunctionDefinition",
            "src": "28989:63:87",
            "nodes": [],
            "functionSelector": "05838bf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemoryCall",
            "nameLocation": "28998:20:87",
            "parameters": {
              "id": 32710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32707,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "29026:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32712,
                  "src": "29019:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32706,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29019:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32709,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "29038:3:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32712,
                  "src": "29031:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 32708,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29031:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29018:24:87"
            },
            "returnParameters": {
              "id": 32711,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29051:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32717,
            "nodeType": "FunctionDefinition",
            "src": "29084:48:87",
            "nodes": [],
            "functionSelector": "ff483c54",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "coinbase",
            "nameLocation": "29093:8:87",
            "parameters": {
              "id": 32715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32714,
                  "mutability": "mutable",
                  "name": "newCoinbase",
                  "nameLocation": "29110:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32717,
                  "src": "29102:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "29102:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29101:21:87"
            },
            "returnParameters": {
              "id": 32716,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29131:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32722,
            "nodeType": "FunctionDefinition",
            "src": "29282:58:87",
            "nodes": [],
            "functionSelector": "9711715a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "snapshot",
            "nameLocation": "29291:8:87",
            "parameters": {
              "id": 32718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29299:2:87"
            },
            "returnParameters": {
              "id": 32721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32720,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29328:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32722,
                  "src": "29320:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29320:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29319:20:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32729,
            "nodeType": "FunctionDefinition",
            "src": "29532:70:87",
            "nodes": [],
            "functionSelector": "44d7f0a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revertTo",
            "nameLocation": "29541:8:87",
            "parameters": {
              "id": 32725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32724,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29558:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32729,
                  "src": "29550:18:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32723,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29550:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29549:20:87"
            },
            "returnParameters": {
              "id": 32728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32727,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "29593:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32729,
                  "src": "29588:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32726,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29588:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29587:14:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32738,
            "nodeType": "FunctionDefinition",
            "src": "29706:103:87",
            "nodes": [],
            "functionSelector": "6ba3ba2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29715:10:87",
            "parameters": {
              "id": 32734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32731,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29742:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32738,
                  "src": "29726:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32730,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29726:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32733,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "29762:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32738,
                  "src": "29754:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29754:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29725:49:87"
            },
            "returnParameters": {
              "id": 32737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32736,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "29801:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32738,
                  "src": "29793:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29793:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29792:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32745,
            "nodeType": "FunctionDefinition",
            "src": "29926:82:87",
            "nodes": [],
            "functionSelector": "31ba3498",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29935:10:87",
            "parameters": {
              "id": 32741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32740,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29962:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32745,
                  "src": "29946:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32739,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29946:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29945:28:87"
            },
            "returnParameters": {
              "id": 32744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32743,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30000:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32745,
                  "src": "29992:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32742,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29992:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29991:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32754,
            "nodeType": "FunctionDefinition",
            "src": "30229:98:87",
            "nodes": [],
            "functionSelector": "7ca29682",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "30238:10:87",
            "parameters": {
              "id": 32750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32747,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30265:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32754,
                  "src": "30249:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32746,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30249:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32749,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30285:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32754,
                  "src": "30277:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32748,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30277:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30248:44:87"
            },
            "returnParameters": {
              "id": 32753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32752,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30319:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32754,
                  "src": "30311:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30311:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30310:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32763,
            "nodeType": "FunctionDefinition",
            "src": "30450:109:87",
            "nodes": [],
            "functionSelector": "71ee464d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30459:16:87",
            "parameters": {
              "id": 32759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32756,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30492:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32763,
                  "src": "30476:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32755,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30476:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32758,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "30512:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32763,
                  "src": "30504:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32757,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30504:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30475:49:87"
            },
            "returnParameters": {
              "id": 32762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32761,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30551:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32763,
                  "src": "30543:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30543:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30542:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32772,
            "nodeType": "FunctionDefinition",
            "src": "30793:104:87",
            "nodes": [],
            "functionSelector": "84d52b7a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30802:16:87",
            "parameters": {
              "id": 32768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32765,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30835:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32772,
                  "src": "30819:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32764,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32767,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30855:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32772,
                  "src": "30847:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32766,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30847:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:44:87"
            },
            "returnParameters": {
              "id": 32771,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32770,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30889:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32772,
                  "src": "30881:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32769,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30881:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30880:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32779,
            "nodeType": "FunctionDefinition",
            "src": "31031:88:87",
            "nodes": [],
            "functionSelector": "98680034",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "31040:16:87",
            "parameters": {
              "id": 32775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32774,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "31073:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32779,
                  "src": "31057:26:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32773,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "31057:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31056:28:87"
            },
            "returnParameters": {
              "id": 32778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32777,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31111:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32779,
                  "src": "31103:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31103:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31102:16:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32784,
            "nodeType": "FunctionDefinition",
            "src": "31230:45:87",
            "nodes": [],
            "functionSelector": "9ebf6827",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "selectFork",
            "nameLocation": "31239:10:87",
            "parameters": {
              "id": 32782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32781,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31258:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32784,
                  "src": "31250:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32780,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31250:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31249:16:87"
            },
            "returnParameters": {
              "id": 32783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31274:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32790,
            "nodeType": "FunctionDefinition",
            "src": "31381:61:87",
            "nodes": [],
            "documentation": {
              "id": 32785,
              "nodeType": "StructuredDocumentation",
              "src": "31280:96:87",
              "text": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
            },
            "functionSelector": "2f103f22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "activeFork",
            "nameLocation": "31390:10:87",
            "parameters": {
              "id": 32786,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31400:2:87"
            },
            "returnParameters": {
              "id": 32789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32788,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31434:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32790,
                  "src": "31426:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32787,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31426:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31425:16:87"
            },
            "scope": 32877,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32795,
            "nodeType": "FunctionDefinition",
            "src": "31577:48:87",
            "nodes": [],
            "functionSelector": "d9bbf3a1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31586:8:87",
            "parameters": {
              "id": 32793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32792,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31603:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32795,
                  "src": "31595:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31595:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31594:21:87"
            },
            "returnParameters": {
              "id": 32794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31624:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32800,
            "nodeType": "FunctionDefinition",
            "src": "31835:43:87",
            "nodes": [],
            "functionSelector": "0f29772b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31844:8:87",
            "parameters": {
              "id": 32798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32797,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "31861:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32800,
                  "src": "31853:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32796,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "31853:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31852:16:87"
            },
            "returnParameters": {
              "id": 32799,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31877:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32807,
            "nodeType": "FunctionDefinition",
            "src": "31935:64:87",
            "nodes": [],
            "functionSelector": "d74c83a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31944:8:87",
            "parameters": {
              "id": 32805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32802,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31961:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32807,
                  "src": "31953:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31953:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32804,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31977:11:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32807,
                  "src": "31969:19:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31969:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31952:37:87"
            },
            "returnParameters": {
              "id": 32806,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31998:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32814,
            "nodeType": "FunctionDefinition",
            "src": "32132:59:87",
            "nodes": [],
            "functionSelector": "f2830f7b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "32141:8:87",
            "parameters": {
              "id": 32812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32809,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "32158:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32814,
                  "src": "32150:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32150:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32811,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "32174:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32814,
                  "src": "32166:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32810,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32166:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32149:32:87"
            },
            "returnParameters": {
              "id": 32813,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32190:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32819,
            "nodeType": "FunctionDefinition",
            "src": "32390:50:87",
            "nodes": [],
            "functionSelector": "57e22dde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32399:14:87",
            "parameters": {
              "id": 32817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32816,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32422:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32819,
                  "src": "32414:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32815,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32414:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32413:17:87"
            },
            "returnParameters": {
              "id": 32818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32439:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32826,
            "nodeType": "FunctionDefinition",
            "src": "32445:69:87",
            "nodes": [],
            "functionSelector": "4074e0a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32454:14:87",
            "parameters": {
              "id": 32824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32821,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32477:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32826,
                  "src": "32469:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32469:7:87",
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
                  "id": 32823,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32495:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32826,
                  "src": "32487:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32487:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32468:36:87"
            },
            "returnParameters": {
              "id": 32825,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32513:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32835,
            "nodeType": "FunctionDefinition",
            "src": "32519:87:87",
            "nodes": [],
            "functionSelector": "efb77a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32528:14:87",
            "parameters": {
              "id": 32833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32828,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32551:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32835,
                  "src": "32543:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32543:7:87",
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
                  "id": 32830,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32569:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32835,
                  "src": "32561:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32561:7:87",
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
                  "id": 32832,
                  "mutability": "mutable",
                  "name": "account2",
                  "nameLocation": "32587:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32835,
                  "src": "32579:16:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32579:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32542:54:87"
            },
            "returnParameters": {
              "id": 32834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32605:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32841,
            "nodeType": "FunctionDefinition",
            "src": "32611:62:87",
            "nodes": [],
            "functionSelector": "1d9e269e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32620:14:87",
            "parameters": {
              "id": 32839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32838,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32654:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32841,
                  "src": "32635:27:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32836,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32635:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32837,
                    "nodeType": "ArrayTypeName",
                    "src": "32635:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32634:29:87"
            },
            "returnParameters": {
              "id": 32840,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32672:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32846,
            "nodeType": "FunctionDefinition",
            "src": "32767:52:87",
            "nodes": [],
            "functionSelector": "997a0222",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32776:16:87",
            "parameters": {
              "id": 32844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32843,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32801:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32846,
                  "src": "32793:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32793:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32792:17:87"
            },
            "returnParameters": {
              "id": 32845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32818:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32852,
            "nodeType": "FunctionDefinition",
            "src": "32824:64:87",
            "nodes": [],
            "functionSelector": "3ce969e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32833:16:87",
            "parameters": {
              "id": 32850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32849,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32869:8:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32852,
                  "src": "32850:27:87",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32847,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32850:7:87",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32848,
                    "nodeType": "ArrayTypeName",
                    "src": "32850:9:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32849:29:87"
            },
            "returnParameters": {
              "id": 32851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32887:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32859,
            "nodeType": "FunctionDefinition",
            "src": "32952:79:87",
            "nodes": [],
            "functionSelector": "d92d8efd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPersistent",
            "nameLocation": "32961:12:87",
            "parameters": {
              "id": 32855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32854,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32982:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32859,
                  "src": "32974:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32974:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32973:17:87"
            },
            "returnParameters": {
              "id": 32858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32857,
                  "mutability": "mutable",
                  "name": "persistent",
                  "nameLocation": "33019:10:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32859,
                  "src": "33014:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32856,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "33014:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33013:17:87"
            },
            "scope": 32877,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32864,
            "nodeType": "FunctionDefinition",
            "src": "33112:51:87",
            "nodes": [],
            "functionSelector": "ea060291",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowCheatcodes",
            "nameLocation": "33121:15:87",
            "parameters": {
              "id": 32862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32861,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "33145:7:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32864,
                  "src": "33137:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33137:7:87",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33136:17:87"
            },
            "returnParameters": {
              "id": 32863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33162:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32869,
            "nodeType": "FunctionDefinition",
            "src": "33263:43:87",
            "nodes": [],
            "functionSelector": "be646da1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33272:8:87",
            "parameters": {
              "id": 32867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32866,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33289:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32869,
                  "src": "33281:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32865,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33281:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33280:16:87"
            },
            "returnParameters": {
              "id": 32868,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33305:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32876,
            "nodeType": "FunctionDefinition",
            "src": "33405:59:87",
            "nodes": [],
            "functionSelector": "4d8abc4b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33414:8:87",
            "parameters": {
              "id": 32874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32871,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "33431:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32876,
                  "src": "33423:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33423:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32873,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33447:6:87",
                  "nodeType": "VariableDeclaration",
                  "scope": 32876,
                  "src": "33439:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32872,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33439:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33422:32:87"
            },
            "returnParameters": {
              "id": 32875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33463:0:87"
            },
            "scope": 32877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 32406,
              "name": "VmSafe",
              "nameLocations": [
                "21872:6:87"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 32405,
              "src": "21872:6:87"
            },
            "id": 32407,
            "nodeType": "InheritanceSpecifier",
            "src": "21872:6:87"
          }
        ],
        "canonicalName": "Vm",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          32877,
          32405
        ],
        "name": "Vm",
        "nameLocation": "21866:2:87",
        "scope": 32878,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 87
} as const;
