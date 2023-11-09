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
    "id": 28948,
    "exportedSymbols": {
      "Vm": [
        28947
      ],
      "VmSafe": [
        28475
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:33435:70",
    "nodes": [
      {
        "id": 27412,
        "nodeType": "PragmaDirective",
        "src": "32:31:70",
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
        "id": 27413,
        "nodeType": "PragmaDirective",
        "src": "65:33:70",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 28475,
        "nodeType": "ContractDefinition",
        "src": "571:21283:70",
        "nodes": [
          {
            "id": 27419,
            "nodeType": "EnumDefinition",
            "src": "594:122:70",
            "nodes": [],
            "canonicalName": "VmSafe.CallerMode",
            "members": [
              {
                "id": 27414,
                "name": "None",
                "nameLocation": "620:4:70",
                "nodeType": "EnumValue",
                "src": "620:4:70"
              },
              {
                "id": 27415,
                "name": "Broadcast",
                "nameLocation": "634:9:70",
                "nodeType": "EnumValue",
                "src": "634:9:70"
              },
              {
                "id": 27416,
                "name": "RecurrentBroadcast",
                "nameLocation": "653:18:70",
                "nodeType": "EnumValue",
                "src": "653:18:70"
              },
              {
                "id": 27417,
                "name": "Prank",
                "nameLocation": "681:5:70",
                "nodeType": "EnumValue",
                "src": "681:5:70"
              },
              {
                "id": 27418,
                "name": "RecurrentPrank",
                "nameLocation": "696:14:70",
                "nodeType": "EnumValue",
                "src": "696:14:70"
              }
            ],
            "name": "CallerMode",
            "nameLocation": "599:10:70"
          },
          {
            "id": 27427,
            "nodeType": "StructDefinition",
            "src": "722:89:70",
            "nodes": [],
            "canonicalName": "VmSafe.Log",
            "members": [
              {
                "constant": false,
                "id": 27422,
                "mutability": "mutable",
                "name": "topics",
                "nameLocation": "753:6:70",
                "nodeType": "VariableDeclaration",
                "scope": 27427,
                "src": "743:16:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 27420,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 27421,
                  "nodeType": "ArrayTypeName",
                  "src": "743:9:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27424,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "775:4:70",
                "nodeType": "VariableDeclaration",
                "scope": 27427,
                "src": "769:10:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 27423,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:5:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27426,
                "mutability": "mutable",
                "name": "emitter",
                "nameLocation": "797:7:70",
                "nodeType": "VariableDeclaration",
                "scope": 27427,
                "src": "789:15:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 27425,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "789:7:70",
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
            "nameLocation": "729:3:70",
            "scope": 28475,
            "visibility": "public"
          },
          {
            "id": 27432,
            "nodeType": "StructDefinition",
            "src": "817:58:70",
            "nodes": [],
            "canonicalName": "VmSafe.Rpc",
            "members": [
              {
                "constant": false,
                "id": 27429,
                "mutability": "mutable",
                "name": "key",
                "nameLocation": "845:3:70",
                "nodeType": "VariableDeclaration",
                "scope": 27432,
                "src": "838:10:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 27428,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "838:6:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27431,
                "mutability": "mutable",
                "name": "url",
                "nameLocation": "865:3:70",
                "nodeType": "VariableDeclaration",
                "scope": 27432,
                "src": "858:10:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 27430,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "858:6:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Rpc",
            "nameLocation": "824:3:70",
            "scope": 28475,
            "visibility": "public"
          },
          {
            "id": 27443,
            "nodeType": "StructDefinition",
            "src": "881:139:70",
            "nodes": [],
            "canonicalName": "VmSafe.DirEntry",
            "members": [
              {
                "constant": false,
                "id": 27434,
                "mutability": "mutable",
                "name": "errorMessage",
                "nameLocation": "914:12:70",
                "nodeType": "VariableDeclaration",
                "scope": 27443,
                "src": "907:19:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 27433,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "907:6:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27436,
                "mutability": "mutable",
                "name": "path",
                "nameLocation": "943:4:70",
                "nodeType": "VariableDeclaration",
                "scope": 27443,
                "src": "936:11:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 27435,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "936:6:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27438,
                "mutability": "mutable",
                "name": "depth",
                "nameLocation": "964:5:70",
                "nodeType": "VariableDeclaration",
                "scope": 27443,
                "src": "957:12:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 27437,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "957:6:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27440,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "984:5:70",
                "nodeType": "VariableDeclaration",
                "scope": 27443,
                "src": "979:10:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 27439,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "979:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27442,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1004:9:70",
                "nodeType": "VariableDeclaration",
                "scope": 27443,
                "src": "999:14:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 27441,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "999:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DirEntry",
            "nameLocation": "888:8:70",
            "scope": 28475,
            "visibility": "public"
          },
          {
            "id": 27458,
            "nodeType": "StructDefinition",
            "src": "1026:193:70",
            "nodes": [],
            "canonicalName": "VmSafe.FsMetadata",
            "members": [
              {
                "constant": false,
                "id": 27445,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "1059:5:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1054:10:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 27444,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27447,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1079:9:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1074:14:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 27446,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27449,
                "mutability": "mutable",
                "name": "length",
                "nameLocation": "1106:6:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1098:14:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27448,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1098:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27451,
                "mutability": "mutable",
                "name": "readOnly",
                "nameLocation": "1127:8:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1122:13:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 27450,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27453,
                "mutability": "mutable",
                "name": "modified",
                "nameLocation": "1153:8:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1145:16:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27452,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1145:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27455,
                "mutability": "mutable",
                "name": "accessed",
                "nameLocation": "1179:8:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1171:16:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27454,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27457,
                "mutability": "mutable",
                "name": "created",
                "nameLocation": "1205:7:70",
                "nodeType": "VariableDeclaration",
                "scope": 27458,
                "src": "1197:15:70",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27456,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FsMetadata",
            "nameLocation": "1033:10:70",
            "scope": 28475,
            "visibility": "public"
          },
          {
            "id": 27467,
            "nodeType": "FunctionDefinition",
            "src": "1269:81:70",
            "nodes": [],
            "functionSelector": "667f9d70",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1278:4:70",
            "parameters": {
              "id": 27463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27460,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "1291:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27467,
                  "src": "1283:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:70",
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
                  "id": 27462,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1307:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27467,
                  "src": "1299:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27461,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1299:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:30:70"
            },
            "returnParameters": {
              "id": 27466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27465,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27467,
                  "src": "1336:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27464,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1335:14:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27480,
            "nodeType": "FunctionDefinition",
            "src": "1373:104:70",
            "nodes": [],
            "functionSelector": "e341eaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sign",
            "nameLocation": "1382:4:70",
            "parameters": {
              "id": 27472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27469,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1395:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27480,
                  "src": "1387:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27468,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27471,
                  "mutability": "mutable",
                  "name": "digest",
                  "nameLocation": "1415:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27480,
                  "src": "1407:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27470,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1386:36:70"
            },
            "returnParameters": {
              "id": 27479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27474,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1452:1:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27480,
                  "src": "1446:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 27473,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27476,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1463:1:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27480,
                  "src": "1455:9:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27475,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1455:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27478,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1474:1:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27480,
                  "src": "1466:9:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27477,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:31:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27487,
            "nodeType": "FunctionDefinition",
            "src": "1530:74:70",
            "nodes": [],
            "functionSelector": "ffa18649",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addr",
            "nameLocation": "1539:4:70",
            "parameters": {
              "id": 27483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27482,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1552:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27487,
                  "src": "1544:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27481,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:20:70"
            },
            "returnParameters": {
              "id": 27486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27485,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "1595:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27487,
                  "src": "1587:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27484,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1586:17:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27494,
            "nodeType": "FunctionDefinition",
            "src": "1645:72:70",
            "nodes": [],
            "functionSelector": "2d0335ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "1654:8:70",
            "parameters": {
              "id": 27490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27489,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1671:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27494,
                  "src": "1663:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27488,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:17:70"
            },
            "returnParameters": {
              "id": 27493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27492,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1710:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27494,
                  "src": "1703:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27491,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27502,
            "nodeType": "FunctionDefinition",
            "src": "1779:84:70",
            "nodes": [],
            "functionSelector": "89160467",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ffi",
            "nameLocation": "1788:3:70",
            "parameters": {
              "id": 27498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27497,
                  "mutability": "mutable",
                  "name": "commandInput",
                  "nameLocation": "1810:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27502,
                  "src": "1792:30:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27495,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1792:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27496,
                    "nodeType": "ArrayTypeName",
                    "src": "1792:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1791:32:70"
            },
            "returnParameters": {
              "id": 27501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27500,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1855:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27502,
                  "src": "1842:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27499,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:21:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27509,
            "nodeType": "FunctionDefinition",
            "src": "1902:70:70",
            "nodes": [],
            "functionSelector": "3d5923ee",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setEnv",
            "nameLocation": "1911:6:70",
            "parameters": {
              "id": 27507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27504,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1934:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27509,
                  "src": "1918:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27503,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27506,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1956:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27509,
                  "src": "1940:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27505,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1940:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:45:70"
            },
            "returnParameters": {
              "id": 27508,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1971:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27516,
            "nodeType": "FunctionDefinition",
            "src": "2031:74:70",
            "nodes": [],
            "functionSelector": "7ed1ec7d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2040:7:70",
            "parameters": {
              "id": 27512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27511,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2064:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27516,
                  "src": "2048:20:70",
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
                    "src": "2048:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2047:22:70"
            },
            "returnParameters": {
              "id": 27515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27514,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2098:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27516,
                  "src": "2093:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27513,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2093:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2092:12:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27523,
            "nodeType": "FunctionDefinition",
            "src": "2110:77:70",
            "nodes": [],
            "functionSelector": "c1978d1f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2119:7:70",
            "parameters": {
              "id": 27519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27518,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2143:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27523,
                  "src": "2127:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27517,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2127:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2126:22:70"
            },
            "returnParameters": {
              "id": 27522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27521,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2180:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27523,
                  "src": "2172:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2171:15:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27530,
            "nodeType": "FunctionDefinition",
            "src": "2192:75:70",
            "nodes": [],
            "functionSelector": "892a0c61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2201:6:70",
            "parameters": {
              "id": 27526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27525,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2224:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "2208:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27524,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2208:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2207:22:70"
            },
            "returnParameters": {
              "id": 27529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27528,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2260:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "2253:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27527,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2253:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2252:14:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27537,
            "nodeType": "FunctionDefinition",
            "src": "2272:80:70",
            "nodes": [],
            "functionSelector": "350d56bf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "2281:10:70",
            "parameters": {
              "id": 27533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27532,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2308:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27537,
                  "src": "2292:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27531,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:22:70"
            },
            "returnParameters": {
              "id": 27536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27535,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2345:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27537,
                  "src": "2337:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27534,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2336:15:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27544,
            "nodeType": "FunctionDefinition",
            "src": "2357:80:70",
            "nodes": [],
            "functionSelector": "97949042",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "2366:10:70",
            "parameters": {
              "id": 27540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27539,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2393:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27544,
                  "src": "2377:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27538,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2376:22:70"
            },
            "returnParameters": {
              "id": 27543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27542,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2430:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27544,
                  "src": "2422:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27541,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2421:15:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27551,
            "nodeType": "FunctionDefinition",
            "src": "2442:85:70",
            "nodes": [],
            "functionSelector": "f877cb19",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "2451:9:70",
            "parameters": {
              "id": 27547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27546,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2477:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27551,
                  "src": "2461:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2460:22:70"
            },
            "returnParameters": {
              "id": 27550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27549,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2520:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27551,
                  "src": "2506:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27548,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2505:21:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27558,
            "nodeType": "FunctionDefinition",
            "src": "2532:83:70",
            "nodes": [],
            "functionSelector": "4d7baf06",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "2541:8:70",
            "parameters": {
              "id": 27554,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27553,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2566:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27558,
                  "src": "2550:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27552,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2549:22:70"
            },
            "returnParameters": {
              "id": 27557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27556,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2608:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27558,
                  "src": "2595:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27555,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2595:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2594:20:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27568,
            "nodeType": "FunctionDefinition",
            "src": "2665:106:70",
            "nodes": [],
            "functionSelector": "aaaddeaf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2674:7:70",
            "parameters": {
              "id": 27563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27560,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2698:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "2682:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27559,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2682:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27562,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2720:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "2704:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27561,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2681:45:70"
            },
            "returnParameters": {
              "id": 27567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27566,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2764:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27568,
                  "src": "2750:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27564,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2750:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27565,
                    "nodeType": "ArrayTypeName",
                    "src": "2750:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2749:21:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27578,
            "nodeType": "FunctionDefinition",
            "src": "2776:109:70",
            "nodes": [],
            "functionSelector": "f3dec099",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2785:7:70",
            "parameters": {
              "id": 27573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27570,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2809:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27578,
                  "src": "2793:20:70",
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
                    "src": "2793:6:70",
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
                  "name": "delim",
                  "nameLocation": "2831:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27578,
                  "src": "2815:21:70",
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
                    "src": "2815:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2792:45:70"
            },
            "returnParameters": {
              "id": 27577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27576,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2878:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27578,
                  "src": "2861:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27574,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2861:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27575,
                    "nodeType": "ArrayTypeName",
                    "src": "2861:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2860:24:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27588,
            "nodeType": "FunctionDefinition",
            "src": "2890:107:70",
            "nodes": [],
            "functionSelector": "42181150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2899:6:70",
            "parameters": {
              "id": 27583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27580,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2922:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27588,
                  "src": "2906:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27579,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27582,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2944:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27588,
                  "src": "2928:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27581,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2928:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2905:45:70"
            },
            "returnParameters": {
              "id": 27587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27586,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2990:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27588,
                  "src": "2974:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27584,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2974:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27585,
                    "nodeType": "ArrayTypeName",
                    "src": "2974:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:23:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27598,
            "nodeType": "FunctionDefinition",
            "src": "3002:112:70",
            "nodes": [],
            "functionSelector": "ad31b9fa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "3011:10:70",
            "parameters": {
              "id": 27593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27590,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3038:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27598,
                  "src": "3022:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27589,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27592,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3060:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27598,
                  "src": "3044:21:70",
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
                    "src": "3044:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3021:45:70"
            },
            "returnParameters": {
              "id": 27597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27596,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3107:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27598,
                  "src": "3090:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27594,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3090:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27595,
                    "nodeType": "ArrayTypeName",
                    "src": "3090:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:24:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27608,
            "nodeType": "FunctionDefinition",
            "src": "3119:112:70",
            "nodes": [],
            "functionSelector": "5af231c1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "3128:10:70",
            "parameters": {
              "id": 27603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27600,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3155:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27608,
                  "src": "3139:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27599,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27602,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3177:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27608,
                  "src": "3161:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27601,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3138:45:70"
            },
            "returnParameters": {
              "id": 27607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27606,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3224:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27608,
                  "src": "3207:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27604,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3207:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27605,
                    "nodeType": "ArrayTypeName",
                    "src": "3207:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:24:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27618,
            "nodeType": "FunctionDefinition",
            "src": "3236:110:70",
            "nodes": [],
            "functionSelector": "14b02bc9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "3245:9:70",
            "parameters": {
              "id": 27613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27610,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3271:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27618,
                  "src": "3255:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27609,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27612,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3293:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27618,
                  "src": "3277:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27611,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3277:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:45:70"
            },
            "returnParameters": {
              "id": 27617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27616,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3339:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27618,
                  "src": "3323:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27614,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3323:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27615,
                    "nodeType": "ArrayTypeName",
                    "src": "3323:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3322:23:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27628,
            "nodeType": "FunctionDefinition",
            "src": "3351:108:70",
            "nodes": [],
            "functionSelector": "ddc2651b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "3360:8:70",
            "parameters": {
              "id": 27623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27620,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3385:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27628,
                  "src": "3369:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27619,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3369:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27622,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3407:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27628,
                  "src": "3391:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27621,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3391:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3368:45:70"
            },
            "returnParameters": {
              "id": 27627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27626,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3452:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27628,
                  "src": "3437:20:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27624,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3437:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27625,
                    "nodeType": "ArrayTypeName",
                    "src": "3437:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3436:22:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27637,
            "nodeType": "FunctionDefinition",
            "src": "3517:86:70",
            "nodes": [],
            "functionSelector": "4777f3cf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3526:5:70",
            "parameters": {
              "id": 27633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27630,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3548:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27637,
                  "src": "3532:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27629,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27632,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3559:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27637,
                  "src": "3554:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3554:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:41:70"
            },
            "returnParameters": {
              "id": 27636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27635,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3596:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27637,
                  "src": "3591:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3591:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3590:12:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27646,
            "nodeType": "FunctionDefinition",
            "src": "3608:92:70",
            "nodes": [],
            "functionSelector": "5e97348f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3617:5:70",
            "parameters": {
              "id": 27642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27639,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3639:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27646,
                  "src": "3623:20:70",
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
                    "src": "3623:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27641,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3653:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27646,
                  "src": "3645:20:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27640,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3645:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3622:44:70"
            },
            "returnParameters": {
              "id": 27645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27644,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3693:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27646,
                  "src": "3685:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27643,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3685:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3684:15:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27655,
            "nodeType": "FunctionDefinition",
            "src": "3705:90:70",
            "nodes": [],
            "functionSelector": "bbcb713e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3714:5:70",
            "parameters": {
              "id": 27651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27648,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3736:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27655,
                  "src": "3720:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27647,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27650,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3749:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27655,
                  "src": "3742:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27649,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3742:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3719:43:70"
            },
            "returnParameters": {
              "id": 27654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27653,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3788:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27655,
                  "src": "3781:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27652,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3781:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3780:14:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27664,
            "nodeType": "FunctionDefinition",
            "src": "3800:92:70",
            "nodes": [],
            "functionSelector": "561fe540",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3809:5:70",
            "parameters": {
              "id": 27660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27657,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3831:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27664,
                  "src": "3815:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27656,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27659,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3845:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27664,
                  "src": "3837:20:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3837:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:44:70"
            },
            "returnParameters": {
              "id": 27663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27662,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3885:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27664,
                  "src": "3877:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3877:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3876:15:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27673,
            "nodeType": "FunctionDefinition",
            "src": "3897:92:70",
            "nodes": [],
            "functionSelector": "b4a85892",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3906:5:70",
            "parameters": {
              "id": 27669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27666,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3928:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27673,
                  "src": "3912:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27665,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3912:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27668,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3942:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27673,
                  "src": "3934:20:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27667,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3911:44:70"
            },
            "returnParameters": {
              "id": 27672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27671,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3982:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27673,
                  "src": "3974:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27670,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:15:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27682,
            "nodeType": "FunctionDefinition",
            "src": "3994:106:70",
            "nodes": [],
            "functionSelector": "d145736c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4003:5:70",
            "parameters": {
              "id": 27678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27675,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4025:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27682,
                  "src": "4009:20:70",
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
                    "src": "4009:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27677,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4047:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27682,
                  "src": "4031:28:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27676,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4031:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4008:52:70"
            },
            "returnParameters": {
              "id": 27681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27680,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4093:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27682,
                  "src": "4079:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27679,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4079:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4078:21:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27691,
            "nodeType": "FunctionDefinition",
            "src": "4105:104:70",
            "nodes": [],
            "functionSelector": "b3e47705",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4114:5:70",
            "parameters": {
              "id": 27687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27684,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4136:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27691,
                  "src": "4120:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27683,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4120:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27686,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4157:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27691,
                  "src": "4142:27:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27685,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4142:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4119:51:70"
            },
            "returnParameters": {
              "id": 27690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27689,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4202:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27691,
                  "src": "4189:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27688,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27704,
            "nodeType": "FunctionDefinition",
            "src": "4277:145:70",
            "nodes": [],
            "functionSelector": "eb85e83b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4286:5:70",
            "parameters": {
              "id": 27699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27693,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4308:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27704,
                  "src": "4292:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4292:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27695,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4330:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27704,
                  "src": "4314:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27694,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27698,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4353:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27704,
                  "src": "4337:28:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27696,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4337:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27697,
                    "nodeType": "ArrayTypeName",
                    "src": "4337:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4291:75:70"
            },
            "returnParameters": {
              "id": 27703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27702,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4415:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27704,
                  "src": "4401:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27700,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4401:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27701,
                    "nodeType": "ArrayTypeName",
                    "src": "4401:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4400:21:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27717,
            "nodeType": "FunctionDefinition",
            "src": "4427:151:70",
            "nodes": [],
            "functionSelector": "74318528",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4436:5:70",
            "parameters": {
              "id": 27712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27706,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4458:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27717,
                  "src": "4442:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27705,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4442:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27708,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4480:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27717,
                  "src": "4464:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27707,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:70",
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
                  "name": "defaultValue",
                  "nameLocation": "4506:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27717,
                  "src": "4487:31:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27709,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4487:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27710,
                    "nodeType": "ArrayTypeName",
                    "src": "4487:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4441:78:70"
            },
            "returnParameters": {
              "id": 27716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27715,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4571:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27717,
                  "src": "4554:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27713,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4554:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27714,
                    "nodeType": "ArrayTypeName",
                    "src": "4554:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:24:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27730,
            "nodeType": "FunctionDefinition",
            "src": "4583:149:70",
            "nodes": [],
            "functionSelector": "4700d74b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4592:5:70",
            "parameters": {
              "id": 27725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27719,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4614:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "4598:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27718,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4598:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27721,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4636:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "4620:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27720,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27724,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4661:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "4643:30:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27722,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27723,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4597:77:70"
            },
            "returnParameters": {
              "id": 27729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27728,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4725:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27730,
                  "src": "4709:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27726,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4709:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27727,
                    "nodeType": "ArrayTypeName",
                    "src": "4709:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:23:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27743,
            "nodeType": "FunctionDefinition",
            "src": "4737:151:70",
            "nodes": [],
            "functionSelector": "c74e9deb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4746:5:70",
            "parameters": {
              "id": 27738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27732,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4768:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27743,
                  "src": "4752:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27731,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4752:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27734,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4790:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27743,
                  "src": "4774:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27733,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4774:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27737,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4816:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27743,
                  "src": "4797:31:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27735,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4797:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27736,
                    "nodeType": "ArrayTypeName",
                    "src": "4797:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4751:78:70"
            },
            "returnParameters": {
              "id": 27742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27741,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4881:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27743,
                  "src": "4864:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27739,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4864:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27740,
                    "nodeType": "ArrayTypeName",
                    "src": "4864:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:24:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27756,
            "nodeType": "FunctionDefinition",
            "src": "4893:151:70",
            "nodes": [],
            "functionSelector": "2281f367",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4902:5:70",
            "parameters": {
              "id": 27751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27745,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4924:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27756,
                  "src": "4908:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27744,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27747,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4946:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27756,
                  "src": "4930:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27746,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4930:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27750,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4972:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27756,
                  "src": "4953:31:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27748,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4953:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27749,
                    "nodeType": "ArrayTypeName",
                    "src": "4953:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4907:78:70"
            },
            "returnParameters": {
              "id": 27755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27754,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5037:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27756,
                  "src": "5020:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27752,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5020:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27753,
                    "nodeType": "ArrayTypeName",
                    "src": "5020:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5019:24:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27769,
            "nodeType": "FunctionDefinition",
            "src": "5049:149:70",
            "nodes": [],
            "functionSelector": "859216bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5058:5:70",
            "parameters": {
              "id": 27764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27758,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5080:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27769,
                  "src": "5064:20:70",
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
                    "src": "5064:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27760,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5102:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27769,
                  "src": "5086:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27759,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5086:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27763,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5127:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27769,
                  "src": "5109:30:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27761,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5109:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27762,
                    "nodeType": "ArrayTypeName",
                    "src": "5109:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5063:77:70"
            },
            "returnParameters": {
              "id": 27768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27767,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5191:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27769,
                  "src": "5175:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27765,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5175:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27766,
                    "nodeType": "ArrayTypeName",
                    "src": "5175:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5174:23:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27782,
            "nodeType": "FunctionDefinition",
            "src": "5203:147:70",
            "nodes": [],
            "functionSelector": "64bc3e64",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5212:5:70",
            "parameters": {
              "id": 27777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27771,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5234:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27782,
                  "src": "5218:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27770,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5218:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27773,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5256:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27782,
                  "src": "5240:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27772,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5240:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27776,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5280:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27782,
                  "src": "5263:29:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27774,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5263:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27775,
                    "nodeType": "ArrayTypeName",
                    "src": "5263:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5217:76:70"
            },
            "returnParameters": {
              "id": 27781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27780,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5343:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27782,
                  "src": "5328:20:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27778,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5328:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27779,
                    "nodeType": "ArrayTypeName",
                    "src": "5328:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5327:22:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27785,
            "nodeType": "FunctionDefinition",
            "src": "5399:27:70",
            "nodes": [],
            "functionSelector": "266cf109",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "record",
            "nameLocation": "5408:6:70",
            "parameters": {
              "id": 27783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5414:2:70"
            },
            "returnParameters": {
              "id": 27784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27796,
            "nodeType": "FunctionDefinition",
            "src": "5523:109:70",
            "nodes": [],
            "functionSelector": "65bc9481",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accesses",
            "nameLocation": "5532:8:70",
            "parameters": {
              "id": 27788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27787,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5549:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27796,
                  "src": "5541:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5541:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5540:16:70"
            },
            "returnParameters": {
              "id": 27795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27791,
                  "mutability": "mutable",
                  "name": "readSlots",
                  "nameLocation": "5592:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27796,
                  "src": "5575:26:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27789,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5575:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27790,
                    "nodeType": "ArrayTypeName",
                    "src": "5575:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27794,
                  "mutability": "mutable",
                  "name": "writeSlots",
                  "nameLocation": "5620:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27796,
                  "src": "5603:27:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27792,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5603:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27793,
                    "nodeType": "ArrayTypeName",
                    "src": "5603:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:57:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27803,
            "nodeType": "FunctionDefinition",
            "src": "5740:101:70",
            "nodes": [],
            "functionSelector": "8d1cc925",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCode",
            "nameLocation": "5749:7:70",
            "parameters": {
              "id": 27799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27798,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5773:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27803,
                  "src": "5757:28:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27797,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5757:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5756:30:70"
            },
            "returnParameters": {
              "id": 27802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27801,
                  "mutability": "mutable",
                  "name": "creationBytecode",
                  "nameLocation": "5823:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27803,
                  "src": "5810:29:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27800,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:31:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27810,
            "nodeType": "FunctionDefinition",
            "src": "5949:108:70",
            "nodes": [],
            "functionSelector": "3ebf73b4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployedCode",
            "nameLocation": "5958:15:70",
            "parameters": {
              "id": 27806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27805,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5990:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27810,
                  "src": "5974:28:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27804,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:30:70"
            },
            "returnParameters": {
              "id": 27809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27808,
                  "mutability": "mutable",
                  "name": "runtimeBytecode",
                  "nameLocation": "6040:15:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27810,
                  "src": "6027:28:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27807,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6027:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6026:30:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27817,
            "nodeType": "FunctionDefinition",
            "src": "6102:67:70",
            "nodes": [],
            "functionSelector": "c657c718",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "label",
            "nameLocation": "6111:5:70",
            "parameters": {
              "id": 27815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27812,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6125:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27817,
                  "src": "6117:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:70",
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
                  "id": 27814,
                  "mutability": "mutable",
                  "name": "newLabel",
                  "nameLocation": "6150:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27817,
                  "src": "6134:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6134:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6116:43:70"
            },
            "returnParameters": {
              "id": 27816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6168:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27824,
            "nodeType": "FunctionDefinition",
            "src": "6222:81:70",
            "nodes": [],
            "functionSelector": "28a249b0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLabel",
            "nameLocation": "6231:8:70",
            "parameters": {
              "id": 27820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27819,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6248:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27824,
                  "src": "6240:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:17:70"
            },
            "returnParameters": {
              "id": 27823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27822,
                  "mutability": "mutable",
                  "name": "currentLabel",
                  "nameLocation": "6289:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27824,
                  "src": "6275:26:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27821,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:28:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27827,
            "nodeType": "FunctionDefinition",
            "src": "6470:30:70",
            "nodes": [],
            "functionSelector": "afc98040",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6479:9:70",
            "parameters": {
              "id": 27825,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6488:2:70"
            },
            "returnParameters": {
              "id": 27826,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6499:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27832,
            "nodeType": "FunctionDefinition",
            "src": "6659:44:70",
            "nodes": [],
            "functionSelector": "e6962cdb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6668:9:70",
            "parameters": {
              "id": 27830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27829,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "6686:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27832,
                  "src": "6678:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6677:16:70"
            },
            "returnParameters": {
              "id": 27831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6702:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27837,
            "nodeType": "FunctionDefinition",
            "src": "6866:48:70",
            "nodes": [],
            "functionSelector": "f67a965b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6875:9:70",
            "parameters": {
              "id": 27835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27834,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "6893:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27837,
                  "src": "6885:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6885:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6884:20:70"
            },
            "returnParameters": {
              "id": 27836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6913:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27840,
            "nodeType": "FunctionDefinition",
            "src": "7087:35:70",
            "nodes": [],
            "functionSelector": "7fb5297f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7096:14:70",
            "parameters": {
              "id": 27838,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7110:2:70"
            },
            "returnParameters": {
              "id": 27839,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7121:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27845,
            "nodeType": "FunctionDefinition",
            "src": "7273:49:70",
            "nodes": [],
            "functionSelector": "7fec2a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7282:14:70",
            "parameters": {
              "id": 27843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27842,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "7305:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27845,
                  "src": "7297:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27841,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:16:70"
            },
            "returnParameters": {
              "id": 27844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7321:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27850,
            "nodeType": "FunctionDefinition",
            "src": "7477:53:70",
            "nodes": [],
            "functionSelector": "ce817d47",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7486:14:70",
            "parameters": {
              "id": 27848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27847,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "7509:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27850,
                  "src": "7501:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7500:20:70"
            },
            "returnParameters": {
              "id": 27849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7529:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27853,
            "nodeType": "FunctionDefinition",
            "src": "7580:34:70",
            "nodes": [],
            "functionSelector": "76eadd36",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopBroadcast",
            "nameLocation": "7589:13:70",
            "parameters": {
              "id": 27851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7602:2:70"
            },
            "returnParameters": {
              "id": 27852,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7613:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27858,
            "nodeType": "FunctionDefinition",
            "src": "7669:66:70",
            "nodes": [],
            "functionSelector": "d930a0e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "projectRoot",
            "nameLocation": "7678:11:70",
            "parameters": {
              "id": 27854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7689:2:70"
            },
            "returnParameters": {
              "id": 27857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27856,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7729:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27858,
                  "src": "7715:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27855,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7715:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7714:20:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27865,
            "nodeType": "FunctionDefinition",
            "src": "7831:83:70",
            "nodes": [],
            "functionSelector": "60f9bb11",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFile",
            "nameLocation": "7840:8:70",
            "parameters": {
              "id": 27861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27860,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7865:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27865,
                  "src": "7849:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27859,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7849:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7848:22:70"
            },
            "returnParameters": {
              "id": 27864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27863,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7908:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27865,
                  "src": "7894:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27862,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7893:20:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27872,
            "nodeType": "FunctionDefinition",
            "src": "8010:88:70",
            "nodes": [],
            "functionSelector": "16ed7bc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFileBinary",
            "nameLocation": "8019:14:70",
            "parameters": {
              "id": 27868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27867,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8050:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27872,
                  "src": "8034:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27866,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8034:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8033:22:70"
            },
            "returnParameters": {
              "id": 27871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27870,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8092:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27872,
                  "src": "8079:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27869,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8079:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8078:19:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27879,
            "nodeType": "FunctionDefinition",
            "src": "8145:83:70",
            "nodes": [],
            "functionSelector": "70f55728",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLine",
            "nameLocation": "8154:8:70",
            "parameters": {
              "id": 27875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27874,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8179:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27879,
                  "src": "8163:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27873,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8162:22:70"
            },
            "returnParameters": {
              "id": 27878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27877,
                  "mutability": "mutable",
                  "name": "line",
                  "nameLocation": "8222:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27879,
                  "src": "8208:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27876,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8208:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8207:20:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27886,
            "nodeType": "FunctionDefinition",
            "src": "8394:72:70",
            "nodes": [],
            "functionSelector": "897e0a97",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFile",
            "nameLocation": "8403:9:70",
            "parameters": {
              "id": 27884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27881,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8429:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27886,
                  "src": "8413:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27880,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8413:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27883,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8451:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27886,
                  "src": "8435:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27882,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8435:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8412:44:70"
            },
            "returnParameters": {
              "id": 27885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8465:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27893,
            "nodeType": "FunctionDefinition",
            "src": "8641:77:70",
            "nodes": [],
            "functionSelector": "1f21fc80",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFileBinary",
            "nameLocation": "8650:15:70",
            "parameters": {
              "id": 27891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27888,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8682:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27893,
                  "src": "8666:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27887,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27890,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8703:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27893,
                  "src": "8688:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27889,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8688:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:43:70"
            },
            "returnParameters": {
              "id": 27892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8717:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27900,
            "nodeType": "FunctionDefinition",
            "src": "8836:72:70",
            "nodes": [],
            "functionSelector": "619d897f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeLine",
            "nameLocation": "8845:9:70",
            "parameters": {
              "id": 27898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27895,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8871:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27900,
                  "src": "8855:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27894,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8855:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27897,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8893:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27900,
                  "src": "8877:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27896,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8877:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8854:44:70"
            },
            "returnParameters": {
              "id": 27899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8907:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27905,
            "nodeType": "FunctionDefinition",
            "src": "9067:50:70",
            "nodes": [],
            "functionSelector": "48c3241f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeFile",
            "nameLocation": "9076:9:70",
            "parameters": {
              "id": 27903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27902,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9102:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27905,
                  "src": "9086:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27901,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9085:22:70"
            },
            "returnParameters": {
              "id": 27904,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9116:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27910,
            "nodeType": "FunctionDefinition",
            "src": "9443:51:70",
            "nodes": [],
            "functionSelector": "f1afe04d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeFile",
            "nameLocation": "9452:10:70",
            "parameters": {
              "id": 27908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27907,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9479:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27910,
                  "src": "9463:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27906,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9463:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9462:22:70"
            },
            "returnParameters": {
              "id": 27909,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9493:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27917,
            "nodeType": "FunctionDefinition",
            "src": "9892:66:70",
            "nodes": [],
            "functionSelector": "168b64d3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createDir",
            "nameLocation": "9901:9:70",
            "parameters": {
              "id": 27915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27912,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9927:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27917,
                  "src": "9911:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27911,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9911:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27914,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "9938:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27917,
                  "src": "9933:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27913,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9933:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9910:38:70"
            },
            "returnParameters": {
              "id": 27916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9957:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27924,
            "nodeType": "FunctionDefinition",
            "src": "10340:66:70",
            "nodes": [],
            "functionSelector": "45c62011",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeDir",
            "nameLocation": "10349:9:70",
            "parameters": {
              "id": 27922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27919,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10375:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27924,
                  "src": "10359:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27918,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10359:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27921,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "10386:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27924,
                  "src": "10381:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10358:38:70"
            },
            "returnParameters": {
              "id": 27923,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10405:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27933,
            "nodeType": "FunctionDefinition",
            "src": "10653:89:70",
            "nodes": [],
            "functionSelector": "c4bc59e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10662:7:70",
            "parameters": {
              "id": 27927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27926,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10686:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27933,
                  "src": "10670:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27925,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10670:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10669:22:70"
            },
            "returnParameters": {
              "id": 27932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27931,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10733:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27933,
                  "src": "10715:25:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27929,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27928,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10715:8:70"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27443,
                        "src": "10715:8:70"
                      },
                      "referencedDeclaration": 27443,
                      "src": "10715:8:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$27443_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27930,
                    "nodeType": "ArrayTypeName",
                    "src": "10715:10:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10714:27:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27944,
            "nodeType": "FunctionDefinition",
            "src": "10747:106:70",
            "nodes": [],
            "functionSelector": "1497876c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10756:7:70",
            "parameters": {
              "id": 27938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27935,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10780:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "10764:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27934,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10764:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27937,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10793:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "10786:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27936,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10786:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10763:39:70"
            },
            "returnParameters": {
              "id": 27943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27942,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10844:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27944,
                  "src": "10826:25:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27940,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27939,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10826:8:70"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27443,
                        "src": "10826:8:70"
                      },
                      "referencedDeclaration": 27443,
                      "src": "10826:8:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$27443_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27941,
                    "nodeType": "ArrayTypeName",
                    "src": "10826:10:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10825:27:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27957,
            "nodeType": "FunctionDefinition",
            "src": "10858:148:70",
            "nodes": [],
            "functionSelector": "8102d70d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10867:7:70",
            "parameters": {
              "id": 27951,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27946,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10891:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27957,
                  "src": "10875:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27945,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10875:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27948,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10904:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27957,
                  "src": "10897:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 27947,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10897:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27950,
                  "mutability": "mutable",
                  "name": "followLinks",
                  "nameLocation": "10919:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27957,
                  "src": "10914:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27949,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10914:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10874:57:70"
            },
            "returnParameters": {
              "id": 27956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27955,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10997:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27957,
                  "src": "10979:25:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27953,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27952,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10979:8:70"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27443,
                        "src": "10979:8:70"
                      },
                      "referencedDeclaration": 27443,
                      "src": "10979:8:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$27443_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 27954,
                    "nodeType": "ArrayTypeName",
                    "src": "10979:10:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$27443_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10978:27:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27964,
            "nodeType": "FunctionDefinition",
            "src": "11260:93:70",
            "nodes": [],
            "functionSelector": "9f5684a2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLink",
            "nameLocation": "11269:8:70",
            "parameters": {
              "id": 27960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27959,
                  "mutability": "mutable",
                  "name": "linkPath",
                  "nameLocation": "11294:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27964,
                  "src": "11278:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27958,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11278:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11277:26:70"
            },
            "returnParameters": {
              "id": 27963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27962,
                  "mutability": "mutable",
                  "name": "targetPath",
                  "nameLocation": "11341:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27964,
                  "src": "11327:24:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27961,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11327:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11326:26:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27972,
            "nodeType": "FunctionDefinition",
            "src": "11450:93:70",
            "nodes": [],
            "functionSelector": "af368a08",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fsMetadata",
            "nameLocation": "11459:10:70",
            "parameters": {
              "id": 27967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27966,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "11486:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27972,
                  "src": "11470:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27965,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11470:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:22:70"
            },
            "returnParameters": {
              "id": 27971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27970,
                  "mutability": "mutable",
                  "name": "metadata",
                  "nameLocation": "11533:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27972,
                  "src": "11515:26:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FsMetadata_$27458_memory_ptr",
                    "typeString": "struct VmSafe.FsMetadata"
                  },
                  "typeName": {
                    "id": 27969,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 27968,
                      "name": "FsMetadata",
                      "nameLocations": [
                        "11515:10:70"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27458,
                      "src": "11515:10:70"
                    },
                    "referencedDeclaration": 27458,
                    "src": "11515:10:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FsMetadata_$27458_storage_ptr",
                      "typeString": "struct VmSafe.FsMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11514:28:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27979,
            "nodeType": "FunctionDefinition",
            "src": "11583:88:70",
            "nodes": [],
            "functionSelector": "56ca623e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11592:8:70",
            "parameters": {
              "id": 27975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27974,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11609:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27979,
                  "src": "11601:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11601:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11600:15:70"
            },
            "returnParameters": {
              "id": 27978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27977,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11653:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27979,
                  "src": "11639:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27976,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11639:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11638:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27986,
            "nodeType": "FunctionDefinition",
            "src": "11676:95:70",
            "nodes": [],
            "functionSelector": "71aad10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11685:8:70",
            "parameters": {
              "id": 27982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27981,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11709:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27986,
                  "src": "11694:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27980,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11694:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11693:22:70"
            },
            "returnParameters": {
              "id": 27985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27984,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11753:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27986,
                  "src": "11739:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27983,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11739:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11738:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 27993,
            "nodeType": "FunctionDefinition",
            "src": "11776:88:70",
            "nodes": [],
            "functionSelector": "b11a19e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11785:8:70",
            "parameters": {
              "id": 27989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27988,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11802:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27993,
                  "src": "11794:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11794:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11793:15:70"
            },
            "returnParameters": {
              "id": 27992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27991,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11846:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 27993,
                  "src": "11832:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27990,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11832:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11831:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28000,
            "nodeType": "FunctionDefinition",
            "src": "11869:85:70",
            "nodes": [],
            "functionSelector": "71dce7da",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11878:8:70",
            "parameters": {
              "id": 27996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27995,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11892:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28000,
                  "src": "11887:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27994,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11887:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11886:12:70"
            },
            "returnParameters": {
              "id": 27999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27998,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11936:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28000,
                  "src": "11922:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27997,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11922:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11921:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28007,
            "nodeType": "FunctionDefinition",
            "src": "11959:88:70",
            "nodes": [],
            "functionSelector": "6900a3ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11968:8:70",
            "parameters": {
              "id": 28003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28002,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11985:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28007,
                  "src": "11977:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11977:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11976:15:70"
            },
            "returnParameters": {
              "id": 28006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28005,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12029:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28007,
                  "src": "12015:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28004,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12015:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12014:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28014,
            "nodeType": "FunctionDefinition",
            "src": "12052:87:70",
            "nodes": [],
            "functionSelector": "a322c40e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "12061:8:70",
            "parameters": {
              "id": 28010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28009,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12077:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "12070:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28008,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12070:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12069:14:70"
            },
            "returnParameters": {
              "id": 28013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28012,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12121:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28014,
                  "src": "12107:30:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28011,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12107:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12106:32:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28021,
            "nodeType": "FunctionDefinition",
            "src": "12180:103:70",
            "nodes": [],
            "functionSelector": "8f5d232d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes",
            "nameLocation": "12189:10:70",
            "parameters": {
              "id": 28017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28016,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12216:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28021,
                  "src": "12200:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28015,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12200:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12199:34:70"
            },
            "returnParameters": {
              "id": 28020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28019,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12270:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28021,
                  "src": "12257:24:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28018,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12257:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12256:26:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28028,
            "nodeType": "FunctionDefinition",
            "src": "12288:100:70",
            "nodes": [],
            "functionSelector": "c6ce059d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseAddress",
            "nameLocation": "12297:12:70",
            "parameters": {
              "id": 28024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28023,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12326:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28028,
                  "src": "12310:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28022,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12310:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12309:34:70"
            },
            "returnParameters": {
              "id": 28027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28026,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12375:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28028,
                  "src": "12367:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28025,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12367:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12366:21:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28035,
            "nodeType": "FunctionDefinition",
            "src": "12393:97:70",
            "nodes": [],
            "functionSelector": "fa91454d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseUint",
            "nameLocation": "12402:9:70",
            "parameters": {
              "id": 28031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28030,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12428:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28035,
                  "src": "12412:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28029,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12412:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12411:34:70"
            },
            "returnParameters": {
              "id": 28034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28033,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12477:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28035,
                  "src": "12469:19:70",
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
                    "src": "12469:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12468:21:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28042,
            "nodeType": "FunctionDefinition",
            "src": "12495:95:70",
            "nodes": [],
            "functionSelector": "42346c5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseInt",
            "nameLocation": "12504:8:70",
            "parameters": {
              "id": 28038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28037,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12529:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28042,
                  "src": "12513:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28036,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12513:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12512:34:70"
            },
            "returnParameters": {
              "id": 28041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28040,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12577:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28042,
                  "src": "12570:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28039,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12570:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12569:20:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28049,
            "nodeType": "FunctionDefinition",
            "src": "12595:100:70",
            "nodes": [],
            "functionSelector": "087e6e81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes32",
            "nameLocation": "12604:12:70",
            "parameters": {
              "id": 28045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28044,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12633:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "12617:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28043,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12617:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12616:34:70"
            },
            "returnParameters": {
              "id": 28048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28047,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12682:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28049,
                  "src": "12674:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28046,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12674:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12673:21:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28056,
            "nodeType": "FunctionDefinition",
            "src": "12700:94:70",
            "nodes": [],
            "functionSelector": "974ef924",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBool",
            "nameLocation": "12709:9:70",
            "parameters": {
              "id": 28052,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28051,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12735:16:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28056,
                  "src": "12719:32:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28050,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12719:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12718:34:70"
            },
            "returnParameters": {
              "id": 28055,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28054,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12781:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28056,
                  "src": "12776:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28053,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12776:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12775:18:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28059,
            "nodeType": "FunctionDefinition",
            "src": "12838:31:70",
            "nodes": [],
            "functionSelector": "41af2f52",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "recordLogs",
            "nameLocation": "12847:10:70",
            "parameters": {
              "id": 28057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12857:2:70"
            },
            "returnParameters": {
              "id": 28058,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12868:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28066,
            "nodeType": "FunctionDefinition",
            "src": "12908:64:70",
            "nodes": [],
            "functionSelector": "191553a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRecordedLogs",
            "nameLocation": "12917:15:70",
            "parameters": {
              "id": 28060,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12932:2:70"
            },
            "returnParameters": {
              "id": 28065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28064,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "12966:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28066,
                  "src": "12953:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28062,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28061,
                        "name": "Log",
                        "nameLocations": [
                          "12953:3:70"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27427,
                        "src": "12953:3:70"
                      },
                      "referencedDeclaration": 27427,
                      "src": "12953:3:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$27427_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 28063,
                    "nodeType": "ArrayTypeName",
                    "src": "12953:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12952:19:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28075,
            "nodeType": "FunctionDefinition",
            "src": "13107:102:70",
            "nodes": [],
            "functionSelector": "6229498b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13116:9:70",
            "parameters": {
              "id": 28071,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28068,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13142:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28075,
                  "src": "13126:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28067,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13126:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28070,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13159:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28075,
                  "src": "13152:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 28069,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13152:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13125:40:70"
            },
            "returnParameters": {
              "id": 28074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28073,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13197:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28075,
                  "src": "13189:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13189:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13188:20:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28086,
            "nodeType": "FunctionDefinition",
            "src": "13325:158:70",
            "nodes": [],
            "functionSelector": "6bcb2c1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13334:9:70",
            "parameters": {
              "id": 28082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28077,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13360:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28086,
                  "src": "13344:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28076,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13344:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28079,
                  "mutability": "mutable",
                  "name": "derivationPath",
                  "nameLocation": "13386:14:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28086,
                  "src": "13370:30:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28078,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13370:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28081,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13409:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28086,
                  "src": "13402:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 28080,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13402:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13343:72:70"
            },
            "returnParameters": {
              "id": 28085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28084,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13471:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28086,
                  "src": "13463:18:70",
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
                    "src": "13463:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13462:20:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28093,
            "nodeType": "FunctionDefinition",
            "src": "13564:76:70",
            "nodes": [],
            "functionSelector": "22100064",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rememberKey",
            "nameLocation": "13573:11:70",
            "parameters": {
              "id": 28089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28088,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13593:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28093,
                  "src": "13585:18:70",
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
                    "src": "13585:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13584:20:70"
            },
            "returnParameters": {
              "id": 28092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28091,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "13631:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28093,
                  "src": "13623:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28090,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13622:17:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28102,
            "nodeType": "FunctionDefinition",
            "src": "14673:114:70",
            "nodes": [],
            "functionSelector": "85940ef1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14682:9:70",
            "parameters": {
              "id": 28098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28095,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14708:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "14692:20:70",
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
                    "src": "14692:6:70",
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
                  "name": "key",
                  "nameLocation": "14730:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "14714:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28096,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14714:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14691:43:70"
            },
            "returnParameters": {
              "id": 28101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28100,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14771:14:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28102,
                  "src": "14758:27:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28099,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14758:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14757:29:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28109,
            "nodeType": "FunctionDefinition",
            "src": "14792:93:70",
            "nodes": [],
            "functionSelector": "6a82600a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14801:9:70",
            "parameters": {
              "id": 28105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28104,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14827:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28109,
                  "src": "14811:20:70",
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
                    "src": "14811:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14810:22:70"
            },
            "returnParameters": {
              "id": 28108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28107,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14869:14:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28109,
                  "src": "14856:27:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28106,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14856:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14855:29:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28118,
            "nodeType": "FunctionDefinition",
            "src": "15273:84:70",
            "nodes": [],
            "functionSelector": "addde2b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUint",
            "nameLocation": "15282:13:70",
            "parameters": {
              "id": 28114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28111,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "15296:15:70",
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
                    "src": "15296:6:70",
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
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "15313:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15313:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15295:34:70"
            },
            "returnParameters": {
              "id": 28117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28116,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28118,
                  "src": "15348:7:70",
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
                    "src": "15348:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15347:9:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28128,
            "nodeType": "FunctionDefinition",
            "src": "15362:98:70",
            "nodes": [],
            "functionSelector": "522074ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUintArray",
            "nameLocation": "15371:18:70",
            "parameters": {
              "id": 28123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28128,
                  "src": "15390:15:70",
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
                    "src": "15390:6:70",
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
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28128,
                  "src": "15407:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15389:34:70"
            },
            "returnParameters": {
              "id": 28127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28126,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28128,
                  "src": "15442:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28124,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15442:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28125,
                    "nodeType": "ArrayTypeName",
                    "src": "15442:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15441:18:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28137,
            "nodeType": "FunctionDefinition",
            "src": "15465:82:70",
            "nodes": [],
            "functionSelector": "7b048ccd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonInt",
            "nameLocation": "15474:12:70",
            "parameters": {
              "id": 28133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28130,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28137,
                  "src": "15487:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28129,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15487:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28132,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28137,
                  "src": "15504:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28131,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15504:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15486:34:70"
            },
            "returnParameters": {
              "id": 28136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28137,
                  "src": "15539:6:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28134,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15539:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15538:8:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28147,
            "nodeType": "FunctionDefinition",
            "src": "15552:96:70",
            "nodes": [],
            "functionSelector": "9983c28a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonIntArray",
            "nameLocation": "15561:17:70",
            "parameters": {
              "id": 28142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28139,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28147,
                  "src": "15579:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28138,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15579:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28141,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28147,
                  "src": "15596:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28140,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15596:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15578:34:70"
            },
            "returnParameters": {
              "id": 28146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28145,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28147,
                  "src": "15631:15:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28143,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15631:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28144,
                    "nodeType": "ArrayTypeName",
                    "src": "15631:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15630:17:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28156,
            "nodeType": "FunctionDefinition",
            "src": "15653:81:70",
            "nodes": [],
            "functionSelector": "9f86dc91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBool",
            "nameLocation": "15662:13:70",
            "parameters": {
              "id": 28152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28149,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28156,
                  "src": "15676:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15676:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28151,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28156,
                  "src": "15693:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28150,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15693:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15675:34:70"
            },
            "returnParameters": {
              "id": 28155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28154,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28156,
                  "src": "15728:4:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28153,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15728:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15727:6:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28166,
            "nodeType": "FunctionDefinition",
            "src": "15739:95:70",
            "nodes": [],
            "functionSelector": "91f3b94f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBoolArray",
            "nameLocation": "15748:18:70",
            "parameters": {
              "id": 28161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28158,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28166,
                  "src": "15767:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15767:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28160,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28166,
                  "src": "15784:15:70",
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
                    "src": "15784:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15766:34:70"
            },
            "returnParameters": {
              "id": 28165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28164,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28166,
                  "src": "15819:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28162,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "15819:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28163,
                    "nodeType": "ArrayTypeName",
                    "src": "15819:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15818:15:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28175,
            "nodeType": "FunctionDefinition",
            "src": "15839:87:70",
            "nodes": [],
            "functionSelector": "1e19e657",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddress",
            "nameLocation": "15848:16:70",
            "parameters": {
              "id": 28171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28168,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28175,
                  "src": "15865:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28175,
                  "src": "15882:15:70",
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
                    "src": "15882:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15864:34:70"
            },
            "returnParameters": {
              "id": 28174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28173,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28175,
                  "src": "15917:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28172,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15917:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15916:9:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28185,
            "nodeType": "FunctionDefinition",
            "src": "15931:101:70",
            "nodes": [],
            "functionSelector": "2fce7883",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddressArray",
            "nameLocation": "15940:21:70",
            "parameters": {
              "id": 28180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28177,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28185,
                  "src": "15962:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28176,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15962:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28179,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28185,
                  "src": "15979:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28178,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15979:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15961:34:70"
            },
            "returnParameters": {
              "id": 28184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28183,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28185,
                  "src": "16014:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28181,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "16014:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28182,
                    "nodeType": "ArrayTypeName",
                    "src": "16014:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16013:18:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28194,
            "nodeType": "FunctionDefinition",
            "src": "16037:92:70",
            "nodes": [],
            "functionSelector": "49c4fac8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonString",
            "nameLocation": "16046:15:70",
            "parameters": {
              "id": 28190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28187,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28194,
                  "src": "16062:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28186,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16062:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28189,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28194,
                  "src": "16079:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28188,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16079:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16061:34:70"
            },
            "returnParameters": {
              "id": 28193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28192,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28194,
                  "src": "16114:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28191,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16114:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16113:15:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28204,
            "nodeType": "FunctionDefinition",
            "src": "16134:99:70",
            "nodes": [],
            "functionSelector": "498fdcf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonStringArray",
            "nameLocation": "16143:20:70",
            "parameters": {
              "id": 28199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28196,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28204,
                  "src": "16164:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16164:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28198,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28204,
                  "src": "16181:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28197,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16181:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16163:34:70"
            },
            "returnParameters": {
              "id": 28203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28202,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28204,
                  "src": "16216:15:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28200,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16216:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28201,
                    "nodeType": "ArrayTypeName",
                    "src": "16216:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16215:17:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28213,
            "nodeType": "FunctionDefinition",
            "src": "16238:90:70",
            "nodes": [],
            "functionSelector": "fd921be8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes",
            "nameLocation": "16247:14:70",
            "parameters": {
              "id": 28209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28206,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28213,
                  "src": "16262:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28205,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16262:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28208,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28213,
                  "src": "16279:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28207,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16279:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16261:34:70"
            },
            "returnParameters": {
              "id": 28212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28211,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28213,
                  "src": "16314:12:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28210,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:14:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28223,
            "nodeType": "FunctionDefinition",
            "src": "16333:97:70",
            "nodes": [],
            "functionSelector": "6631aa99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytesArray",
            "nameLocation": "16342:19:70",
            "parameters": {
              "id": 28218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28215,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28223,
                  "src": "16362:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28214,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16362:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28217,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28223,
                  "src": "16379:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28216,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16379:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16361:34:70"
            },
            "returnParameters": {
              "id": 28222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28221,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28223,
                  "src": "16414:14:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28219,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "16414:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28220,
                    "nodeType": "ArrayTypeName",
                    "src": "16414:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16413:16:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28232,
            "nodeType": "FunctionDefinition",
            "src": "16435:87:70",
            "nodes": [],
            "functionSelector": "1777e59d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32",
            "nameLocation": "16444:16:70",
            "parameters": {
              "id": 28228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28225,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28232,
                  "src": "16461:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28224,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16461:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28227,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28232,
                  "src": "16478:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28226,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16478:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16460:34:70"
            },
            "returnParameters": {
              "id": 28231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28230,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28232,
                  "src": "16513:7:70",
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
                    "src": "16513:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16512:9:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28242,
            "nodeType": "FunctionDefinition",
            "src": "16527:101:70",
            "nodes": [],
            "functionSelector": "91c75bc3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32Array",
            "nameLocation": "16536:21:70",
            "parameters": {
              "id": 28237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28234,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28242,
                  "src": "16558:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28233,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16558:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28236,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28242,
                  "src": "16575:15:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28235,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16575:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16557:34:70"
            },
            "returnParameters": {
              "id": 28241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28240,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28242,
                  "src": "16610:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28238,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "16610:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28239,
                    "nodeType": "ArrayTypeName",
                    "src": "16610:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16609:18:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28252,
            "nodeType": "FunctionDefinition",
            "src": "16681:106:70",
            "nodes": [],
            "functionSelector": "213e4198",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonKeys",
            "nameLocation": "16690:13:70",
            "parameters": {
              "id": 28247,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28244,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "16720:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28252,
                  "src": "16704:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28243,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16704:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28246,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "16742:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28252,
                  "src": "16726:19:70",
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
                    "src": "16726:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16703:43:70"
            },
            "returnParameters": {
              "id": 28251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28250,
                  "mutability": "mutable",
                  "name": "keys",
                  "nameLocation": "16781:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28252,
                  "src": "16765:20:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28248,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16765:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28249,
                    "nodeType": "ArrayTypeName",
                    "src": "16765:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:22:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28263,
            "nodeType": "FunctionDefinition",
            "src": "16983:142:70",
            "nodes": [],
            "functionSelector": "ac22e971",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "16992:13:70",
            "parameters": {
              "id": 28259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28254,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17022:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28263,
                  "src": "17006:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28253,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17006:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28256,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17049:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28263,
                  "src": "17033:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28255,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17033:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28258,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17064:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28263,
                  "src": "17059:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28257,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17059:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17005:65:70"
            },
            "returnParameters": {
              "id": 28262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28261,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17119:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28263,
                  "src": "17105:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28260,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17104:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28274,
            "nodeType": "FunctionDefinition",
            "src": "17130:145:70",
            "nodes": [],
            "functionSelector": "129e9002",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "17139:13:70",
            "parameters": {
              "id": 28270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28265,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17169:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28274,
                  "src": "17153:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28264,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17153:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28267,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17196:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28274,
                  "src": "17180:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28266,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17180:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28269,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17214:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28274,
                  "src": "17206:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17206:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17152:68:70"
            },
            "returnParameters": {
              "id": 28273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28272,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17269:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28274,
                  "src": "17255:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28271,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17255:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17254:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28285,
            "nodeType": "FunctionDefinition",
            "src": "17280:143:70",
            "nodes": [],
            "functionSelector": "3f33db60",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "17289:12:70",
            "parameters": {
              "id": 28281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28276,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17318:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28285,
                  "src": "17302:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28275,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17302:6:70",
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
                  "name": "valueKey",
                  "nameLocation": "17345:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28285,
                  "src": "17329:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28277,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17329:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28280,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17362:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28285,
                  "src": "17355:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28279,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17355:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17301:67:70"
            },
            "returnParameters": {
              "id": 28284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28283,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17417:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28285,
                  "src": "17403:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28282,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17403:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17402:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28296,
            "nodeType": "FunctionDefinition",
            "src": "17428:148:70",
            "nodes": [],
            "functionSelector": "972c6062",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "17437:16:70",
            "parameters": {
              "id": 28292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28287,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17470:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28296,
                  "src": "17454:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28286,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17454:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28289,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17497:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28296,
                  "src": "17481:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28288,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17481:6:70",
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
                  "name": "value",
                  "nameLocation": "17515:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28296,
                  "src": "17507:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17507:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17453:68:70"
            },
            "returnParameters": {
              "id": 28295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28294,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17570:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28296,
                  "src": "17556:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28293,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17556:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28307,
            "nodeType": "FunctionDefinition",
            "src": "17581:148:70",
            "nodes": [],
            "functionSelector": "2d812b44",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "17590:16:70",
            "parameters": {
              "id": 28303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28298,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17623:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28307,
                  "src": "17607:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28297,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17607:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28300,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17650:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28307,
                  "src": "17634:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28299,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17634:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28302,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17668:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28307,
                  "src": "17660:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28301,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "17660:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17606:68:70"
            },
            "returnParameters": {
              "id": 28306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28305,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17723:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28307,
                  "src": "17709:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28304,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17709:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17708:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28318,
            "nodeType": "FunctionDefinition",
            "src": "17734:155:70",
            "nodes": [],
            "functionSelector": "88da6d35",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "17743:15:70",
            "parameters": {
              "id": 28314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28309,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17775:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28318,
                  "src": "17759:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28308,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17759:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28311,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17802:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28318,
                  "src": "17786:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28310,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17786:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28313,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17828:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28318,
                  "src": "17812:21:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28312,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17812:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17758:76:70"
            },
            "returnParameters": {
              "id": 28317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28316,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17883:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28318,
                  "src": "17869:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28315,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17869:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17868:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28329,
            "nodeType": "FunctionDefinition",
            "src": "17894:153:70",
            "nodes": [],
            "functionSelector": "f21d52c7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "17903:14:70",
            "parameters": {
              "id": 28325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28320,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17934:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28329,
                  "src": "17918:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28319,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17918:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28322,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17961:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28329,
                  "src": "17945:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28321,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17945:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28324,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17986:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28329,
                  "src": "17971:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28323,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17971:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17917:75:70"
            },
            "returnParameters": {
              "id": 28328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28327,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18041:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28329,
                  "src": "18027:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28326,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18027:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18026:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28341,
            "nodeType": "FunctionDefinition",
            "src": "18053:154:70",
            "nodes": [],
            "functionSelector": "92925aa1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "18062:13:70",
            "parameters": {
              "id": 28337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28331,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18092:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28341,
                  "src": "18076:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28330,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18076:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28333,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18119:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28341,
                  "src": "18103:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28332,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18103:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28336,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18145:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28341,
                  "src": "18129:22:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28334,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "18129:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 28335,
                    "nodeType": "ArrayTypeName",
                    "src": "18129:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18075:77:70"
            },
            "returnParameters": {
              "id": 28340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28339,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18201:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28341,
                  "src": "18187:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28338,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18187:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18186:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28353,
            "nodeType": "FunctionDefinition",
            "src": "18212:157:70",
            "nodes": [],
            "functionSelector": "fee9a469",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "18221:13:70",
            "parameters": {
              "id": 28349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28343,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18251:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28353,
                  "src": "18235:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28342,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18235:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28345,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18278:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28353,
                  "src": "18262:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28344,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18262:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28348,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18307:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28353,
                  "src": "18288:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28346,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18288:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28347,
                    "nodeType": "ArrayTypeName",
                    "src": "18288:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18234:80:70"
            },
            "returnParameters": {
              "id": 28352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28351,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18363:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28353,
                  "src": "18349:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28350,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18349:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18348:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28365,
            "nodeType": "FunctionDefinition",
            "src": "18374:155:70",
            "nodes": [],
            "functionSelector": "7676e127",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "18383:12:70",
            "parameters": {
              "id": 28361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28355,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18412:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "18396:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28354,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18396:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28357,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18439:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "18423:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28356,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28360,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18467:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "18449:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28358,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18449:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 28359,
                    "nodeType": "ArrayTypeName",
                    "src": "18449:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18395:79:70"
            },
            "returnParameters": {
              "id": 28364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28363,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18523:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "18509:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28362,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18509:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18508:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28377,
            "nodeType": "FunctionDefinition",
            "src": "18534:160:70",
            "nodes": [],
            "functionSelector": "1e356e1a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "18543:16:70",
            "parameters": {
              "id": 28373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28367,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18576:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28377,
                  "src": "18560:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28366,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18560:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28369,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18603:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28377,
                  "src": "18587:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28368,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18587:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28372,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18632:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28377,
                  "src": "18613:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28370,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "18613:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28371,
                    "nodeType": "ArrayTypeName",
                    "src": "18613:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18559:80:70"
            },
            "returnParameters": {
              "id": 28376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28375,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18688:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28377,
                  "src": "18674:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28374,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18674:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18673:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28389,
            "nodeType": "FunctionDefinition",
            "src": "18699:160:70",
            "nodes": [],
            "functionSelector": "201e43e2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "18708:16:70",
            "parameters": {
              "id": 28385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28379,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18741:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28389,
                  "src": "18725:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28378,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18725:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28381,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18768:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28389,
                  "src": "18752:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28380,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18752:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28384,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18797:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28389,
                  "src": "18778:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28382,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "18778:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28383,
                    "nodeType": "ArrayTypeName",
                    "src": "18778:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18724:80:70"
            },
            "returnParameters": {
              "id": 28388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28387,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18853:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28389,
                  "src": "18839:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28386,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18839:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18838:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28401,
            "nodeType": "FunctionDefinition",
            "src": "18864:158:70",
            "nodes": [],
            "functionSelector": "561cd6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "18873:15:70",
            "parameters": {
              "id": 28397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28391,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18905:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28401,
                  "src": "18889:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28390,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18889:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28393,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18932:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28401,
                  "src": "18916:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28392,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18916:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28396,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18960:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28401,
                  "src": "18942:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28394,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "18942:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 28395,
                    "nodeType": "ArrayTypeName",
                    "src": "18942:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18888:79:70"
            },
            "returnParameters": {
              "id": 28400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28399,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19016:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28401,
                  "src": "19002:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28398,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19002:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19001:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28413,
            "nodeType": "FunctionDefinition",
            "src": "19027:156:70",
            "nodes": [],
            "functionSelector": "9884b232",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "19036:14:70",
            "parameters": {
              "id": 28409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28403,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "19067:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28413,
                  "src": "19051:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28402,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19051:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28405,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "19094:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28413,
                  "src": "19078:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28404,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19078:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28408,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "19121:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28413,
                  "src": "19104:23:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28406,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "19104:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 28407,
                    "nodeType": "ArrayTypeName",
                    "src": "19104:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19050:78:70"
            },
            "returnParameters": {
              "id": 28412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28411,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19177:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28413,
                  "src": "19163:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28410,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19163:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19162:20:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28420,
            "nodeType": "FunctionDefinition",
            "src": "20424:72:70",
            "nodes": [],
            "functionSelector": "e23cd19f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20433:9:70",
            "parameters": {
              "id": 28418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28415,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20459:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28420,
                  "src": "20443:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20443:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28417,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20481:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28420,
                  "src": "20465:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28416,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20465:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20442:44:70"
            },
            "returnParameters": {
              "id": 28419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20495:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28429,
            "nodeType": "FunctionDefinition",
            "src": "20717:98:70",
            "nodes": [],
            "functionSelector": "35d6ad46",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20726:9:70",
            "parameters": {
              "id": 28427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28422,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20752:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28429,
                  "src": "20736:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28421,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20736:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28424,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20774:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28429,
                  "src": "20758:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28423,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20758:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28426,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "20796:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28429,
                  "src": "20780:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28425,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20780:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20735:70:70"
            },
            "returnParameters": {
              "id": 28428,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20814:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28436,
            "nodeType": "FunctionDefinition",
            "src": "20867:85:70",
            "nodes": [],
            "functionSelector": "975a6ce9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrl",
            "nameLocation": "20876:6:70",
            "parameters": {
              "id": 28432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28431,
                  "mutability": "mutable",
                  "name": "rpcAlias",
                  "nameLocation": "20899:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28436,
                  "src": "20883:24:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28430,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20883:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20882:26:70"
            },
            "returnParameters": {
              "id": 28435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28434,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20946:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28436,
                  "src": "20932:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28433,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20932:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20931:20:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28444,
            "nodeType": "FunctionDefinition",
            "src": "21020:67:70",
            "nodes": [],
            "functionSelector": "a85a8418",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrls",
            "nameLocation": "21029:7:70",
            "parameters": {
              "id": 28437,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21036:2:70"
            },
            "returnParameters": {
              "id": 28443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28442,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21081:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28444,
                  "src": "21062:23:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_string_memory_ptr_$2_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[2][]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 28438,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "21062:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "id": 28440,
                      "length": {
                        "hexValue": "32",
                        "id": 28439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21069:1:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "21062:9:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$2_storage_ptr",
                        "typeString": "string[2]"
                      }
                    },
                    "id": 28441,
                    "nodeType": "ArrayTypeName",
                    "src": "21062:11:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_string_storage_$2_storage_$dyn_storage_ptr",
                      "typeString": "string[2][]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21061:25:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28451,
            "nodeType": "FunctionDefinition",
            "src": "21150:67:70",
            "nodes": [],
            "functionSelector": "9d2ad72a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrlStructs",
            "nameLocation": "21159:13:70",
            "parameters": {
              "id": 28445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21172:2:70"
            },
            "returnParameters": {
              "id": 28450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28449,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21211:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28451,
                  "src": "21198:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Rpc_$27432_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Rpc[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28447,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 28446,
                        "name": "Rpc",
                        "nameLocations": [
                          "21198:3:70"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27432,
                        "src": "21198:3:70"
                      },
                      "referencedDeclaration": 27432,
                      "src": "21198:3:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Rpc_$27432_storage_ptr",
                        "typeString": "struct VmSafe.Rpc"
                      }
                    },
                    "id": 28448,
                    "nodeType": "ArrayTypeName",
                    "src": "21198:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Rpc_$27432_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Rpc[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21197:19:70"
            },
            "scope": 28475,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28456,
            "nodeType": "FunctionDefinition",
            "src": "21310:46:70",
            "nodes": [],
            "functionSelector": "4c63e562",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assume",
            "nameLocation": "21319:6:70",
            "parameters": {
              "id": 28454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28453,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "21331:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28456,
                  "src": "21326:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28452,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21326:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21325:16:70"
            },
            "returnParameters": {
              "id": 28455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21355:0:70"
            },
            "scope": 28475,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28459,
            "nodeType": "FunctionDefinition",
            "src": "21445:37:70",
            "nodes": [],
            "functionSelector": "d1a5b36f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pauseGasMetering",
            "nameLocation": "21454:16:70",
            "parameters": {
              "id": 28457,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21470:2:70"
            },
            "returnParameters": {
              "id": 28458,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21481:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28462,
            "nodeType": "FunctionDefinition",
            "src": "21570:38:70",
            "nodes": [],
            "functionSelector": "2bcd50e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resumeGasMetering",
            "nameLocation": "21579:17:70",
            "parameters": {
              "id": 28460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21596:2:70"
            },
            "returnParameters": {
              "id": 28461,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21607:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28467,
            "nodeType": "FunctionDefinition",
            "src": "21667:51:70",
            "nodes": [],
            "functionSelector": "f0259e92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21676:10:70",
            "parameters": {
              "id": 28465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28464,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21703:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28467,
                  "src": "21687:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28463,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21687:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21686:22:70"
            },
            "returnParameters": {
              "id": 28466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21717:0:70"
            },
            "scope": 28475,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28474,
            "nodeType": "FunctionDefinition",
            "src": "21789:63:70",
            "nodes": [],
            "functionSelector": "f7d39a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21798:10:70",
            "parameters": {
              "id": 28472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28469,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21825:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28474,
                  "src": "21809:20:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28468,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21809:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28471,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21836:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28474,
                  "src": "21831:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28470,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21831:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21808:34:70"
            },
            "returnParameters": {
              "id": 28473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21851:0:70"
            },
            "scope": 28475,
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
          28475
        ],
        "name": "VmSafe",
        "nameLocation": "581:6:70",
        "scope": 28948,
        "usedErrors": []
      },
      {
        "id": 28947,
        "nodeType": "ContractDefinition",
        "src": "21856:11610:70",
        "nodes": [
          {
            "id": 28482,
            "nodeType": "FunctionDefinition",
            "src": "21913:45:70",
            "nodes": [],
            "functionSelector": "e5d6bf02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "warp",
            "nameLocation": "21922:4:70",
            "parameters": {
              "id": 28480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28479,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "21935:12:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28482,
                  "src": "21927:20:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28478,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21927:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21926:22:70"
            },
            "returnParameters": {
              "id": 28481,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28487,
            "nodeType": "FunctionDefinition",
            "src": "21988:42:70",
            "nodes": [],
            "functionSelector": "1f7b4f30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "roll",
            "nameLocation": "21997:4:70",
            "parameters": {
              "id": 28485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28484,
                  "mutability": "mutable",
                  "name": "newHeight",
                  "nameLocation": "22010:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28487,
                  "src": "22002:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22002:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22001:19:70"
            },
            "returnParameters": {
              "id": 28486,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22029:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28492,
            "nodeType": "FunctionDefinition",
            "src": "22061:42:70",
            "nodes": [],
            "functionSelector": "39b37ab0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fee",
            "nameLocation": "22070:3:70",
            "parameters": {
              "id": 28490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28489,
                  "mutability": "mutable",
                  "name": "newBasefee",
                  "nameLocation": "22082:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28492,
                  "src": "22074:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28488,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22074:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22073:20:70"
            },
            "returnParameters": {
              "id": 28491,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22102:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28497,
            "nodeType": "FunctionDefinition",
            "src": "22279:52:70",
            "nodes": [],
            "functionSelector": "46cc92d9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "difficulty",
            "nameLocation": "22288:10:70",
            "parameters": {
              "id": 28495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28494,
                  "mutability": "mutable",
                  "name": "newDifficulty",
                  "nameLocation": "22307:13:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28497,
                  "src": "22299:21:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28493,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22299:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22298:23:70"
            },
            "returnParameters": {
              "id": 28496,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22330:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28502,
            "nodeType": "FunctionDefinition",
            "src": "22501:52:70",
            "nodes": [],
            "functionSelector": "3b925549",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prevrandao",
            "nameLocation": "22510:10:70",
            "parameters": {
              "id": 28500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28499,
                  "mutability": "mutable",
                  "name": "newPrevrandao",
                  "nameLocation": "22529:13:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28502,
                  "src": "22521:21:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28498,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22521:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22520:23:70"
            },
            "returnParameters": {
              "id": 28501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22552:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28507,
            "nodeType": "FunctionDefinition",
            "src": "22584:46:70",
            "nodes": [],
            "functionSelector": "4049ddd2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "chainId",
            "nameLocation": "22593:7:70",
            "parameters": {
              "id": 28505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28504,
                  "mutability": "mutable",
                  "name": "newChainId",
                  "nameLocation": "22609:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28507,
                  "src": "22601:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22601:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22600:20:70"
            },
            "returnParameters": {
              "id": 28506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22629:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28512,
            "nodeType": "FunctionDefinition",
            "src": "22659:50:70",
            "nodes": [],
            "functionSelector": "48f50c0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "txGasPrice",
            "nameLocation": "22668:10:70",
            "parameters": {
              "id": 28510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28509,
                  "mutability": "mutable",
                  "name": "newGasPrice",
                  "nameLocation": "22687:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28512,
                  "src": "22679:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28508,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22679:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22678:21:70"
            },
            "returnParameters": {
              "id": 28511,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22708:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28521,
            "nodeType": "FunctionDefinition",
            "src": "22765:69:70",
            "nodes": [],
            "functionSelector": "70ca10bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "store",
            "nameLocation": "22774:5:70",
            "parameters": {
              "id": 28519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28514,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "22788:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28521,
                  "src": "22780:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22780:7:70",
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
                  "id": 28516,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "22804:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28521,
                  "src": "22796:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28515,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22796:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28518,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22818:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28521,
                  "src": "22810:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28517,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22810:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22779:45:70"
            },
            "returnParameters": {
              "id": 28520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22833:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28528,
            "nodeType": "FunctionDefinition",
            "src": "22929:61:70",
            "nodes": [],
            "functionSelector": "f8e18b57",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonce",
            "nameLocation": "22938:8:70",
            "parameters": {
              "id": 28526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28523,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "22955:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28528,
                  "src": "22947:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28522,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22947:7:70",
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
                  "id": 28525,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "22971:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28528,
                  "src": "22964:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28524,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "22964:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22946:34:70"
            },
            "returnParameters": {
              "id": 28527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22989:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28535,
            "nodeType": "FunctionDefinition",
            "src": "23053:67:70",
            "nodes": [],
            "functionSelector": "9b67b21c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonceUnsafe",
            "nameLocation": "23062:14:70",
            "parameters": {
              "id": 28533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28530,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23085:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28535,
                  "src": "23077:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28529,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23077:7:70",
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
                  "id": 28532,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "23101:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28535,
                  "src": "23094:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28531,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "23094:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23076:34:70"
            },
            "returnParameters": {
              "id": 28534,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23119:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28540,
            "nodeType": "FunctionDefinition",
            "src": "23205:46:70",
            "nodes": [],
            "functionSelector": "1c72346d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resetNonce",
            "nameLocation": "23214:10:70",
            "parameters": {
              "id": 28538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28537,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23233:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28540,
                  "src": "23225:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28536,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23225:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23224:17:70"
            },
            "returnParameters": {
              "id": 28539,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23250:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28545,
            "nodeType": "FunctionDefinition",
            "src": "23321:43:70",
            "nodes": [],
            "functionSelector": "ca669fa7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23330:5:70",
            "parameters": {
              "id": 28543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28542,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23344:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28545,
                  "src": "23336:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28541,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23336:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23335:19:70"
            },
            "returnParameters": {
              "id": 28544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23363:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28550,
            "nodeType": "FunctionDefinition",
            "src": "23466:48:70",
            "nodes": [],
            "functionSelector": "06447d56",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23475:10:70",
            "parameters": {
              "id": 28548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28547,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23494:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28550,
                  "src": "23486:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23486:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23485:19:70"
            },
            "returnParameters": {
              "id": 28549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23513:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28557,
            "nodeType": "FunctionDefinition",
            "src": "23626:61:70",
            "nodes": [],
            "functionSelector": "47e50cce",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23635:5:70",
            "parameters": {
              "id": 28555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28552,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23649:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28557,
                  "src": "23641:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23641:7:70",
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
                  "id": 28554,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23668:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28557,
                  "src": "23660:16:70",
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
                    "src": "23660:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23640:37:70"
            },
            "returnParameters": {
              "id": 28556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23686:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28564,
            "nodeType": "FunctionDefinition",
            "src": "23831:66:70",
            "nodes": [],
            "functionSelector": "45b56078",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23840:10:70",
            "parameters": {
              "id": 28562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28559,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23859:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28564,
                  "src": "23851:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28558,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23851:7:70",
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
                  "id": 28561,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23878:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28564,
                  "src": "23870:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28560,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23870:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23850:37:70"
            },
            "returnParameters": {
              "id": 28563,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23896:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28567,
            "nodeType": "FunctionDefinition",
            "src": "23967:30:70",
            "nodes": [],
            "functionSelector": "90c5013b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopPrank",
            "nameLocation": "23976:9:70",
            "parameters": {
              "id": 28565,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23985:2:70"
            },
            "returnParameters": {
              "id": 28566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23996:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28577,
            "nodeType": "FunctionDefinition",
            "src": "24122:101:70",
            "nodes": [],
            "functionSelector": "4ad0bac9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readCallers",
            "nameLocation": "24131:11:70",
            "parameters": {
              "id": 28568,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24142:2:70"
            },
            "returnParameters": {
              "id": 28576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28571,
                  "mutability": "mutable",
                  "name": "callerMode",
                  "nameLocation": "24174:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28577,
                  "src": "24163:21:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_CallerMode_$27419",
                    "typeString": "enum VmSafe.CallerMode"
                  },
                  "typeName": {
                    "id": 28570,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28569,
                      "name": "CallerMode",
                      "nameLocations": [
                        "24163:10:70"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27419,
                      "src": "24163:10:70"
                    },
                    "referencedDeclaration": 27419,
                    "src": "24163:10:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_CallerMode_$27419",
                      "typeString": "enum VmSafe.CallerMode"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28573,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "24194:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28577,
                  "src": "24186:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24186:7:70",
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
                  "id": 28575,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "24213:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28577,
                  "src": "24205:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28574,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24205:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24162:60:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28584,
            "nodeType": "FunctionDefinition",
            "src": "24260:60:70",
            "nodes": [],
            "functionSelector": "c88a5e6d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deal",
            "nameLocation": "24269:4:70",
            "parameters": {
              "id": 28582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28579,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "24282:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28584,
                  "src": "24274:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24274:7:70",
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
                  "id": 28581,
                  "mutability": "mutable",
                  "name": "newBalance",
                  "nameLocation": "24299:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28584,
                  "src": "24291:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24291:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24273:37:70"
            },
            "returnParameters": {
              "id": 28583,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24319:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28591,
            "nodeType": "FunctionDefinition",
            "src": "24354:74:70",
            "nodes": [],
            "functionSelector": "b4d6c782",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "etch",
            "nameLocation": "24363:4:70",
            "parameters": {
              "id": 28589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28586,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "24376:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28591,
                  "src": "24368:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28585,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24368:7:70",
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
                  "id": 28588,
                  "mutability": "mutable",
                  "name": "newRuntimeBytecode",
                  "nameLocation": "24399:18:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28591,
                  "src": "24384:33:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28587,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24384:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24367:51:70"
            },
            "returnParameters": {
              "id": 28590,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24427:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28596,
            "nodeType": "FunctionDefinition",
            "src": "24504:38:70",
            "nodes": [],
            "functionSelector": "dd82d13e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "skip",
            "nameLocation": "24513:4:70",
            "parameters": {
              "id": 28594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28593,
                  "mutability": "mutable",
                  "name": "skipTest",
                  "nameLocation": "24523:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28596,
                  "src": "24518:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28592,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "24518:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24517:15:70"
            },
            "returnParameters": {
              "id": 28595,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24541:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28601,
            "nodeType": "FunctionDefinition",
            "src": "24584:58:70",
            "nodes": [],
            "functionSelector": "f28dceb3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24593:12:70",
            "parameters": {
              "id": 28599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28598,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24621:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28601,
                  "src": "24606:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28597,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24606:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24605:27:70"
            },
            "returnParameters": {
              "id": 28600,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24641:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28606,
            "nodeType": "FunctionDefinition",
            "src": "24647:50:70",
            "nodes": [],
            "functionSelector": "c31eb0e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24656:12:70",
            "parameters": {
              "id": 28604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28603,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24676:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28606,
                  "src": "24669:17:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 28602,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "24669:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24668:19:70"
            },
            "returnParameters": {
              "id": 28605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24696:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28609,
            "nodeType": "FunctionDefinition",
            "src": "24702:33:70",
            "nodes": [],
            "functionSelector": "f4844814",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24711:12:70",
            "parameters": {
              "id": 28607,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24723:2:70"
            },
            "returnParameters": {
              "id": 28608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24734:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28612,
            "nodeType": "FunctionDefinition",
            "src": "25067:31:70",
            "nodes": [],
            "functionSelector": "440ed10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25076:10:70",
            "parameters": {
              "id": 28610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25086:2:70"
            },
            "returnParameters": {
              "id": 28611,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25097:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28617,
            "nodeType": "FunctionDefinition",
            "src": "25103:46:70",
            "nodes": [],
            "functionSelector": "86b9620d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25112:10:70",
            "parameters": {
              "id": 28615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28614,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25131:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28617,
                  "src": "25123:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25123:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25122:17:70"
            },
            "returnParameters": {
              "id": 28616,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25148:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28628,
            "nodeType": "FunctionDefinition",
            "src": "25559:99:70",
            "nodes": [],
            "functionSelector": "491cc7c2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25568:10:70",
            "parameters": {
              "id": 28626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28619,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25584:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28628,
                  "src": "25579:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28618,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25579:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28621,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25602:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28628,
                  "src": "25597:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28620,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25597:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28623,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25620:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28628,
                  "src": "25615:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28622,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25615:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28625,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25638:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28628,
                  "src": "25633:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28624,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25633:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25578:70:70"
            },
            "returnParameters": {
              "id": 28627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25657:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28641,
            "nodeType": "FunctionDefinition",
            "src": "25663:124:70",
            "nodes": [],
            "functionSelector": "81bad6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25672:10:70",
            "parameters": {
              "id": 28639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28630,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25688:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28641,
                  "src": "25683:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28629,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25683:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28632,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25706:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28641,
                  "src": "25701:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25701:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28634,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25724:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28641,
                  "src": "25719:16:70",
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
                    "src": "25719:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28636,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25742:9:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28641,
                  "src": "25737:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28635,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25737:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28638,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25761:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28641,
                  "src": "25753:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25753:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25682:87:70"
            },
            "returnParameters": {
              "id": 28640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25786:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28650,
            "nodeType": "FunctionDefinition",
            "src": "26043:91:70",
            "nodes": [],
            "functionSelector": "b96213e4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26052:8:70",
            "parameters": {
              "id": 28648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28643,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26069:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28650,
                  "src": "26061:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26061:7:70",
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
                  "id": 28645,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26092:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28650,
                  "src": "26077:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28644,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26077:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28647,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26113:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28650,
                  "src": "26098:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28646,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26098:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26060:64:70"
            },
            "returnParameters": {
              "id": 28649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26133:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28661,
            "nodeType": "FunctionDefinition",
            "src": "26302:109:70",
            "nodes": [],
            "functionSelector": "81409b91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26311:8:70",
            "parameters": {
              "id": 28659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28652,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26328:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28661,
                  "src": "26320:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28651,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26320:7:70",
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
                  "id": 28654,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26344:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28661,
                  "src": "26336:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28653,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26336:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28656,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26369:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28661,
                  "src": "26354:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28655,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26354:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28658,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26390:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28661,
                  "src": "26375:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28657,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26375:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26319:82:70"
            },
            "returnParameters": {
              "id": 28660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26410:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28670,
            "nodeType": "FunctionDefinition",
            "src": "26480:97:70",
            "nodes": [],
            "functionSelector": "dbaad147",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26489:14:70",
            "parameters": {
              "id": 28668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28663,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26512:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28670,
                  "src": "26504:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28662,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26504:7:70",
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
                  "id": 28665,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26535:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28670,
                  "src": "26520:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28664,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26520:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28667,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26556:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28670,
                  "src": "26541:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28666,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26541:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26503:64:70"
            },
            "returnParameters": {
              "id": 28669,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26576:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28681,
            "nodeType": "FunctionDefinition",
            "src": "26673:123:70",
            "nodes": [],
            "functionSelector": "d23cd037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26682:14:70",
            "parameters": {
              "id": 28679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28672,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26705:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28681,
                  "src": "26697:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26697:7:70",
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
                  "id": 28674,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26721:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28681,
                  "src": "26713:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26713:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28676,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26746:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28681,
                  "src": "26731:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28675,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26731:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28678,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26767:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28681,
                  "src": "26752:25:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28677,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26752:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26696:82:70"
            },
            "returnParameters": {
              "id": 28680,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26795:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28684,
            "nodeType": "FunctionDefinition",
            "src": "26832:37:70",
            "nodes": [],
            "functionSelector": "3fdf4e15",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "clearMockedCalls",
            "nameLocation": "26841:16:70",
            "parameters": {
              "id": 28682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26857:2:70"
            },
            "returnParameters": {
              "id": 28683,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26868:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28691,
            "nodeType": "FunctionDefinition",
            "src": "26997:66:70",
            "nodes": [],
            "functionSelector": "bd6af434",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27006:10:70",
            "parameters": {
              "id": 28689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28686,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27025:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28691,
                  "src": "27017:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27017:7:70",
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
                  "id": 28688,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27048:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28691,
                  "src": "27033:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28687,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27033:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27016:37:70"
            },
            "returnParameters": {
              "id": 28690,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27062:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28700,
            "nodeType": "FunctionDefinition",
            "src": "27148:80:70",
            "nodes": [],
            "functionSelector": "c1adbbff",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27157:10:70",
            "parameters": {
              "id": 28698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28693,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27176:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28700,
                  "src": "27168:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27168:7:70",
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
                  "id": 28695,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27199:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28700,
                  "src": "27184:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28694,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27184:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28697,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27212:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28700,
                  "src": "27205:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28696,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27205:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27167:51:70"
            },
            "returnParameters": {
              "id": 28699,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27227:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28709,
            "nodeType": "FunctionDefinition",
            "src": "27311:84:70",
            "nodes": [],
            "functionSelector": "f30c7ba3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27320:10:70",
            "parameters": {
              "id": 28707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28702,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27339:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28709,
                  "src": "27331:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27331:7:70",
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
                  "id": 28704,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27355:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28709,
                  "src": "27347:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28703,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27347:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28706,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27380:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28709,
                  "src": "27365:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28705,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27365:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27330:55:70"
            },
            "returnParameters": {
              "id": 28708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27394:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28720,
            "nodeType": "FunctionDefinition",
            "src": "27493:98:70",
            "nodes": [],
            "functionSelector": "a2b1a1ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27502:10:70",
            "parameters": {
              "id": 28718,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28711,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27521:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28720,
                  "src": "27513:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27513:7:70",
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
                  "id": 28713,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27537:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28720,
                  "src": "27529:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27529:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28715,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27562:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28720,
                  "src": "27547:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28714,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27547:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28717,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27575:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28720,
                  "src": "27568:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28716,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27568:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27512:69:70"
            },
            "returnParameters": {
              "id": 28719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27590:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28731,
            "nodeType": "FunctionDefinition",
            "src": "27680:96:70",
            "nodes": [],
            "functionSelector": "23361207",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27689:10:70",
            "parameters": {
              "id": 28729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28722,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27708:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "27700:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27700:7:70",
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
                  "id": 28724,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27724:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "27716:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28723,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27716:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28726,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27741:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "27734:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28725,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27734:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28728,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27761:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "27746:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28727,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27746:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27699:67:70"
            },
            "returnParameters": {
              "id": 28730,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27775:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28744,
            "nodeType": "FunctionDefinition",
            "src": "27881:110:70",
            "nodes": [],
            "functionSelector": "65b7b7cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27890:10:70",
            "parameters": {
              "id": 28742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28733,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27909:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28744,
                  "src": "27901:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28732,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27901:7:70",
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
                  "id": 28735,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27925:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28744,
                  "src": "27917:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27917:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28737,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27942:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28744,
                  "src": "27935:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28736,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27935:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28739,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27962:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28744,
                  "src": "27947:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28738,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27947:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28741,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27975:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28744,
                  "src": "27968:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28740,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27968:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27900:81:70"
            },
            "returnParameters": {
              "id": 28743,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27990:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28755,
            "nodeType": "FunctionDefinition",
            "src": "28105:105:70",
            "nodes": [],
            "functionSelector": "08e4e116",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28114:16:70",
            "parameters": {
              "id": 28753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28746,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28139:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "28131:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28131:7:70",
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
                  "id": 28748,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28155:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "28147:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28147:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28750,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28172:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "28165:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28749,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28165:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28752,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28195:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28755,
                  "src": "28180:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28751,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28180:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28130:70:70"
            },
            "returnParameters": {
              "id": 28754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28209:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28768,
            "nodeType": "FunctionDefinition",
            "src": "28339:127:70",
            "nodes": [],
            "functionSelector": "e13a1834",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28348:16:70",
            "parameters": {
              "id": 28766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28757,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28373:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28768,
                  "src": "28365:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28365:7:70",
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
                  "id": 28759,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28389:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28768,
                  "src": "28381:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28381:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28761,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28406:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28768,
                  "src": "28399:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28760,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28399:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28763,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28429:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28768,
                  "src": "28414:19:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28762,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28414:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28765,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "28442:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28768,
                  "src": "28435:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28764,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28435:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28364:84:70"
            },
            "returnParameters": {
              "id": 28767,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28465:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28775,
            "nodeType": "FunctionDefinition",
            "src": "28692:59:70",
            "nodes": [],
            "functionSelector": "6d016688",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemory",
            "nameLocation": "28701:16:70",
            "parameters": {
              "id": 28773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28770,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "28725:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28775,
                  "src": "28718:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28769,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28718:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28772,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "28737:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28775,
                  "src": "28730:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28771,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28730:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28717:24:70"
            },
            "returnParameters": {
              "id": 28774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28750:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28782,
            "nodeType": "FunctionDefinition",
            "src": "28989:63:70",
            "nodes": [],
            "functionSelector": "05838bf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemoryCall",
            "nameLocation": "28998:20:70",
            "parameters": {
              "id": 28780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28777,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "29026:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28782,
                  "src": "29019:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28776,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29019:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28779,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "29038:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28782,
                  "src": "29031:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 28778,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29031:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29018:24:70"
            },
            "returnParameters": {
              "id": 28781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29051:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28787,
            "nodeType": "FunctionDefinition",
            "src": "29084:48:70",
            "nodes": [],
            "functionSelector": "ff483c54",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "coinbase",
            "nameLocation": "29093:8:70",
            "parameters": {
              "id": 28785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28784,
                  "mutability": "mutable",
                  "name": "newCoinbase",
                  "nameLocation": "29110:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28787,
                  "src": "29102:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28783,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "29102:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29101:21:70"
            },
            "returnParameters": {
              "id": 28786,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29131:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28792,
            "nodeType": "FunctionDefinition",
            "src": "29282:58:70",
            "nodes": [],
            "functionSelector": "9711715a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "snapshot",
            "nameLocation": "29291:8:70",
            "parameters": {
              "id": 28788,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29299:2:70"
            },
            "returnParameters": {
              "id": 28791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28790,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29328:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28792,
                  "src": "29320:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29320:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29319:20:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28799,
            "nodeType": "FunctionDefinition",
            "src": "29532:70:70",
            "nodes": [],
            "functionSelector": "44d7f0a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revertTo",
            "nameLocation": "29541:8:70",
            "parameters": {
              "id": 28795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28794,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29558:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28799,
                  "src": "29550:18:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28793,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29550:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29549:20:70"
            },
            "returnParameters": {
              "id": 28798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28797,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "29593:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28799,
                  "src": "29588:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28796,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29588:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29587:14:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28808,
            "nodeType": "FunctionDefinition",
            "src": "29706:103:70",
            "nodes": [],
            "functionSelector": "6ba3ba2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29715:10:70",
            "parameters": {
              "id": 28804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28801,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29742:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28808,
                  "src": "29726:26:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28800,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29726:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28803,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "29762:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28808,
                  "src": "29754:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28802,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29754:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29725:49:70"
            },
            "returnParameters": {
              "id": 28807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28806,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "29801:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28808,
                  "src": "29793:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29793:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29792:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28815,
            "nodeType": "FunctionDefinition",
            "src": "29926:82:70",
            "nodes": [],
            "functionSelector": "31ba3498",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29935:10:70",
            "parameters": {
              "id": 28811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28810,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29962:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28815,
                  "src": "29946:26:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28809,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29946:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29945:28:70"
            },
            "returnParameters": {
              "id": 28814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28813,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30000:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28815,
                  "src": "29992:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28812,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29992:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29991:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28824,
            "nodeType": "FunctionDefinition",
            "src": "30229:98:70",
            "nodes": [],
            "functionSelector": "7ca29682",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "30238:10:70",
            "parameters": {
              "id": 28820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28817,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30265:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28824,
                  "src": "30249:26:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28816,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30249:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28819,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30285:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28824,
                  "src": "30277:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28818,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30277:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30248:44:70"
            },
            "returnParameters": {
              "id": 28823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28822,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30319:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28824,
                  "src": "30311:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30311:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30310:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28833,
            "nodeType": "FunctionDefinition",
            "src": "30450:109:70",
            "nodes": [],
            "functionSelector": "71ee464d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30459:16:70",
            "parameters": {
              "id": 28829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28826,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30492:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28833,
                  "src": "30476:26:70",
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
                    "src": "30476:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28828,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "30512:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28833,
                  "src": "30504:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30504:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30475:49:70"
            },
            "returnParameters": {
              "id": 28832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28831,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30551:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28833,
                  "src": "30543:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28830,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30543:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30542:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28842,
            "nodeType": "FunctionDefinition",
            "src": "30793:104:70",
            "nodes": [],
            "functionSelector": "84d52b7a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30802:16:70",
            "parameters": {
              "id": 28838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28835,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30835:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28842,
                  "src": "30819:26:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28834,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28837,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30855:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28842,
                  "src": "30847:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28836,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30847:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:44:70"
            },
            "returnParameters": {
              "id": 28841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28840,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30889:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28842,
                  "src": "30881:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30881:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30880:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28849,
            "nodeType": "FunctionDefinition",
            "src": "31031:88:70",
            "nodes": [],
            "functionSelector": "98680034",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "31040:16:70",
            "parameters": {
              "id": 28845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28844,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "31073:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28849,
                  "src": "31057:26:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28843,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "31057:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31056:28:70"
            },
            "returnParameters": {
              "id": 28848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28847,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31111:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28849,
                  "src": "31103:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31103:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31102:16:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28854,
            "nodeType": "FunctionDefinition",
            "src": "31230:45:70",
            "nodes": [],
            "functionSelector": "9ebf6827",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "selectFork",
            "nameLocation": "31239:10:70",
            "parameters": {
              "id": 28852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28851,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31258:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28854,
                  "src": "31250:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31250:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31249:16:70"
            },
            "returnParameters": {
              "id": 28853,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31274:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28860,
            "nodeType": "FunctionDefinition",
            "src": "31381:61:70",
            "nodes": [],
            "documentation": {
              "id": 28855,
              "nodeType": "StructuredDocumentation",
              "src": "31280:96:70",
              "text": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
            },
            "functionSelector": "2f103f22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "activeFork",
            "nameLocation": "31390:10:70",
            "parameters": {
              "id": 28856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31400:2:70"
            },
            "returnParameters": {
              "id": 28859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28858,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31434:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28860,
                  "src": "31426:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31426:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31425:16:70"
            },
            "scope": 28947,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28865,
            "nodeType": "FunctionDefinition",
            "src": "31577:48:70",
            "nodes": [],
            "functionSelector": "d9bbf3a1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31586:8:70",
            "parameters": {
              "id": 28863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28862,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31603:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28865,
                  "src": "31595:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31595:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31594:21:70"
            },
            "returnParameters": {
              "id": 28864,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31624:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28870,
            "nodeType": "FunctionDefinition",
            "src": "31835:43:70",
            "nodes": [],
            "functionSelector": "0f29772b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31844:8:70",
            "parameters": {
              "id": 28868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28867,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "31861:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28870,
                  "src": "31853:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28866,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "31853:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31852:16:70"
            },
            "returnParameters": {
              "id": 28869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31877:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28877,
            "nodeType": "FunctionDefinition",
            "src": "31935:64:70",
            "nodes": [],
            "functionSelector": "d74c83a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31944:8:70",
            "parameters": {
              "id": 28875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28872,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31961:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28877,
                  "src": "31953:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31953:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28874,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31977:11:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28877,
                  "src": "31969:19:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28873,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31969:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31952:37:70"
            },
            "returnParameters": {
              "id": 28876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31998:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28884,
            "nodeType": "FunctionDefinition",
            "src": "32132:59:70",
            "nodes": [],
            "functionSelector": "f2830f7b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "32141:8:70",
            "parameters": {
              "id": 28882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28879,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "32158:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28884,
                  "src": "32150:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32150:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28881,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "32174:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28884,
                  "src": "32166:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28880,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32166:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32149:32:70"
            },
            "returnParameters": {
              "id": 28883,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32190:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28889,
            "nodeType": "FunctionDefinition",
            "src": "32390:50:70",
            "nodes": [],
            "functionSelector": "57e22dde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32399:14:70",
            "parameters": {
              "id": 28887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28886,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32422:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28889,
                  "src": "32414:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32414:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32413:17:70"
            },
            "returnParameters": {
              "id": 28888,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32439:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28896,
            "nodeType": "FunctionDefinition",
            "src": "32445:69:70",
            "nodes": [],
            "functionSelector": "4074e0a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32454:14:70",
            "parameters": {
              "id": 28894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28891,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32477:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28896,
                  "src": "32469:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28890,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32469:7:70",
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
                  "id": 28893,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32495:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28896,
                  "src": "32487:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32487:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32468:36:70"
            },
            "returnParameters": {
              "id": 28895,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32513:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28905,
            "nodeType": "FunctionDefinition",
            "src": "32519:87:70",
            "nodes": [],
            "functionSelector": "efb77a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32528:14:70",
            "parameters": {
              "id": 28903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28898,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32551:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28905,
                  "src": "32543:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28897,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32543:7:70",
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
                  "id": 28900,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32569:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28905,
                  "src": "32561:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28899,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32561:7:70",
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
                  "id": 28902,
                  "mutability": "mutable",
                  "name": "account2",
                  "nameLocation": "32587:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28905,
                  "src": "32579:16:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32579:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32542:54:70"
            },
            "returnParameters": {
              "id": 28904,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32605:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28911,
            "nodeType": "FunctionDefinition",
            "src": "32611:62:70",
            "nodes": [],
            "functionSelector": "1d9e269e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32620:14:70",
            "parameters": {
              "id": 28909,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28908,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32654:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28911,
                  "src": "32635:27:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28906,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32635:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28907,
                    "nodeType": "ArrayTypeName",
                    "src": "32635:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32634:29:70"
            },
            "returnParameters": {
              "id": 28910,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32672:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28916,
            "nodeType": "FunctionDefinition",
            "src": "32767:52:70",
            "nodes": [],
            "functionSelector": "997a0222",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32776:16:70",
            "parameters": {
              "id": 28914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28913,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32801:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28916,
                  "src": "32793:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28912,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32793:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32792:17:70"
            },
            "returnParameters": {
              "id": 28915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32818:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28922,
            "nodeType": "FunctionDefinition",
            "src": "32824:64:70",
            "nodes": [],
            "functionSelector": "3ce969e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32833:16:70",
            "parameters": {
              "id": 28920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28919,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32869:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28922,
                  "src": "32850:27:70",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28917,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32850:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 28918,
                    "nodeType": "ArrayTypeName",
                    "src": "32850:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32849:29:70"
            },
            "returnParameters": {
              "id": 28921,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32887:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28929,
            "nodeType": "FunctionDefinition",
            "src": "32952:79:70",
            "nodes": [],
            "functionSelector": "d92d8efd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPersistent",
            "nameLocation": "32961:12:70",
            "parameters": {
              "id": 28925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28924,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32982:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28929,
                  "src": "32974:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28923,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32974:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32973:17:70"
            },
            "returnParameters": {
              "id": 28928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28927,
                  "mutability": "mutable",
                  "name": "persistent",
                  "nameLocation": "33019:10:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28929,
                  "src": "33014:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28926,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "33014:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33013:17:70"
            },
            "scope": 28947,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28934,
            "nodeType": "FunctionDefinition",
            "src": "33112:51:70",
            "nodes": [],
            "functionSelector": "ea060291",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowCheatcodes",
            "nameLocation": "33121:15:70",
            "parameters": {
              "id": 28932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28931,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "33145:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28934,
                  "src": "33137:15:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28930,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33137:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33136:17:70"
            },
            "returnParameters": {
              "id": 28933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33162:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28939,
            "nodeType": "FunctionDefinition",
            "src": "33263:43:70",
            "nodes": [],
            "functionSelector": "be646da1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33272:8:70",
            "parameters": {
              "id": 28937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28936,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33289:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28939,
                  "src": "33281:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28935,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33281:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33280:16:70"
            },
            "returnParameters": {
              "id": 28938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33305:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 28946,
            "nodeType": "FunctionDefinition",
            "src": "33405:59:70",
            "nodes": [],
            "functionSelector": "4d8abc4b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33414:8:70",
            "parameters": {
              "id": 28944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28941,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "33431:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28946,
                  "src": "33423:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33423:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28943,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33447:6:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 28946,
                  "src": "33439:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28942,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33439:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33422:32:70"
            },
            "returnParameters": {
              "id": 28945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33463:0:70"
            },
            "scope": 28947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 28476,
              "name": "VmSafe",
              "nameLocations": [
                "21872:6:70"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 28475,
              "src": "21872:6:70"
            },
            "id": 28477,
            "nodeType": "InheritanceSpecifier",
            "src": "21872:6:70"
          }
        ],
        "canonicalName": "Vm",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          28947,
          28475
        ],
        "name": "Vm",
        "nameLocation": "21866:2:70",
        "scope": 28948,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 70
} as const;
