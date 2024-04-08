export declare const IMockMultiToken: {
    readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "__external_transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_who";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "__setBalanceOf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "batchTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domainSeparator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "perTokenApprovals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permitForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "setApproval";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "setApprovalBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "transferFromBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a";
        readonly "__setBalanceOf(uint256,address,uint256)": "94a97cdb";
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "burn(uint256,address,uint256)": "9eea5f66";
        readonly "decimals()": "313ce567";
        readonly "domainSeparator()": "f698da25";
        readonly "isApprovedForAll(address,address)": "e985e9c5";
        readonly "mint(uint256,address,uint256)": "836a1040";
        readonly "name(uint256)": "00ad800c";
        readonly "nonces(address)": "7ecebe00";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726";
        readonly "setApproval(uint256,address,uint256)": "9cd241af";
        readonly "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac";
        readonly "setApprovalForAll(address,bool)": "a22cb465";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
        readonly "transferFrom(uint256,address,address,uint256)": "1c0f12b6";
        readonly "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"__external_transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"__setBalanceOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"returns\":{\"_0\":\"The EIP712 permit typehash of the MultiToken.\"}},\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator of the MultiToken.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"Gets the EIP712 permit typehash of the MultiToken.\"},\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"domainSeparator()\":{\"notice\":\"Gets the EIP712 domain separator of the MultiToken.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"DEPRECATED: Don't use this for new tests.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockMultiToken.sol\":\"IMockMultiToken\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec\",\"dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6\",\"dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c\",\"dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0\",\"dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0\",\"dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES\"]},\"contracts/test/MockMultiToken.sol\":{\"keccak256\":\"0xc9b7e896f14f1ce9487faeee729ac6973a6f25fffcede51a5ae23f3230c95bf2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dd69d17e3ce0bb31b79cb36cde618c5a166ea3ed25a37d1372d7e690f33158d\",\"dweb:/ipfs/QmQgDTMECvqYS1QMEGSuPETwH6ii26dZqBC6UUBgzT4Lok\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "ApprovalForAll";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "TransferSingle";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "PERMIT_TYPEHASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "__external_transferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_who";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "__setBalanceOf";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "ids";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "values";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "batchTransferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "burn";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "domainSeparator";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isApprovedForAll";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "perTokenApprovals";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_approved";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "permitForAll";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApproval";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalBridge";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalForAll";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFromBridge";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "PERMIT_TYPEHASH()": {
                        readonly returns: {
                            readonly _0: "The EIP712 permit typehash of the MultiToken.";
                        };
                    };
                    readonly "balanceOf(uint256,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The balance of the owner.";
                        };
                    };
                    readonly "batchTransferFrom(address,address,uint256[],uint256[])": {
                        readonly params: {
                            readonly from: "The source account.";
                            readonly ids: "The array of token ids of the asset to transfer.";
                            readonly to: "The destination account.";
                            readonly values: "The amount of each token to transfer.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The decimals of the MultiToken.";
                        };
                    };
                    readonly "domainSeparator()": {
                        readonly returns: {
                            readonly _0: "The EIP712 domain separator of the MultiToken.";
                        };
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The approval-for-all status of the spender for the owner.";
                        };
                    };
                    readonly "name(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The name of the MultiToken.";
                        };
                    };
                    readonly "nonces(address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The permit nonce of the owner.";
                        };
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The allowance of the spender for the owner.";
                        };
                    };
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly details: "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.";
                        readonly params: {
                            readonly _approved: "A boolean of the approval status to set to.";
                            readonly deadline: "The timestamp which the signature must be submitted by        to be valid.";
                            readonly owner: "The owner of the account which is having the new approval set.";
                            readonly r: "The r component of the ECDSA signature.";
                            readonly s: "The s component of the ECDSA signature.";
                            readonly spender: "The address which will be allowed to spend owner's tokens.";
                            readonly v: "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.";
                        };
                    };
                    readonly "setApproval(uint256,address,uint256)": {
                        readonly params: {
                            readonly amount: "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).";
                            readonly operator: "The address who will be able to use the tokens.";
                            readonly tokenID: "The asset to approve the use of.";
                        };
                    };
                    readonly "setApprovalBridge(uint256,address,uint256,address)": {
                        readonly params: {
                            readonly amount: "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].";
                            readonly caller: "The eth address which called the linking contract.";
                            readonly operator: "The address who will be able to use the tokens.";
                            readonly tokenID: "The asset to approve the use of.";
                        };
                    };
                    readonly "setApprovalForAll(address,bool)": {
                        readonly params: {
                            readonly approved: "True to approve, false to remove approval.";
                            readonly operator: "The eth address which can access the caller's assets.";
                        };
                    };
                    readonly "symbol(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The symbol of the MultiToken.";
                        };
                    };
                    readonly "totalSupply(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The total supply of the MultiToken.";
                        };
                    };
                    readonly "transferFrom(uint256,address,address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of token to move.";
                            readonly from: "The address whose balance will be reduced.";
                            readonly to: "The address whose balance will be increased.";
                            readonly tokenID: "The token identifier.";
                        };
                    };
                    readonly "transferFromBridge(uint256,address,address,uint256,address)": {
                        readonly params: {
                            readonly amount: "The amount of token to move.";
                            readonly caller: "The msg.sender or the caller of the ERC20Forwarder.";
                            readonly from: "The address whose balance will be reduced.";
                            readonly to: "The address whose balance will be increased.";
                            readonly tokenID: "The token identifier.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "PERMIT_TYPEHASH()": {
                        readonly notice: "Gets the EIP712 permit typehash of the MultiToken.";
                    };
                    readonly "balanceOf(uint256,address)": {
                        readonly notice: "Gets the balance of a spender for a sub-token.";
                    };
                    readonly "batchTransferFrom(address,address,uint256[],uint256[])": {
                        readonly notice: "Transfers several assets from one account to another.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the decimals of the MultiToken.";
                    };
                    readonly "domainSeparator()": {
                        readonly notice: "Gets the EIP712 domain separator of the MultiToken.";
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly notice: "Gets the approval-for-all status of a spender on behalf of an         owner.";
                    };
                    readonly "name(uint256)": {
                        readonly notice: "Gets the name of the MultiToken.";
                    };
                    readonly "nonces(address)": {
                        readonly notice: "Gets the permit nonce for an account.";
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly notice: "Gets the allowance of a spender for a sub-token.";
                    };
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly notice: "Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.";
                    };
                    readonly "setApproval(uint256,address,uint256)": {
                        readonly notice: "Allows a user to set an approval for an individual asset with         specific amount.";
                    };
                    readonly "setApprovalBridge(uint256,address,uint256,address)": {
                        readonly notice: "Allows the compatibility linking contract to forward calls to         set asset approvals.";
                    };
                    readonly "setApprovalForAll(address,bool)": {
                        readonly notice: "Allows a user to approve an operator to use all of their assets.";
                    };
                    readonly "symbol(uint256)": {
                        readonly notice: "Gets the symbol of the MultiToken.";
                    };
                    readonly "totalSupply(uint256)": {
                        readonly notice: "Gets the total supply of the MultiToken.";
                    };
                    readonly "transferFrom(uint256,address,address,uint256)": {
                        readonly notice: "Transfers an amount of assets from the source to the destination.";
                    };
                    readonly "transferFromBridge(uint256,address,address,uint256,address)": {
                        readonly notice: "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.";
                    };
                };
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockMultiToken.sol": "IMockMultiToken";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/Hyperdrive.sol": {
                readonly keccak256: "0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4";
                readonly urls: readonly ["bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10", "dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf";
                readonly urls: readonly ["bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec", "dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39";
                readonly urls: readonly ["bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6", "dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78";
                readonly urls: readonly ["bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c", "dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f";
                readonly urls: readonly ["bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0", "dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8";
                readonly urls: readonly ["bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd", "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3";
                readonly urls: readonly ["bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186", "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7";
                readonly urls: readonly ["bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334", "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488";
                readonly urls: readonly ["bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4", "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc";
                readonly urls: readonly ["bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4", "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c";
                readonly urls: readonly ["bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c", "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e";
                readonly urls: readonly ["bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19", "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb";
                readonly urls: readonly ["bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c", "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424";
                readonly urls: readonly ["bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a", "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189";
                readonly urls: readonly ["bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786", "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e";
                readonly urls: readonly ["bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797", "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500";
                readonly urls: readonly ["bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0", "dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockMultiToken.sol": {
                readonly keccak256: "0xc9b7e896f14f1ce9487faeee729ac6973a6f25fffcede51a5ae23f3230c95bf2";
                readonly urls: readonly ["bzz-raw://4dd69d17e3ce0bb31b79cb36cde618c5a166ea3ed25a37d1372d7e690f33158d", "dweb:/ipfs/QmQgDTMECvqYS1QMEGSuPETwH6ii26dZqBC6UUBgzT4Lok"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                readonly keccak256: "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80";
                readonly urls: readonly ["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229", "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                readonly keccak256: "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2";
                readonly urls: readonly ["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850", "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                readonly keccak256: "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386";
                readonly urls: readonly ["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0", "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockMultiToken.sol";
        readonly id: 26896;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [19567];
            readonly HyperdriveMultiToken: readonly [16538];
            readonly HyperdriveStorage: readonly [17734];
            readonly HyperdriveTarget0: readonly [5190];
            readonly IERC20: readonly [9666];
            readonly IHyperdrive: readonly [10351];
            readonly IMockMultiToken: readonly [26556];
            readonly IMultiToken: readonly [11334];
            readonly MockHyperdriveBase: readonly [24803];
            readonly MockHyperdriveTarget0: readonly [25161];
            readonly MockMultiToken: readonly [26895];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8751:140";
        readonly nodes: readonly [{
            readonly id: 26495;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:140";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 26497;
            readonly nodeType: "ImportDirective";
            readonly src: "64:81:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 5191;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26496;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5190;
                    readonly src: "73:17:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26499;
            readonly nodeType: "ImportDirective";
            readonly src: "146:61:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "contracts/src/interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 9667;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26498;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9666;
                    readonly src: "155:6:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26501;
            readonly nodeType: "ImportDirective";
            readonly src: "208:71:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26500;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "217:11:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26503;
            readonly nodeType: "ImportDirective";
            readonly src: "280:71:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "contracts/src/interfaces/IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 11335;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26502;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11334;
                    readonly src: "289:11:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26505;
            readonly nodeType: "ImportDirective";
            readonly src: "352:87:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly file: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 16539;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26504;
                    readonly name: "HyperdriveMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 16538;
                    readonly src: "361:20:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26507;
            readonly nodeType: "ImportDirective";
            readonly src: "440:81:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "contracts/src/internal/HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 17735;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26506;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17734;
                    readonly src: "449:17:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26509;
            readonly nodeType: "ImportDirective";
            readonly src: "522:76:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 19568;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26508;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19567;
                    readonly src: "531:14:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26512;
            readonly nodeType: "ImportDirective";
            readonly src: "599:94:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/MockHyperdrive.sol";
            readonly file: "contracts/test/MockHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 25222;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26510;
                    readonly name: "MockHyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 24803;
                    readonly src: "608:18:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 26511;
                    readonly name: "MockHyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 25161;
                    readonly src: "628:21:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26556;
            readonly nodeType: "ContractDefinition";
            readonly src: "741:480:140";
            readonly nodes: readonly [{
                readonly id: 26524;
                readonly nodeType: "FunctionDefinition";
                readonly src: "788:112:140";
                readonly nodes: readonly [];
                readonly functionSelector: "94a97cdb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "797:14:140";
                readonly parameters: {
                    readonly id: 26522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26517;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "829:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "821:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26516;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "821:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26519;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "855:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "847:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26518;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "847:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26521;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "877:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "869:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26520;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "869:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "811:79:140";
                };
                readonly returnParameters: {
                    readonly id: 26523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "899:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26537;
                readonly nodeType: "FunctionDefinition";
                readonly src: "906:163:140";
                readonly nodes: readonly [];
                readonly functionSelector: "58af4a0a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "915:23:140";
                readonly parameters: {
                    readonly id: 26535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26526;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "956:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "948:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26525;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "948:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26528;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "981:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "973:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26527;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "973:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26530;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1003:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "995:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26529;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "995:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26532;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1023:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "1015:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26531;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1015:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26534;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "1047:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "1039:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26533;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1039:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "938:121:140";
                };
                readonly returnParameters: {
                    readonly id: 26536;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1068:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26546;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1075:68:140";
                readonly nodes: readonly [];
                readonly functionSelector: "836a1040";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "1084:4:140";
                readonly parameters: {
                    readonly id: 26544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26539;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1097:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1089:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26538;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26541;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1114:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1106:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26540;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26543;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1126:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1118:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26542;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1118:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:45:140";
                };
                readonly returnParameters: {
                    readonly id: 26545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1142:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26555;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1149:70:140";
                readonly nodes: readonly [];
                readonly functionSelector: "9eea5f66";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "1158:4:140";
                readonly parameters: {
                    readonly id: 26553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26548;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1171:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1163:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26547;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26550;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1188:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1180:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26549;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1180:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26552;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1202:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1194:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26551;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1194:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1162:47:140";
                };
                readonly returnParameters: {
                    readonly id: 26554;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1218:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 26514;
                    readonly name: "IMultiToken";
                    readonly nameLocations: readonly ["770:11:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11334;
                    readonly src: "770:11:140";
                };
                readonly id: 26515;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "770:11:140";
            }];
            readonly canonicalName: "IMockMultiToken";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 26513;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "695:46:140";
                readonly text: "DEPRECATED: Don't use this for new tests.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [26556, 11334, 11474, 11425, 11547, 11459];
            readonly name: "IMockMultiToken";
            readonly nameLocation: "751:15:140";
            readonly scope: 26896;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [11440, 11449, 11458];
        }, {
            readonly id: 26895;
            readonly nodeType: "ContractDefinition";
            readonly src: "1223:7566:140";
            readonly nodes: readonly [{
                readonly id: 26562;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1297:34:140";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "target0";
                readonly nameLocation: "1324:7:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 26561;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1297:7:140";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26568;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1421:174:140";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly documentation: {
                    readonly id: 26563;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1338:78:140";
                    readonly text: "@notice The typehash used to calculate the EIP712 hash for `permitForAll`.";
                };
                readonly functionSelector: "30adf81f";
                readonly mutability: "constant";
                readonly name: "PERMIT_TYPEHASH";
                readonly nameLocation: "1445:15:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 26564;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1421:7:140";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529";
                        readonly id: 26566;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1494:91:140";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        };
                        readonly value: "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)";
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        }];
                        readonly id: 26565;
                        readonly name: "keccak256";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: -8;
                        readonly src: "1471:9:140";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                        };
                    };
                    readonly id: 26567;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "functionCall";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1471:124:140";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 26571;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1659:40:140";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 26569;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1602:52:140";
                    readonly text: "@notice This contract's EIP712 domain separator.";
                };
                readonly functionSelector: "f698da25";
                readonly mutability: "immutable";
                readonly name: "domainSeparator";
                readonly nameLocation: "1684:15:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 26570;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1659:7:140";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 26706;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1749:2898:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26705;
                    readonly nodeType: "Block";
                    readonly src: "2813:1834:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26680;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26626;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26562;
                                readonly src: "2863:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 26637;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3008:1:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 26636;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3000:7:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26635;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3000:7:140";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26638;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3000:10:140";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly id: 26634;
                                                readonly name: "IERC20";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9666;
                                                readonly src: "2993:6:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                                    readonly typeString: "type(contract IERC20)";
                                                };
                                            };
                                            readonly id: 26639;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2993:18:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 26643;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3066:1:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 26642;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3058:7:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26641;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3058:7:140";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26644;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3058:10:140";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly id: 26640;
                                                readonly name: "IERC20";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9666;
                                                readonly src: "3051:6:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                                    readonly typeString: "type(contract IERC20)";
                                                };
                                            };
                                            readonly id: 26645;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3051:18:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }, {
                                            readonly id: 26646;
                                            readonly name: "_linkerFactory";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26575;
                                            readonly src: "3106:14:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 26647;
                                            readonly name: "_linkerCodeHash";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26573;
                                            readonly src: "3158:15:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 26648;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3219:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 26649;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3267:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653135";
                                            readonly id: 26650;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3319:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000";
                                            };
                                            readonly value: "1e15";
                                        }, {
                                            readonly hexValue: "333635";
                                            readonly id: 26651;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3363:8:140";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                                readonly typeString: "int_const 31536000";
                                            };
                                            readonly value: "365";
                                        }, {
                                            readonly hexValue: "31";
                                            readonly id: 26652;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3413:6:140";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_86400_by_1";
                                                readonly typeString: "int_const 86400";
                                            };
                                            readonly value: "1";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "302e3035653138";
                                                readonly id: 26655;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3515:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                                    readonly typeString: "int_const 50000000000000000";
                                                };
                                                readonly value: "0.05e18";
                                            }, {
                                                readonly hexValue: "333635";
                                                readonly id: 26656;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3548:8:140";
                                                readonly subdenomination: "days";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                    readonly typeString: "int_const 31536000";
                                                };
                                                readonly value: "365";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                                    readonly typeString: "int_const 50000000000000000";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                    readonly typeString: "int_const 31536000";
                                                }];
                                                readonly expression: {
                                                    readonly id: 26653;
                                                    readonly name: "HyperdriveMath";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19567;
                                                    readonly src: "3454:14:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                                        readonly typeString: "type(library HyperdriveMath)";
                                                    };
                                                };
                                                readonly id: 26654;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3469:20:140";
                                                readonly memberName: "calculateTimeStretch";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18914;
                                                readonly src: "3454:35:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 26657;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3454:124:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26660;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3620:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26659;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3612:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26658;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3612:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26661;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3612:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26664;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3666:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26663;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3658:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26662;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3658:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26665;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3658:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26668;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3714:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26667;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3706:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26666;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3706:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26669;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3706:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26672;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3794:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26673;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3827:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26674;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3868:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26675;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3913:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly expression: {
                                                    readonly id: 26670;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10351;
                                                    readonly src: "3744:11:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 26671;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3756:4:140";
                                                readonly memberName: "Fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10065;
                                                readonly src: "3744:16:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$10065_storage_ptr_$";
                                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                                };
                                            };
                                            readonly id: 26676;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "structConstructorCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly ["3787:5:140", "3821:4:140", "3854:12:140", "3895:16:140"];
                                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3744:193:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            }, {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                                readonly typeString: "int_const 31536000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_86400_by_1";
                                                readonly typeString: "int_const 86400";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 26632;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 10351;
                                                readonly src: "2937:11:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 26633;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2949:10:140";
                                            readonly memberName: "PoolConfig";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10154;
                                            readonly src: "2937:22:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$10154_storage_ptr_$";
                                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                                            };
                                        };
                                        readonly id: 26677;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly ["2982:9:140", "3033:16:140", "3091:13:140", "3142:14:140", "3195:22:140", "3245:20:140", "3293:24:140", "3345:16:140", "3393:18:140", "3441:11:140", "3600:10:140", "3644:12:140", "3690:14:140", "3738:4:140"];
                                        readonly names: readonly ["baseToken", "vaultSharesToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "sweepCollector", "fees"];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2937:1019:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        }];
                                        readonly id: 26631;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "NewExpression";
                                        readonly src: "2894:25:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25161_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                        };
                                        readonly typeName: {
                                            readonly id: 26630;
                                            readonly nodeType: "UserDefinedTypeName";
                                            readonly pathNode: {
                                                readonly id: 26629;
                                                readonly name: "MockHyperdriveTarget0";
                                                readonly nameLocations: readonly ["2898:21:140"];
                                                readonly nodeType: "IdentifierPath";
                                                readonly referencedDeclaration: 25161;
                                                readonly src: "2898:21:140";
                                            };
                                            readonly referencedDeclaration: 25161;
                                            readonly src: "2898:21:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                                readonly typeString: "contract MockHyperdriveTarget0";
                                            };
                                        };
                                    };
                                    readonly id: 26678;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2894:1076:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    }];
                                    readonly id: 26628;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2873:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26627;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2873:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26679;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2873:1107:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2863:1117:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 26681;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2863:1117:140";
                    }, {
                        readonly expression: {
                            readonly id: 26703;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26682;
                                readonly name: "domainSeparator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26571;
                                readonly src: "4325:15:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
                                            readonly id: 26687;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4425:72:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                                readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                            };
                                            readonly value: "EIP712Domain(string version,uint256 chainId,address verifyingContract)";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                                readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                            }];
                                            readonly id: 26686;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4394:9:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26688;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4394:121:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "31";
                                                readonly id: 26692;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4549:3:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                    readonly typeString: "literal_string \"1\"";
                                                };
                                                readonly value: "1";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                    readonly typeString: "literal_string \"1\"";
                                                }];
                                                readonly id: 26691;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4543:5:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26690;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4543:5:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26693;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4543:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }];
                                            readonly id: 26689;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4533:9:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26694;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4533:21:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 26695;
                                            readonly name: "block";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -4;
                                            readonly src: "4572:5:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_block";
                                                readonly typeString: "block";
                                            };
                                        };
                                        readonly id: 26696;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4578:7:140";
                                        readonly memberName: "chainid";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4572:13:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 26699;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "4611:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$26895";
                                                readonly typeString: "contract MockMultiToken";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$26895";
                                                readonly typeString: "contract MockMultiToken";
                                            }];
                                            readonly id: 26698;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4603:7:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26697;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4603:7:140";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26700;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4603:13:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly expression: {
                                            readonly id: 26684;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4366:3:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26685;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4370:6:140";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4366:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26701;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4366:264:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 26683;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "4343:9:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 26702;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4343:297:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "4325:315:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 26704;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4325:315:140";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 26583;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1938:1:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 26582;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1930:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26581;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1930:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26584;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1930:10:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26580;
                                readonly name: "IERC20";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9666;
                                readonly src: "1923:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                    readonly typeString: "type(contract IERC20)";
                                };
                            };
                            readonly id: 26585;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1923:18:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 26589;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1992:1:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 26588;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1984:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26587;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1984:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26590;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1984:10:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26586;
                                readonly name: "IERC20";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9666;
                                readonly src: "1977:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                    readonly typeString: "type(contract IERC20)";
                                };
                            };
                            readonly id: 26591;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1977:18:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        }, {
                            readonly id: 26592;
                            readonly name: "_linkerFactory";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26575;
                            readonly src: "2028:14:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly id: 26593;
                            readonly name: "_linkerCodeHash";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26573;
                            readonly src: "2076:15:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 26594;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2133:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 26595;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2177:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653135";
                            readonly id: 26596;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2225:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000";
                            };
                            readonly value: "1e15";
                        }, {
                            readonly hexValue: "333635";
                            readonly id: 26597;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2265:8:140";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                readonly typeString: "int_const 31536000";
                            };
                            readonly value: "365";
                        }, {
                            readonly hexValue: "31";
                            readonly id: 26598;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2311:6:140";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_86400_by_1";
                                readonly typeString: "int_const 86400";
                            };
                            readonly value: "1";
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "302e3035653138";
                                readonly id: 26601;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2405:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                    readonly typeString: "int_const 50000000000000000";
                                };
                                readonly value: "0.05e18";
                            }, {
                                readonly hexValue: "333635";
                                readonly id: 26602;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2434:8:140";
                                readonly subdenomination: "days";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                };
                                readonly value: "365";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                    readonly typeString: "int_const 50000000000000000";
                                }, {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                }];
                                readonly expression: {
                                    readonly id: 26599;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "2348:14:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 26600;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2363:20:140";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18914;
                                readonly src: "2348:35:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26603;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2348:112:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26606;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2498:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26605;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2490:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26604;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2490:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26607;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2490:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26610;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2540:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26609;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2532:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26608;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2532:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26611;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2532:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26614;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2584:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26613;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2576:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26612;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2576:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26615;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2576:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26618;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2656:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26619;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2685:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26620;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2722:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26621;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2763:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly expression: {
                                    readonly id: 26616;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 10351;
                                    readonly src: "2610:11:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 26617;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2622:4:140";
                                readonly memberName: "Fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10065;
                                readonly src: "2610:16:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$10065_storage_ptr_$";
                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                };
                            };
                            readonly id: 26622;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "structConstructorCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly ["2649:5:140", "2679:4:140", "2708:12:140", "2745:16:140"];
                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2610:173:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            }, {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                readonly typeString: "int_const 31536000";
                            }, {
                                readonly typeIdentifier: "t_rational_86400_by_1";
                                readonly typeString: "int_const 86400";
                            }, {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            }];
                            readonly expression: {
                                readonly id: 26578;
                                readonly name: "IHyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10351;
                                readonly src: "1871:11:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                    readonly typeString: "type(contract IHyperdrive)";
                                };
                            };
                            readonly id: 26579;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "1883:10:140";
                            readonly memberName: "PoolConfig";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10154;
                            readonly src: "1871:22:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$10154_storage_ptr_$";
                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                            };
                        };
                        readonly id: 26623;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "structConstructorCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly ["1912:9:140", "1959:16:140", "2013:13:140", "2060:14:140", "2109:22:140", "2155:20:140", "2199:24:140", "2247:16:140", "2291:18:140", "2335:11:140", "2478:10:140", "2518:12:140", "2560:14:140", "2604:4:140"];
                        readonly names: readonly ["baseToken", "vaultSharesToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "sweepCollector", "fees"];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1871:927:140";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 26624;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 26577;
                        readonly name: "HyperdriveStorage";
                        readonly nameLocations: readonly ["1840:17:140"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 17734;
                        readonly src: "1840:17:140";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1840:968:140";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 26576;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26573;
                        readonly mutability: "mutable";
                        readonly name: "_linkerCodeHash";
                        readonly nameLocation: "1778:15:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26706;
                        readonly src: "1770:23:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26572;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1770:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26575;
                        readonly mutability: "mutable";
                        readonly name: "_linkerFactory";
                        readonly nameLocation: "1811:14:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26706;
                        readonly src: "1803:22:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26574;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1803:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1760:71:140";
                };
                readonly returnParameters: {
                    readonly id: 26625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2813:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 26757;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4810:973:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26756;
                    readonly nodeType: "Block";
                    readonly src: "4873:910:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26714, 26716];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26714;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5018:7:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26756;
                            readonly src: "5013:12:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26713;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5013:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26716;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5040:10:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26756;
                            readonly src: "5027:23:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26715;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5027:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26721;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26719;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26708;
                                readonly src: "5075:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                }];
                                readonly expression: {
                                    readonly id: 26717;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26562;
                                    readonly src: "5054:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 26718;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5062:12:140";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5054:20:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 26720;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5054:27:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5012:69:140";
                    }, {
                        readonly condition: {
                            readonly id: 26723;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "5095:8:140";
                            readonly subExpression: {
                                readonly id: 26722;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26714;
                                readonly src: "5096:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26753;
                        readonly nodeType: "IfStatement";
                        readonly src: "5091:658:140";
                        readonly trueBody: {
                            readonly id: 26752;
                            readonly nodeType: "Block";
                            readonly src: "5105:644:140";
                            readonly statements: readonly [{
                                readonly assignments: readonly [26725];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 26725;
                                    readonly mutability: "mutable";
                                    readonly name: "selector";
                                    readonly nameLocation: "5126:8:140";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 26752;
                                    readonly src: "5119:15:140";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly typeName: {
                                        readonly id: 26724;
                                        readonly name: "bytes4";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5119:6:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 26730;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 26728;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26716;
                                        readonly src: "5144:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 26727;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5137:6:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes4_$";
                                            readonly typeString: "type(bytes4)";
                                        };
                                        readonly typeName: {
                                            readonly id: 26726;
                                            readonly name: "bytes4";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5137:6:140";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 26729;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5137:18:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "5119:36:140";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly id: 26735;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 26731;
                                        readonly name: "selector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26725;
                                        readonly src: "5173:8:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 26732;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 10351;
                                                readonly src: "5185:11:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 26733;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5197:10:140";
                                            readonly memberName: "ReturnData";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10287;
                                            readonly src: "5185:22:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$";
                                                readonly typeString: "function (bytes memory) pure";
                                            };
                                        };
                                        readonly id: 26734;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5208:8:140";
                                        readonly memberName: "selector";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5185:31:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly src: "5173:43:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 26738;
                                readonly nodeType: "IfStatement";
                                readonly src: "5169:176:140";
                                readonly trueBody: {
                                    readonly id: 26737;
                                    readonly nodeType: "Block";
                                    readonly src: "5218:127:140";
                                    readonly statements: readonly [{
                                        readonly AST: {
                                            readonly nodeType: "YulBlock";
                                            readonly src: "5245:86:140";
                                            readonly statements: readonly [{
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5278:10:140";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "5290:2:140";
                                                            readonly type: "";
                                                            readonly value: "32";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5274:3:140";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5274:19:140";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5301:10:140";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mload";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5295:5:140";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5295:17:140";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "revert";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5267:6:140";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5267:46:140";
                                                };
                                                readonly nodeType: "YulExpressionStatement";
                                                readonly src: "5267:46:140";
                                            }];
                                        };
                                        readonly evmVersion: "paris";
                                        readonly externalReferences: readonly [{
                                            readonly declaration: 26716;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5278:10:140";
                                            readonly valueSize: 1;
                                        }, {
                                            readonly declaration: 26716;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5301:10:140";
                                            readonly valueSize: 1;
                                        }];
                                        readonly id: 26736;
                                        readonly nodeType: "InlineAssembly";
                                        readonly src: "5236:95:140";
                                    }];
                                };
                            }, {
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "5511:138:140";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5540:10:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5552:3:140";
                                                    readonly type: "";
                                                    readonly value: "0x4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5536:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5536:20:140";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly name: "returndata";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5568:10:140";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5562:5:140";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5562:17:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5581:1:140";
                                                    readonly type: "";
                                                    readonly value: "4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "sub";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5558:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5558:25:140";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mstore";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5529:6:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5529:55:140";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "5529:55:140";
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "5601:34:140";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5619:10:140";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "5631:3:140";
                                                readonly type: "";
                                                readonly value: "0x4";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5615:3:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5615:20:140";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "returndata";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5601:10:140";
                                        }];
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5540:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5568:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5601:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5619:10:140";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 26739;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "5502:147:140";
                            }, {
                                readonly expression: {
                                    readonly id: 26748;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 26740;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26716;
                                        readonly src: "5662:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 26743;
                                            readonly name: "returndata";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26716;
                                            readonly src: "5686:10:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 26745;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5699:5:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26744;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5699:5:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly id: 26746;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "5698:7:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }, {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            }];
                                            readonly expression: {
                                                readonly id: 26741;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5675:3:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 26742;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5679:6:140";
                                            readonly memberName: "decode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5675:10:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 26747;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5675:31:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly src: "5662:44:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 26749;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5662:44:140";
                            }, {
                                readonly expression: {
                                    readonly id: 26750;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26716;
                                    readonly src: "5728:10:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 26712;
                                readonly id: 26751;
                                readonly nodeType: "Return";
                                readonly src: "5721:17:140";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 26754;
                            readonly name: "returndata";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26716;
                            readonly src: "5766:10:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 26712;
                        readonly id: 26755;
                        readonly nodeType: "Return";
                        readonly src: "5759:17:140";
                    }];
                };
                readonly implemented: true;
                readonly kind: "fallback";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 26709;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26708;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "4834:5:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26757;
                        readonly src: "4819:20:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 26707;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4819:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4818:22:140";
                };
                readonly returnParameters: {
                    readonly id: 26712;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26711;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26757;
                        readonly src: "4859:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 26710;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4859:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4858:14:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26773;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5920:149:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26772;
                    readonly nodeType: "Block";
                    readonly src: "6044:25:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 26770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "6061:1:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 26769;
                        readonly id: 26771;
                        readonly nodeType: "Return";
                        readonly src: "6054:8:140";
                    }];
                };
                readonly baseFunctions: readonly [12806];
                readonly documentation: {
                    readonly id: 26758;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5789:18:140";
                    readonly text: "Overrides ///";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCheckpoint";
                readonly nameLocation: "5929:16:140";
                readonly overrides: {
                    readonly id: 26766;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6017:8:140";
                };
                readonly parameters: {
                    readonly id: 26765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26760;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5955:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26759;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26762;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5972:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26761;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5972:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26764;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5989:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26763;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5989:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5945:57:140";
                };
                readonly returnParameters: {
                    readonly id: 26769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26768;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "6035:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26767;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6035:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6034:9:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 26821;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7258:867:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26820;
                    readonly nodeType: "Block";
                    readonly src: "7448:677:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26792, 26794];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26792;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "7464:7:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26820;
                            readonly src: "7459:12:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26791;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7459:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26794;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7486:6:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26820;
                            readonly src: "7473:19:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26793;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7473:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26813;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 26799;
                                        readonly name: "HyperdriveTarget0";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5190;
                                        readonly src: "7562:17:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveTarget0_$5190_$";
                                            readonly typeString: "type(contract HyperdriveTarget0)";
                                        };
                                    };
                                    readonly id: 26800;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7580:12:140";
                                    readonly memberName: "permitForAll";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 4688;
                                    readonly src: "7562:30:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 26801;
                                        readonly name: "domainSeparator";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26571;
                                        readonly src: "7632:15:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26802;
                                        readonly name: "PERMIT_TYPEHASH";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26568;
                                        readonly src: "7669:15:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26803;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26776;
                                        readonly src: "7706:5:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 26804;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26778;
                                        readonly src: "7733:7:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 26805;
                                        readonly name: "_approved";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26780;
                                        readonly src: "7762:9:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly id: 26806;
                                        readonly name: "deadline";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26782;
                                        readonly src: "7793:8:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 26807;
                                        readonly name: "v";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26784;
                                        readonly src: "7823:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint8";
                                            readonly typeString: "uint8";
                                        };
                                    }, {
                                        readonly id: 26808;
                                        readonly name: "r";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26786;
                                        readonly src: "7846:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26809;
                                        readonly name: "s";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26788;
                                        readonly src: "7869:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly id: 26810;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7610:278:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }, {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }];
                                    readonly expression: {
                                        readonly id: 26797;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "7530:3:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 26798;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7534:10:140";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7530:14:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 26811;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7530:372:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 26795;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26562;
                                    readonly src: "7496:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 26796;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7504:12:140";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "7496:20:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 26812;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7496:416:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7458:454:140";
                    }, {
                        readonly condition: {
                            readonly id: 26815;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7926:8:140";
                            readonly subExpression: {
                                readonly id: 26814;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26792;
                                readonly src: "7927:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26818;
                        readonly nodeType: "IfStatement";
                        readonly src: "7922:117:140";
                        readonly trueBody: {
                            readonly id: 26817;
                            readonly nodeType: "Block";
                            readonly src: "7936:103:140";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "7959:70:140";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7988:6:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "7996:2:140";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7984:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "7984:15:140";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "8007:6:140";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "8001:5:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "8001:13:140";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "7977:6:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "7977:38:140";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "7977:38:140";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 26794;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "7988:6:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26794;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "8007:6:140";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 26816;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "7950:79:140";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "8057:62:140";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8082:6:140";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "8090:2:140";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8078:3:140";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8078:15:140";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8101:6:140";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mload";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8095:5:140";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8095:13:140";
                                    }];
                                    readonly functionName: {
                                        readonly name: "return";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8071:6:140";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8071:38:140";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "8071:38:140";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 26794;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8082:6:140";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 26794;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8101:6:140";
                            readonly valueSize: 1;
                        }];
                        readonly id: 26819;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "8048:71:140";
                    }];
                };
                readonly documentation: {
                    readonly id: 26774;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6099:1154:140";
                    readonly text: "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported.";
                };
                readonly functionSelector: "9032c726";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permitForAll";
                readonly nameLocation: "7267:12:140";
                readonly parameters: {
                    readonly id: 26789;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26776;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "7297:5:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7289:13:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26775;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7289:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26778;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "7320:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7312:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26777;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7312:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26780;
                        readonly mutability: "mutable";
                        readonly name: "_approved";
                        readonly nameLocation: "7342:9:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7337:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 26779;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7337:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26782;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "7369:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7361:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26781;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7361:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26784;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "7393:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7387:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 26783;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7387:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26786;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "7412:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7404:9:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26785;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7404:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26788;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "7431:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7423:9:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26787;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7423:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7279:159:140";
                };
                readonly returnParameters: {
                    readonly id: 26790;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7448:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26840;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8150:165:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26839;
                    readonly nodeType: "Block";
                    readonly src: "8262:53:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26837;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 26831;
                                        readonly name: "_balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17610;
                                        readonly src: "8272:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                                            readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                                        };
                                    };
                                    readonly id: 26834;
                                    readonly indexExpression: {
                                        readonly id: 26832;
                                        readonly name: "_tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26824;
                                        readonly src: "8283:8:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "8272:20:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 26835;
                                readonly indexExpression: {
                                    readonly id: 26833;
                                    readonly name: "_who";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26826;
                                    readonly src: "8293:4:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "8272:26:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 26836;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26828;
                                readonly src: "8301:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "8272:36:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26838;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8272:36:140";
                    }];
                };
                readonly documentation: {
                    readonly id: 26822;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8131:14:140";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "94a97cdb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "8159:14:140";
                readonly parameters: {
                    readonly id: 26829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26824;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "8191:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8183:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26823;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8183:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26826;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "8217:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8209:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26825;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8209:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26828;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "8239:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8231:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26827;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8231:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8173:79:140";
                };
                readonly returnParameters: {
                    readonly id: 26830;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8262:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26862;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8321:228:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26861;
                    readonly nodeType: "Block";
                    readonly src: "8484:65:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26854;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26842;
                                readonly src: "8508:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26855;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26844;
                                readonly src: "8517:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26856;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26846;
                                readonly src: "8523:2:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26857;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26848;
                                readonly src: "8527:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26858;
                                readonly name: "caller";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26850;
                                readonly src: "8535:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26853;
                                readonly name: "_transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16262;
                                readonly src: "8494:13:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,address,uint256,address)";
                                };
                            };
                            readonly id: 26859;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8494:48:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26860;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8494:48:140";
                    }];
                };
                readonly functionSelector: "58af4a0a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "8330:23:140";
                readonly parameters: {
                    readonly id: 26851;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26842;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8371:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8363:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26841;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8363:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26844;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8396:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8388:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26843;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8388:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26846;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8418:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8410:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26845;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8410:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26848;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8438:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8430:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26847;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8430:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26850;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "8462:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8454:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26849;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8454:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8353:121:140";
                };
                readonly returnParameters: {
                    readonly id: 26852;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8484:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26878;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8555:111:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26877;
                    readonly nodeType: "Block";
                    readonly src: "8623:43:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26872;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26864;
                                readonly src: "8639:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26873;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26866;
                                readonly src: "8648:2:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26874;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26868;
                                readonly src: "8652:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 26871;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16328;
                                readonly src: "8633:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 26875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8633:26:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26876;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8633:26:140";
                    }];
                };
                readonly functionSelector: "836a1040";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "8564:4:140";
                readonly parameters: {
                    readonly id: 26869;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26864;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8577:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8569:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26863;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8569:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26866;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8594:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8586:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26865;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8586:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26868;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8606:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8598:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26867;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8598:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8568:45:140";
                };
                readonly returnParameters: {
                    readonly id: 26870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8623:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26894;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8672:115:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26893;
                    readonly nodeType: "Block";
                    readonly src: "8742:45:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26888;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26880;
                                readonly src: "8758:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26889;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26882;
                                readonly src: "8767:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26890;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26884;
                                readonly src: "8773:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 26887;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16380;
                                readonly src: "8752:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 26891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8752:28:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26892;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8752:28:140";
                    }];
                };
                readonly functionSelector: "9eea5f66";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "8681:4:140";
                readonly parameters: {
                    readonly id: 26885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26880;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8694:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8686:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26879;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8686:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26882;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8711:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8703:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26881;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8703:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26884;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8725:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8717:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8717:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8685:47:140";
                };
                readonly returnParameters: {
                    readonly id: 26886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8742:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 26557;
                    readonly name: "HyperdriveMultiToken";
                    readonly nameLocations: readonly ["1250:20:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 16538;
                    readonly src: "1250:20:140";
                };
                readonly id: 26558;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1250:20:140";
            }, {
                readonly baseName: {
                    readonly id: 26559;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["1272:18:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24803;
                    readonly src: "1272:18:140";
                };
                readonly id: 26560;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1272:18:140";
            }];
            readonly canonicalName: "MockMultiToken";
            readonly contractDependencies: readonly [25161];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [26895, 24803, 16538, 13667, 17734, 71639, 10887, 11459];
            readonly name: "MockMultiToken";
            readonly nameLocation: "1232:14:140";
            readonly scope: 26896;
            readonly usedErrors: readonly [10225, 10258, 10282, 10314, 71584];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 140;
};
//# sourceMappingURL=IMockMultiToken.d.ts.map