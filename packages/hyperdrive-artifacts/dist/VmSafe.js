export const VmSafe = {
    abi: [
        {
            "type": "function",
            "name": "accesses",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "readSlots",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "writeSlots",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addr",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "keyAddr",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assume",
            "inputs": [
                {
                    "name": "condition",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "breakpoint",
            "inputs": [
                {
                    "name": "char",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "breakpoint",
            "inputs": [
                {
                    "name": "char",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "broadcast",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "broadcast",
            "inputs": [
                {
                    "name": "signer",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "broadcast",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeFile",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "recursive",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deriveKey",
            "inputs": [
                {
                    "name": "mnemonic",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "index",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "deriveKey",
            "inputs": [
                {
                    "name": "mnemonic",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "derivationPath",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "index",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "envAddress",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envAddress",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBool",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBool",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBytes",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBytes",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBytes32",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envBytes32",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envInt",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envInt",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envOr",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "defaultValue",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "envString",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envString",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envUint",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "envUint",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delim",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "value",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ffi",
            "inputs": [
                {
                    "name": "commandInput",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "fsMetadata",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "metadata",
                    "type": "tuple",
                    "internalType": "struct VmSafe.FsMetadata",
                    "components": [
                        {
                            "name": "isDir",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isSymlink",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "length",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "readOnly",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "modified",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "accessed",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "created",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getCode",
            "inputs": [
                {
                    "name": "artifactPath",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "creationBytecode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDeployedCode",
            "inputs": [
                {
                    "name": "artifactPath",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "runtimeBytecode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getLabel",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "currentLabel",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getNonce",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "nonce",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRecordedLogs",
            "inputs": [],
            "outputs": [
                {
                    "name": "logs",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.Log[]",
                    "components": [
                        {
                            "name": "topics",
                            "type": "bytes32[]",
                            "internalType": "bytes32[]"
                        },
                        {
                            "name": "data",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "emitter",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "label",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newLabel",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "load",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "slot",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "data",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "parseAddress",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseBool",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseBytes",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseBytes32",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseInt",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJson",
            "inputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "abiEncodedData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJson",
            "inputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "key",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "abiEncodedData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonAddress",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonAddressArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBool",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBoolArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBytes",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBytes32",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBytes32Array",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonBytesArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonInt",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonIntArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonKeys",
            "inputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "key",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "keys",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonString",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonStringArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonUint",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseJsonUintArray",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "parseUint",
            "inputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "parsedValue",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "pauseGasMetering",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "projectRoot",
            "inputs": [],
            "outputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "maxDepth",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "entries",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.DirEntry[]",
                    "components": [
                        {
                            "name": "errorMessage",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "depth",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "isDir",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isSymlink",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "maxDepth",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "followLinks",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "entries",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.DirEntry[]",
                    "components": [
                        {
                            "name": "errorMessage",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "depth",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "isDir",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isSymlink",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "entries",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.DirEntry[]",
                    "components": [
                        {
                            "name": "errorMessage",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "depth",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "isDir",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isSymlink",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readFile",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "data",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readFileBinary",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readLine",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "line",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "readLink",
            "inputs": [
                {
                    "name": "linkPath",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "targetPath",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "record",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "recordLogs",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rememberKey",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "keyAddr",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "recursive",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeFile",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "resumeGasMetering",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rpcUrl",
            "inputs": [
                {
                    "name": "rpcAlias",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rpcUrlStructs",
            "inputs": [],
            "outputs": [
                {
                    "name": "urls",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.Rpc[]",
                    "components": [
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "url",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rpcUrls",
            "inputs": [],
            "outputs": [
                {
                    "name": "urls",
                    "type": "string[2][]",
                    "internalType": "string[2][]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "serializeAddress",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeAddress",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBool",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBool",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBytes",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBytes",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBytes32",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeBytes32",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeInt",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeInt",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeString",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeString",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeUint",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "serializeUint",
            "inputs": [
                {
                    "name": "objectKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "values",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setEnv",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "value",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sign",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "digest",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "startBroadcast",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startBroadcast",
            "inputs": [
                {
                    "name": "signer",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startBroadcast",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stopBroadcast",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toString",
            "inputs": [
                {
                    "name": "value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "stringifiedValue",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "writeFile",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "data",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "writeFileBinary",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "writeJson",
            "inputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "valueKey",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "writeJson",
            "inputs": [
                {
                    "name": "json",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "writeLine",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "data",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "accesses(address)": "65bc9481",
        "addr(uint256)": "ffa18649",
        "assume(bool)": "4c63e562",
        "breakpoint(string)": "f0259e92",
        "breakpoint(string,bool)": "f7d39a8d",
        "broadcast()": "afc98040",
        "broadcast(address)": "e6962cdb",
        "broadcast(uint256)": "f67a965b",
        "closeFile(string)": "48c3241f",
        "createDir(string,bool)": "168b64d3",
        "deriveKey(string,string,uint32)": "6bcb2c1b",
        "deriveKey(string,uint32)": "6229498b",
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
        "ffi(string[])": "89160467",
        "fsMetadata(string)": "af368a08",
        "getCode(string)": "8d1cc925",
        "getDeployedCode(string)": "3ebf73b4",
        "getLabel(address)": "28a249b0",
        "getNonce(address)": "2d0335ab",
        "getRecordedLogs()": "191553a4",
        "label(address,string)": "c657c718",
        "load(address,bytes32)": "667f9d70",
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
        "projectRoot()": "d930a0e6",
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
        "resumeGasMetering()": "2bcd50e0",
        "rpcUrl(string)": "975a6ce9",
        "rpcUrlStructs()": "9d2ad72a",
        "rpcUrls()": "a85a8418",
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
        "sign(uint256,bytes32)": "e341eaa4",
        "startBroadcast()": "7fb5297f",
        "startBroadcast(address)": "7fec2a8d",
        "startBroadcast(uint256)": "ce817d47",
        "stopBroadcast()": "76eadd36",
        "toString(address)": "56ca623e",
        "toString(bool)": "71dce7da",
        "toString(bytes)": "71aad10d",
        "toString(bytes32)": "b11a19e8",
        "toString(int256)": "a322c40e",
        "toString(uint256)": "6900a3ae",
        "writeFile(string,string)": "897e0a97",
        "writeFileBinary(string,bytes)": "1f21fc80",
        "writeJson(string,string)": "e23cd19f",
        "writeJson(string,string,string)": "35d6ad46",
        "writeLine(string,string)": "619d897f"
    }
};
