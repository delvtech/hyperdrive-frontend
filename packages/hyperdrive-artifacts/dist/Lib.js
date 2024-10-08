export const Lib = {
    abi: [
        {
            "type": "function",
            "name": "eq",
            "inputs": [
                {
                    "name": "b1",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "b2",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "eq",
            "inputs": [
                {
                    "name": "b1",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "b2",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "eq",
            "inputs": [
                {
                    "name": "b1",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "b2",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "neq",
            "inputs": [
                {
                    "name": "b1",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "b2",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        }
    ],
    bytecode: '0x61047961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c806321a496421461005b578063a63c847814610082578063cdb168401461005b578063d37a20ba14610095575b600080fd5b61006e610069366004610270565b6100a8565b604051901515815260200160405180910390f35b61006e61009036600461036a565b61010d565b61006e6100a3366004610270565b610153565b6000815183511480156101065750816040516020016100c791906103e8565b60405160208183030381529060405280519060200120836040516020016100ee91906103e8565b60405160208183030381529060405280519060200120145b9392505050565b60008151835114801561010657508160405160200161012c9190610404565b60405160208183030381529060405280519060200120836040516020016100ee9190610404565b60008151835114158061010657508160405160200161017291906103e8565b604051602081830303815290604052805190602001208360405160200161019991906103e8565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156101f8576101f86101b9565b604052919050565b600082601f83011261021157600080fd5b813567ffffffffffffffff81111561022b5761022b6101b9565b61023e601f8201601f19166020016101cf565b81815284602083860101111561025357600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561028357600080fd5b823567ffffffffffffffff8082111561029b57600080fd5b6102a786838701610200565b935060208501359150808211156102bd57600080fd5b506102ca85828601610200565b9150509250929050565b600082601f8301126102e557600080fd5b8135602067ffffffffffffffff821115610301576103016101b9565b8160051b6103108282016101cf565b928352848101820192828101908785111561032a57600080fd5b83870192505b8483101561035f5782356001600160a01b03811681146103505760008081fd5b82529183019190830190610330565b979650505050505050565b6000806040838503121561037d57600080fd5b823567ffffffffffffffff8082111561039557600080fd5b6103a1868387016102d4565b935060208501359150808211156103b757600080fd5b506102ca858286016102d4565b60005b838110156103df5781810151838201526020016103c7565b50506000910152565b600082516103fa8184602087016103c4565b9190910192915050565b815160009082906020808601845b838110156104375781516001600160a01b031685529382019390820190600101610412565b5092969550505050505056fea2646970667358221220644fb1f639f8df54f7c28463fbdbc1655739b3c0ee3a4b08449e7138d429304b64736f6c63430008160033',
    methodIdentifiers: {
        "eq(address[],address[])": "a63c8478",
        "eq(bytes,bytes)": "cdb16840",
        "eq(string,string)": "21a49642",
        "neq(bytes,bytes)": "d37a20ba"
    }
};
