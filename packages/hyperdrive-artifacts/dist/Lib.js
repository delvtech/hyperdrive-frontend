export const Lib = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "b1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "b2",
                    "type": "string"
                }
            ],
            "name": "eq",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "b1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "b2",
                    "type": "bytes"
                }
            ],
            "name": "eq",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "b1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "b2",
                    "type": "bytes"
                }
            ],
            "name": "neq",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    bytecode: '0x6102d261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806321a4964214610050578063cdb1684014610050578063d37a20ba14610077575b600080fd5b61006361005e3660046101f8565b61008a565b604051901515815260200160405180910390f35b6100636100853660046101f8565b6100ef565b6000815183511480156100e85750816040516020016100a99190610280565b60405160208183030381529060405280519060200120836040516020016100d09190610280565b60405160208183030381529060405280519060200120145b9392505050565b6000815183511415806100e857508160405160200161010e9190610280565b60405160208183030381529060405280519060200120836040516020016101359190610280565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261017c57600080fd5b813567ffffffffffffffff8082111561019757610197610155565b604051601f8301601f19908116603f011681019082821181831017156101bf576101bf610155565b816040528381528660208588010111156101d857600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561020b57600080fd5b823567ffffffffffffffff8082111561022357600080fd5b61022f8683870161016b565b9350602085013591508082111561024557600080fd5b506102528582860161016b565b9150509250929050565b60005b8381101561027757818101518382015260200161025f565b50506000910152565b6000825161029281846020870161025c565b919091019291505056fea2646970667358221220d1c3d30d64830beb4ea4df9abeb9558a6b3d1b073dfc74b6b7a6f5b1c066ef2264736f6c63430008140033',
    methodIdentifiers: {
        "eq(bytes,bytes)": "cdb16840",
        "eq(string,string)": "21a49642",
        "neq(bytes,bytes)": "d37a20ba"
    }
};
