export const HyperdriveCheckpointRewarder = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_subrewarder",
                    "type": "address",
                    "internalType": "contract IHyperdriveCheckpointSubrewarder"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "admin",
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
            "name": "claimCheckpointReward",
            "inputs": [
                {
                    "name": "_claimant",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_isTrader",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "subrewarder",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IHyperdriveCheckpointSubrewarder"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "updateAdmin",
            "inputs": [
                {
                    "name": "_admin",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateSubrewarder",
            "inputs": [
                {
                    "name": "_subrewarder",
                    "type": "address",
                    "internalType": "contract IHyperdriveCheckpointSubrewarder"
                }
            ],
            "outputs": [],
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
            "name": "AdminUpdated",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CheckpointRewardClaimed",
            "inputs": [
                {
                    "name": "instance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "claimant",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "isTrader",
                    "type": "bool",
                    "indexed": true,
                    "internalType": "bool"
                },
                {
                    "name": "checkpointTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "rewardToken",
                    "type": "address",
                    "indexed": false,
                    "internalType": "contract IERC20"
                },
                {
                    "name": "rewardAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SubrewarderUpdated",
            "inputs": [
                {
                    "name": "subrewarder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "contract IHyperdriveCheckpointSubrewarder"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b5060405161082b38038061082b83398101604081905261002f9161009e565b60018054336001600160a01b031991821617909155600280549091166001600160a01b03831617905560006100648382610203565b5050506102c2565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461009957600080fd5b919050565b600080604083850312156100b157600080fd5b82516001600160401b03808211156100c857600080fd5b818501915085601f8301126100dc57600080fd5b8151818111156100ee576100ee61006c565b604051601f8201601f19908116603f011681019083821181831017156101165761011661006c565b8160405282815260209350888484870101111561013257600080fd5b600091505b828210156101545784820184015181830185015290830190610137565b600084848301015280965050505061016d818601610082565b925050509250929050565b600181811c9082168061018c57607f821691505b6020821081036101ac57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101fe576000816000526020600020601f850160051c810160208610156101db5750805b601f850160051c820191505b818110156101fa578281556001016101e7565b5050505b505050565b81516001600160401b0381111561021c5761021c61006c565b6102308161022a8454610178565b846101b2565b602080601f831160018114610265576000841561024d5750858301515b600019600386901b1c1916600185901b1785556101fa565b600085815260208120601f198616915b8281101561029457888601518255948401946001909101908401610275565b50858210156102b25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61055a806102d16000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806369114d4e1161005b57806369114d4e146101385780639b06ae491461014d578063e2f273bd14610160578063f851a4401461017357600080fd5b806304baa00b1461008d57806306fdde03146100df5780633d7f7b24146100e757806354fd4d5014610112575b600080fd5b6100c96040518060400160405280601c81526020017f48797065726472697665436865636b706f696e7452657761726465720000000081525081565b6040516100d691906103ea565b60405180910390f35b6100c9610186565b6002546100fa906001600160a01b031681565b6040516001600160a01b0390911681526020016100d6565b6100c9604051806040016040528060078152602001660ec625c605c62760cb1b81525081565b61014b610146366004610451565b610214565b005b61014b61015b366004610498565b610302565b61014b61016e366004610498565b610376565b6001546100fa906001600160a01b031681565b60008054610193906104bc565b80601f01602080910402602001604051908101604052809291908181526020018280546101bf906104bc565b801561020c5780601f106101e15761010080835404028352916020019161020c565b820191906000526020600020905b8154815290600101906020018083116101ef57829003601f168201915b505050505081565b60025460405163e9f4604160e01b81523360048201526001600160a01b038581166024830152604482018590528315156064830152600092839291169063e9f460419060840160408051808303816000875af1158015610278573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029c91906104f6565b909250905080156102fb57604080518581526001600160a01b0384811660208301529181018390528415159187169033907f458cb4864d237cf3ef21835340aeec96759e685bd06793180e8cf7a7cd69cd5e9060600160405180910390a45b5050505050565b6001546001600160a01b0316331461032c576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f4a847489062ccada272e291a747bfecff5d74ded500da0a156faca0bd8394dc690600090a250565b6001546001600160a01b031633146103a0576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d90600090a250565b60006020808352835180602085015260005b81811015610418578581018301518582016040015282016103fc565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461044e57600080fd5b50565b60008060006060848603121561046657600080fd5b833561047181610439565b9250602084013591506040840135801515811461048d57600080fd5b809150509250925092565b6000602082840312156104aa57600080fd5b81356104b581610439565b9392505050565b600181811c908216806104d057607f821691505b6020821081036104f057634e487b7160e01b600052602260045260246000fd5b50919050565b6000806040838503121561050957600080fd5b825161051481610439565b602093909301519294929350505056fea2646970667358221220c13993ca9b663f395802a212cc691ff0cf08e9814999ea655a6308636676036264736f6c63430008160033',
    methodIdentifiers: {
        "admin()": "f851a440",
        "claimCheckpointReward(address,uint256,bool)": "69114d4e",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "subrewarder()": "3d7f7b24",
        "updateAdmin(address)": "e2f273bd",
        "updateSubrewarder(address)": "9b06ae49",
        "version()": "54fd4d50"
    }
};
