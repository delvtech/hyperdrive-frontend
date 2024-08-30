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
    bytecode: '0x608060405234801561001057600080fd5b5060405161054938038061054983398101604081905261002f91610143565b600080546001600160a01b038088166001600160a01b03199283161790925560018054878416908316179055600280548684169083161790556003805492851692909116919091179055805161008c906004906020840190610097565b50505050505061024d565b8280548282559060005260206000209081019282156100ec579160200282015b828111156100ec57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906100b7565b506100f89291506100fc565b5090565b5b808211156100f857600081556001016100fd565b80516001600160a01b038116811461012857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a0868803121561015b57600080fd5b61016486610111565b94506020610173818801610111565b945061018160408801610111565b935061018f60608801610111565b60808801519093506001600160401b03808211156101ac57600080fd5b818901915089601f8301126101c057600080fd5b8151818111156101d2576101d261012d565b8060051b604051601f19603f830116810181811085821117156101f7576101f761012d565b60405291825284820192508381018501918c83111561021557600080fd5b938501935b8285101561023a5761022b85610111565b8452938501939285019261021a565b8096505050505050509295509295909350565b6102ed8061025c6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063c415b95c11610066578063c415b95c1461013f578063d2c35ce814610152578063dd2b8fbb14610182578063e3331555146101b2578063f2596458146101c557600080fd5b806310780f73146100985780633e2d2014146100c85780638627a4f0146100fa578063a64c90bf1461012a575b600080fd5b6002546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100f86100d636600461023a565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b005b6100f861010836600461023a565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6101326101d8565b6040516100bf919061026a565b6001546100ab906001600160a01b031681565b6100f861016036600461023a565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6100f861019036600461023a565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546100ab906001600160a01b031681565b6003546100ab906001600160a01b031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561023057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610212575b5050505050905090565b60006020828403121561024c57600080fd5b81356001600160a01b038116811461026357600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156102ab5783516001600160a01b031683529284019291840191600101610286565b5090969550505050505056fea2646970667358221220c4fcaf6ffeb1da81cb4a04af2c109936fc9a513f4e30b32f3461a6fb61653d7d64736f6c63430008160033',
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
