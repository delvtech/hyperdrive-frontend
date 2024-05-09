export const IRocketStorage = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "addUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "confirmGuardian",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "confirmWithdrawalAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBytes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBytes32",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteInt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteString",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBytes",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBytes32",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDeployedStatus",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getGuardian",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getInt",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "getNodePendingWithdrawalAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "getNodeWithdrawalAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getString",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getUint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_value",
                    "type": "address"
                }
            ],
            "name": "setAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bool",
                    "name": "_value",
                    "type": "bool"
                }
            ],
            "name": "setBool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "_value",
                    "type": "bytes"
                }
            ],
            "name": "setBytes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_value",
                    "type": "bytes32"
                }
            ],
            "name": "setBytes32",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newAddress",
                    "type": "address"
                }
            ],
            "name": "setGuardian",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "int256",
                    "name": "_value",
                    "type": "int256"
                }
            ],
            "name": "setInt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_value",
                    "type": "string"
                }
            ],
            "name": "setString",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_newWithdrawalAddress",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_confirm",
                    "type": "bool"
                }
            ],
            "name": "setWithdrawalAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "subUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
