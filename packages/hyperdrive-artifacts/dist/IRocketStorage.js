export const IRocketStorage = {
    abi: [
        {
            "type": "function",
            "name": "addUint",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "confirmGuardian",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "confirmWithdrawalAddress",
            "inputs": [
                {
                    "name": "_nodeAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteAddress",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteBool",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteBytes",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteBytes32",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteInt",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteString",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteUint",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getAddress",
            "inputs": [
                {
                    "name": "_key",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBool",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
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
            "name": "getBytes",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBytes32",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDeployedStatus",
            "inputs": [],
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
            "name": "getGuardian",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInt",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNodePendingWithdrawalAddress",
            "inputs": [
                {
                    "name": "_nodeAddress",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNodeWithdrawalAddress",
            "inputs": [
                {
                    "name": "_nodeAddress",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getString",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUint",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "setAddress",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setBool",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setBytes",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setBytes32",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setGuardian",
            "inputs": [
                {
                    "name": "_newAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setInt",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setString",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUint",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setWithdrawalAddress",
            "inputs": [
                {
                    "name": "_nodeAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_newWithdrawalAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_confirm",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "subUint",
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "addUint(bytes32,uint256)": "adb353dc",
        "confirmGuardian()": "1e0ea61e",
        "confirmWithdrawalAddress(address)": "bd439126",
        "deleteAddress(bytes32)": "0e14a376",
        "deleteBool(bytes32)": "2c62ff2d",
        "deleteBytes(bytes32)": "616b59f6",
        "deleteBytes32(bytes32)": "0b9adc57",
        "deleteInt(bytes32)": "8c160095",
        "deleteString(bytes32)": "f6bb3cc4",
        "deleteUint(bytes32)": "e2b202bf",
        "getAddress(bytes32)": "21f8a721",
        "getBool(bytes32)": "7ae1cfca",
        "getBytes(bytes32)": "c031a180",
        "getBytes32(bytes32)": "a6ed563e",
        "getDeployedStatus()": "1bed5241",
        "getGuardian()": "a75b87d2",
        "getInt(bytes32)": "dc97d962",
        "getNodePendingWithdrawalAddress(address)": "fd412513",
        "getNodeWithdrawalAddress(address)": "5b49ff62",
        "getString(bytes32)": "986e791a",
        "getUint(bytes32)": "bd02d0f5",
        "setAddress(bytes32,address)": "ca446dd9",
        "setBool(bytes32,bool)": "abfdcced",
        "setBytes(bytes32,bytes)": "2e28d084",
        "setBytes32(bytes32,bytes32)": "4e91db08",
        "setGuardian(address)": "8a0dac4a",
        "setInt(bytes32,int256)": "3e49bed0",
        "setString(bytes32,string)": "6e899550",
        "setUint(bytes32,uint256)": "e2a4853a",
        "setWithdrawalAddress(address,address,bool)": "a543ccea",
        "subUint(bytes32,uint256)": "ebb9d8c9"
    }
};
