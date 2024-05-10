export const IRocketNetworkBalances = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_block",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_stakingEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rethSupply",
                    "type": "uint256"
                }
            ],
            "name": "executeUpdateBalances",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalancesBlock",
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
            "inputs": [],
            "name": "getETHUtilizationRate",
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
            "inputs": [],
            "name": "getLatestReportableBlock",
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
            "inputs": [],
            "name": "getStakingETHBalance",
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
            "inputs": [],
            "name": "getTotalETHBalance",
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
            "inputs": [],
            "name": "getTotalRETHSupply",
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
                    "internalType": "uint256",
                    "name": "_block",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_total",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_staking",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rethSupply",
                    "type": "uint256"
                }
            ],
            "name": "submitBalances",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "executeUpdateBalances(uint256,uint256,uint256,uint256)": "56ff3625",
        "getBalancesBlock()": "9100c13d",
        "getETHUtilizationRate()": "9dba66af",
        "getLatestReportableBlock()": "a9bb16ed",
        "getStakingETHBalance()": "f1eda634",
        "getTotalETHBalance()": "964d042c",
        "getTotalRETHSupply()": "c4c8d0ad",
        "submitBalances(uint256,uint256,uint256,uint256)": "32db5470"
    }
};
