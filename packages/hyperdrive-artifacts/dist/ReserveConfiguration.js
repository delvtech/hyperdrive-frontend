export const ReserveConfiguration = {
    abi: [
        {
            "type": "function",
            "name": "DEBT_CEILING_DECIMALS",
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
            "name": "MAX_RESERVES_COUNT",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint16",
                    "internalType": "uint16"
                }
            ],
            "stateMutability": "view"
        }
    ],
    bytecode: '0x60a9610033600b8282823980515f1a607314602757634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603c575f3560e01c8063280d5de914604057806331b561ba14605a575b5f80fd5b6047600281565b6040519081526020015b60405180910390f35b6061608081565b60405161ffff9091168152602001605156fea2646970667358221220185f218523f10c6fc06eb406e7f6b85117d140bb33652bc3edf7f783969ccb1b64736f6c63430008160033',
    methodIdentifiers: {
        "DEBT_CEILING_DECIMALS()": "280d5de9",
        "MAX_RESERVES_COUNT()": "31b561ba"
    }
};
