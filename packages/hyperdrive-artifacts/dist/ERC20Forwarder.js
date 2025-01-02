export const ERC20Forwarder = {
    abi: [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "PERMIT_TYPEHASH",
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
            "name": "allowance",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
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
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "who",
                    "type": "address",
                    "internalType": "address"
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
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "domainSeparator",
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
            "name": "kind",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "nonce",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "token",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IMultiToken"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenId",
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
            "name": "totalSupply",
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
            "name": "transfer",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "source",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "recipient",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "version",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ExpiredDeadline",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSignature",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RestrictedZeroAddress",
            "inputs": []
        }
    ],
    bytecode: '0x60c060405234801561000f575f80fd5b50604080516330075a5d60e11b815281513392839263600eb4ba92600480830193928290030181865afa158015610048573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061006c9190610081565b60a0526001600160a01b0316608052506100b8565b5f8060408385031215610092575f80fd5b82516001600160a01b03811681146100a8575f80fd5b6020939093015192949293505050565b60805160a051610fb661015e5f395f818161017d015281816102ee0152818161039e015281816104960152818161053e0152818161064a015281816106fc0152818161076b01528181610a250152610bc401525f81816102a601528181610317015281816103e3015281816104be0152818161058b0152818161068201528181610725015281816107ba01528181610a6201528181610b3d0152610c020152610fb65ff3fe608060405234801561000f575f80fd5b5060043610610106575f3560e01c806354fd4d501161009e578063a9059cbb1161006e578063a9059cbb1461025e578063d505accf14610271578063dd62ed3e14610286578063f698da2514610299578063fc0c546a146102a1575f80fd5b806354fd4d50146101fe57806370a08231146102245780637ecebe001461023757806395d89b4114610256575f80fd5b806318160ddd116100d957806318160ddd146101ad57806323b872dd146101b557806330adf81f146101c8578063313ce567146101ef575f80fd5b806304baa00b1461010a57806306fdde031461014d578063095ea7b31461015557806317d70f7c14610178575b5f80fd5b6101376040518060400160405280600e81526020016d22a92199182337b93bb0b93232b960911b81525081565b6040516101449190610d22565b60405180910390f35b6101376102e0565b610168610163366004610d6f565b61038f565b6040519015158152602001610144565b61019f7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610144565b61019f610487565b6101686101c3366004610d97565b61052f565b61019f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60405160128152602001610144565b61013760405180604001604052806007815260200166076312e302e32360cc1b81525081565b61019f610232366004610dd0565b61063b565b61019f610245366004610dd0565b5f6020819052908152604090205481565b6101376106ed565b61016861026c366004610d6f565b61075c565b61028461027f366004610df0565b610850565b005b61019f610294366004610e5d565b610b14565b61019f610c72565b6102c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610144565b604051622b600360e21b81527f000000000000000000000000000000000000000000000000000000000000000060048201526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169062ad800c906024015b5f60405180830381865afa158015610363573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261038a9190810190610ea2565b905090565b6040516313b4b5ab60e21b81527f000000000000000000000000000000000000000000000000000000000000000060048201526001600160a01b038381166024830152604482018390523360648301525f917f000000000000000000000000000000000000000000000000000000000000000090911690634ed2d6ac906084015f604051808303815f87803b158015610426575f80fd5b505af1158015610438573d5f803e3d5ffd5b50506040518481526001600160a01b03861692503391507f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906020015b60405180910390a35060015b92915050565b60405163bd85b03960e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063bd85b03990602401602060405180830381865afa15801561050b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038a9190610f4a565b604051633912022f60e21b81527f000000000000000000000000000000000000000000000000000000000000000060048201526001600160a01b0384811660248301528381166044830152606482018390523360848301525f917f00000000000000000000000000000000000000000000000000000000000000009091169063e44808bc9060a4015f604051808303815f87803b1580156105ce575f80fd5b505af11580156105e0573d5f803e3d5ffd5b50505050826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161062991815260200190565b60405180910390a35060019392505050565b604051631b2b776160e11b81527f000000000000000000000000000000000000000000000000000000000000000060048201526001600160a01b0382811660248301525f917f000000000000000000000000000000000000000000000000000000000000000090911690633656eec290604401602060405180830381865afa1580156106c9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104819190610f4a565b604051634e41a1fb60e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634e41a1fb90602401610349565b604051633912022f60e21b81527f0000000000000000000000000000000000000000000000000000000000000000600482015233602482018190526001600160a01b0384811660448401526064830184905260848301919091525f917f00000000000000000000000000000000000000000000000000000000000000009091169063e44808bc9060a4015f604051808303815f87803b1580156107fd575f80fd5b505af115801561080f573d5f803e3d5ffd5b50506040518481526001600160a01b03861692503391507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610475565b834211156108715760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166108985760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387165f90815260208190526040812054906108b9610c72565b604080517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960208201526001600160a01b03808d1692820192909252908a1660608201526080810189905260a0810184905260c0810188905260e0016040516020818303038152906040528051906020012060405160200161095292919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201205f80855291840180845281905260ff89169284019290925260608301879052608083018690529092509060019060a0016020604051602081039080840390855afa1580156109ba573d5f803e3d5ffd5b505050602060405103519050896001600160a01b0316816001600160a01b0316146109f857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03808b165f8181526020819052604090819020600187019055516313b4b5ab60e21b81527f000000000000000000000000000000000000000000000000000000000000000060048201528b83166024820152604481018b905260648101919091527f000000000000000000000000000000000000000000000000000000000000000090911690634ed2d6ac906084015f604051808303815f87803b158015610aa5575f80fd5b505af1158015610ab7573d5f803e3d5ffd5b50505050886001600160a01b03168a6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258a604051610b0091815260200190565b60405180910390a350505050505050505050565b60405163e985e9c560e01b81526001600160a01b03838116600483015282811660248301525f917f00000000000000000000000000000000000000000000000000000000000000009091169063e985e9c590604401602060405180830381865afa158015610b84573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ba89190610f61565b15610bb557505f19610481565b6040516321ff32a960e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201526001600160a01b03848116602483015283811660448301527f000000000000000000000000000000000000000000000000000000000000000016906321ff32a990606401602060405180830381865afa158015610c47573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c6b9190610f4a565b9050610481565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b5f5b83811015610d1a578181015183820152602001610d02565b50505f910152565b602081525f8251806020840152610d40816040850160208701610d00565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610d6a575f80fd5b919050565b5f8060408385031215610d80575f80fd5b610d8983610d54565b946020939093013593505050565b5f805f60608486031215610da9575f80fd5b610db284610d54565b9250610dc060208501610d54565b9150604084013590509250925092565b5f60208284031215610de0575f80fd5b610de982610d54565b9392505050565b5f805f805f805f60e0888a031215610e06575f80fd5b610e0f88610d54565b9650610e1d60208901610d54565b95506040880135945060608801359350608088013560ff81168114610e40575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f8060408385031215610e6e575f80fd5b610e7783610d54565b9150610e8560208401610d54565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215610eb2575f80fd5b815167ffffffffffffffff80821115610ec9575f80fd5b818401915084601f830112610edc575f80fd5b815181811115610eee57610eee610e8e565b604051601f8201601f19908116603f01168101908382118183101715610f1657610f16610e8e565b81604052828152876020848701011115610f2e575f80fd5b610f3f836020830160208801610d00565b979650505050505050565b5f60208284031215610f5a575f80fd5b5051919050565b5f60208284031215610f71575f80fd5b81518015158114610de9575f80fdfea26469706673582212200d9ff63d4b9e6f153a8da56e582ec74e539c3879a5e3c4f8f56c9f90c231510f64736f6c63430008160033',
    methodIdentifiers: {
        "PERMIT_TYPEHASH()": "30adf81f",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "domainSeparator()": "f698da25",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "symbol()": "95d89b41",
        "token()": "fc0c546a",
        "tokenId()": "17d70f7c",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "version()": "54fd4d50"
    }
};
