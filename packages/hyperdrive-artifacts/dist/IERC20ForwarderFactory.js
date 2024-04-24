export const IERC20ForwarderFactory = {
    abi: [
        {
            "type": "function",
            "name": "ERC20LINK_HASH",
            "inputs": [],
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
            "name": "create",
            "inputs": [
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "contract IMultiToken"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20Forwarder"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getDeployDetails",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IMultiToken"
                },
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
            "name": "getForwarder",
            "inputs": [
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "contract IMultiToken"
                },
                {
                    "name": "_tokenId",
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
            "stateMutability": "view"
        },
        {
            "type": "error",
            "name": "InvalidForwarderAddress",
            "inputs": []
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "ERC20LINK_HASH()": "d13053bb",
        "create(address,uint256)": "0ecaea73",
        "getDeployDetails()": "600eb4ba",
        "getForwarder(address,uint256)": "0710fd58"
    }
};
