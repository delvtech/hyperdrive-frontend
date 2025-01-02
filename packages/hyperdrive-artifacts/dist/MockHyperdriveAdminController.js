export const MockHyperdriveAdminController = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_hyperdriveGovernance",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_feeCollector",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_sweepCollector",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_checkpointRewarder",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "__defaultPausers",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "checkpointRewarder",
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
            "name": "defaultPausers",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "feeCollector",
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
            "name": "hyperdriveGovernance",
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
            "name": "sweepCollector",
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
            "name": "updateCheckpointRewarder",
            "inputs": [
                {
                    "name": "_checkpointRewarder",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateFeeCollector",
            "inputs": [
                {
                    "name": "_feeCollector",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateHyperdriveGovernance",
            "inputs": [
                {
                    "name": "_hyperdriveGovernance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateSweepCollector",
            "inputs": [
                {
                    "name": "_sweepCollector",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x608060405234801561000f575f80fd5b5060405161052c38038061052c83398101604081905261002e9161013b565b5f80546001600160a01b038088166001600160a01b03199283161790925560018054878416908316179055600280548684169083161790556003805492851692909116919091179055805161008a906004906020840190610095565b50505050505061023e565b828054828255905f5260205f209081019282156100e8579160200282015b828111156100e857825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906100b3565b506100f49291506100f8565b5090565b5b808211156100f4575f81556001016100f9565b80516001600160a01b0381168114610122575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f805f805f60a0868803121561014f575f80fd5b6101588661010c565b9450602061016781880161010c565b94506101756040880161010c565b93506101836060880161010c565b60808801519093506001600160401b038082111561019f575f80fd5b818901915089601f8301126101b2575f80fd5b8151818111156101c4576101c4610127565b8060051b604051601f19603f830116810181811085821117156101e9576101e9610127565b60405291825284820192508381018501918c831115610206575f80fd5b938501935b8285101561022b5761021c8561010c565b8452938501939285019261020b565b8096505050505050509295509295909350565b6102e18061024b5f395ff3fe608060405234801561000f575f80fd5b5060043610610090575f3560e01c8063c415b95c11610063578063c415b95c1461013b578063d2c35ce81461014e578063dd2b8fbb1461017e578063e3331555146101ad578063f2596458146101bf575f80fd5b806310780f73146100945780633e2d2014146100c45780638627a4f0146100f6578063a64c90bf14610126575b5f80fd5b6002546100a7906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100f46100d2366004610232565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b005b6100f4610104366004610232565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61012e6101d2565b6040516100bb919061025f565b6001546100a7906001600160a01b031681565b6100f461015c366004610232565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6100f461018c366004610232565b5f80546001600160a01b0319166001600160a01b0392909216919091179055565b5f546100a7906001600160a01b031681565b6003546100a7906001600160a01b031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561022857602002820191905f5260205f20905b81546001600160a01b0316815260019091019060200180831161020a575b5050505050905090565b5f60208284031215610242575f80fd5b81356001600160a01b0381168114610258575f80fd5b9392505050565b602080825282518282018190525f9190848201906040850190845b8181101561029f5783516001600160a01b03168352928401929184019160010161027a565b5090969550505050505056fea2646970667358221220ecebc112f559d4259664259f658bf0e8ed76476292be39978b092c6551ce150a64736f6c63430008160033',
    methodIdentifiers: {
        "checkpointRewarder()": "f2596458",
        "defaultPausers()": "a64c90bf",
        "feeCollector()": "c415b95c",
        "hyperdriveGovernance()": "e3331555",
        "sweepCollector()": "10780f73",
        "updateCheckpointRewarder(address)": "3e2d2014",
        "updateFeeCollector(address)": "d2c35ce8",
        "updateHyperdriveGovernance(address)": "dd2b8fbb",
        "updateSweepCollector(address)": "8627a4f0"
    }
};
