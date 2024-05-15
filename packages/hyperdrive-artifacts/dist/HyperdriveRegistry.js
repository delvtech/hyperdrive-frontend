export const HyperdriveRegistry = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "governance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "hyperdrive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                }
            ],
            "name": "HyperdriveInfoUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                }
            ],
            "name": "getHyperdriveInfo",
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
            "name": "governance",
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
            "inputs": [],
            "name": "name",
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
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_data",
                    "type": "uint256"
                }
            ],
            "name": "setHyperdriveInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                }
            ],
            "name": "updateGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b5060405161066938038061066983398101604081905261002f9161006a565b600180546001600160a01b03191633179055600061004d82826101bc565b505061027b565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561007d57600080fd5b82516001600160401b038082111561009457600080fd5b818501915085601f8301126100a857600080fd5b8151818111156100ba576100ba610054565b604051601f8201601f19908116603f011681019083821181831017156100e2576100e2610054565b8160405282815288868487010111156100fa57600080fd5b600093505b8284101561011c57848401860151818501870152928501926100ff565b600086848301015280965050505050505092915050565b600181811c9082168061014757607f821691505b60208210810361016757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101b757600081815260208120601f850160051c810160208610156101945750805b601f850160051c820191505b818110156101b3578281556001016101a0565b5050505b505050565b81516001600160401b038111156101d5576101d5610054565b6101e9816101e38454610133565b8461016d565b602080601f83116001811461021e57600084156102065750858301515b600019600386901b1c1916600185901b1785556101b3565b600085815260208120601f198616915b8281101561024d5788860151825594840194600190910190840161022e565b508582101561026b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6103df8061028a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806332ddcb881461008557806354fd4d50146100bc5780635aa6e675146100e1578063b25612631461010c578063be44e71a14610121575b600080fd5b61006f610134565b60405161007c91906102b9565b60405180910390f35b6100ae610093366004610323565b6001600160a01b031660009081526002602052604090205490565b60405190815260200161007c565b61006f604051806040016040528060068152602001653b189718171b60d11b81525081565b6001546100f4906001600160a01b031681565b6040516001600160a01b03909116815260200161007c565b61011f61011a366004610323565b6101c2565b005b61011f61012f366004610345565b610236565b600080546101419061036f565b80601f016020809104026020016040519081016040528092919081815260200182805461016d9061036f565b80156101ba5780601f1061018f576101008083540402835291602001916101ba565b820191906000526020600020905b81548152906001019060200180831161019d57829003601f168201915b505050505081565b6001546001600160a01b031633146101ec576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6001546001600160a01b03163314610260576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526002602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906102ad9084815260200190565b60405180910390a25050565b600060208083528351808285015260005b818110156102e6578581018301518582016040015282016102ca565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461031e57600080fd5b919050565b60006020828403121561033557600080fd5b61033e82610307565b9392505050565b6000806040838503121561035857600080fd5b61036183610307565b946020939093013593505050565b600181811c9082168061038357607f821691505b6020821081036103a357634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b4910f7c755460a2d644cbfb949cf3dd62f2ba26beeac197ea02fcd953d0df1164736f6c63430008140033',
    methodIdentifiers: {
        "getHyperdriveInfo(address)": "32ddcb88",
        "governance()": "5aa6e675",
        "name()": "06fdde03",
        "setHyperdriveInfo(address,uint256)": "be44e71a",
        "updateGovernance(address)": "b2561263",
        "version()": "54fd4d50"
    }
};
