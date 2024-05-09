export const Vm = {
    abi: [
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
    bytecode: '0x',
    methodIdentifiers: {
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
    }
};
