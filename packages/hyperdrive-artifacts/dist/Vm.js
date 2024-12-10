export const Vm = {
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
            "name": "activeFork",
            "inputs": [],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
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
            "name": "allowCheatcodes",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbs",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbs",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbs",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbs",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbsDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbsDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbsDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqAbsDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRel",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRel",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRel",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRel",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRelDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRelDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRelDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertApproxEqRelDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "maxPercentDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "right",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "right",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "right",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "right",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "right",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "right",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "right",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "right",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "right",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "right",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "right",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "right",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "right",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "right",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "right",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "right",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "right",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "right",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "right",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "right",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "right",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "right",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "right",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "right",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertFalse",
            "inputs": [
                {
                    "name": "condition",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertFalse",
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
            "name": "assertGe",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGe",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGe",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGe",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGt",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGt",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGt",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGt",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertGtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLe",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLe",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLe",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLe",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLeDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLt",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLt",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLt",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLt",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertLtDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "right",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "right",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "right",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "right",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "right",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "right",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "right",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "right",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "right",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "right",
                    "type": "bool[]",
                    "internalType": "bool[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "right",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "right",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "right",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "right",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "right",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "right",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "right",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "right",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "right",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "right",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "right",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "string[]",
                    "internalType": "string[]"
                },
                {
                    "name": "right",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "right",
                    "type": "int256[]",
                    "internalType": "int256[]"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "right",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEq",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "right",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertNotEqDecimal",
            "inputs": [
                {
                    "name": "left",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "right",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "assertTrue",
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
            "name": "assertTrue",
            "inputs": [
                {
                    "name": "condition",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "error",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
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
            "name": "chainId",
            "inputs": [
                {
                    "name": "newChainId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "clearMockedCalls",
            "inputs": [],
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
            "name": "coinbase",
            "inputs": [
                {
                    "name": "newCoinbase",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "computeCreate2Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCodeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "computeCreate2Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCodeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "deployer",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "computeCreateAddress",
            "inputs": [
                {
                    "name": "deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "nonce",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "copyFile",
            "inputs": [
                {
                    "name": "from",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "to",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "copied",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
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
            "name": "createFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "blockNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createSelectFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "blockNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createSelectFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createSelectFork",
            "inputs": [
                {
                    "name": "urlOrAlias",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createWallet",
            "inputs": [
                {
                    "name": "walletLabel",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "wallet",
                    "type": "tuple",
                    "internalType": "struct VmSafe.Wallet",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "publicKeyX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "publicKeyY",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "privateKey",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createWallet",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "wallet",
                    "type": "tuple",
                    "internalType": "struct VmSafe.Wallet",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "publicKeyX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "publicKeyY",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "privateKey",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createWallet",
            "inputs": [
                {
                    "name": "privateKey",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "walletLabel",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "wallet",
                    "type": "tuple",
                    "internalType": "struct VmSafe.Wallet",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "publicKeyX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "publicKeyY",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "privateKey",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deal",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newBalance",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteSnapshot",
            "inputs": [
                {
                    "name": "snapshotId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "success",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteSnapshots",
            "inputs": [],
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
                    "name": "derivationPath",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "index",
                    "type": "uint32",
                    "internalType": "uint32"
                },
                {
                    "name": "language",
                    "type": "string",
                    "internalType": "string"
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
                    "name": "index",
                    "type": "uint32",
                    "internalType": "uint32"
                },
                {
                    "name": "language",
                    "type": "string",
                    "internalType": "string"
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
            "name": "difficulty",
            "inputs": [
                {
                    "name": "newDifficulty",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "dumpState",
            "inputs": [
                {
                    "name": "pathToStateJson",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "etch",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newRuntimeBytecode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "eth_getLogs",
            "inputs": [
                {
                    "name": "fromBlock",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "toBlock",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "topics",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "outputs": [
                {
                    "name": "logs",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.EthGetLogs[]",
                    "components": [
                        {
                            "name": "emitter",
                            "type": "address",
                            "internalType": "address"
                        },
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
                            "name": "blockHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "blockNumber",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "transactionHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "transactionIndex",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "logIndex",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "removed",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "exists",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "gas",
                    "type": "uint64",
                    "internalType": "uint64"
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
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "gas",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "count",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "count",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
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
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "count",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "expectCallMinGas",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "minGas",
                    "type": "uint64",
                    "internalType": "uint64"
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
            "name": "expectCallMinGas",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "minGas",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "count",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectEmit",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectEmit",
            "inputs": [
                {
                    "name": "checkTopic1",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkTopic2",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkTopic3",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkData",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectEmit",
            "inputs": [
                {
                    "name": "checkTopic1",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkTopic2",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkTopic3",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "checkData",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectEmit",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectRevert",
            "inputs": [
                {
                    "name": "revertData",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectRevert",
            "inputs": [
                {
                    "name": "revertData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectRevert",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectSafeMemory",
            "inputs": [
                {
                    "name": "min",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "max",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "expectSafeMemoryCall",
            "inputs": [
                {
                    "name": "min",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "max",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "fee",
            "inputs": [
                {
                    "name": "newBasefee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "getBlockNumber",
            "inputs": [],
            "outputs": [
                {
                    "name": "height",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBlockTimestamp",
            "inputs": [],
            "outputs": [
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getMappingKeyAndParentOf",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "elementSlot",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "found",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "parent",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getMappingLength",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "mappingSlot",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "length",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getMappingSlotAt",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "mappingSlot",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "idx",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "getNonce",
            "inputs": [
                {
                    "name": "wallet",
                    "type": "tuple",
                    "internalType": "struct VmSafe.Wallet",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "publicKeyX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "publicKeyY",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "privateKey",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "nonce",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "stateMutability": "nonpayable"
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
            "name": "isDir",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isFile",
            "inputs": [
                {
                    "name": "path",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isPersistent",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "persistent",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "keyExists",
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
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "keyExistsJson",
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
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "keyExistsToml",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
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
            "name": "loadAllocs",
            "inputs": [
                {
                    "name": "pathToAllocsJson",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "makePersistent",
            "inputs": [
                {
                    "name": "accounts",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "makePersistent",
            "inputs": [
                {
                    "name": "account0",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "account1",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "makePersistent",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "makePersistent",
            "inputs": [
                {
                    "name": "account0",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "account1",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "account2",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mockCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "returnData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mockCall",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "returnData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mockCallRevert",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "msgValue",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "revertData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mockCallRevert",
            "inputs": [
                {
                    "name": "callee",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "revertData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonAddressArray",
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
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBool",
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
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBoolArray",
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
                    "name": "",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBytes",
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
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBytes32",
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
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBytes32Array",
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
                    "name": "",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonBytesArray",
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
                    "name": "",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonInt",
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
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonIntArray",
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
                    "name": "",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "stateMutability": "pure"
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonString",
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
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonStringArray",
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
                    "name": "",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonUint",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseJsonUintArray",
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
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseToml",
            "inputs": [
                {
                    "name": "toml",
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
            "name": "parseToml",
            "inputs": [
                {
                    "name": "toml",
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
            "name": "parseTomlAddress",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlAddressArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBool",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBoolArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bool[]",
                    "internalType": "bool[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBytes",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBytes32",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBytes32Array",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlBytesArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlInt",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlIntArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "int256[]",
                    "internalType": "int256[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlKeys",
            "inputs": [
                {
                    "name": "toml",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlString",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlStringArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlUint",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "parseTomlUintArray",
            "inputs": [
                {
                    "name": "toml",
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
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "pure"
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
            "name": "prank",
            "inputs": [
                {
                    "name": "msgSender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "txOrigin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "prank",
            "inputs": [
                {
                    "name": "msgSender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "prevrandao",
            "inputs": [
                {
                    "name": "newPrevrandao",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
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
            "name": "readCallers",
            "inputs": [],
            "outputs": [
                {
                    "name": "callerMode",
                    "type": "uint8",
                    "internalType": "enum VmSafe.CallerMode"
                },
                {
                    "name": "msgSender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "txOrigin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
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
            "name": "replace",
            "inputs": [
                {
                    "name": "input",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "from",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "to",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "resetNonce",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
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
            "name": "revertTo",
            "inputs": [
                {
                    "name": "snapshotId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "success",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "revertToAndDelete",
            "inputs": [
                {
                    "name": "snapshotId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "success",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "revokePersistent",
            "inputs": [
                {
                    "name": "accounts",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "revokePersistent",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "roll",
            "inputs": [
                {
                    "name": "newHeight",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rollFork",
            "inputs": [
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rollFork",
            "inputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "blockNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rollFork",
            "inputs": [
                {
                    "name": "blockNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rollFork",
            "inputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rpc",
            "inputs": [
                {
                    "name": "method",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "params",
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
            "name": "selectFork",
            "inputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
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
            "name": "serializeJson",
            "inputs": [
                {
                    "name": "objectKey",
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
            "name": "setNonce",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newNonce",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setNonceUnsafe",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newNonce",
                    "type": "uint64",
                    "internalType": "uint64"
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
                    "name": "wallet",
                    "type": "tuple",
                    "internalType": "struct VmSafe.Wallet",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "publicKeyX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "publicKeyY",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "privateKey",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
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
            "name": "signP256",
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
            "name": "skip",
            "inputs": [
                {
                    "name": "skipTest",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sleep",
            "inputs": [
                {
                    "name": "duration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "snapshot",
            "inputs": [],
            "outputs": [
                {
                    "name": "snapshotId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "split",
            "inputs": [
                {
                    "name": "input",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "delimiter",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "outputs",
                    "type": "string[]",
                    "internalType": "string[]"
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
            "name": "startMappingRecording",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startPrank",
            "inputs": [
                {
                    "name": "msgSender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startPrank",
            "inputs": [
                {
                    "name": "msgSender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "txOrigin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startStateDiffRecording",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stopAndReturnStateDiff",
            "inputs": [],
            "outputs": [
                {
                    "name": "accountAccesses",
                    "type": "tuple[]",
                    "internalType": "struct VmSafe.AccountAccess[]",
                    "components": [
                        {
                            "name": "chainInfo",
                            "type": "tuple",
                            "internalType": "struct VmSafe.ChainInfo",
                            "components": [
                                {
                                    "name": "forkId",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "chainId",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "kind",
                            "type": "uint8",
                            "internalType": "enum VmSafe.AccountAccessKind"
                        },
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "accessor",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "initialized",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "oldBalance",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "newBalance",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deployedCode",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "value",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "data",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "reverted",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "storageAccesses",
                            "type": "tuple[]",
                            "internalType": "struct VmSafe.StorageAccess[]",
                            "components": [
                                {
                                    "name": "account",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "slot",
                                    "type": "bytes32",
                                    "internalType": "bytes32"
                                },
                                {
                                    "name": "isWrite",
                                    "type": "bool",
                                    "internalType": "bool"
                                },
                                {
                                    "name": "previousValue",
                                    "type": "bytes32",
                                    "internalType": "bytes32"
                                },
                                {
                                    "name": "newValue",
                                    "type": "bytes32",
                                    "internalType": "bytes32"
                                },
                                {
                                    "name": "reverted",
                                    "type": "bool",
                                    "internalType": "bool"
                                }
                            ]
                        },
                        {
                            "name": "depth",
                            "type": "uint64",
                            "internalType": "uint64"
                        }
                    ]
                }
            ],
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
            "name": "stopExpectSafeMemory",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stopMappingRecording",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stopPrank",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "store",
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
                },
                {
                    "name": "value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "toBase64",
            "inputs": [
                {
                    "name": "data",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toBase64",
            "inputs": [
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toBase64URL",
            "inputs": [
                {
                    "name": "data",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toBase64URL",
            "inputs": [
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toLowercase",
            "inputs": [
                {
                    "name": "input",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "output",
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
            "name": "toUppercase",
            "inputs": [
                {
                    "name": "input",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "transact",
            "inputs": [
                {
                    "name": "forkId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transact",
            "inputs": [
                {
                    "name": "txHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "trim",
            "inputs": [
                {
                    "name": "input",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "tryFfi",
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
                    "type": "tuple",
                    "internalType": "struct VmSafe.FfiResult",
                    "components": [
                        {
                            "name": "exitCode",
                            "type": "int32",
                            "internalType": "int32"
                        },
                        {
                            "name": "stdout",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "stderr",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "txGasPrice",
            "inputs": [
                {
                    "name": "newGasPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "unixTime",
            "inputs": [],
            "outputs": [
                {
                    "name": "milliseconds",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "warp",
            "inputs": [
                {
                    "name": "newTimestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
        },
        {
            "type": "function",
            "name": "writeToml",
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
            "name": "writeToml",
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
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "accesses(address)": "65bc9481",
        "activeFork()": "2f103f22",
        "addr(uint256)": "ffa18649",
        "allowCheatcodes(address)": "ea060291",
        "assertApproxEqAbs(int256,int256,uint256)": "240f839d",
        "assertApproxEqAbs(int256,int256,uint256,string)": "8289e621",
        "assertApproxEqAbs(uint256,uint256,uint256)": "16d207c6",
        "assertApproxEqAbs(uint256,uint256,uint256,string)": "f710b062",
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)": "3d5bc8bc",
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)": "6a5066d4",
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)": "045c55ce",
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)": "60429eb2",
        "assertApproxEqRel(int256,int256,uint256)": "fea2d14f",
        "assertApproxEqRel(int256,int256,uint256,string)": "ef277d72",
        "assertApproxEqRel(uint256,uint256,uint256)": "8cf25ef4",
        "assertApproxEqRel(uint256,uint256,uint256,string)": "1ecb7d33",
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)": "abbf21cc",
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)": "fccc11c4",
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)": "21ed2977",
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)": "82d6c8fd",
        "assertEq(address,address)": "515361f6",
        "assertEq(address,address,string)": "2f2769d1",
        "assertEq(address[],address[])": "3868ac34",
        "assertEq(address[],address[],string)": "3e9173c5",
        "assertEq(bool,bool)": "f7fe3477",
        "assertEq(bool,bool,string)": "4db19e7e",
        "assertEq(bool[],bool[])": "707df785",
        "assertEq(bool[],bool[],string)": "e48a8f8d",
        "assertEq(bytes,bytes)": "97624631",
        "assertEq(bytes,bytes,string)": "e24fed00",
        "assertEq(bytes32,bytes32)": "7c84c69b",
        "assertEq(bytes32,bytes32,string)": "c1fa1ed0",
        "assertEq(bytes32[],bytes32[])": "0cc9ee84",
        "assertEq(bytes32[],bytes32[],string)": "e03e9177",
        "assertEq(bytes[],bytes[])": "e5fb9b4a",
        "assertEq(bytes[],bytes[],string)": "f413f0b6",
        "assertEq(int256,int256)": "fe74f05b",
        "assertEq(int256,int256,string)": "714a2f13",
        "assertEq(int256[],int256[])": "711043ac",
        "assertEq(int256[],int256[],string)": "191f1b30",
        "assertEq(string,string)": "f320d963",
        "assertEq(string,string,string)": "36f656d8",
        "assertEq(string[],string[])": "cf1c049c",
        "assertEq(string[],string[],string)": "eff6b27d",
        "assertEq(uint256,uint256)": "98296c54",
        "assertEq(uint256,uint256,string)": "88b44c85",
        "assertEq(uint256[],uint256[])": "975d5a12",
        "assertEq(uint256[],uint256[],string)": "5d18c73a",
        "assertEqDecimal(int256,int256,uint256)": "48016c04",
        "assertEqDecimal(int256,int256,uint256,string)": "7e77b0c5",
        "assertEqDecimal(uint256,uint256,uint256)": "27af7d9c",
        "assertEqDecimal(uint256,uint256,uint256,string)": "d0cbbdef",
        "assertFalse(bool)": "a5982885",
        "assertFalse(bool,string)": "7ba04809",
        "assertGe(int256,int256)": "0a30b771",
        "assertGe(int256,int256,string)": "a84328dd",
        "assertGe(uint256,uint256)": "a8d4d1d9",
        "assertGe(uint256,uint256,string)": "e25242c0",
        "assertGeDecimal(int256,int256,uint256)": "dc28c0f1",
        "assertGeDecimal(int256,int256,uint256,string)": "5df93c9b",
        "assertGeDecimal(uint256,uint256,uint256)": "3d1fe08a",
        "assertGeDecimal(uint256,uint256,uint256,string)": "8bff9133",
        "assertGt(int256,int256)": "5a362d45",
        "assertGt(int256,int256,string)": "f8d33b9b",
        "assertGt(uint256,uint256)": "db07fcd2",
        "assertGt(uint256,uint256,string)": "d9a3c4d2",
        "assertGtDecimal(int256,int256,uint256)": "78611f0e",
        "assertGtDecimal(int256,int256,uint256,string)": "04a5c7ab",
        "assertGtDecimal(uint256,uint256,uint256)": "eccd2437",
        "assertGtDecimal(uint256,uint256,uint256,string)": "64949a8d",
        "assertLe(int256,int256)": "95fd154e",
        "assertLe(int256,int256,string)": "4dfe692c",
        "assertLe(uint256,uint256)": "8466f415",
        "assertLe(uint256,uint256,string)": "d17d4b0d",
        "assertLeDecimal(int256,int256,uint256)": "11d1364a",
        "assertLeDecimal(int256,int256,uint256,string)": "aa5cf788",
        "assertLeDecimal(uint256,uint256,uint256)": "c304aab7",
        "assertLeDecimal(uint256,uint256,uint256,string)": "7fefbbe0",
        "assertLt(int256,int256)": "3e914080",
        "assertLt(int256,int256,string)": "9ff531e3",
        "assertLt(uint256,uint256)": "b12fc005",
        "assertLt(uint256,uint256,string)": "65d5c135",
        "assertLtDecimal(int256,int256,uint256)": "dbe8d88b",
        "assertLtDecimal(int256,int256,uint256,string)": "40f0b4e0",
        "assertLtDecimal(uint256,uint256,uint256)": "2077337e",
        "assertLtDecimal(uint256,uint256,uint256,string)": "a972d037",
        "assertNotEq(address,address)": "b12e1694",
        "assertNotEq(address,address,string)": "8775a591",
        "assertNotEq(address[],address[])": "46d0b252",
        "assertNotEq(address[],address[],string)": "72c7e0b5",
        "assertNotEq(bool,bool)": "236e4d66",
        "assertNotEq(bool,bool,string)": "1091a261",
        "assertNotEq(bool[],bool[])": "286fafea",
        "assertNotEq(bool[],bool[],string)": "62c6f9fb",
        "assertNotEq(bytes,bytes)": "3cf78e28",
        "assertNotEq(bytes,bytes,string)": "9507540e",
        "assertNotEq(bytes32,bytes32)": "898e83fc",
        "assertNotEq(bytes32,bytes32,string)": "b2332f51",
        "assertNotEq(bytes32[],bytes32[])": "0603ea68",
        "assertNotEq(bytes32[],bytes32[],string)": "b873634c",
        "assertNotEq(bytes[],bytes[])": "edecd035",
        "assertNotEq(bytes[],bytes[],string)": "1dcd1f68",
        "assertNotEq(int256,int256)": "f4c004e3",
        "assertNotEq(int256,int256,string)": "4724c5b9",
        "assertNotEq(int256[],int256[])": "0b72f4ef",
        "assertNotEq(int256[],int256[],string)": "d3977322",
        "assertNotEq(string,string)": "6a8237b3",
        "assertNotEq(string,string,string)": "78bdcea7",
        "assertNotEq(string[],string[])": "bdfacbe8",
        "assertNotEq(string[],string[],string)": "b67187f3",
        "assertNotEq(uint256,uint256)": "b7909320",
        "assertNotEq(uint256,uint256,string)": "98f9bdbd",
        "assertNotEq(uint256[],uint256[])": "56f29cba",
        "assertNotEq(uint256[],uint256[],string)": "9a7fbd8f",
        "assertNotEqDecimal(int256,int256,uint256)": "14e75680",
        "assertNotEqDecimal(int256,int256,uint256,string)": "33949f0b",
        "assertNotEqDecimal(uint256,uint256,uint256)": "669efca7",
        "assertNotEqDecimal(uint256,uint256,uint256,string)": "f5a55558",
        "assertTrue(bool)": "0c9fd581",
        "assertTrue(bool,string)": "a34edc03",
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
        "computeCreate2Address(bytes32,bytes32)": "890c283b",
        "computeCreate2Address(bytes32,bytes32,address)": "d323826a",
        "computeCreateAddress(address,uint256)": "74637a7a",
        "copyFile(string,string)": "a54a87d8",
        "createDir(string,bool)": "168b64d3",
        "createFork(string)": "31ba3498",
        "createFork(string,bytes32)": "7ca29682",
        "createFork(string,uint256)": "6ba3ba2b",
        "createSelectFork(string)": "98680034",
        "createSelectFork(string,bytes32)": "84d52b7a",
        "createSelectFork(string,uint256)": "71ee464d",
        "createWallet(string)": "7404f1d2",
        "createWallet(uint256)": "7a675bb6",
        "createWallet(uint256,string)": "ed7c5462",
        "deal(address,uint256)": "c88a5e6d",
        "deleteSnapshot(uint256)": "a6368557",
        "deleteSnapshots()": "421ae469",
        "deriveKey(string,string,uint32)": "6bcb2c1b",
        "deriveKey(string,string,uint32,string)": "29233b1f",
        "deriveKey(string,uint32)": "6229498b",
        "deriveKey(string,uint32,string)": "32c8176d",
        "difficulty(uint256)": "46cc92d9",
        "dumpState(string)": "709ecd3f",
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
        "eth_getLogs(uint256,uint256,address,bytes32[])": "35e1349b",
        "exists(string)": "261a323e",
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
        "getBlockNumber()": "42cbb15c",
        "getBlockTimestamp()": "796b89b9",
        "getCode(string)": "8d1cc925",
        "getDeployedCode(string)": "3ebf73b4",
        "getLabel(address)": "28a249b0",
        "getMappingKeyAndParentOf(address,bytes32)": "876e24e6",
        "getMappingLength(address,bytes32)": "2f2fd63f",
        "getMappingSlotAt(address,bytes32,uint256)": "ebc73ab4",
        "getNonce((address,uint256,uint256,uint256))": "a5748aad",
        "getNonce(address)": "2d0335ab",
        "getRecordedLogs()": "191553a4",
        "isDir(string)": "7d15d019",
        "isFile(string)": "e0eb04d4",
        "isPersistent(address)": "d92d8efd",
        "keyExists(string,string)": "528a683c",
        "keyExistsJson(string,string)": "db4235f6",
        "keyExistsToml(string,string)": "600903ad",
        "label(address,string)": "c657c718",
        "load(address,bytes32)": "667f9d70",
        "loadAllocs(string)": "b3a056d7",
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
        "parseToml(string)": "592151f0",
        "parseToml(string,string)": "37736e08",
        "parseTomlAddress(string,string)": "65e7c844",
        "parseTomlAddressArray(string,string)": "65c428e7",
        "parseTomlBool(string,string)": "d30dced6",
        "parseTomlBoolArray(string,string)": "127cfe9a",
        "parseTomlBytes(string,string)": "d77bfdb9",
        "parseTomlBytes32(string,string)": "8e214810",
        "parseTomlBytes32Array(string,string)": "3e716f81",
        "parseTomlBytesArray(string,string)": "b197c247",
        "parseTomlInt(string,string)": "c1350739",
        "parseTomlIntArray(string,string)": "d3522ae6",
        "parseTomlKeys(string,string)": "812a44b2",
        "parseTomlString(string,string)": "8bb8dd43",
        "parseTomlStringArray(string,string)": "9f629281",
        "parseTomlUint(string,string)": "cc7b0487",
        "parseTomlUintArray(string,string)": "b5df27c8",
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
        "replace(string,string,string)": "e00ad03e",
        "resetNonce(address)": "1c72346d",
        "resumeGasMetering()": "2bcd50e0",
        "revertTo(uint256)": "44d7f0a4",
        "revertToAndDelete(uint256)": "03e0aca9",
        "revokePersistent(address)": "997a0222",
        "revokePersistent(address[])": "3ce969e6",
        "roll(uint256)": "1f7b4f30",
        "rollFork(bytes32)": "0f29772b",
        "rollFork(uint256)": "d9bbf3a1",
        "rollFork(uint256,bytes32)": "f2830f7b",
        "rollFork(uint256,uint256)": "d74c83a4",
        "rpc(string,string)": "1206c8a8",
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
        "serializeJson(string,string)": "9b3358b0",
        "serializeString(string,string,string)": "88da6d35",
        "serializeString(string,string,string[])": "561cd6f3",
        "serializeUint(string,string,uint256)": "129e9002",
        "serializeUint(string,string,uint256[])": "fee9a469",
        "setEnv(string,string)": "3d5923ee",
        "setNonce(address,uint64)": "f8e18b57",
        "setNonceUnsafe(address,uint64)": "9b67b21c",
        "sign((address,uint256,uint256,uint256),bytes32)": "b25c5a25",
        "sign(uint256,bytes32)": "e341eaa4",
        "signP256(uint256,bytes32)": "83211b40",
        "skip(bool)": "dd82d13e",
        "sleep(uint256)": "fa9d8713",
        "snapshot()": "9711715a",
        "split(string,string)": "8bb75533",
        "startBroadcast()": "7fb5297f",
        "startBroadcast(address)": "7fec2a8d",
        "startBroadcast(uint256)": "ce817d47",
        "startMappingRecording()": "3e9705c0",
        "startPrank(address)": "06447d56",
        "startPrank(address,address)": "45b56078",
        "startStateDiffRecording()": "cf22e3c9",
        "stopAndReturnStateDiff()": "aa5cf90e",
        "stopBroadcast()": "76eadd36",
        "stopExpectSafeMemory()": "0956441b",
        "stopMappingRecording()": "0d4aae9b",
        "stopPrank()": "90c5013b",
        "store(address,bytes32,bytes32)": "70ca10bb",
        "toBase64(bytes)": "a5cbfe65",
        "toBase64(string)": "3f8be2c8",
        "toBase64URL(bytes)": "c8bd0e4a",
        "toBase64URL(string)": "ae3165b3",
        "toLowercase(string)": "50bb0884",
        "toString(address)": "56ca623e",
        "toString(bool)": "71dce7da",
        "toString(bytes)": "71aad10d",
        "toString(bytes32)": "b11a19e8",
        "toString(int256)": "a322c40e",
        "toString(uint256)": "6900a3ae",
        "toUppercase(string)": "074ae3d7",
        "transact(bytes32)": "be646da1",
        "transact(uint256,bytes32)": "4d8abc4b",
        "trim(string)": "b2dad155",
        "tryFfi(string[])": "f45c1ce7",
        "txGasPrice(uint256)": "48f50c0f",
        "unixTime()": "625387dc",
        "warp(uint256)": "e5d6bf02",
        "writeFile(string,string)": "897e0a97",
        "writeFileBinary(string,bytes)": "1f21fc80",
        "writeJson(string,string)": "e23cd19f",
        "writeJson(string,string,string)": "35d6ad46",
        "writeLine(string,string)": "619d897f",
        "writeToml(string,string)": "c0865ba7",
        "writeToml(string,string,string)": "51ac6a33"
    }
};
