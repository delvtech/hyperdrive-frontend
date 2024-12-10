export const IACLManager = {
    abi: [
        {
            "type": "function",
            "name": "ADDRESSES_PROVIDER",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IPoolAddressesProvider"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ASSET_LISTING_ADMIN_ROLE",
            "inputs": [],
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
            "name": "BRIDGE_ROLE",
            "inputs": [],
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
            "name": "EMERGENCY_ADMIN_ROLE",
            "inputs": [],
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
            "name": "FLASH_BORROWER_ROLE",
            "inputs": [],
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
            "name": "POOL_ADMIN_ROLE",
            "inputs": [],
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
            "name": "RISK_ADMIN_ROLE",
            "inputs": [],
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
            "name": "addAssetListingAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addBridge",
            "inputs": [
                {
                    "name": "bridge",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addEmergencyAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addFlashBorrower",
            "inputs": [
                {
                    "name": "borrower",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addPoolAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addRiskAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isAssetListingAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
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
            "name": "isBridge",
            "inputs": [
                {
                    "name": "bridge",
                    "type": "address",
                    "internalType": "address"
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
            "name": "isEmergencyAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
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
            "name": "isFlashBorrower",
            "inputs": [
                {
                    "name": "borrower",
                    "type": "address",
                    "internalType": "address"
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
            "name": "isPoolAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
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
            "name": "isRiskAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
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
            "name": "removeAssetListingAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeBridge",
            "inputs": [
                {
                    "name": "bridge",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeEmergencyAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeFlashBorrower",
            "inputs": [
                {
                    "name": "borrower",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removePoolAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeRiskAdmin",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRoleAdmin",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "adminRole",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "ADDRESSES_PROVIDER()": "0542975c",
        "ASSET_LISTING_ADMIN_ROLE()": "78bb0a43",
        "BRIDGE_ROLE()": "b5bfddea",
        "EMERGENCY_ADMIN_ROLE()": "6e76fc8f",
        "FLASH_BORROWER_ROLE()": "5577b7a9",
        "POOL_ADMIN_ROLE()": "b8f6dba7",
        "RISK_ADMIN_ROLE()": "4f16b425",
        "addAssetListingAdmin(address)": "9a2b96f7",
        "addBridge(address)": "9712fdf8",
        "addEmergencyAdmin(address)": "179efb09",
        "addFlashBorrower(address)": "9ac9d80b",
        "addPoolAdmin(address)": "22650caf",
        "addRiskAdmin(address)": "5b9a94e4",
        "isAssetListingAdmin(address)": "13ee32e0",
        "isBridge(address)": "726600ce",
        "isEmergencyAdmin(address)": "2500f2b6",
        "isFlashBorrower(address)": "fa50f297",
        "isPoolAdmin(address)": "7be53ca1",
        "isRiskAdmin(address)": "674b5e4d",
        "removeAssetListingAdmin(address)": "a21bce15",
        "removeBridge(address)": "04df017d",
        "removeEmergencyAdmin(address)": "7a9a93f4",
        "removeFlashBorrower(address)": "253cf980",
        "removePoolAdmin(address)": "f83695cb",
        "removeRiskAdmin(address)": "3c5a08e5",
        "setRoleAdmin(bytes32,bytes32)": "1e4e0091"
    }
};
