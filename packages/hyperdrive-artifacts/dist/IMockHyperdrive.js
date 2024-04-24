export const IMockHyperdrive = {
    abi: [
        {
            "type": "function",
            "name": "accrue",
            "inputs": [
                {
                    "name": "time",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "apr",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "calculateTimeRemaining",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "calculateTimeRemainingScaled",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "getGovernanceFeesAccrued",
            "inputs": [],
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
            "name": "latestCheckpoint",
            "inputs": [],
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
            "name": "setReserves",
            "inputs": [
                {
                    "name": "shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateLiquidity",
            "inputs": [
                {
                    "name": "shareReservesDelta",
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
        "accrue(uint256,int256)": "68096239",
        "calculateTimeRemaining(uint256)": "68c2ecb8",
        "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
        "getGovernanceFeesAccrued()": "8e67f87e",
        "latestCheckpoint()": "907c0f92",
        "setReserves(uint256,uint256)": "8392b8c0",
        "updateLiquidity(uint256)": "ced09112"
    }
};
