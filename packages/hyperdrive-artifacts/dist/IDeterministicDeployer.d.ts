export declare const IDeterministicDeployer: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreate3Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreate3Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "computeCreateAddress";
        readonly inputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "computeCreateAddress";
        readonly inputs: readonly [{
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "computedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deployCreate";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2AndInit";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2AndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2AndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2AndInit";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2Clone";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate2Clone";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3AndInit";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3AndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3AndInit";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreate3AndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreateAndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreateAndInit";
        readonly inputs: readonly [{
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "values";
            readonly type: "tuple";
            readonly internalType: "struct ICreateX.Values";
            readonly components: readonly [{
                readonly name: "constructorAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCallAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployCreateClone";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "ContractCreation";
        readonly inputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ContractCreation";
        readonly inputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Create3ProxyContractCreation";
        readonly inputs: readonly [{
            readonly name: "newContract";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "FailedContractCreation";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "FailedContractInitialisation";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "revertData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "FailedEtherTransfer";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "revertData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonceValue";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidSalt";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "computeCreate2Address(bytes32,bytes32)": "890c283b";
        readonly "computeCreate2Address(bytes32,bytes32,address)": "d323826a";
        readonly "computeCreate3Address(bytes32)": "6cec2536";
        readonly "computeCreate3Address(bytes32,address)": "42d654fc";
        readonly "computeCreateAddress(address,uint256)": "74637a7a";
        readonly "computeCreateAddress(uint256)": "28ddd046";
        readonly "deployCreate(bytes)": "27fe1822";
        readonly "deployCreate2(bytes)": "26a32fc7";
        readonly "deployCreate2(bytes32,bytes)": "26307668";
        readonly "deployCreate2AndInit(bytes,bytes,(uint256,uint256))": "c3fe107b";
        readonly "deployCreate2AndInit(bytes,bytes,(uint256,uint256),address)": "e437252a";
        readonly "deployCreate2AndInit(bytes32,bytes,bytes,(uint256,uint256))": "e96deee4";
        readonly "deployCreate2AndInit(bytes32,bytes,bytes,(uint256,uint256),address)": "a7db93f2";
        readonly "deployCreate2Clone(address,bytes)": "81503da1";
        readonly "deployCreate2Clone(bytes32,address,bytes)": "2852527a";
        readonly "deployCreate3(bytes)": "7f565360";
        readonly "deployCreate3(bytes32,bytes)": "9c36a286";
        readonly "deployCreate3AndInit(bytes,bytes,(uint256,uint256))": "2f990e3f";
        readonly "deployCreate3AndInit(bytes,bytes,(uint256,uint256),address)": "f5745aba";
        readonly "deployCreate3AndInit(bytes32,bytes,bytes,(uint256,uint256))": "00d84acb";
        readonly "deployCreate3AndInit(bytes32,bytes,bytes,(uint256,uint256),address)": "ddda0acb";
        readonly "deployCreateAndInit(bytes,bytes,(uint256,uint256))": "31a7c8c8";
        readonly "deployCreateAndInit(bytes,bytes,(uint256,uint256),address)": "98e81077";
        readonly "deployCreateClone(address,bytes)": "f9664498";
    };
};
//# sourceMappingURL=IDeterministicDeployer.d.ts.map